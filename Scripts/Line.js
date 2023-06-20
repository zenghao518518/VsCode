var OpenLayers = {};
ol.geom = ol.geom;
var directionDrawObj = {};
var wgs84Sphere = new ol.Sphere(6378137);
directionDrawObj.createDirection = function (line, position, forEachSegment, map, extend) {
    if (line instanceof ol.geom.MultiLineString) {
        //TODO
    } else if (line instanceof ol.geom.LineString) {
        return this.createLineStringDirection(line, position, forEachSegment, map, extend);

    } else {
        return [];
    }
};

directionDrawObj.createLineStringDirection = function (line, position, forEachSegment, map, extend) {
    if (position == undefined) { position = "end" }
    if (forEachSegment == undefined) { forEachSegment = false; }
    var points = [];
    //var allSegs = line.getSortedSegments();
    var allSegs = this.getSegments(line);
    var segs = [];

    if (forEachSegment) {
        segs = allSegs;
    } else {
        if (position == "start") {
            segs.push(allSegs[0]);
        } else if (position == "end") {
            segs.push(allSegs[allSegs.length - 1]);
        } else if (position == "middle") {
            return [this.getPointOnLine(line, .5)];
        } else {
            return [];
        }
    }

    if ((position == 'middle') && extend) {
        points = points.concat(this.myCreateSegDirection(line, map));
    } else {
        var sourceProj = map.getView().getProjection();
        var len = 0;
        var coordLLs = line.getCoordinates();
        var coordPxs = [];
        for (var j = 0, ii = coordLLs.length - 1; j < ii; ++j) {
            var c1 = ol.proj.transform(coordLLs[j], sourceProj, 'EPSG:4326');
            var c2 = ol.proj.transform(coordLLs[j + 1], sourceProj, 'EPSG:4326');
            var pts = coordLLs[j];
            var pxs = coordLLs[j + 1];
            len= wgs84Sphere.haversineDistance(c1, c2);
            if (len > 100) {
                var output = (Math.round(len * 100) / 100);
                if (output > 20) {
                var seg1 = {
                        x1: pts[0],
                        y1: pts[1],
                        x2: pxs[0],
                        y2: pxs[1]
                    }
                   coordPxs.push(seg1);
                }
                
            }
        }
        segs = coordPxs;
        for (var i = 0; i < segs.length ; i++) {
            points = points.concat(this.createSegDirection(segs[i], position));
        }
    }
    return points;
};
directionDrawObj.myCreateSegDirection = function (line, map) {
    var coordPxs = this.getPixelFromCoord(line, map);
    var segments = this.getSegmentFromPixel(coordPxs);
    var tempLength = 0;
    var chaLength = 50;
    var nowSeg = null;
    var nowLengthFlag = false;
    var findPixelArr = [];
    for (var i = 0; i < segments.length; i++) {
        nowLengthFlag = false;
        nowSeg = segments[i];
        //如果当前线段的距离小于100px,则加上当前的tempLength
        if (nowSeg.pixelLength < chaLength) {
            tempLength += nowSeg.pixelLength;
        }
            //如果当前的线段大于100px，则把当前的线段进行 除以100的切分,同时nowLengthFlag设为true
            //表示当前线段的长度大于差值
        else {
            nowLengthFlag = true;
            var splitPixelArr = this.getNeedPixelFromLine(segments[i], chaLength);
            findPixelArr = findPixelArr.concat(splitPixelArr);
        }
        //如果当前线段的长度大于差值，则判断tempLength，如果tempLength > 0 则取上一个坐标点用来画箭头
        //同时tempLength赋值0，
        if (nowLengthFlag || (tempLength > chaLength)) {
            if (tempLength) {
                tempLength = 0;
                if (i) {
                    findPixelArr.push({ x: segments[i].x2, y: segments[i].y2, pixelAngle: segments[i].pixelAngle });
                }
            }
        }
    }
    if (findPixelArr.length == 0) {
        var lastSeg = segments[segments.length - 1];
        findPixelArr.push({ x: lastSeg.x2, y: lastSeg.y2, pixelAngle: lastSeg.pixelAngle });
    }
    var needFeatures = this.getFeaturesFromPixels(findPixelArr, map);
    return needFeatures;
}
/**
 * pixel中得到Features
 * @param pixels
 */
directionDrawObj.getFeaturesFromPixels = function (pixels, map) {
    var features = [];
    var pixel = null;
    var pt = null;
    var coord = null;
    var feature = null;
    for (var i = 0; i < pixels.length; i++) {
        pixel = pixels[i];
        coord = map.getCoordinateFromPixel([pixel.x, pixel.y]);
        pt = new ol.geom.Point([coord[0], coord[1]]);
        var angle = pixel.pixelAngle;

        feature = new ol.Feature({
            geometry: pt,

        });
        var fill = new ol.style.Fill({ color: 'green' });
        var stroke = new ol.style.Stroke({ color: '#3399CC', width: 1 });

        feature.setStyle(new ol.style.Style({
            image: new ol.style.RegularShape({
                fill: fill,
                stroke: stroke,
                opacity: 0.75,
                points: 3,
                radius: 6,
                angle: (angle - Math.PI / 5),
            })
        }));
        features.push(feature);
    }
    return features;
};
/**
 * 切分一条线段，得到该线段的几个切分点
 * @param seg
 */
directionDrawObj.getNeedPixelFromLine = function (seg, chaLength) {
    var segLen = seg.pixelLength;
    var num = Math.ceil(segLen / chaLength);
    var xOper = true;
    var yOper = false;
    var xCha = seg.x2 - seg.x1;
    var yCha = seg.y2 - seg.y1;
    var xAver = xCha / num;
    var yAver = yCha / num;
    var pixelArr = [];

    var xOrig = seg.x1;
    var yOrin = seg.y1;
    var xEnd = seg.x2;
    var yEnd = seg.y2;

    for (var i = 0; i < num - 1; i++) {
        var onePix = {};
        onePix.x = xAver * i + xOrig;
        onePix.y = yAver * i + yOrin;
        onePix.pixelAngle = seg.pixelAngle;
        pixelArr.push(onePix);
    }
    pixelArr.push({ x: seg.x2, y: seg.y2, pixelAngle: seg.pixelAngle });
    return pixelArr;

}
/**
 * 得到pixel的片段
 * @param coordPixel
 */
directionDrawObj.getSegmentFromPixel = function (coordPixel) {
    var segments = [];
    var seg = null;
    var ps = null;
    var pt = null;
    for (var i = 0; i < coordPixel.length - 1; i++) {
        ps = coordPixel[i];
        pt = coordPixel[i + 1];
        seg = {
            x1: ps[0],
            y1: ps[1],
            x2: pt[0],
            y2: pt[1]
        }
        var length = this.getSegmentLength(seg);
        var angle = this.bearing(seg);
        seg.pixelLength = length;
        seg.pixelAngle = angle;
        segments.push(seg);
    }
    return segments;
}
directionDrawObj.getPixelFromCoord = function (line, map) {

    var coordLLs = line.getCoordinates();
    var coordPxs = [];
    var pts = [];
    var pxs = null;
    for (var i = 0; i < coordLLs.length; i++) {
        pts = coordLLs[i];
        pxs = map.getPixelFromCoordinate(pts);
        coordPxs.push(pxs);
    }
    return coordPxs;
}
directionDrawObj.createSegDirection = function (seg, position) {
    var segBearing = this.bearing(seg);
    var positions = [];
    var points = [];
    if (position == "start") {
        positions.push([seg.x1, seg.y1]);
    } else if (position == "end") {
        positions.push([seg.x2, seg.y2]);
    } else if (position == "middle") {
        positions.push([(seg.x1 + seg.x2) / 2, (seg.y1 + seg.y2) / 2]);
    } else {
        return null;
    }

    for (var i = 0; i < positions.length; i++) {
        var pt = new ol.geom.Point([positions[i][0], positions[i][1]]);
        var angle = segBearing;
        console.log("angle", angle);
        var ptFeature = new ol.Feature({
            geometry: pt,

        });
        var fill = new ol.style.Fill({ color: 'green' });
        var stroke = new ol.style.Stroke({ color: '#3399CC', width: 1 });
        ptFeature.setStyle(new ol.style.Style({
            image: new ol.style.RegularShape({
                fill: fill,
                stroke: stroke,
                points: 3,
                radius: 6,
                angle: angle
            })
        }));
        points.push(ptFeature);
    }
    return points;
};
directionDrawObj.bearing = function (seg) {
    //算出相对于向上箭头的旋转度
    var firstPoint = [seg.x1, seg.y1];
    var secondPoint = [seg.x2, seg.y2];
    var angle = Math.atan2((secondPoint[1] - firstPoint[1]), (secondPoint[0] - firstPoint[0])) * 180 / Math.PI;
  
    //angle = angle ? angle : angle + 0.0001;
    return angle;
};


directionDrawObj.getPointOnLine = function (line, measure) {
    var segs = this.getSegments(line);
    var lineLength = line.getLength();
    var measureLength = lineLength * measure;
    var length = 0;
    var partLength = 0;
    for (var i = 0; i < segs.length ; i++) {
        var segLength = this.getSegmentLength(segs[i]);
        if (measureLength < length + segLength) {
            partLength = measureLength - length;
            var x = segs[i].x1 + (segs[i].x2 - segs[i].x1) * partLength / segLength;
            var y = segs[i].y1 + (segs[i].y2 - segs[i].y1) * partLength / segLength;
            var segBearing = this.bearing(segs[i]);
            console.log("x: " + x + ", y: " + y + ", bearing: " + segBearing);
            var pt = new ol.geom.Point([+x, +y]);
            var angle = segBearing;
            console.log("angle", angle);
            // var ptFeature = new OpenLayers.Feature.Vector(pt,{angle:segBearing});
            var ptFeature = new ol.Feature({
                geometry: pt,
                angle: angle
            });
            return ptFeature;
        }
        length = length + segLength;
    }
    return false;
};

directionDrawObj.getSegmentLength = function (seg) {
    return Math.sqrt(Math.pow((seg.x2 - seg.x1), 2) + Math.pow((seg.y2 - seg.y1), 2));
};

directionDrawObj.getSegments = function (line) {
    var numSeg = line.getCoordinates().length - 1;
    var segments = new Array(numSeg), point1, point2;
    for (var i = 0; i < numSeg; ++i) {
        point1 = line.getCoordinates()[i];
        point2 = line.getCoordinates()[i + 1];
        segments[i] = {
            x1: point1[0],
            y1: point1[1],
            x2: point2[0],
            y2: point2[1]
        };
    }
    return segments;
};