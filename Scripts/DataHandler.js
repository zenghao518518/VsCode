
$.VehicleLocationInit = function (json, icon) {
    for (var i = 0; i < json.length; i++) {
        var mountMark = new Object();
        if (json[i].PNo == "" || json[i].PNo == null)
            continue;
        if (json[i].Long == 0)
            json[i].Long = mapLon;
        if (json[i].Lat == 0)
            json[i].Lat = mapLat;

        mountMark.key = json[i].PNo;
        mountMark.IMEI = json[i].IMEI;
        mountMark.Time = json[i].Time;
        mountMark.Longitude = json[i].Long;
        mountMark.Latitude = json[i].Lat;
        mountMark.SP = json[i].SP;
        mountMark.UTime = json[i].UTime;
        mountMark.DR = json[i].DR;
        mountMark.ST = json[i].ST;

        mountMark.DName = json[i].DName;
        mountMark.DCo = json[i].DCo;
        mountMark.SH = json[i].SH;
        mountMark.HW = json[i].HW;
        mountMark.SW = json[i].SW;
        mountMark.PA = json[i].PA;
        mountMark.IMSI = json[i].IMSI;
        mountMark.PNo = json[i].PNo;
        mountMark.VCoID = json[i].VCoID;
        mountMark.Vt = json[i].Vt;
        mountMark.VCo = json[i].VCo;
        mountMark.LTime = json[i].LTime;
        mountMark.LIn = json[i].LIn;
        mountMark.LOu = json[i].LOu;
        mountMark.Login = json[i].Login;
        mountMark.Icon = trailerRun;
       
        var info = MemoryFun.get(mountMark.key);
        if (info == null) {
            MemoryFun.add(mountMark.key, mountMark);
            continue;
        }
        MemoryFun.entry[mountMark.key].IMEI = mountMark.IMEI;
        MemoryFun.entry[mountMark.key].Time = mountMark.Time;
        MemoryFun.entry[mountMark.key].Longitude = mountMark.Long;
        MemoryFun.entry[mountMark.key].Latitude = mountMark.Lat;
        MemoryFun.entry[mountMark.key].SP = mountMark.SP;
        MemoryFun.entry[mountMark.key].UTime = mountMark.UTime;
        MemoryFun.entry[mountMark.key].DR = mountMark.DR;
        MemoryFun.entry[mountMark.key].ST = mountMark.ST;
        MemoryFun.entry[mountMark.key].DName = mountMark.DName;
        MemoryFun.entry[mountMark.key].DCo = mountMark.DCo;
        MemoryFun.entry[mountMark.key].SH = mountMark.SH;
        MemoryFun.entry[mountMark.key].HW = mountMark.HW;
        MemoryFun.entry[mountMark.key].SW = mountMark.SW;
        MemoryFun.entry[mountMark.key].PA = mountMark.PA;
        MemoryFun.entry[mountMark.key].IMSI = mountMark.IMSI;
        MemoryFun.entry[mountMark.key].PNo = mountMark.PNo;
        MemoryFun.entry[mountMark.key].VCoID = mountMark.VCoID;
        MemoryFun.entry[mountMark.key].Vt = mountMark.Vt;
        MemoryFun.entry[mountMark.key].VCo = mountMark.VCo;
        MemoryFun.entry[mountMark.key].LTime = mountMark.LTime;
        MemoryFun.entry[mountMark.key].LIn = mountMark.LIn;
        MemoryFun.entry[mountMark.key].LOu = mountMark.LOu;
        MemoryFun.entry[mountMark.key].Login = mountMark.Login;
        MemoryFun.entry[mountMark.key].Icon = trailerRun;
    }
};


//---15秒获取APIMountMark的位置
$.MountInit = function (json, icon) {
    for (var i = 0; i < json.length; i++) {
        var mountMark = new Object();
        if (json[i].Al == "" || json[i].Al == null)
            continue;
        mountMark.Longitude = json[i].Lo;
        mountMark.Latitude = json[i].La;
        mountMark.Speed = json[i].Sp;
        mountMark.key = json[i].Al;
        if (json[i].R == "" || json[i].R == null)
            continue;
        else {
            mountMark.Time = (json[i].R);
        }
        mountMark.Id = json[i].Id;
        mountMark.Status = json[i].St;
        mountMark.VehicleType = json[i].Vt;
        mountMark.Reserved = json[i].Re;
        mountMark.Reserved1 = json[i].R1;
        mountMark.Reserved2 = json[i].R2;
        mountMark.MountType = json[i].Mt;
        mountMark.IsDisplay = json[i].D;
        mountMark.Voltage1 = json[i].V1;
        mountMark.Voltage2 = json[i].V2;
        mountMark.Gate = json[i].G;
        mountMark.GateDistance = json[i].Gd;
        mountMark.DriverName = json[i].Dn;
        mountMark.CompanyID = json[i].Ci;
        mountMark.VehicleTypeName = json[i].Vtn;
        mountMark.VehicleStatus = json[i].Vs;
        mountMark.ReportVehicle = json[i].V;
        mountMark.LoginOrOutStatus = json[i].Ls;
        mountMark.DwellTime = json[i].Dt;
        mountMark.IsAiport = json[i].Ia;
        mountMark.LastTime = json[i].Lt;
        mountMark.ActivateTime = json[i].At;
        mountMark.Associate = json[i].Ac;
        mountMark.Count = json[i].Co;
        if (mountMark.MountType == 1) {
            mountMark.Icon = trailerRun;
        } else if (mountMark.MountType == 2) {
            if (json[i].St == 1) {
                //未关联
                mountMark.Icon = taxiGreen;
            } else if (json[i].St == 2) {
                //关联
                mountMark.Icon = minRed;
            } else if (json[i].St == 3) {
                //转运
                mountMark.Icon = taxiBlue;
            } else if (json[i].St == 4) {
                //损坏
                mountMark.Icon = taxiRed;
            }
        }
        var info = MemoryFun.get(mountMark.key);
        if (info == null) {
            MemoryFun.add(mountMark.key, mountMark);
            continue;
        }
        MemoryFun.entry[mountMark.key].Id = mountMark.Id;
        MemoryFun.entry[mountMark.key].Longitude = mountMark.Longitude;
        MemoryFun.entry[mountMark.key].Latitude = mountMark.Latitude;
        MemoryFun.entry[mountMark.key].Speed = mountMark.Speed;
        MemoryFun.entry[mountMark.key].Time = mountMark.Time;
        MemoryFun.entry[mountMark.key].Status = mountMark.Status;
        MemoryFun.entry[mountMark.key].Icon = mountMark.Icon;
        MemoryFun.entry[mountMark.key].VehicleType = mountMark.VehicleType;
        MemoryFun.entry[mountMark.key].Reserved = mountMark.Reserved;
        MemoryFun.entry[mountMark.key].Reserved1 = mountMark.Reserved1;
        MemoryFun.entry[mountMark.key].Reserved2 = mountMark.Reserved2;
        MemoryFun.entry[mountMark.key].MountType = mountMark.MountType;
        MemoryFun.entry[mountMark.key].IsDisplay = mountMark.IsDisplay;
        MemoryFun.entry[mountMark.key].Voltage1 = mountMark.Voltage1;
        MemoryFun.entry[mountMark.key].Voltage2 = mountMark.Voltage2;
        MemoryFun.entry[mountMark.key].DriverName = mountMark.DriverName;
        MemoryFun.entry[mountMark.key].CompanyID = mountMark.CompanyID;
        MemoryFun.entry[mountMark.key].Gate = mountMark.Gate;
        MemoryFun.entry[mountMark.key].GateDistance = mountMark.GateDistance;
        MemoryFun.entry[mountMark.key].VehicleTypeName = mountMark.VehicleTypeName;
        MemoryFun.entry[mountMark.key].VehicleStatus = mountMark.VehicleStatus;
        MemoryFun.entry[mountMark.key].VehicleStatusName = mountMark.VehicleStatusName;
        MemoryFun.entry[mountMark.key].ReportVehicle = mountMark.ReportVehicle;
        MemoryFun.entry[mountMark.key].LoginOrOutStatus = mountMark.LoginOrOutStatus;
        MemoryFun.entry[mountMark.key].DwellTime = mountMark.DwellTime;
        MemoryFun.entry[mountMark.key].IsAiport = mountMark.IsAiport;
        MemoryFun.entry[mountMark.key].LastTime = mountMark.LastTime;
        MemoryFun.entry[mountMark.key].ActivateTime = mountMark.ActivateTime;
        MemoryFun.entry[mountMark.key].Associate = mountMark.Associate;
        MemoryFun.entry[mountMark.key].Count = mountMark.Count;
        continue;
    }
};
//---15秒获取APIMountMark的位置
$.TagInit = function (json, icon) {
    for (var i = 0; i < json.length; i++) {
        var mountMark = new Object();
        mountMark.Icon = blue;  //设置图片
        mountMark.Latitude = json[i].Lat;
        mountMark.Longitude = json[i].Lon;
        mountMark.Power = json[i].Power;
        mountMark.Signal = json[i].Signal;
        mountMark.key = json[i].TagMac;
        mountMark.No = json[i].TagMacNo;
        var info = MemoryFun.get(mountMark.key);
        if (info == null) {
            MemoryFun.add(mountMark.key, mountMark);
            continue;
        }
        MemoryFun.entry[mountMark.key].Longitude = mountMark.Longitude;
        MemoryFun.entry[mountMark.key].Latitude = mountMark.Latitude;
        MemoryFun.entry[mountMark.key].Power = mountMark.Power;
        MemoryFun.entry[mountMark.key].Signal = mountMark.Signal;
        MemoryFun.entry[mountMark.key].Icon = mountMark.Icon;
        MemoryFun.entry[mountMark.key].No = mountMark.No;
        continue;
    }
};

//---15秒获取fixReader的位置
$.FixReaderInit = function (json, icon) {
    for (var i = 0; i < json.length; i++) {
        var mountMark = new Object();
        if (json[i].Al == "" || json[i].Al == null)
            continue;
        mountMark.Longitude = json[i].Lo;
        mountMark.Latitude = json[i].La;
        mountMark.Speed = json[i].Sp;
        mountMark.key = json[i].Al;
        if (json[i].R == "" || json[i].R == null)
            continue;
        else {
            mountMark.Time = (json[i].R);
        }
        mountMark.Id = json[i].Id;
        mountMark.Status = json[i].St;
        mountMark.VehicleType = json[i].Vt;
        mountMark.Reserved = json[i].Re;
        mountMark.Reserved1 = json[i].R1;
        mountMark.Reserved2 = json[i].R2;
        mountMark.MountType = json[i].Mt;
        mountMark.IsDisplay = json[i].D;
        mountMark.Voltage1 = json[i].V1;
        mountMark.Voltage2 = json[i].V2;
        mountMark.Gate = json[i].G;
        mountMark.GateDistance = json[i].Gd;
        mountMark.DriverName = json[i].Dn;
        mountMark.CompanyID = json[i].Ci;
        mountMark.VehicleTypeName = json[i].Vtn;
        mountMark.VehicleStatus = json[i].Vs;
        mountMark.ReportVehicle = json[i].V;
        mountMark.LoginOrOutStatus = json[i].Ls;
        mountMark.DwellTime = json[i].Dt;
        mountMark.IsAiport = json[i].Ia;
        mountMark.LastTime = json[i].Lt;
        mountMark.ActivateTime = json[i].At;
        mountMark.Associate = json[i].Ac;
        mountMark.Count = json[i].Co;
        if (mountMark.Count > 0) {
            mountMark.Icon = fixReader;
        } else {
            mountMark.Icon = fixReaderRed;
        }
        var info = MemoryFun.get(mountMark.key);
        if (info == null) {
            MemoryFun.add(mountMark.key, mountMark);
            continue;
        }
        MemoryFun.entry[mountMark.key].Id = mountMark.Id;
        MemoryFun.entry[mountMark.key].Longitude = mountMark.Longitude;
        MemoryFun.entry[mountMark.key].Latitude = mountMark.Latitude;
        MemoryFun.entry[mountMark.key].Speed = mountMark.Speed;
        MemoryFun.entry[mountMark.key].Time = mountMark.Time;
        MemoryFun.entry[mountMark.key].Status = mountMark.Status;
        MemoryFun.entry[mountMark.key].Icon = mountMark.Icon;
        MemoryFun.entry[mountMark.key].VehicleType = mountMark.VehicleType;
        MemoryFun.entry[mountMark.key].Reserved = mountMark.Reserved;
        MemoryFun.entry[mountMark.key].Reserved1 = mountMark.Reserved1;
        MemoryFun.entry[mountMark.key].Reserved2 = mountMark.Reserved2;
        MemoryFun.entry[mountMark.key].MountType = mountMark.MountType;
        MemoryFun.entry[mountMark.key].IsDisplay = mountMark.IsDisplay;
        MemoryFun.entry[mountMark.key].Voltage1 = mountMark.Voltage1;
        MemoryFun.entry[mountMark.key].Voltage2 = mountMark.Voltage2;
        MemoryFun.entry[mountMark.key].DriverName = mountMark.DriverName;
        MemoryFun.entry[mountMark.key].CompanyID = mountMark.CompanyID;
        MemoryFun.entry[mountMark.key].Gate = mountMark.Gate;
        MemoryFun.entry[mountMark.key].GateDistance = mountMark.GateDistance;
        MemoryFun.entry[mountMark.key].VehicleTypeName = mountMark.VehicleTypeName;
        MemoryFun.entry[mountMark.key].VehicleStatus = mountMark.VehicleStatus;
        MemoryFun.entry[mountMark.key].VehicleStatusName = mountMark.VehicleStatusName;
        MemoryFun.entry[mountMark.key].ReportVehicle = mountMark.ReportVehicle;
        MemoryFun.entry[mountMark.key].LoginOrOutStatus = mountMark.LoginOrOutStatus;
        MemoryFun.entry[mountMark.key].DwellTime = mountMark.DwellTime;
        MemoryFun.entry[mountMark.key].IsAiport = mountMark.IsAiport;
        MemoryFun.entry[mountMark.key].LastTime = mountMark.LastTime;
        MemoryFun.entry[mountMark.key].ActivateTime = mountMark.ActivateTime;
        MemoryFun.entry[mountMark.key].Associate = mountMark.Associate;
        MemoryFun.entry[mountMark.key].Count = mountMark.Count;
        continue;
    }
};
$.TableDrawn = function () {
    var input = $("#Alias").val().toLowerCase();
    var sBelongTo = $("#BelongTo").val();
    var stype = $("#MountType").val();
    var sSubordinate = $("#Subordinate").val();
    var array = MemoryFun.values();
    if (input == "" && sBelongTo == 0 && stype == 0 && sSubordinate == 0) {
        $.AddMaskFor(array);
        return;
    }
    var index = 0;
    var nTable = [];
    for (var i = 0; i < array.length; i++) {
        var info = array[i];
        if (info == null)
            continue;
        var key = info.key.toLowerCase();
        var belongToId = info.BelongToId;
        var type = info.MountTypeID;
        var sbsubordinateId = info.SubordinateId;
        if (input != "" && key.indexOf(input) < 0) {
            continue;
        }
        if (belongToId != sBelongTo && sBelongTo != 0) {
            continue;
        }
        if (sbsubordinateId != sSubordinate && sSubordinate != 0) {
            continue;
        }
        if (type != stype && stype != 0) {
            continue;
        }
        nTable[index] = info;
        index++;
    }
    $.AddMaskFor(nTable);
};

$.TableDrawTag = function () {
    var input = $("#Alias").val().toLowerCase();
    var array = MemoryFun.values();
    if (input == "") {
        $.AddMaskForTag(array);
        return;
    }
    var index = 0;
    var nTable = [];
    for (var i = 0; i < array.length; i++) {
        var info = array[i];
        if (info == null)
            continue;
        var key = info.No.toLowerCase();
        if (input != "" && key.indexOf(input) < 0) {
            continue;
        }
        nTable[index] = info;
        index++;
    }
    $.AddMaskForTag(nTable);
};
$.AddMaskFor = function (array) {
    var igniteTotal = 0;
    var flameoutTotal = 0;
    $("#Ignition").empty();
    $("#Flameout").empty();
    for (var j = 0; j < array.length; j++) {
        var info = array[j];
        if (info == null)
            continue;
        var ignite = (info.Status & 1);//是否点火
        if (ignite == 1) {
            if (igniteTotal == 100) {
                //$("#Ignition").append("<a href='#'><img src='~/Image/empty_Small.ico'/>SHD1230</a>");
                $("#Ignition").append("<button class='btn btn-sm btn-default' type='button' id='cNumber' value='.....'><i class='glyphicon glyphicon-map-marker ' aria-hidden='true'></i>.....</button>  ");
            } else if (igniteTotal < 100) {
                //$("#Ignition").append("<a href='#' ><img src='../Image/empty_Small.ico' class=''/>SHD1230</a>");
                $("#Ignition").append("<button class='btn btn-sm btn-default' type='button' id='cNumber' value='" + info.key + "'><i class='glyphicon glyphicon-map-marker ' aria-hidden='true'></i>" + info.key + "</button>  ");
            }
            igniteTotal++;
        } else {
            if (flameoutTotal == 100) {
                $("#Ignition").append("<button class='btn btn-sm btn-danger' type='button' id='cNumber' value='.....'><i class='glyphicon glyphicon-map-marker ' aria-hidden='true'></i>.....</button>  ");
            } else if (flameoutTotal < 100) {

                $("#Flameout").append("<button class='btn btn-sm btn-danger' type='button' id='cNumber' value='" + info.key + "'><i class='glyphicon glyphicon-map-marker ' aria-hidden='true'></i>" + info.key + "</button>  ");
            }
            flameoutTotal++;
        }
    }
    $("#IgnitionBadge").text(igniteTotal);
    $("#FlameoutBadge").text(flameoutTotal);
}
$.AddMaskForTag = function (array) {
    var igniteTotal = 0;
    $("#IgnitionGun").empty();

    for (var j = 0; j < array.length; j++) {
        var info = array[j];
        if (info == null)
            continue;
        if (igniteTotal == 100) {
            //$("#Ignition").append("<a href='#'><img src='~/Image/empty_Small.ico'/>SHD1230</a>");
            $("#IgnitionGun").append("<button class='btn btn-sm btn-success' type='button' id='cNumber' value='.....'><i class='glyphicon glyphicon-map-marker ' aria-hidden='true'></i>.....</button>  ");
        } else if (igniteTotal < 100) {
            //$("#Ignition").append("<a href='#' ><img src='../Image/empty_Small.ico' class=''/>SHD1230</a>");
            $("#IgnitionGun").append("<button class='btn btn-sm btn-success' type='button' id='cNumber' value='" + info.key + "'><i class='glyphicon glyphicon-map-marker ' aria-hidden='true'></i>" + info.No + "</button>  ");
        }
        igniteTotal++;
    }
    $("#IgnitionBadge").text(igniteTotal);
}

$.TrackWriteDrawn = function (data, device) {
    var mTable = [];
    var arraytable = [];
    var vehicleInfo = new Object();

    for (var i = 0; i < data.length; i++) {
        arraytable[i] = $.TransMapLonLat(data[i].Longitude, data[i].Latitude);
        var vehicle = new Object();
        vehicle.Longitude = data[i].Longitude;
        vehicle.Latitude = data[i].Latitude;
        vehicle.Alias = data[i].Alias;
        vehicle.Speed = data[i].Speed;
        vehicle.NowTime = data[i].NowTime;
        vehicle.Status = data[i].Status;
        vehicle.Direction = data[i].Direction;
        mTable[i] = vehicle;
        if (i != 0) { continue; }
        vehicleInfo.Latitude = data[i].Latitude;
        vehicleInfo.Longitude = data[i].Longitude;
        vehicleInfo.Name = data[i].Alias;
        vehicleInfo.Status = data[i].Status;
    }

    $.SetDirection();
    $.SetCircular(arraytable);
    if (device == 2) {
        $.SetLocation(vehicleInfo.Longitude, vehicleInfo.Latitude, vehicleInfo.Name, false);
    } else {
        $.SetLocation(vehicleInfo.Longitude, vehicleInfo.Latitude, vehicleInfo.Name, true);
    }
    $.SwitchView(vehicleInfo.Longitude, vehicleInfo.Latitude, 12);
    PopupInfo();
    $.OnClickEventTrack();

    return mTable;
}

function in_array(stringToSearch, arrayToSearch) {
    for (s = 0; s < arrayToSearch.length; s++) {
        thisEntry = arrayToSearch[s].toString();
        if (thisEntry == stringToSearch) {
            return true;
        }
    }
    return false;
}
///-----------GUN
$.TableDrawGun = function () {
    var companySelect = $("#companySelect option:selected").val();
    var status = $("#vehicleStatus option:selected").val();
    var alias = $("#Alias").val().toLowerCase();
    var mdt = $("#MDT").val();


    var array = MemoryFun.values();
    var checkVal = [];
    $("input[name='chk_list']:checkbox").each(function () {
        if ($(this).prop('checked')) {
            checkVal.push($(this).val());
        }
    });
    if (status == "0" && companySelect == "0" && alias == null && mdt == null && checkVal.length == array.length) {
        //$.AddMaskForGun(array);
        $.DrawLayer(array);
        return;
    }
    var index = 0;
    var nTable = [];
    for (var i = 0; i < array.length; i++) {
        var info = array[i];
        if (info == null)
            continue;

        var key = info.key.toLowerCase();
        var companyData = info.VCoID;   
        var statuData = info.ST;
        var mdtData = info.IMEI;

        if (companySelect != "0" && companySelect != companyData) {
            continue;
        }
     
        if (status != "0" && status != statuData) {
            continue;
        }
        if (alias == null && key.indexOf(alias) < 0) {
            continue;;
        }
        if (mdt == null && mdt != mdtData) {
            continue;
        }
        if (!in_array(info.key, checkVal)) {
            continue;
        }
        nTable[index] = info;
        index++;
    }
  
    // $.AddMaskForGun(nTable);
    $.DrawLayer(nTable);
};

//$.AddMaskForGun = function (array) {
//    var igniteTotal = 0;
//    var maintenanceTotal = 0;
//    $("#IgnitionGun").empty();
//    $("#FlatbedTruck").empty();
//    for (var j = 0; j < array.length; j++) {
//        var info = array[j];
//        if (info == null)
//            continue;
//        if (info.Color <= 1) {
//            if (igniteTotal == 100) {
//                if (info.Icon == trailerStop)
//                    $("#IgnitionGun").append("<button class='btn btn-sm btn-danger' type='button' id='cNumber' value='.....'><i class='glyphicon glyphicon-map-marker ' aria-hidden='true'></i>.....</button>  ");
//                else if (info.Icon == trailerStill)
//                    $("#IgnitionGun").append("<button class='btn btn-sm btn-primary' type='button' id='cNumber' value='.....'><i class='glyphicon glyphicon-map-marker ' aria-hidden='true'></i>.....</button>  ");
//                else if (info.Icon == trailerStart)
//                    $("#IgnitionGun").append("<button class='btn btn-sm btn-warning' type='button' id='cNumber' value='.....'><i class='glyphicon glyphicon-map-marker ' aria-hidden='true'></i>.....</button>  ");
//                else if (info.Icon == trailerRun)
//                    $("#IgnitionGun").append("<button class='btn btn-sm btn-success' type='button' id='cNumber' value='.....'><i class='glyphicon glyphicon-map-marker ' aria-hidden='true'></i>.....</button>  ");
//            } else if (igniteTotal < 100) {
//                if (info.Icon == trailerStop)
//                    $("#IgnitionGun").append("<button class='btn btn-sm btn-danger' type='button' id='cNumber' value='" + info.key + "'><i class='glyphicon glyphicon-map-marker ' aria-hidden='true'></i>" + info.key + "</button>  ");
//                else if (info.Icon == trailerStill)
//                    $("#IgnitionGun").append("<button class='btn btn-sm btn-primary' type='button' id='cNumber' value='" + info.key + "'><i class='glyphicon glyphicon-map-marker ' aria-hidden='true'></i>" + info.key + "</button>  ");
//                else if (info.Icon == trailerStart)
//                    $("#IgnitionGun").append("<button class='btn btn-sm btn-warning' type='button' id='cNumber' value='" + info.key + "'><i class='glyphicon glyphicon-map-marker ' aria-hidden='true'></i>" + info.key + "</button>  ");
//                else if (info.Icon == trailerRun)
//                    $("#IgnitionGun").append("<button class='btn btn-sm btn-success' type='button' id='cNumber' value='" + info.key + "'><i class='glyphicon glyphicon-map-marker ' aria-hidden='true'></i>" + info.key + "</button>  ");

//            }
//            igniteTotal++;
//        } else if (info.Color == 2) {//5
//            if (maintenanceTotal == 100) {
//                $("#FlatbedTruck").append("<button class='btn btn-sm btn-info' type='button' id='cNumber' value='.....'><i class='glyphicon glyphicon-map-marker ' aria-hidden='true'></i>.....</button>  ");
//            } else if (maintenanceTotal < 100) {
//                $("#FlatbedTruck").append("<button class='btn btn-sm btn-info' type='button' id='cNumber' value='" + info.key + "'><i class='glyphicon glyphicon-map-marker ' aria-hidden='true'></i>" + info.key + "</button>  ");
//            }
//            maintenanceTotal++;
//        }
//    }
//    $("#IgnitionBadge").text(igniteTotal);
//    $("#FlatbedTruckBadge").text(maintenanceTotal);
//}
