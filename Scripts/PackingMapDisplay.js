


var map;
var vector = null;
var overlay;
var container;
var content;
var closer;
var manyIconGun = '../Image/maxgun.png';
var minGreen = '../Image/Car.png';
var minRed = '../Image/taxi7.png';
var taxiBlue = '../Image/taxiblue.png';
var taxiRed = '../Image/taxired.png';
var taxiGreen = '../Image/taxigreen.png';
var yellow = '../Image/Yellow.png';
var blue = '../Image/blue.png';
var black = '../Image/black.png';
var trailerRun = '../Image/Car.png';
var fixReader = '../Image/230595394.jpg';
var fixReaderRed = '../Image/yellow1.png';
var flatCar = '../Image/taxi7.png';
var trailerStill = '../Image/taxi8.png';
var textFill = new ol.style.Fill({ color: '#00ff00' });
var textStroke = new ol.style.Stroke({ color: 'rgba(0, 0, 0, 0.6)', width: 3 });
var invisibleFill = new ol.style.Fill({ color: 'rgba(255, 255, 255, 0.01)' });
var clickKey = "";
var wifiLog = '../Image/WiFi.png';
var Takeoff = '../Image/飞机起飞.png';
var carBlack = '../Image/VehicleLocation/black.png';
var carBlue = '../Image/VehicleLocation/blue.png';
var carGreen = '../Image/VehicleLocation/green.png';
var carGrey = '../Image/VehicleLocation/grey.png';
var carOrange = '../Image/VehicleLocation/orange.png';
var carRed = '../Image/VehicleLocation/red.png';
var carYellow = '../Image/VehicleLocation/yellow.png';


/* 创建底座
 * byId 当前的DIV 层
 * longitude 经度
 * latitude 纬度
 * source 图源 1,MapQuest 2，OSM
 */
$.Create = function (byId, longitude, latitude, source) {
   map = null;
   map = new ol.Map({
       target: byId, controls: ol.control.defaults().extend([
           new ol.control.ScaleLine({
               units: 'metric'
           })

       ]), interactions: ol.interaction.defaults().extend([
           new ol.interaction.DragRotateAndZoom()
       ])
   });
   map.setView(new ol.View({
       center: $.TransMapLonLat(longitude, latitude),
       zoom: 14,
       minZoom: 1,

   }));
   //加载
   $.InitMapSource(source);
   
}
// var googleLayer = new olgm.layer.Google();
// //加载地图服务
// //function Loading(byId, x, y, optionMap) {
// $.Create = function (byId, longitude, latitude, source) {
//     map = null;
//     map = new ol.Map({ target: byId, layers: [googleLayer] });
//     map.setView(new ol.View({
//         //center: TransMapLonLat(x, y),
//         center: TransMapLonLat(longitude, latitude),
//         zoom: 14,
//     }));
	
//     Setting();
//     // OptionMap(optionMap);
//     OptionMap(source);
	
// }


// function SettingView(x, y, zoom) {

//     var view = map.getView();
//     view.setCenter(TransMapLonLat(x, y));
//     view.setZoom(zoom);

// }
// function Setting() {
//     if (!Once) {
//         return;
//     }
//     textFill = new ol.style.Fill({ color: '#00ff00' });
//     textStroke = new ol.style.Stroke({ color: 'rgba(0, 0, 0, 0.6)', width: 4 });
//     invisibleFill = new ol.style.Fill({ color: 'rgba(255, 255, 255, 0.01)' });
//     closer = document.getElementById('popup-closer');
//     container = document.getElementById('popup');
//     content = document.getElementById('popup-content');
//     Once = false;
// }








// //选择地图供应商
// function OptionMap(index) {
//     var osmLayer = null;
//     var osmSource;
//     switch (index) {
//         case "1":
//             osmSource = new ol.source.MapQuest({ layer: 'osm' });
//             break;
//         case "2":
//             osmSource = new ol.source.OSM();
//             break;
// 		case "3":
//             osmSource = new ol.source.BingMaps({
//                 key: 'AmxgphRfcAHd45fiS4fDdizJPRj2U8Z9oWilOd86YviJ4-OHRUdWF0sM57k9i_NH',
//                 imagerySet: 'AerialWithLabelsOnDemand'//Road
//             });
//             break;
// 		case "4":
//            var olGM = new olgm.OLGoogleMaps({map: map}); // map is the ol.Map instance
// olGM.activate();
//           break;
//         default:
//             return;
//     }
//     osmLayer = new ol.layer.Tile({ source: osmSource });
//     map.addLayer(osmLayer);
	

// }

//加载图源
$.InitMapSource = function (source) {
   var osmSource;
   switch (source) {
       case "1":
           osmSource = new ol.source.MapQuest({ layer: 'osm' });
           break;
       case "2":
           osmSource = new ol.source.OSM();
           break;
       case "3":
           osmSource = new ol.source.BingMaps({
               key: 'Ag1GmlYqOfqg1gA7pFgVwe6wuLYRkmmBIHk3MWbc9rU-ZzpN4fZjUVM-3SmNzJiK',
               imagerySet: 'AerialWithLabelsOnDemand'//Road
           });
           break;
       default:
           return;
   }
   closer = document.getElementById('popup-closer');
   container = document.getElementById('popup');
   content = document.getElementById('popup-content');
   var osmLayer = new ol.layer.Tile({ source: osmSource });
   map.addLayer(osmLayer);
}

/////////////////////////////////失败的方法////////////////////////////////
// var olMapDiv;
// $.Create = function (byId, longitude, latitude, source) {
//     map = null;
//     map = new ol.Map({
//         target: byId, controls: ol.control.defaults().extend([
//               new ol.control.ScaleLine({
//                   units: 'metric'
//               })
//         ]),
//         interactions: ol.interaction.defaults({
//             altShiftDragRotate: false,
//             dragPan: false,
//             rotate: false
//         }).extend([new ol.interaction.DragPan({ kinetic: null })]),
//     });


//     //加载
//     var view = $.InitMapSource(byId, source, longitude, latitude);
//     map.setView(view);
//     //map.setView(new ol.View({
//     //    center: $.TransMapLonLat(longitude, latitude),
//     //    zoom: 14
//     //}));
// }

// $.InitMapSource = function (byId, source, longitude, latitude) {
//     var osmSource;
//     var viewLayer = new ol.View({ center: $.TransMapLonLat(longitude, latitude), zoom: 14 });
//     switch (source) {
//         case "1":
//             osmSource = new ol.source.MapQuest({ layer: 'osm' });
//             break;
//         case "2":
//             osmSource = new ol.source.OSM();
//             break;
//         case "3":
//             osmSource = new ol.source.BingMaps({
//                 key: 'AmxgphRfcAHd45fiS4fDdizJPRj2U8Z9oWilOd86YviJ4-OHRUdWF0sM57k9i_NH',
//                 imagerySet: 'Road'
//             });
//             break;
//         case "4":
//             olMapDiv = document.getElementById(byId);
//             var gmap = new google.maps.Map(document.getElementById('gmap'), {
//                 disableDefaultUI: true,
//                 keyboardShortcuts: false,
//                 draggable: false,
//                 disableDoubleClickZoom: true,
//                 scrollwheel: false,
//                 streetViewControl: false
//             });
//             var view = new ol.View({
//                 // make sure the view doesn't go beyond the 22 zoom levels of Google Maps
//                 maxZoom: 21,
//                 projection: 'EPSG:4326' // 设置为标准经纬度的坐标标准，十分重要！ 默认是'EPSG:3857'
//             })

//             view.on('change:center', function () {
//                 var center = view.getCenter();
//                 gmap.setCenter(new google.maps.LatLng(center[1], center[0])); // 注意顺序
//             });

//             // 同上，更改焦距时触发的时间
//             view.on('change:resolution', function () {
//                 gmap.setZoom(view.getZoom());
//             });


//             var vectorSource = new ol.source.Vector();
//             osmSource = new ol.layer.Vector({
//                 source: vectorSource
//             });

//             //view.setCenter([10.689697265625, -25.0927734375]); // 如果未设置view的坐标标准，这里千万要注意不要直接写经纬度
//             view.setCenter([longitude, latitude]);
//             view.setZoom(14);  //
//             //view = null;

//             viewLayer = view;
//             olMapDiv.parentNode.removeChild(olMapDiv);
//             gmap.controls[google.maps.ControlPosition.TOP_LEFT].push(olMapDiv);
//             break;

//         default:
//             return;
//     }
//     var osmLayer = new ol.layer.Tile({ source: osmSource });
//     map.addLayer(osmLayer);
//     //map.setView(view);
//     return viewLayer;

// }


/*
 * 绘制图片到地图位置
 * objArray 对象集合
 * obj=new Objcet(); 
 * obj.Longitude = value.Longitude;
 * obj.Latitude = value.Latitude;
 * obj.Speed = value.Speed;
 * obj.Time = value.Time;
 * obj.Status = value.Status;
 * obj.Direction = value.Direction;
 * obj.Icon = value.Icon;
 */

$.DrawLayer = function (array) {
   
    var featue = [];
    for (var i = 0; i < array.length; i++) {
        var info = array[i];//获取当前对象
        if (info == null)
            continue;
       
        var point = new ol.geom.Point($.TransMapLonLat(info.Long, info.Lat));
        featue[i] = new ol.Feature(point);
        featue[i].setId(info.PNo+"@"+info.IC);
        
    }
    //加入图层
   
        $.SetLayer(featue);
   
    //for (var j = 0; j < featue.length; j++) {
    //    $.FlashAlarm(featue[j]);
    //}
}

$.NewDrawLayer = function (array) {

    var featue = [];
    for (var i = 0; i < array.length; i++) {
        var info = array[i];//获取当前对象
        if (info == null)
            continue;
        var point = new ol.geom.Point($.TransMapLonLat(info.Longitude, info.Latitude));
        featue[i] = new ol.Feature(point);
        featue[i].setId(info.PNo+"@"+info.IC);

    }
    //加入图层

    $.SetLayer(featue);

    //for (var j = 0; j < featue.length; j++) {
    //    $.FlashAlarm(featue[j]);
    //}
}

 

$.DrawJob = function (array) {

    var featue = [];
    for (var i = 0; i < array.length; i++) {
        var info = array[i];//获取当前对象
        if (info == null)
            continue;

        var point = new ol.geom.Point($.TransMapLonLat(info.Lon, info.Lat));
        featue[i] = new ol.Feature(point);
        featue[i].setId(info.key);
    }
    //加入图层

    $.SetLayer(featue);

    //for (var j = 0; j < featue.length; j++) {
    //    $.FlashAlarm(featue[j]);
    //}
}


$.DrawLayerAlarm = function (array) {

    var featue = [];
    for (var i = 0; i < array.length; i++) {
        var info = array[i];//获取当前对象
        if (info == null)
            continue;

        var point = new ol.geom.Point($.TransMapLonLat(info.Lon, info.Lat));
        featue[i] = new ol.Feature(point);
        featue[i].setId(info.key);
    }
    //加入图层

    $.SetLayer(featue);

    //for (var j = 0; j < featue.length; j++) {
    //    $.FlashAlarm(featue[j]);
    //}
}

$.DrawLayerTag = function () {
    var featue = [];
    var array = MemoryFun.values();
    for (var i = 0; i < array.length; i++) {
        var info = array[i];//获取当前对象
        if (info == null)
            continue;
        var point = new ol.geom.Point($.TransMapLonLat(info.Longitude, info.Latitude));
        featue[i] = new ol.Feature(point);
        featue[i].setId(info.key);
    }
    //加入图层
    $.SetLayerTag(featue);
    //for (var j = 0; j < featue.length; j++) {
    //    $.FlashAlarm(featue[j]);
    //}
}


//加入数据源
$.SetLayer = function (featue) {
    if (vector != null) { map.removeLayer(vector); };
    var source = new ol.source.Vector({ features: featue });
    var cluster = new ol.source.Cluster({ distance: 50, source: source });
    vector = new ol.layer.Vector({ source: cluster, style: styleFunctiongun, zIndex: 998 });
    map.addLayer(vector);
}
$.SetLayerTag = function (featue) {
    if (vector != null) { map.removeLayer(vector); };
    var source = new ol.source.Vector({ features: featue });
    var cluster = new ol.source.Cluster({ distance: 8, source: source });
    vector = new ol.layer.Vector({ source: cluster, style: styleFunctiongunTag, zIndex: 998 });
    map.addLayer(vector);
}

$.SaveMapLayer = function () {
    map.once('postcompose', function (event) {
        var canvas = event.context.canvas;

        var time = $.getNowFormatDate();
        if (navigator.msSaveBlob) {
            navigator.msSaveBlob(canvas.msToBlob(), time + '.png');
        } else {
            canvas.toBlob(function (blob) {
                saveAs(blob, time + '.png');
            });
        }


    });


    map.renderSync();
}

//警报扩散
var duration = 3000;
$.FlashAlarm = function (feature) {

    var start = new Date().getTime();
    var listenerKey;
    function animate(event) {
        var vectorContext = event.vectorContext;
        var frameState = event.frameState;
        if (typeof (feature) == "undefined" || feature == null) {
            return;
        }
        var flashGeom = feature.getGeometry().clone();
        var elapsed = frameState.time - start;
        var elapsedRatio = elapsed / duration;
        // radius will be 5 at start and 30 at end.
        var radius = ol.easing.easeOut(elapsedRatio) * 20 + 20;
        var opacity = ol.easing.easeOut(1 - elapsedRatio);
        var flashStyle = new ol.style.Circle({
            radius: radius,
            snapToPixel: false,
            stroke: new ol.style.Stroke({
                color: 'rgba(238, 50, 17, ' + opacity + ')',
                width: 3
            })
        });
        vectorContext.setImageStyle(flashStyle);
        vectorContext.drawPointGeometry(flashGeom, null);
        if (elapsed > duration) {
            ol.Observable.unByKey(listenerKey);

            return;
        }
        map.render();
    }
    listenerKey = map.on('postcompose', animate);
}
function PopupInfo() {

    overlay = new ol.Overlay({
        element: container
    });
    map.addOverlay(overlay);
}
function clickClose() {
    container.style.display = 'none';
    closer.blur();
    return false;
};
$.OnClickEvent = function () {
    map.on('click', function (event) {
        var feature = map.forEachFeatureAtPixel(event.pixel, function (feature, layer) { return feature; });

        if (typeof (feature) == "undefined" || feature == null) {
            $('#myTab li:eq(0) a').tab('show');
            return;
        }
        if (feature.get('features').length > 1) {

            $('#myTab li:eq(2) a').tab('show');
            var len = feature.get('features').length;
            $('#listCar').empty();
            for (var i = 0; i < len; i++) {
                var keyMany = feature.get('features')[i].getId();
                if (keyMany == null || keyMany == "")
                    return;
                var infoMany = MemoryFun.get(keyMany);
                if (infoMany == null)
                    return;
                $('#listCar').append("<a href='#' class='list-group-item' style='padding: 5px 8px; font-weight: bold;'>" + infoMany.key + "</a>");
            }
            return;
        }
        $('#myTab li:eq(1) a').tab('show');

        var key = feature.get('features')[0].getId();
        if (key == null || key == "")
            return;

        $.SetAlertData(key);

        //$.FlashAlarm(feature);
    });
}

$.SetAlertData = function (key) {
    var info = MemoryFun.get(key);
    if (info == null)
        return;
    $('#sPlate').text(info.key);
    $('#sLongitude').text(info.Longitude);
    $('#sLatitude').text(info.Latitude);
    $('#sSpeed').text(info.Speed + "(km)");
    $('#sDirection').text($.DirectionStr(info.Direction));
    $('#sReportTime').text(info.Time);
    var ignite = (info.Status & 1);
    $('#sIgnition').text(ignite == 1 ? "Yes" : "No");
    var sos = info.Status >> 1 & 1;
    $('#sSos').text(sos == 1 ? "Yes" : "No");
    $('#sDriver').text(info.UseBindInfoName);
    $('#sCarTypeName').text(info.MountTypeName);
    //$('#sMainHotel').text(info.HotelTypeName);
    //$('#sSubHotel').text(info.SubHotelTypeName);

    var unpac = info.Status >> 21 & 1;
    $('#sUnpack').text(unpac == 1 ? "Yes" : "No");
}

var clickKeyValue = "";
var oldModal;
var transparam;
 
var dataField = [
    {
        data: function (e) {
            return '<input type="checkbox" name="chk_list" value=\"' + e.PNo + '\" checked="checked">';
        }, "sClass": "textcenter"
    },
    { data: 'VCo' },
    {
        data: function (e) {

            return e.PNo + "&nbsp<a href='#' onclick='showTable(\"" + e.PNo + "\")' style='color:#000' id='modal" + e.PNo + "' hidden='hidden'> <i class='glyphicon glyphicon-plus-sign'></i></a>";
        }
    },
    //{ data: 'PNo' },
    //{ data: 'IMEI' },
    { data: 'DEID' },
    { data: 'DName' },
    { data: 'Long' },
    { data: 'Lat' },
    { data: 'SP' },
    { data: function (e) { return $.FromDvrConnectionStatus(e.STD) + " / " + $.FromDvrCamera(e.DC) } },
   // { data: function (e) { return $.FromMapVehicleStatus(e.ST) } },
    { data: function (e) { return $.FromVehicleStatus(e.LU) } },
    { data: function (e) { return $.FromMapAlarmStatus(e.ST) } },
    { data: function (e) { return $.FromLoginStatus(e.Login) } },
    { data: function (e) { return $.TransformCurrents(e.Time) } }
   // { data: function (e) { return $.TransformUtcAdHours(e.Time) } }

];
var companyID = $("#uCompanyID").val();
$.OnClickEventGun = function () {
    map.on('click', function (event) {
        var feature = map.forEachFeatureAtPixel(event.pixel, function (feature, layer) { return feature; });
        //clickKey = "";
        if (typeof (feature) == "undefined" || feature == null) {
     
            return;
        }
        if (feature.get('features') == "undefined" || feature.get('features') == null) {
     
            return;
        }
        if (feature.get('features').length > 1) {
            return;
        }

        var str = feature.get('features')[0].getId();
        if (str == null || str == "")
            return;
        var key = str.substring(0, str.indexOf("@"));
        var h = 0;
        $.AjaxFun(VehicleLocationTable, { "type": 0, "cmo": companyID, "dco": 0, "pNo": key }, function (data) {
            if (data.MsgType == 1) {
                $.DrawLayer(data.Data.Bases);
              var  table = $.TableMonitor("#tabs", dataField, data.Data.Bases);
                $("input[name='chk_list']:checkbox").each(function () {
                    var djson = $("#tabs").DataTable().row($(this).parents('tr')).data();
                    if (key == djson.PNo) {
                        $.SetAlerModelData(djson);
                        $.SwitchCircle(djson);
                        $(this).parents("tr").addClass('fontStrong');
                        $("#modal" + djson.PNo).show();
                        $(".dataTables_scrollBody").scrollTop(h);
                        oldModal = djson;
                        transparam = djson.PNo + "&DCo=" + djson.VCo;
                        //alert($(this).parents("tr").height() + "  " + $(".dataTables_scrollBody").scrollTop());
                    } else {
                        $(this).parents("tr").removeClass('fontStrong');
                        $("#modal" + djson.PNo).hide();

                     
                    }
                    h = h + $(this).parents("tr").height();
                });
                $('#MapModal').modal('show').css({ 'margin-top': 100 });
            }
        });
     
    });
}



$(document).on("click", "#SelectTracking", function () { 
    window.location.href = '@Url.Action("VehicleTrack", "Track")?key=' + transparam;
});
$(document).on("click", "#SelectTrip", function () {
     
    window.location.href = '@Url.Action("TripReport", "Report")?key=' + transparam;

});

$(document).on("click", "#selectMessage", function () {
     
    window.location.href = '@Url.Action("NewMessage", "Message")?key=' + transparam;

});
$(document).on("click", "#selectHistoricalDvr", function () {
     
    window.location.href = '@Url.Action("DVRPlayback", "DVR")?key=' + transparam;

});
$(document).on("click", "#selectLiveDvr", function() {

    window.location.href = '@Url.Action("DVRLivefeed", "DVR")?key=' + transparam;
     

    });

$(document).on("click", "#selectVehicleIsActivate", function () {

    window.location.href = '@Url.Action("VehicleIsActiavte", "Vehicle")?id=' + oldModal;
     

});

$.OnClickEventTag = function () {
    map.on('click', function (event) {
        var feature = map.forEachFeatureAtPixel(event.pixel, function (feature, layer) { return feature; });
        //clickKey = "";
        if (typeof (feature) == "undefined" || feature == null) {
            $('#myTab li:eq(0) a').tab('show');
            return;
        }
        if (feature.get('features') == "undefined" || feature.get('features') == null) {
            $('#myTab li:eq(0) a').tab('show');
            return;
        }
        if (feature.get('features').length > 1) {

            $('#myTab li:eq(2) a').tab('show');
            var len = feature.get('features').length;
            $('#listGun').empty();
            var featureSort = feature.get('features').sort(
                function (a, b) {
                    if (a.getId() < b.getId()) return -1;
                    if (a.getId() > b.getId()) return 1;
                    return 0;
                }
            );
            for (var i = 0; i < len; i++) {
                var keyMany = featureSort[i].getId();
                if (keyMany == null || keyMany == "")
                    return;
                var infoMany = MemoryFun.get(keyMany);
                if (infoMany == null)
                    return;
                var outInfo = "-(" + (infoMany.Complement == 1 ? 'Motorized' : 'Non-Motorized') + ")";
                $('#listGun').append("<a href='#' class='list-group-item' style='padding: 5px 8px; font-weight: bold;'>" + infoMany.key + outInfo + "</a>");
            }
            return;
        }
        $('#myTab li:eq(1) a').tab('show');

        var key = feature.get('features')[0].getId();
        if (key == null || key == "")
            return;
        $.SetAlertDataGun(key);
        clickKeyValue = key;
        $.SwitchCircle();
        var h = 0;

        $("input[name='chk_list']:checkbox").each(function () {
            var djson = $("#tab").DataTable().row($(this).parents('tr')).data();
            if (clickKeyValue == djson.key) {
                $(this).parents("tr").addClass('fontStrong');
                $("#modal" + djson.Id).show();
                $(".dataTables_scrollBody").scrollTop(h);
                oldModal = djson.Id;
            } else {
                $(this).parents("tr").removeClass('fontStrong');
                $("#modal" + djson.Id).hide();
            }
            h = h + $(this).parents("tr").height();
        });
    });
}

$.OnClickEventTrack = function () {
    map.on('click', function (event) {
        var feature = map.forEachFeatureAtPixel(event.pixel, function (feature, layer) { return feature; });
        if (typeof (feature) == "undefined" || feature == null) {

            return;
        }

        var key = feature.getId();
        if (key == "undefined" || key == null)
            return;
        var keys = key.split('_');
        if (keys.length <= 1) {
            return;
        }

        var coordinate = event.coordinate;
        var hdms = ol.coordinate.toStringHDMS(ol.proj.transform(coordinate, 'EPSG:3857', 'EPSG:4326'));
        overlay.setPosition(coordinate);

        //content.innerHTML = '<p style="width: 180px">You clicked here:</p><code  >' + Id + '</code><a href="http://ucastcomputer.com:1090/">跳转(Jump)</a>';
        //<button class="btn btn-primary btn-block" type="button" id="SetTrack">Play Back</button>
        var info = mTable[keys[1]];
        var str = (info.Status & 1) == 1 ? "On" : "Off"
        content.innerHTML = '<div><div style="text-align:center">' + info.Alias + '</div><div style="width: 200px;text-align:left">Loaction:' + info.Latitude + "," + info.Longitude + '</div><div style="width: 200px;text-align:left">Speed: ' + info.Speed + 'KM/H</div>' +
            '<div style="width:200px;text-align:left">Ignition: ' + str + ' Unpack: No </div><div style="width:200px;text-align:left">Temp: No</div><div style="width:200px;text-align:left">Time: ' + $.TransformCurrent(info.NowTime) + '</div></div></div>';
        container.style.display = 'block';


    });
}
$.SetRotate = function () {
    var view = map.getView();
    //alert(view.getRotation());
    //-1.986411000473937
    //1.1710765081961372
    view.setRotation(-1.986411000473937);
}
//$.SetAlertDataGun = function (key) {
//    var info = MemoryFun.get(key);
//    if (info == null)
//        return;
//    $('#alias').text(info.key);

//    $('#sUnpack').text("No");
//    $('#sTemp').text("No");
//    $('#sIdling').text(info.IdleStatus ? "Yes" : "No");
//    $('#sLongitude').text(info.Longitude);
//    $('#sLatitude').text(info.Latitude);
//    $('#sReportTime').text((info.Time));
//    $('#sVehicleType').text(info.VehicleTypeName);
//    //$("#detailInfo").show();
//    $("#sIgnitionDiv").show();
//    $("#takePictureHidden").hide();
//    if (info.ID != "") {
//        $("#takePictureHidden").show();
//        $("#ImeiClick").val(info.Id);
//    }
//    if (info.MountType == 1) {
//        //$('#sDriver').text(info.DriverName);
//        ////$('#sCard').text(info.PayCardNumber);
//        //$("#sCardTime").text($.TransformFormatNoTimehhmmss(info.PayCardTime));
//        //$('#preview').empty();
//        //if (info.PicSaveTime == null || info.PicSaveTime == "NaN undefined NaN") {
//        //    $('#preview').append("<span>Unknown</span>");
//        //} else {
//        //    $('#preview').append("<a href='#'><span style='padding-top: 5px;'>"+$.TransformFormatNoTimehhmmss(info.PicSaveTime)+"</span></a>");
//        //}
//        ////$('#preview').text(info.PicSaveTime == null || info.PicSaveTime == "NaN undefined NaN" ? "" :$.TransformFormatNoTimehhmmss(info.PicSaveTime)) ;
//        //$('#picNumber').val(info.PicNumber == null || info.PicNumber == undefined ? "" : info.PicNumber);
//        //$('#sDirectionText').text("Direction");
//        //$('#sDirection').text("");
//        //$('#sSpeedText').text("Card:");
//        ////$('#sSpeed').text(info.Speed + "(km/h)");
//        ////$('#sSpeed').text(info.PayCardNumber);
//        //$("#sTrack").show();
//        //$("#sCardTimeDiv").show();
//        //$("#sPreviewDiv").show();
//        //$("#voltage2Hide").hide();
//        //$("#sReportVehicleDiv").hide();
//        //$('#Ignition').text((info.Status & 1) == 1 ? "ON" : "OFF");
//        //ShowVehicleStyle(info.FunctionType);
//        //$("#myConnection").html(info.Connection ? "<span class='fa fa-link' style='color:#00FF00'></span>" : "<span class='fa fa-unlink' style='color:#FF0000'></span>");
//    } else {
//        $("#sTrack").hide();
//        $("#sCardTimeDiv").hide();
//        $("#sPreviewDiv").hide();
//        $("#sIgnitionDiv").hide();
//        $("#sReportVehicleDiv").show();
//        $("#sReportVehicle").text(info.ReportVehicle);
//        $("#voltage2Hide").show();
//        $('#sSpeedText').text("Voltage1:");
//        $('#sSpeed').text(info.Voltage1 + "V");
//        $('#sSpeedText2').text("Voltage2:");
//        $('#sSpeed2').text(info.Voltage2 + "V");
//    }
//}


$.SetAlertDataGun = function (key) {
    var info = MemoryFun.get(key);
    if (info == null)
        return;
    $("#sAlias").text(info.PNo);
    $('#sReportTime').text((info.Time));
    $("#OnlineTime").text(info.LTime);
    $('#Hardwara').text(info.HW);
    $("#Software").text(info.SW);
    $("#Param").text(info.PA);
    
}
var alarm;
$.SetAlerModelData = function (info) {
    //var info = MemoryFun.get(key);
    //    if (info == null)
    //        return;
        $("#DCompany").html(info.VCo);
        $("#sAlias").html(info.PNo);
        $("#sIMEI").html(info.DEID);
        $("#sDriver").html(info.DName);
        if (info.IMG =="-"||info.IMG==""||info.IMG==undefined) {
            $("#DriverImageId").attr("src", "../Image/DriverLog.jpg");
        } else {
            $("#DriverImageId").attr("src", info.IMG);
        }
        //if (info.DName =="-") {
        //    $("#DriverImageId").attr("src", "../Image/DriverLog.jpg");
        //} else {
        //    $("#DriverImageId").attr("src", info.DrvierUrl);
        //}
        $("#sSpeed").html(info.SP + " KM/H");
        $("#sTime").html($.TransformCurrents(info.Time));
        var ignition = (info.ST & 0x1) == 1;
        var sos1;
        if (((info.ST >> 1 & 0x1) == 1 || (info.ST >> 3 & 0x1) == 1)) {
            sos1 = "Yes";
        } else {
            sos1 = "No";
        }
        $("#sFrontAlarm").text(sos1);
        var hired = (info.ST >> 2 & 0x1) == 1;
        var gps = (info.ST >> 16 & 0x1) == 1;

        if (ignition) {
            $("#sIgnition").text("Yes");
        }
        else {
            $("#sIgnition").text("No");
        }

        if (hired) {
            $("#sHired").text("Yes");
        }
        else {
            $("#sHired").text("No");
        }
        if (gps) {
            $("#sGps").text("Yes");
        }
        else {
            $("#sGps").text("No"); 
        }


        $("#sCoordinate").html(info.Long + " / " + info.Lat);

        $("#sSoftware").html(info.SW);

        $("#sDvrVersion").html(info.SWD);

        $("#sDvrConnectStatus").html($.FromDvrConnectionStatus(info.STD) + " / " + $.FromDvrCamera(info.DC));

        $("#sCamera").html($.TransformCurrents(info.DTime));

      
        $('#detailModal').modal('show').css({ 'margin-top': 100 });

}


//不同车型显示不同内容
function ShowVehicleStyle(type) {
    switch (type) {
        case 1:   //升降
            $("#IsRise").removeClass("hidden").addClass("show");
            break;
        default:
    }
}


$.SetAlertDataTag = function (key) {
    var info = MemoryFun.get(key);
    if (info == null)
        return;
    $('#alias').text(info.No);
    $('#sLongitude').text(info.Longitude);
    $('#sLatitude').text(info.Latitude);
    $('#sSignal').text(info.Signal);
}


$.SwitchViewAlert = function (x, y, zoom, plate) {
    var view = map.getView();
    view.setCenter($.TransMapLonLat(x, y));
    view.setZoom(zoom);
    var features = vector.getSource();
    features.forEachFeature(function (feature) {
        var result = feature.get('features').filter(function (item) {
            return item.getId() === plate;
        });
        if (typeof (result) == "undefined" || result == null || result.length <= 0) {
            return;
        }
        //$.FlashAlarm(feature);
        $('#myTab li:eq(1) a').tab('show');
        $.SetAlertDataGun(result[0].getId());
        clickKeyValue = result[0].getId();
    });
    $.SwitchCircle();

}

$.SwitchViewAlertModel = function (x, y, zoom, plate) {
    var view = map.getView();
    view.setCenter($.TransMapLonLat(x, y));
    view.setZoom(zoom);
    var features = vector.getSource();
    features.forEachFeature(function (feature) {
        var result = feature.get('features').filter(function (item) {
            return item.getId() === plate;
        });
        if (typeof (result) == "undefined" || result == null || result.length <= 0) {
            return;
        }
        //$.FlashAlarm(feature);
        $('#myTab li:eq(1) a').tab('show');
        $.SetAlerModelData(result[0].getId());
        clickKeyValue = result[0].getId();
    });
    $.SwitchCircle();

}

$.SwitchViewAlertTag = function (x, y, zoom, plate) {
    var view = map.getView();
    view.setCenter($.TransMapLonLat(x, y));
    view.setZoom(zoom);
    var features = vector.getSource();
    features.forEachFeature(function (feature) {
        var result = feature.get('features').filter(function (item) {
            return item.getId() === plate;
        });
        if (typeof (result) == "undefined" || result == null || result.length <= 0) {
            return;
        }
        //$.FlashAlarm(feature);
        $('#myTab li:eq(1) a').tab('show');
        $.SetAlertDataTag(result[0].getId());
        clickKeyValue = result[0].getId();
    });

}
var layerCircle;


$.SwitchNoCircle = function () {

    if (layerCircle != null) { map.removeLayer(layerCircle); };
    var info = MemoryFun.get(clickKeyValue);
    if (info == null)
        return;
    $.SwitchView(info.Longitude, info.Latitude, 17);
}



$.SwitchCircle = function (info) {
    if (layerCircle != null) { map.removeLayer(layerCircle); };
  
    var tt = new ol.geom.Point($.TransMapLonLat(info.Long, info.Lat));
    var circlefeature = new ol.Feature(tt);

    var st = new ol.style.Style({
        image: new ol.style.Circle({
            radius: 35,
            snapToPixel: false,
            stroke: new ol.style.Stroke({
                color: 'rgba(238, 50, 17, 10)',
                width: 3
            })
        })
    });
    circlefeature.setStyle(st);

    layerCircle = new ol.layer.Vector({
        source: new ol.source.Vector({
            features: [circlefeature]
        })
    });
    map.addLayer(layerCircle);
    $.SwitchView(info.Long, info.Lat, 17);
}
$.SwitchCircleNoCenter = function () {
    if (layerCircle != null) { map.removeLayer(layerCircle); };
    var info = MemoryFun.get(clickKeyValue);
    if (info == null)
        return;
    var tt = new ol.geom.Point($.TransMapLonLat(info.Longitude, info.Latitude));
    var circlefeature = new ol.Feature(tt);

    var st = new ol.style.Style({
        image: new ol.style.Circle({
            radius: 35,
            snapToPixel: false,
            stroke: new ol.style.Stroke({
                color: 'rgba(238, 50, 17, 10)',
                width: 3
            })
        })
    });
    circlefeature.setStyle(st);

    layerCircle = new ol.layer.Vector({
        source: new ol.source.Vector({
            features: [circlefeature]
        })
    });
    map.addLayer(layerCircle);
}
$.SwitchView = function (x, y, zoom) {
    var view = map.getView();
    view.setCenter($.TransMapLonLat(x, y));
    view.setZoom(zoom);
}
$.DirectionStr = function (lastDirection) {
    var szDirection;
    var direction = lastDirection * 2;
    if (direction == 0)
        szDirection = "Due North ";
    else if (direction < 90)
        szDirection = "North East " + direction;
    else if (direction == 90)
        szDirection = "Due East";
    else if (direction < 180)
        szDirection = "East South " + direction - 90;
    else if (direction == 180)
        szDirection = "Due South";
    else if (direction < 270)
        szDirection = "South West " + direction - 180;
    else if (direction == 270)
        szDirection = "West";
    else if (direction < 360)
        szDirection = "North West " + direction - 270;
    return szDirection;
}

/**
     * 缓存数据
     */
function MemoryFun() { }

MemoryFun.size = 0;
/** 对象 **/
MemoryFun.entry = new Object();

/** 存 **/
MemoryFun.add = function (key, value) {
    if (!MemoryFun.containsKey(key)) {
        MemoryFun.size++;
        MemoryFun.entry[key] = value;
        return;
    }

}

/** 取 **/
MemoryFun.get = function (key) {
    return MemoryFun.containsKey(key) ? MemoryFun.entry[key] : null;
}

/** 删除 **/
MemoryFun.remove = function (key) {
    if (MemoryFun.containsKey(key) && (delete MemoryFun.entry[key])) {
        MemoryFun.size--;
    }
}
/** 所有 Value **/
MemoryFun.values = function () {
    var values = new Array();
    for (var prop in MemoryFun.entry) {
        values.push(MemoryFun.entry[prop]);
    }
    return values;
}
MemoryFun.containsKey = function (key) {
    return (key in MemoryFun.entry);
};

MemoryFun.keySet = function () {
    var _keys = new Array();
    for (var key in MemoryFun.entry) {
        _keys.push(key);
    }
    return _keys;
};

/* 清空 */
MemoryFun.clear = function () {
    MemoryFun.size = 0;
    MemoryFun.entry = new Object();
}

//-Vehicle
var currentResolution;
var styleFunction = function (feature, resolution) {
    if (resolution != currentResolution) {
        $.calculateClusterInfo(resolution, feature);
        currentResolution = resolution;
    }
    var originalFeature = feature.get('features')[0];
    var style;
    var size = feature.get('features').length;
    var key = originalFeature.getId();//当前图层ID

    if (size > 1) {
        style = [new ol.style.Style({
            image: new ol.style.Icon({
                src: manyIcon
            }),
            text: new ol.style.Text({
                text: size.toString(),
                fill: textFill,
                stroke: textStroke
            })
        })];
    } else {
        style = [createEarthquakeStyle(originalFeature)];
    }
    return style;
}
//---gun
var styleFunctiongun = function (feature, resolution) {
    if (resolution != currentResolution) {
        $.calculateClusterInfo(resolution, feature);
        currentResolution = resolution;
    }
    var originalFeature = feature.get('features')[0];
    var style;
    var size = feature.get('features').length;
    var key = originalFeature.getId();//当前图层ID

    if (size > 5) {
        //var countVal = queryTrailerTruck(feature, size);
        style = [new ol.style.Style({
            image: new ol.style.Circle({
                radius: 10,
                stroke: new ol.style.Stroke({
                    color: 'rgba(255,127,39,0.5)',
                    width: 8
                }),
                fill: new ol.style.Fill({ color: '#ff7f27' })
            }),
            text: new ol.style.Text({
                text: size.toString(),
                fill: textFill,
                stroke: textStroke,
                offsetY: 2
            })
        })];
    } else if (size > 1 && size < 5) {
        style = [new ol.style.Style({
            image: new ol.style.Circle({
                radius: 10,
                stroke: new ol.style.Stroke({
                    color: 'rgba(255,201,14,0.5)',
                    width: 8
                }),
                fill: new ol.style.Fill({ color: '#ffc90e' })
            }),
            text: new ol.style.Text({
                text: size.toString(),
                fill: textFill,
                stroke: textStroke,
                offsetY: 2
            })
        })];
    } else {
        style = [createEarthquakeStyle(originalFeature)];
    }
    return style;
}
var styleFunctiongunTag = function (feature, resolution) {
    if (resolution != currentResolution) {
        $.calculateClusterInfo(resolution, feature);
        currentResolution = resolution;
    }
    var originalFeature = feature.get('features')[0];
    var style;
    var size = feature.get('features').length;
    var key = originalFeature.getId();//当前图层ID

    if (size > 1) {


        style = [
            new ol.style.Style({
                image: new ol.style.Icon({
                    src: manyIconGun
                }),
                text: new ol.style.Text({
                    text: size.toString(),
                    fill: textFill,
                    stroke: textStroke,
                    offsetY: -3,
                })
            })
        ];
    } else {
        style = [createEarthquakeStyleTag(originalFeature)];
    }
    return style;
}
$.calculateClusterInfo = function (resolution, features) {
    var maxFeatureCount = 0;
    var feature, radius;
    for (var i = features.length - 1; i >= 0; --i) {
        feature = features[i];
        var originalFeatures = feature.get('features');
        var extent = ol.extent.createEmpty();
        for (var j = 0, jj = originalFeatures.length; j < jj; ++j) {
            ol.extent.extend(extent, originalFeatures[j].getGeometry().getExtent());
        }
        maxFeatureCount = Math.max(maxFeatureCount, jj);
        radius = 0.25 * (ol.extent.getWidth(extent) + ol.extent.getHeight(extent)) / resolution;
        feature.set('radius', radius);
    }
}


////////////////////////////////////////////////////////////
//if (endVector != null) {
//    endPoint = null;
//    map.removeLayer(endVector);
//}
//endPoint = new ol.geom.Point(ars);

//var endFeature = new ol.Feature({
//    geometry: endPoint,

//});

//var iconStyle = new ol.style.Style({
//    image: new ol.style.Icon({
//        src: "../Image/VehicleLocation/orange.png",
//        anchor: [0.5, 0.9],
//        rotateWithView: true,
//        rotation: -rotation + 1.5708
//    })

//});

//endFeature.setStyle(iconStyle);

//var endVectorSource = new ol.source.Vector({
//    features: [endFeature]
//});

//endVector = new ol.layer.Vector({
//    source: endVectorSource
//});

//map.addLayer(endVector);
///////////////////////////////////////////////////////////////



var createEarthquakeStyle = function (feature) {

    var str = feature.getId();
    var name = str.substring(0, str.indexOf("@"));
    var ic = str.substring(str.indexOf("@")+1,str.length);
    var img;
    if (ic == "1") {
        img = carYellow;
    }else if (ic == "2") {
        img = carGrey;
    } else {
        img=carRed;
    }

    //var infotmp = MemoryFun.get(feature.getId());

    //var arrOld = $.TransMapLonLat(infotmp.OldLongitude, infotmp.OldLatitude);
    //var arrNew = $.TransMapLonLat(infotmp.Longitude, infotmp.Latitude);


    //var dx = arrNew[0] - arrOld[0];
    //var dy = arrNew[1] - arrOld[1];

   
    //var rotation = Math.atan2(dy, dx);
     
    return new ol.style.Style({
        
        geometry: feature.getGeometry(),
        
        image: new ol.style.Icon({
            src: img
            //,
            //anchor: [0.5, 0.9],
            //rotateWithView: true,
            //rotation: -rotation + 1.5708
        }),
        text: new ol.style.Text({
            text: name,
            font: '15px Calibri,sans-serif',
            fill: new ol.style.Fill({ color: '#000000' }),
            textAlign: 'center',
            textBaseline: 'bottom',
            offsetY: -8,
        })
    });
}
var createEarthquakeStyleTag = function (feature) {
    return new ol.style.Style({
        geometry: feature.getGeometry(),
        image: new ol.style.Icon({
            src: MemoryFun.get(feature.getId()).Icon
        }),
        text: new ol.style.Text({
            text: MemoryFun.get(feature.getId()).No,
            font: '15px Calibri,sans-serif',
            fill: new ol.style.Fill({ color: '#000000' }),
            textAlign: 'center',
            textBaseline: 'bottom',
            offsetY: -8,
        })
    });
}

var queryTrailerTruck = function (feature, size) {
    var trailerCount = 0;
    //var truckCount = 0;
    for (var i = 0; i < size; i++) {
        //var color = MemoryFun.get(feature.get('features')[i].getId()).MountType;
        //if (color == 1)
        //    trailerCount++;
        //if (color == 2)
        //    truckCount++;
        trailerCount++;
    }
    //return trailerCount + "-" + truckCount;
    return trailerCount;
}


var layerLines;
var lineDrawList;
var linefeature;
var lineStyle
$.DrawLine = function (array) {

    lineDrawList = new ol.geom.LineString(array, 'XY');
    if (layerLines != null) { map.removeLayer(layerLines); };
    var linefeature = new ol.Feature({
        geometry: lineDrawList,
        name: 'Line'
    });

    lineStyle = new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: 'purple',
            width: 2
        })
    });


    linefeature.setStyle(lineStyle);

    layerLines = new ol.layer.Vector({
        source: new ol.source.Vector({
            features: [linefeature]
        })
    });
    map.addLayer(layerLines);
}


var startPoints;
var startVector;
var endPoint;
var endVector;
$.TimerDrawLineInit = function (data) {

    if (startVector != null) {
        startPoints = null;
        map.removeLayer(startVector);
    }

    if (endVector != null) {
        endPoint = null;
        map.removeLayer(endVector);
    }
    startPoints = new ol.geom.Point(data);


    var startFeature = new ol.Feature({
        geometry: startPoints,

    });

    var iconStyle = new ol.style.Style({
        image: new ol.style.Icon({
            //src: "../Image/Car.png",
            src: "../Image/1.png",
         
            anchor: [0.5, 0.9]
        })

    });

    startFeature.setStyle(iconStyle);

    var startVectorSource = new ol.source.Vector({
        features: [startFeature]
    });

    startVector = new ol.layer.Vector({
        source: startVectorSource
    });

    map.addLayer(startVector);

    //var datatmp=[];
    //datatmp.push(data);
    lineDrawList = new ol.geom.LineString(data, 'XY');
    if (layerLines != null) {
        map.removeLayer(layerLines);
    };
    linefeature = new ol.Feature({
        geometry: lineDrawList,
        name: 'Line'
    });

    lineStyle = [new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: 'green',
            width: 3,

        })
    })];

    linefeature.setStyle(lineStyle);

    layerLines = new ol.layer.Vector({
        source: new ol.source.Vector({
            features: [linefeature]
        })
    });
    map.addLayer(layerLines);

}

$.TimerDrawLineReset = function (array) {

    if (startVector != null) {
        startPoints = null;
        map.removeLayer(startVector);
    }

    if (endVector != null) {
        endPoint = null;
        map.removeLayer(endVector);
    }
    startPoints = new ol.geom.Point(array[0]);


    var startFeature = new ol.Feature({
        geometry: startPoints,

    });

    var iconStyle = new ol.style.Style({
        image: new ol.style.Icon({
            //src: "../Image/Car.png",
            //src: "../Image/VehicleLocation/blue.png",
            src: "../Image/1.png",
            anchor: [0.5, 0.9]
        })

    });

    startFeature.setStyle(iconStyle);

    var startVectorSource = new ol.source.Vector({
        features: [startFeature]
    });

    startVector = new ol.layer.Vector({
        source: startVectorSource
    });

    map.addLayer(startVector);

    //var datatmp=[];
    //datatmp.push(array[0]);
    //lineDrawList = new ol.geom.LineString(array[0], 'XY');
    lineDrawList = new ol.geom.LineString(data, 'XY');
    if (layerLines != null) {
        map.removeLayer(layerLines);
    };
    linefeature = new ol.Feature({
        geometry: lineDrawList,
        name: 'Line'
    });

    lineStyle = [new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: 'green',
            width: 3,

        })
    })];

    var last;
    for (var i = 1; i < array.length; i++) {

        var info = array[i];
        var start = [];
        var st1 = $.TransEPSGLonLat(info[0], info[1]);
        var st2 = $.TransEPSGLonLat(lineDrawList.getLastCoordinate()[0], lineDrawList.getLastCoordinate()[1]);
        var point1 = turf.point([st1[0], st1[1]]);
        var point2 = turf.point([st2[0], st2[1]]);
        var st = turf.distance(point2, point1, "kilometers");

        if (st * 1000 < 10)
            continue;
        start[0] = lineDrawList.getLastCoordinate()[0];
        start[1] = lineDrawList.getLastCoordinate()[1];
        lineDrawList.appendCoordinate(info);

        var dx = info[0] - start[0];
        var dy = info[1] - start[1];
        var sts1 = info[0] - ((info[0] - start[0]) / 2);
        var sts2 = info[1] - ((info[1] - start[1]) / 2);
        var tt = [];
        tt[0] = sts1;
        tt[1] = sts2;
        var rotation = Math.atan2(dy, dx);
        lineStyle.push(new ol.style.Style({
            geometry: new ol.geom.Point(tt),
            image: new ol.style.Icon({
                src: '../img/arrow.png',
                anchor: [0.75, 0.5],
                rotateWithView: true,
                rotation: -rotation
            })
        }));
        last = info;
    }
    if (typeof last == 'undefined' && array.length > 0) {
        last = array[0];
    }
    linefeature.setStyle(lineStyle);

    layerLines = new ol.layer.Vector({
        source: new ol.source.Vector({
            features: [linefeature]
        })
    });
    map.addLayer(layerLines);

    if (endPoint == null) {
        endPoint = new ol.geom.Point(last);


        var endFeature = new ol.Feature({
            geometry: endPoint,

        });

        var iconStyle = new ol.style.Style({
            image: new ol.style.Icon({
                //src: "../Image/Blue.png",
                src: "../Image/1.png",
                anchor: [0.5, 0.9],
                rotateWithView: true,
                rotation: -rotation+1.5708

            })

        });

        endFeature.setStyle(iconStyle);

        var endVectorSource = new ol.source.Vector({
            features: [endFeature]
        });

        endVector = new ol.layer.Vector({
            source: endVectorSource
        });

        map.addLayer(endVector);
    } else {
        endPoint.setCoordinates(last);
    }

}

$.TimerDrawLineAdd = function (ars) {
    if (lineDrawList == null) {
        return;
    }
    var start = [];
    var st1 = $.TransEPSGLonLat(ars[0], ars[1]);
    var st2 = $.TransEPSGLonLat(lineDrawList.getLastCoordinate()[0], lineDrawList.getLastCoordinate()[1]);
    var point1 = turf.point([st1[0], st1[1]]);
    var point2 = turf.point([st2[0], st2[1]]);
    var st = turf.distance(point2, point1, "kilometers");
    if (st * 1000 < 10)
        return;
    start[0] = lineDrawList.getLastCoordinate()[0];
    start[1] = lineDrawList.getLastCoordinate()[1];
    lineDrawList.appendCoordinate(ars);

    var dx = ars[0] - start[0];
    var dy = ars[1] - start[1];
    var sts1 = ars[0] - ((ars[0] - start[0]) / 2);
    var sts2 = ars[1] - ((ars[1] - start[1]) / 2);
    var tt = [];
    tt[0] = sts1;
    tt[1] = sts2;
    var rotation = Math.atan2(dy, dx);
    // arrows
    lineStyle.push(new ol.style.Style({
        geometry: new ol.geom.Point(tt),
        image: new ol.style.Icon({
            src: '../img/arrow.png',
            anchor: [0.75, 0.5],
            rotateWithView: true,
            rotation: -rotation
        })
    }));
    linefeature.setStyle(lineStyle);

    if (endPoint == null) {
        endPoint = new ol.geom.Point(ars);


        var endFeature = new ol.Feature({
            geometry: endPoint,

        });

        var iconStyle = new ol.style.Style({
            image: new ol.style.Icon({
                src: "../Image/1.png",
                //src: "../Image/VehicleLocation/orange.png",
                anchor: [0.5, 0.9],
                rotateWithView: true,
                rotation: -rotation + 1.5708
            })

        });

        endFeature.setStyle(iconStyle);

        var endVectorSource = new ol.source.Vector({
            features: [endFeature]
        });

        endVector = new ol.layer.Vector({
            source: endVectorSource
        });

        map.addLayer(endVector);
    } else {

        if (endVector != null) {
            endPoint = null;
            map.removeLayer(endVector);
        }
        endPoint = new ol.geom.Point(ars);

        var endFeature = new ol.Feature({
            geometry: endPoint,

        });

        var iconStyle = new ol.style.Style({
            image: new ol.style.Icon({
                src: "../Image/1.png",
                anchor: [0.5, 0.9],
                rotateWithView: true,
                rotation: -rotation + 1.5708
            })

        });

        endFeature.setStyle(iconStyle);

        var endVectorSource = new ol.source.Vector({
            features: [endFeature]
        });

        endVector = new ol.layer.Vector({
            source: endVectorSource
        });

        map.addLayer(endVector);
        endPoint.setCoordinates(ars);
    }

}

var vectorCircular;
$.SetCircular = function (array) {
    if (vectorCircular != null) { map.removeLayer(vectorCircular); };
    var featureChanges = [];
    for (var i = 0; i < array.length; i++) {


        var cPoints = new ol.geom.Point(array[i]);

        //var featureChangeIn = new ol.Feature(cPoints);

        var featureChangeIn = new ol.Feature({
            geometry: cPoints,

            //name: 'Polygon'
        });
        //var iconStyle = new ol.style.Style({

        //    text: new ol.style.Text({
        //        text: array[i].name,
        //        font: '15px Calibri,sans-serif',
        //        fill: new ol.style.Fill({ color: '#0000ff' }),
        //        textAlign: 'center',
        //        textBaseline: 'bottom',
        //        offsetY: -12
        //    })
        //});

        //featureChangeIn.setStyle(iconStyle);

        featureChangeIn.setId("Circular_" + i);

        featureChanges.push(featureChangeIn);
    }

    var vectorSource = new ol.source.Vector({
        features: featureChanges
    });

    vectorCircular = new ol.layer.Vector({
        source: vectorSource
    });

    map.addLayer(vectorCircular);

}

var vectorLayer = null;
var lPoint;
var featureChange;
var changeSrc;
//经度，纬度，名称，车牌图标选项，
$.SetLocation = function (lon, lat, name, colour) {
    if (vectorLayer != null) { map.removeLayer(vectorLayer); };
    lPoint = new ol.geom.Point($.TransMapLonLat(lon, lat));

    featureChange = new ol.Feature(lPoint);
    var color = colour ? minGreen : minRed;
    var iconStyle = new ol.style.Style({
        image: new ol.style.Icon({
            src: color,
            anchor: [0.5, 0.9]
        }),
        text: new ol.style.Text({
            text: name,
            font: '15px Calibri,sans-serif',
            fill: new ol.style.Fill({ color: '#000000' }),
            textAlign: 'center',
            textBaseline: 'bottom',
            offsetY: -12
        })
    });

    featureChange.setStyle(iconStyle);

    featureChange.setId(name);

    changeSrc = color;

    var vectorSource = new ol.source.Vector({
        features: [featureChange]
    });

    vectorLayer = new ol.layer.Vector({
        source: vectorSource
    });

    map.addLayer(vectorLayer);

}


var vectorLayers;
$.SetLocations = function (array) {
    if (vectorLayers != null) { map.removeLayer(vectorLayers); };
    var featureChanges = [];
    for (var i = 0; i < array.length; i++) {


        var lPoints = new ol.geom.Point($.TransMapLonLat(array[i].lon, array[i].lat));

        var featureChangeIn = new ol.Feature(lPoints);
        var color = minGreen;

        var iconStyle = new ol.style.Style({
            image: new ol.style.Icon({
                src: color,
                anchor: [0.5, 0.5]
            }),
            text: new ol.style.Text({
                text: array[i].name,
                font: '15px Calibri,sans-serif',
                fill: new ol.style.Fill({ color: '#000000' }),
                textAlign: 'center',
                textBaseline: 'bottom',
                offsetY: -12
            })
        });

        featureChangeIn.setStyle(iconStyle);

        featureChangeIn.setId(array[i].name);
        featureChanges[i] = featureChangeIn;
    }

    var vectorSource = new ol.source.Vector({
        features: featureChanges
    });

    vectorLayers = new ol.layer.Vector({
        source: vectorSource
    });

    map.addLayer(vectorLayers);

}

// PdMap
$.SetPDLocations = function (array) {
    if (vectorLayers != null) { map.removeLayer(vectorLayers); };
    var featureChanges = [];
    for (var i = 0; i < array.length; i++) {


        var lPoints = new ol.geom.Point($.TransMapLonLat(array[i].lon, array[i].lat));

        var featureChangeIn = new ol.Feature(lPoints);
        var color = taxiGreen;

        var iconStyle = new ol.style.Style({
            image: new ol.style.Icon({
                src: color,
                anchor: [0.5, 0.5]
            }),
            text: new ol.style.Text({
                text: array[i].name,
                font: '15px Calibri,sans-serif',
                fill: new ol.style.Fill({ color: '#000000' }),
                textAlign: 'center',
                textBaseline: 'bottom',
                offsetY: -12
            })
        });

        featureChangeIn.setStyle(iconStyle);

        featureChangeIn.setId(array[i].name);
        featureChanges[i] = featureChangeIn;
    }

    var vectorSource = new ol.source.Vector({
        features: featureChanges
    });

    vectorLayers = new ol.layer.Vector({
        source: vectorSource
    });

    map.addLayer(vectorLayers);

}

$.DrawLayerlist = function (array) {

    var featureChanges = [];
    for (var i = 0; i < array.length; i++) {


        var lPoints = new ol.geom.Point($.TransMapLonLat(array[i].Lon, array[i].Lat));

        var featureChangeIn = new ol.Feature(lPoints);
        var color = trailer;

        var iconStyle = new ol.style.Style({
            image: new ol.style.Icon({
                src: color,

                anchor: [0.5, 0.5]
            }),
            text: new ol.style.Text({
                text: array[i].name,
                font: '15px Calibri,sans-serif',
                fill: new ol.style.Fill({ color: '#000000' }),
                textAlign: 'center',
                textBaseline: 'bottom',

                offsetY: -12
            })
        });

        featureChangeIn.setStyle(iconStyle);

        featureChangeIn.setId(array[i].name);
        featureChanges[i] = featureChangeIn;
    }

    var vectorSource = new ol.source.Vector({
        features: featureChanges
    });

    vectorLayers = new ol.layer.Vector({
        source: vectorSource
    });

    map.addLayer(vectorLayers);

}

$.DrawLayerTo = function (array) {
    if (vectorLayers != null) { map.removeLayer(vectorLayers); };
    var featureChanges = [];
    var lPoints = new ol.geom.Point($.TransMapLonLat(array.Lon, array.Lat));
    var featureChangeIn = new ol.Feature(lPoints);
    var color = Takeoff;

    var iconStyle = new ol.style.Style({
        image: new ol.style.Icon({
            src: color,
            anchor: [0.5, 0.5]
        }),
        text: new ol.style.Text({

            font: '15px Calibri,sans-serif',
            fill: new ol.style.Fill({ color: '#000000' }),
            textAlign: 'center',
            textBaseline: 'bottom',
            color: '#000000',
            offsetY: -12
        })
    });
    featureChangeIn.setStyle(iconStyle);
    featureChangeIn.setId(array.name);
    featureChanges[0] = featureChangeIn;
    var vectorSource = new ol.source.Vector({
        features: featureChanges
    });
    vectorLayers = new ol.layer.Vector({
        source: vectorSource
    });
    map.addLayer(vectorLayers);
    if (layerCircle != null) { map.removeLayer(layerCircle); };
    var tt = new ol.geom.Point($.TransMapLonLat(obj.Longitude, obj.Latitude));
    var circlefeature = new ol.Feature(tt);
    var st = new ol.style.Style({
        image: new ol.style.Circle({
            radius: 35,
            snapToPixel: false,
            stroke: new ol.style.Stroke({
                color: 'rgba(238, 50, 17, 10)',
                width: 3
            })
        })
    });
    circlefeature.setStyle(st);
    layerCircle = new ol.layer.Vector({
        source: new ol.source.Vector({
            features: [circlefeature]
        })
    });
    map.addLayer(layerCircle);
    $.SwitchView(obj.Longitude, obj.Latitude, 14);
}

$.SetLocationsWiFiLog = function (array) {
    if (vectorLayers != null) { map.removeLayer(vectorLayers); };
    var featureChanges = [];
    for (var i = 0; i < array.length; i++) {


        var lPoints = new ol.geom.Point($.TransMapLonLat(array[i].lon, array[i].lat));

        var featureChangeIn = new ol.Feature(lPoints);
        var color = wifiLog;

        var iconStyle = new ol.style.Style({
            image: new ol.style.Icon({
                src: color,
                anchor: [0.5, 0.5]
            }),
            text: new ol.style.Text({
                text: array[i].vehicle + " (" + $.TransformFormathhmmss(array[i].saveTime) + ") " + $.WiFIConnectionStatus(array[i].status), //时分秒显示在车牌后面,
                font: '15px Calibri,sans-serif',
                fill: new ol.style.Fill({ color: '#000000' }),
                textAlign: 'center',
                textBaseline: 'bottom',
                offsetY: -12
            })
        });

        featureChangeIn.setStyle(iconStyle);

        featureChangeIn.setId(array[i].id);
        featureChanges[i] = featureChangeIn;
    }

    var vectorSource = new ol.source.Vector({
        features: featureChanges
    });

    vectorLayers = new ol.layer.Vector({
        source: vectorSource
    });

    map.addLayer(vectorLayers);

}


$.WiFIConnectionStatus = function (status) {
    switch (status) {
        case 1:
            return "①";
        case 3:
            return "③";
        default:
            return "";
    }
}

//var vectorLayerz;
//$.SetDirection = function () {
//    var featureChanges = [];
//    if (vectorLayerz != null) { map.removeLayer(vectorLayerz); };
//    var sourceProj = map.getView().getProjection();
//    var coordLLs = lineDrawList.getCoordinates();
//    for (var j = 0, ii = coordLLs.length - 1; j < ii; ++j) {
//        if (j == 0)
//            continue;
//        var c1 = ol.proj.transform(coordLLs[j], sourceProj, 'EPSG:4326');
//        var c2 = ol.proj.transform(coordLLs[j + 1], sourceProj, 'EPSG:4326');
//        var pts = coordLLs[j];
//        var pxs = coordLLs[j + 1];

//        if (pts[0] == pxs[0] && pts[1] == pxs[1])
//            continue;
//        var len = wgs84Sphere.haversineDistance(c1, c2);

//        if (len < 100)
//            continue;
//        var output = (Math.round(len * 100) / 100);
//        if (output < 20)
//            continue;
//        var seg1 = { x1: pts[0], y1: pts[1], x2: pxs[0], y2: pxs[1] };
//        var arrow_height = 10; // 箭头高度    
//        var arrow_btomline = 6; // 底边的一半    
//        var arctangent = Math.atan(arrow_btomline / arrow_height); // 箭头角度    
//        var arrow_len = Math.sqrt(arrow_btomline * arrow_btomline + arrow_height * arrow_height); // 箭头的长度    
//        var endPoint_1 = $.rotateVec(seg1.x2 - seg1.x1, seg1.y2 - seg1.y1, arctangent, true, arrow_len);
//        var endPoint_2 = $.rotateVec(seg1.x2 - seg1.x1, seg1.y2 - seg1.y1, -arctangent, true, arrow_len);
//        var x3 = seg1.x2 - endPoint_1[0]; // (x_3,y_3)是第一端点    
//        var y3 = seg1.y2 - endPoint_1[1];
//        var x4 = seg1.x2 - endPoint_2[0]; // (x_4,y_4)是第二端点    
//        var y4 = seg1.y2 - endPoint_2[1];

//        var arr = [];
//        arr[0] = [seg1.x2, seg1.y2];
//        arr[1] = [x3, y3]; //ol.proj.transform([x3, y3], 'EPSG:4326', 'EPSG:3857');;
//        arr[2] = [seg1.x2, seg1.y2];
//        arr[3] = [x4, y4];

//        var line = new ol.geom.LineString(arr, 'XY');

//        var featureChange = new ol.Feature(line);

//        var lineStyle = new ol.style.Style({
//            fill: new ol.style.Fill({
//                color: 'green'
//            }),
//            stroke: new ol.style.Stroke({
//                color: 'green',
//                width: 4
//            }),

//        });
//        featureChange.setStyle(lineStyle);

//        featureChanges.push(featureChange);

//    }
//    var vectorSource = new ol.source.Vector({
//        features: featureChanges
//    });

//    vectorLayerz = new ol.layer.Vector({
//        source: vectorSource
//    });

//    map.addLayer(vectorLayerz);

//}
$.rotateVec = function (px, py, ang, isChlen, newLen) {


    var rotateResult = [];
    // 矢量旋转函数，参数含义分别是x分量、y分量、旋转角、是否改变长度、新长度    
    var vx = px * Math.cos(ang) - py * Math.sin(ang);
    var vy = px * Math.sin(ang) + py * Math.cos(ang);
    if (isChlen) {
        var d = Math.sqrt(vx * vx + vy * vy);

        vx = vx / d * newLen;
        vy = vy / d * newLen;
        rotateResult[0] = vx;
        rotateResult[1] = vy;
    }
    return rotateResult;
}
$.ChangeMove = function (lon, lat, colour) {

    if (lPoint == null)
        return;
    if (lPoint == null)
        return;
    lPoint.setCoordinates($.TransMapLonLat(lon, lat));
    if ((changeSrc == minGreen && colour) || (changeSrc == minRed && !colour)) {
        return;
    }
    if (changeSrc == minGreen && !colour) {
        featureChange.setStyle($.stylecolour(minRed, featureChange.getId()));
        changeSrc = minRed;
        return;
    }
    if (changeSrc == minRed && colour) {
        featureChange.setStyle($.stylecolour(minGreen, featureChange.getId()));
        changeSrc = minGreen;
    }

}

$.stylecolour = function (colour, name) {
    var iconStyle = new ol.style.Style({
        image: new ol.style.Icon({
            src: colour
        }),
        text: new ol.style.Text({
            text: name,
            font: '15px Calibri,sans-serif',
            fill: new ol.style.Fill({ color: '#000000' }),
            textAlign: 'center',
            textBaseline: 'bottom',
            offsetY: -8,
        })
    });
    return iconStyle;
}


$.OnMoveChange = function () {
    map.on("pointermove", function (event) {

        var feature = map.forEachFeatureAtPixel(event.pixel, function (feature, layer) {

            return feature;
        });
        if (typeof (feature) == "undefined" || feature == null) {

            return;
        }

        //if (feature.get('features').length > 1) {
        //    return;
        //}
        //clearInterval(TimerHandle);
        alert("123");
    });
}

var cFeatures = new ol.Collection();
var fSource = new ol.source.Vector({ wrapX: false, features: cFeatures });
var draw = null;
var geomArray;
var dfeature;
$.addInteraction = function (color) {

    if (fVector == null) {
        fVector = new ol.layer.Vector({ source: fSource });
        map.addLayer(fVector);
    }
    geomArray = null;
    if (draw != null) {
        $.removeDraw();
    }
    var geometryFunction, maxPoints = 24;
    draw = new ol.interaction.Draw({
        source: fSource,
        type: "Polygon",
        geometryFunction: geometryFunction,
        maxPoints: maxPoints,
        minPoints: 2
    });
    draw.on('drawend', function (event) {
        dfeature = event.feature;
        var data = dfeature.getGeometry().getCoordinates();
        if (data.length < 1) {
            geomArray = null;
        }
        dfeature.setStyle(color == 1 ? $.FenceStyleYellow() : $.FenceStyleRed());
        geomArray = data[0];
        //geomArray.geoData = data[0];
        $.removeInteraction(draw);
    });
    map.addInteraction(draw);
}
var modify = null;
$.modifyInteraction = function () {


    modify = new ol.interaction.Modify({
        features: cFeatures,
        deleteCondition: function (event) {
            return ol.events.condition.doubleClick(event);
        },
        wrapX: false
    });
    modify.on('modifyend', function (event) {
        var features = event.features;
        if (features == null || features.length <= 0)
            return;
        var feature = features.getArray()[0];
        if (feature == null)
            return;
        var array = feature.getGeometry();
        if (array == null) {
            return;
        }
        var coord = array.getCoordinates();
        if (coord == null || array.length <= 0)
            return;
        var data = coord[0];
        if (data == null || data.length < 1) {
            geomArray = null;
        }
        geomArray = data;
        //geomArray.geoData = data;
        //geomArray.Id = feature.getId();
        //$.removeInteraction(draw);
    });
    map.addInteraction(modify);
}
var fSources = new ol.source.Vector({ features: cFeatures });
$.addLine = function () {

    if (fVector == null) {
        fVector = new ol.layer.Vector({ source: fSources });
        map.addLayer(fVector);
    }
    geomArray = null;
    if (draw != null) {
        $.removeDraw();
    }

    draw = new ol.interaction.Draw({
        source: fSources,
        type: 'MultiLineString',
        maxPoints: 200
    });
    draw.on('drawend', function (event) {
        dfeature = event.feature;
        var data = dfeature.getGeometry().getCoordinates();
        if (data.length < 1) {
            geomArray = null;
        }
        dfeature.setStyle($.FenceStyleRed());
        geomArray = data[0];
        //$.removeInteraction(draw);
    });
    map.addInteraction(draw);
    $.modifyInteraction();
}




$.removeDraw = function () {
    if (dfeature == null || fSource == null)
        return;
    fSource.removeFeature(dfeature);
    $.removeInteraction(draw);
    draw = null;
    geomArray = null;

}



$.removeInteraction = function () {
    if (draw == null)
        return;
    map.removeInteraction(draw);

}
var fVector;
$.DrawInitFence = function (arr, color) {
    var tran = [];
    for (var i = 0; i < arr.Point.length; i++) {
        tran[i] = ol.proj.transform([arr.Point[i].Longitude, arr.Point[i].Latitude], 'EPSG:4326', 'EPSG:3857');

    }
    //$.SetDot(arr.Point);
    var geom = new ol.geom.Polygon([tran]);
    var info = new ol.Feature(geom);
    info.setId(arr.FenceId);
    //info.setStyle(color == 1 ? $.FenceStyleYellow() : $.FenceStyleRed());

    fSource.addFeature(info);
    if (fVector != null) {
        map.removeLayer(fVector);
    }
    fVector = new ol.layer.Vector({ source: fSource, style: color == 1 ? $.FenceStyleYellow() : $.FenceStyleRed() });

    map.addLayer(fVector);
}

$.DrawInitFences = function (arr) {
    var tran = [];
    for (var i = 0; i < arr.Point.length; i++) {
        tran[i] = ol.proj.transform([arr.Point[i].Longitude, arr.Point[i].Latitude], 'EPSG:4326', 'EPSG:3857');

    }
    //$.SetDot(arr.Point);
    var geom = new ol.geom.MultiLineString([tran]); //LineString画出来的就没有点了
    var info = new ol.Feature(geom);
    info.setId(arr.ID);
    //info.setStyle(color == 1 ? $.FenceStyleYellow() : $.FenceStyleRed());

    fSource.addFeature(info);
    if (fVector != null) {
        map.removeLayer(fVector);
    }
    fVector = new ol.layer.Vector({ source: fSource, style: $.FenceStyleRed() });

    map.addLayer(fVector);
}

var sVector;
var fsSource = new ol.source.Vector({ wrapX: false });
$.DrawInitFenceStyle = function (arr, color) {
    var tran = [];
    for (var i = 0; i < arr.Point.length; i++) {
        tran[i] = ol.proj.transform([arr.Point[i].Longitude, arr.Point[i].Latitude], 'EPSG:4326', 'EPSG:3857');

    }
    //$.SetDot(arr.Point);
    var geom = new ol.geom.Polygon([tran]);
    var info = new ol.Feature(geom);
    info.setId(arr.FenceId);
    info.setStyle(color == 1 ? $.FenceStyleYellow() : $.FenceStyleRed());
    //info.setStyle(color == 1 ?
    //    new ol.style.Style({
    //        fill: new ol.style.Fill({
    //            color: 'rgba(255, 201, 14, 0.2)'
    //        }),
    //        stroke: new ol.style.Stroke({
    //            color: '#ffC90E',
    //            width: 2
    //        }),
    //        image: new ol.style.Circle({
    //            radius: 7,
    //            fill: new ol.style.Fill({
    //                color: '#ffcc33'
    //            })
    //        })
    //    }) : new ol.style.Style({
    //        fill: new ol.style.Fill({
    //            color: 'rgba(255,255,0,0.1)'
    //        }),
    //        stroke: new ol.style.Stroke({
    //            color: '#ff0033',
    //            width: 2
    //        }),
    //        image: new ol.style.Circle({
    //            radius: 7,
    //            fill: new ol.style.Fill({
    //                color: '#ffcc33'
    //            })
    //        })
    //    }));

    fsSource.addFeature(info);
    if (sVector != null) {
        map.removeLayer(sVector);
    }
    sVector = new ol.layer.Vector({ source: fsSource });

    map.addLayer(sVector);
}

$.DrawRemoveFenceSource = function (arr) {
    var sorue = fsSource.getFeatures();
    for (var i = 0; i < sorue.length; i++) {
        var info = sorue[i];
        if (info == null)
            continue;
        if (info.getId() === parseInt(arr)) {
            fsSource.removeFeature(info);
        }
    }
}


$.DrawRemoveFence = function (arr) {
    var sorue = fSource.getFeatures();
    for (var i = 0; i < sorue.length; i++) {
        var info = sorue[i];
        if (info == null)
            continue;
        if (info.getId() === parseInt(arr)) {
            fSource.removeFeature(info);
        }
    }
}
$.FenceStyleRed = function () {
    return [
        new ol.style.Style({
            fill: new ol.style.Fill({
                color: 'rgba(255,0,0,0.1)'
            }),
            stroke: new ol.style.Stroke({
                color: '#FF0000',
                width: 2
            }),
            image: new ol.style.Circle({
                radius: 7,
                fill: new ol.style.Fill({
                    color: '#ffcc33'
                })
            })
        }),
        new ol.style.Style({
            image: new ol.style.Circle({
                radius: 5,
                fill: new ol.style.Fill({
                    color: 'blue'
                })
            }),
            geometry: function (feature) {
                // return the coordinates of the first ring of the polygon
                var coordinates = feature.getGeometry().getCoordinates()[0];
                return new ol.geom.MultiPoint(coordinates);
            }
        })
    ];
}

$.FenceStyleYellow = function () {
    return [
        new ol.style.Style({
            fill: new ol.style.Fill({
                color: 'rgba(0,128,0,0.2)'
            }),
            stroke: new ol.style.Stroke({
                color: '#008000',
                width: 2
            }),
            image: new ol.style.Circle({
                radius: 7,
                fill: new ol.style.Fill({
                    color: '#ffcc33'
                })
            })
        }), new ol.style.Style({
            image: new ol.style.Circle({
                radius: 5,
                fill: new ol.style.Fill({
                    color: 'blue'
                })
            }),
            geometry: function (feature) {
                // return the coordinates of the first ring of the polygon
                var coordinates = feature.getGeometry().getCoordinates()[0];
                return new ol.geom.MultiPoint(coordinates);
            }
        })
    ];
}

$.TransMapLonLat = function (x, y) {
    return ol.proj.transform([x, y], 'EPSG:4326', 'EPSG:3857');
}

$.TransEPSGLonLat = function (x, y) {
    return ol.proj.transform([x, y], 'EPSG:3857', 'EPSG:4326');
}
$.TransEPSGLonLatCoordinate = function (coordinate) {
    return ol.proj.transform(coordinate, 'EPSG:3857', 'EPSG:4326');
}


