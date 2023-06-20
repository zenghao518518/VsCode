
$.checkdUseBindInfo = function (useData, input) {
    var reulst = [];
    var index = 0;
    for (var i = 0; i < useData.length; i++) {
        var name = useData[i].Name.toUpperCase();
        if (input != "" && name.indexOf(input) < 0) {
            continue;
        }
        reulst[index] = useData[i];
        index++;
    }
    var total = parseInt(reulst.length / 4);
    var yu = reulst.length - (total * 4);

    for (var j = 0; j < total; j++) {
        var str = "";
        str += "<div class='col-lg-12  col-md-12 col-sm-12'>";
        for (var x = 0; x < 4; x++) {
            var obj = reulst[x + (j * 4)];
            str += "<div class='col-lg-3 col-md-3 col-sm-3'>";
            str += "<label class='radio-inline' id='radios" + obj.ID + "'>";
            str += "<input type='radio' name='inlineRadioOptions'   value='" + obj.ID + "'>" + obj.Name;
            str += "</label>";
            str += "</div>";
        }
        str += '</div>';
        $("#checkData").append(str);
    }
    var st = "";
    if (yu <= 0)
        return;
    st += "<div class='col-lg-12  col-md-12 col-sm-12'>";
    for (var l = 0; l < yu; l++) {
        var obj1 = reulst[(total * 4) + l];
        st += "<div class='col-lg-3 col-md-3 col-sm-3'>";
        st += "<label class='radio-inline' id='radios" + obj1.ID + "'>";
        st += "<input type='radio' name='inlineRadioOptions' value='" + obj1.ID + "'>" + obj1.Name;
        st += "</label>";
        st += "</div>";
    }
    st += "</div>";
    $("#checkData").append(st);
}

$.checkdImei = function (data, input) {
    var reulst = [];
    var index = 0;
    for (var i = 0; i < data.length; i++) {
        var carno = data[i].IMEI;
        if (input != "" && carno.indexOf(input) < 0) {
            continue;
        }
        reulst[index] = data[i];
        index++;
    }

    var total = parseInt(reulst.length / 2);
    var yu = reulst.length - (total * 2);

    for (var j = 0; j < total; j++) {
        var str = "";
        str += "<div class='col-lg-12  col-md-12 col-sm-12'>";
        for (var x = 0; x < 2; x++) {
            var obj = reulst[x + (j * 2)];//0 1 2 3 4
            str += "<div class='col-lg-6 col-md-6 col-sm-6'>";
            str += "<label class='radio-inline' id='radios" + obj.IMEI + "'>";
            //str += "<input type='radio' name='inlineRadioOptions'   value='" + obj.IMEI + "'>" + obj.MDTID + "(" + obj.IMEI+")";
            str += "<input type='radio' name='inlineRadioOptions'   value='" + obj.IMEI + "'>" + obj.IMEI;
            str += "</label>";
            str += "</div>";
        }
        str += '</div>';
        $("#checkData").append(str);
    }
    var st = "";
    if (yu <= 0)
        return;
    st += "<div class='col-lg-12  col-md-12 col-sm-12'>";
    for (var l = 0; l < yu; l++) {
        var obj1 = reulst[(total * 2) + l];
        st += "<div class='col-lg-6 col-md-6 col-sm-6'>";
        st += "<label class='radio-inline' id='radios" + obj1.IMEI + "'>";
        //st += "<input type='radio' name='inlineRadioOptions' value='" + obj1.IMEI + "'>" + obj1.MDTID + "(" + obj1.IMEI + ")";
        st += "<input type='radio' name='inlineRadioOptions' value='" + obj1.IMEI + "'>" + obj1.IMEI;
        st += "</label>";
        st += "</div>";
    }
    st += "</div>";
    $("#checkData").append(st);
}

$.checkdDeviceID = function (data, input) {
    var reulst = [];
    var index = 0;
    for (var i = 0; i < data.length; i++) {
        var carno = data[i].DeviceID.toUpperCase();
        if (input != "" && carno.indexOf(input) < 0) {
            continue;
        }
        reulst[index] = data[i];
        index++;
    }

    var total = parseInt(reulst.length / 2);
    var yu = reulst.length - (total * 2);

    for (var j = 0; j < total; j++) {
        var str = "";
        str += "<div class='col-lg-12  col-md-12 col-sm-12'>";
        for (var x = 0; x < 2; x++) {
            var obj = reulst[x + (j * 2)];//0 1 2 3 4
            str += "<div class='col-lg-6 col-md-6 col-sm-6'>";
            str += "<input type='radio' name='inlineRadioOptions'   value='" + obj.Id + "'><span>" + obj.DeviceID + "</span>(" + obj.IMEI + ")";
            str += "</label>";
            str += "</div>";
        }
        str += '</div>';
        $("#checkData").append(str);
    }
    var st = "";
    if (yu <= 0)
        return;
    st += "<div class='col-lg-12  col-md-12 col-sm-12'>";
    for (var l = 0; l < yu; l++) {
        var obj1 = reulst[(total * 2) + l];
        st += "<div class='col-lg-6 col-md-6 col-sm-6'>";
        st += "<input type='radio' name='inlineRadioOptions'   value='" + obj1.Id + "'><span>" + obj1.DeviceID + "</span>(" + obj1.IMEI + ")";
        st += "</label>";
        st += "</div>";
    }
    st += "</div>";
    $("#checkData").append(st);
}

$.checkdDriver = function (data, input) {
    var reulst = [];
    var index = 0;
    for (var i = 0; i < data.length; i++) {
        var carno = data[i].Name.toUpperCase();
        if (input != "" && carno.indexOf(input) < 0) {
            continue;
        }
        reulst[index] = data[i];
        index++;
    }

    var total = parseInt(reulst.length / 2);
    var yu = reulst.length - (total * 2);

    for (var j = 0; j < total; j++) {
        var str = "";
        str += "<div class='col-lg-12  col-md-12 col-sm-12'>";
        for (var x = 0; x < 2; x++) {
            var obj = reulst[x + (j * 2)];//0 1 2 3 4
            str += "<div class='col-lg-6 col-md-6 col-sm-6'>";
            str += "<label class='radio-inline' id='radios" + obj.Name + "'>";
            //str += "<input type='radio' name='inlineRadioOptions'   value='" + obj.ID + "'>" + obj.DriverName + "(" + obj.ID + ")";
            str += "<input type='radio' name='inlineRadioOptions'   value='" + obj.Name + '/' + obj.ID + "'>" + obj.Name;
            str += "</label>";
            str += "</div>";
        }
        str += '</div>';
        $("#checkData").append(str);
    }
    var st = "";
    if (yu <= 0)
        return;
    st += "<div class='col-lg-12  col-md-12 col-sm-12'>";
    for (var l = 0; l < yu; l++) {
        var obj1 = reulst[(total * 2) + l];
        st += "<div class='col-lg-6 col-md-6 col-sm-6'>";
        st += "<label class='radio-inline' id='radios" + obj1.Name + "'>";
        //str += "<input type='radio' name='inlineRadioOptions'   value='" + obj.ID + "'>" + obj.DriverName + "(" + obj.ID + ")";
        st += "<input type='radio' name='inlineRadioOptions'   value='" + obj1.Name + '/' + obj1.ID + "'>" + obj1.Name;
        st += "</label>";
        st += "</div>";
    }
    st += "</div>";
    $("#checkData").append(st);
}

$.checkdLine = function (data, input) {
    var reulst = [];
    var index = 0;
    for (var i = 0; i < data.length; i++) {
        var carno = data[i].Name.toUpperCase();
        if (input != "" && carno.indexOf(input) < 0) {
            continue;
        }
        reulst[index] = data[i];
        index++;
    }

    var total = parseInt(reulst.length / 2);
    var yu = reulst.length - (total * 2);

    for (var j = 0; j < total; j++) {
        var str = "";
        str += "<div class='col-lg-12  col-md-12 col-sm-12'>";
        for (var x = 0; x < 2; x++) {
            var obj = reulst[x + (j * 2)];//0 1 2 3 4
            str += "<div class='col-lg-6 col-md-6 col-sm-6'>";
            str += "<label class='radio-inline' id='radios" + obj.Name + "'>";
            //str += "<input type='radio' name='inlineRadioOptions'   value='" + obj.ID + "'>" + obj.DriverName + "(" + obj.ID + ")";
            str += "<input type='radio' name='inlineRadioOptions'   value='" + obj.Name + '/' + obj.ID + "'>" + obj.Name;
            str += "</label>";
            str += "</div>";
        }
        str += '</div>';
        $("#checkData").append(str);
    }
    var st = "";
    if (yu <= 0)
        return;
    st += "<div class='col-lg-12  col-md-12 col-sm-12'>";
    for (var l = 0; l < yu; l++) {
        var obj1 = reulst[(total * 2) + l];
        st += "<div class='col-lg-6 col-md-6 col-sm-6'>";
        st += "<label class='radio-inline' id='radios" + obj1.Name + "'>";
        //str += "<input type='radio' name='inlineRadioOptions'   value='" + obj.ID + "'>" + obj.DriverName + "(" + obj.ID + ")";
        st += "<input type='radio' name='inlineRadioOptions'   value='" + obj1.Name+'/'+obj1.ID + "'>" + obj1.Name;
        st += "</label>";
        st += "</div>";
    }
    st += "</div>";
    $("#checkData").append(st);
}
$.checkdTrailer = function (data, input) {
    var reulst = [];
    var index = 0;
    for (var i = 0; i < data.length; i++) {
        var carno = data[i].Name.toUpperCase();
        if (input != "" && carno.indexOf(input) < 0) {
            continue;
        }
        reulst[index] = data[i];
        index++;
    }

    var total = parseInt(reulst.length / 2);
    var yu = reulst.length - (total * 2);

    for (var j = 0; j < total; j++) {
        var str = "";
        str += "<div class='col-lg-12  col-md-12 col-sm-12'>";
        for (var x = 0; x < 2; x++) {
            var obj = reulst[x + (j * 2)];//0 1 2 3 4
            str += "<div class='col-lg-6 col-md-6 col-sm-6'>";
            str += "<label class='radio-inline' id='radios" + obj.Name + "'>";
            //str += "<input type='radio' name='inlineRadioOptions'   value='" + obj.ID + "'>" + obj.DriverName + "(" + obj.ID + ")";
            str += "<input type='radio' name='inlineRadioOptions'   value='" + obj.Name + '/' + obj.ID + "'>" + obj.Name;
            str += "</label>";
            str += "</div>";
        }
        str += '</div>';
        $("#checkData").append(str);
    }
    var st = "";
    if (yu <= 0)
        return;
    st += "<div class='col-lg-12  col-md-12 col-sm-12'>";
    for (var l = 0; l < yu; l++) {
        var obj1 = reulst[(total * 2) + l];
        st += "<div class='col-lg-6 col-md-6 col-sm-6'>";
        st += "<label class='radio-inline' id='radios" + obj1.Name + "'>";
        //str += "<input type='radio' name='inlineRadioOptions'   value='" + obj.ID + "'>" + obj.DriverName + "(" + obj.ID + ")";
        st += "<input type='radio' name='inlineRadioOptions'   value='" + obj1.Name + '/' + obj1.ID + "'>" + obj1.Name;
        st += "</label>";
        st += "</div>";
    }
    st += "</div>";
    $("#checkData").append(st);
}

$.checkdImeiAndCarNo = function (data, input) {
    var reulst = [];
    var index = 0;
    for (var i = 0; i < data.length; i++) {
        var carno = data[i].Alias;
        if (input != "" && carno.indexOf(input) < 0) {
            continue;
        }
        reulst[index] = data[i];
        index++;
    }

    var total = parseInt(reulst.length / 2);
    var yu = reulst.length - (total * 2);

    for (var j = 0; j < total; j++) {
        var str = "";
        str += "<div class='col-lg-12  col-md-12 col-sm-12'>";
        for (var x = 0; x < 2; x++) {
            var obj = reulst[x + (j * 2)];//0 1 2 3 4
            str += "<div class='col-lg-6 col-md-6 col-sm-6'>";
            str += "<label class='radio-inline' id='radios" + obj.Imei + "'>";
            str += "<input type='radio' name='inlineRadioOptions'   value='" + obj.Alias + '/' + obj.Imei + "'>" + obj.Alias + "(" + obj.Imei + ")";
            str += "</label>";
            str += "</div>";
        }
        str += '</div>';
        $("#checkData").append(str);
    }
    var st = "";
    if (yu <= 0)
        return;
    st += "<div class='col-lg-12  col-md-12 col-sm-12'>";
    for (var l = 0; l < yu; l++) {
        var obj1 = reulst[(total * 2) + l];
        st += "<div class='col-lg-6 col-md-6 col-sm-6'>";
        st += "<label class='radio-inline' id='radios" + obj1.Imei + "'>";
        st += "<input type='radio' name='inlineRadioOptions'value='" + obj1.Alias + '/' + obj1.Imei + "'>" + obj1.Alias + "(" + obj1.Imei + ")";;
        st += "</label>";
        st += "</div>";
    }
    st += "</div>";
    $("#checkData").append(st);
}