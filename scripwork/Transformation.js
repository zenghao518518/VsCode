
//----转换UTC时间
$.TransformUtc = function (time) {

    var transformTime = new Date(time);

    var timePoorUtc = transformTime.valueOf() + (transformTime.getTimezoneOffset() * 60 * 1000);

    return $.TransformFormat(timePoorUtc);
}
//转当前时间
$.TransformFormat = function (timeFormat) {
    var transformTime = new Date(timeFormat);

    var year = transformTime.getFullYear();
    var tMonth = transformTime.getMonth() + 1;

    var month = tMonth < 10 ? '0' + tMonth : tMonth;
    var day = transformTime.getDate() < 10 ? '0' + transformTime.getDate() : transformTime.getDate();
    var hour = transformTime.getHours() < 10 ? '0' + transformTime.getHours() : transformTime.getHours();
    var minute = transformTime.getMinutes() < 10 ? '0' + transformTime.getMinutes() : transformTime.getMinutes();
    var second = transformTime.getSeconds() < 10 ? '0' + transformTime.getSeconds() : transformTime.getSeconds();
    return year + '/' + month + '/' + day + ' ' + hour + ':' + minute + ':' + second;
}


$.TransformCurrent = function (time) {
    var branch = time.split(' ');
    var first = branch[0].split('-');
    var last = branch[1].split(':');
    if (last.length < 3) {
        last[2] = "00";
    }
    var timeUtc = new Date(first[0] + "/" + first[1] + "/" + first[2] + " " + last[0] + ":" + last[1] + ":" + last[2]);

    var offset = timeUtc.getTimezoneOffset().toString();
    var timeCurrent;
    if (offset.indexOf("-") < 0) {
        timeCurrent = timeUtc.valueOf() + (timeUtc.getTimezoneOffset() * 60 * 1000);
    } else {
        timeCurrent = timeUtc.valueOf() + (-(timeUtc.getTimezoneOffset() * 60 * 1000));
    }
    return $.TransformFormat(timeCurrent);
}

$.TransformCurrentEx = function (time) {
    var branch = time.split(' ');
    var first = branch[0].split('-');
    var last = branch[1].split(':');
    if (last.length < 3) {
        last[2] = "00";
    }
    var timeUtc = new Date(first[0] + "/" + first[1] + "/" + first[2] + " " + last[0] + ":" + last[1] + ":" + last[2]);

    var offset = timeUtc.getTimezoneOffset().toString();
    var timeCurrent;
    if (offset.indexOf("-") < 0) {
        timeCurrent = timeUtc.valueOf() + (timeUtc.getTimezoneOffset() * 60 * 1000);
    } else {
        timeCurrent = timeUtc.valueOf() + (-(timeUtc.getTimezoneOffset() * 60 * 1000));
    }
    return $.TransformFormat(timeCurrent);
}

// 对Date的扩展，将 Date 转化为指定格式的String   
// 月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符，   
// 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)   
// 例子：   
// (new Date()).Format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423   
// (new Date()).Format("yyyy-M-d h:m:s.S")      ==> 2006-7-2 8:9:4.18   
Date.prototype.Format = function (fmt) { //author: meizz   
    var o = {
        "M+": this.getMonth() + 1,                 //月份   
        "d+": this.getDate(),                    //日   
        "h+": this.getHours(),                   //小时   
        "m+": this.getMinutes(),                 //分   
        "s+": this.getSeconds(),                 //秒   
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度   
        "S": this.getMilliseconds()             //毫秒   
    };
    if (/(y+)/.test(fmt))
        fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt))
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}

$.FromMSJsonString = function (value) {

    if (value == null)
        return "";
    var d = eval('new ' + (value.replace(/\//g, '')));
    return $.TransformCurrent(d.Format("yyyy-MM-dd hh:mm:ss"));

}
$.FromMSJson = function (value) {

    if (value == null)
        return "";
    var d = eval('new ' + (value.replace(/\//g, '')));
    return $.TransformCurrent(d.Format("MM-dd-yyyy hh:mm:ss"));

}

$.FromMSJsonStringn = function (value) {

    if (value == null)
        return "";
    var d = eval('new ' + (value.replace(/\//g, '')));
    return d.Format("yyyy/MM/dd");

}

$.DayFrom = function (time) {
    var timePoor = new Date(time + " 00:00:00");

    var oDate2 = new Date();

    var nTime = timePoor.getTime() - ((1000 * 60 * 60 * 24) * 31);

    return oDate2.getTime() >= nTime;
}


//将UTC时间改成本地时区时间
$.TransformCurrents = function (time) {
    //time = time.replace('T', ' ');
    if(time==undefined) {
        return "";
    };
    var branch = time.split(' ');
    var first = branch[0].split('-');
    if (branch.length<=1) {
        return null;
    }
    var last = branch[1].split(':');
    
    if (last.length < 3) {
        last[2] = "00";
    }
    var timeUtc = new Date(first[0] + "/" + first[1] + "/" + first[2] + " " + last[0] + ":" + last[1] + ":" + parseInt(last[2]));

    var offset = timeUtc.getTimezoneOffset().toString();
    var timeCurrent;
    if (offset.indexOf("-") < 0) {
        timeCurrent = timeUtc.valueOf() + (timeUtc.getTimezoneOffset() * 60 * 1000);
    } else {
        timeCurrent = timeUtc.valueOf() + (-(timeUtc.getTimezoneOffset() * 60 * 1000));
    }
    return $.TransformFormat(timeCurrent);
}

$.Transformttime = function (time) {
    var branch = time.split(' ');
    var first = branch[0].split('-');
    var last = branch[1].split(':');
    if (last.length < 3) {
        last[2] = "00";
    }
    var timePoor = new Date(first[0] + "/" + first[1] + "/" + first[2] + " " + last[0] + ":" + last[1] + ":" + last[2]);

    var timePoorUtc = timePoor.valueOf() + (timePoor.getTimezoneOffset() * 60 * 1000);

    return timePoorUtc;
}

$.getNowFormatDate = function () {
    var date = new Date();
    var seperator1 = "-";
    var seperator2 = ":";
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    var currentdate = date.getFullYear() + month  + strDate + date.getHours() + date.getMinutes()+date.getSeconds();
    return currentdate;
}

$.TransformMonth = function (month) {
    switch (month) {
        case 1:
            return "Jan";
        case 2:
            return "Feb";
        case 3:
            return "Mar";
        case 4:
            return "Apr";
        case 5:
            return "May";
        case 6:
            return "Jun";
        case 7:
            return "Jul";
        case 8:
            return "Aug";
        case 9:
            return "Sep";
        case "01":
            return "Jan";
        case "02":
            return "Feb";
        case "03":
            return "Mar";
        case "04":
            return "Apr";
        case "05":
            return "May";
        case "06":
            return "Jun";
        case "07":
            return "Jul";
        case "08":
            return "Aug";
        case "09":
            return "Sep";
        case 10:
            return "Oct";
        case 11:
            return "Nov";
        case 12:
            return "Dec";
        default:
    }
};
//转换年月
$.FromMSJsonStringDateddmmyyyy = function (value) {
    if (value == null || value == "")
        return "";
    var transformTime = new Date(value);

    var year = transformTime.getFullYear();
    var tMonth = transformTime.getMonth() + 1;
    var month = $.TransformMonth(tMonth < 10 ? '0' + tMonth : tMonth);
    var day = transformTime.getDate() < 10 ? '0' + transformTime.getDate() : transformTime.getDate();
    return day + " " + month + " " + year;
}

//转换月日
$.FromMSJsonStringDateddmm = function (value)
{
    if (value == null || value == "")
        return "";
    var transformTime = new Date(value);

    var year = transformTime.getFullYear();
    var tMonth = transformTime.getMonth() + 1;
    var month = $.TransformMonth(tMonth < 10 ? '0' + tMonth : tMonth);
    var day = transformTime.getDate() < 10 ? '0' + transformTime.getDate() : transformTime.getDate();
    return day + " " + month;
}
//z转换年月日时分秒
$.TransformFormatNoTimehhmmss = function (timeFormat) {
    if (timeFormat == null || timeFormat == "") {
        return null;
    }
    var transformTime = new Date(timeFormat);

    var year = transformTime.getFullYear();
    var tMonth = transformTime.getMonth() + 1;
    var month = $.TransformMonth(tMonth < 10 ? '0' + tMonth : tMonth);
    var day = transformTime.getDate() < 10 ? '0' + transformTime.getDate() : transformTime.getDate();
    var hour = transformTime.getHours() < 10 ? '0' + transformTime.getHours() : transformTime.getHours();
    var minute = transformTime.getMinutes() < 10 ? '0' + transformTime.getMinutes() : transformTime.getMinutes();
    var second = transformTime.getSeconds() < 10 ? '0' + transformTime.getSeconds() : transformTime.getSeconds();
    return day + ' ' + month + ' ' + year + ' ' + hour + ':' + minute + ':' + second;
}
//z转换年月日时分
$.TransformFormatNoTimehhmm = function (timeFormat) {
    var transformTime = new Date(timeFormat);

    var year = transformTime.getFullYear();
    var tMonth = transformTime.getMonth() + 1;
    var month = $.TransformMonth(tMonth < 10 ? '0' + tMonth : tMonth);
    var day = transformTime.getDate() < 10 ? '0' + transformTime.getDate() : transformTime.getDate();
    var hour = transformTime.getHours() < 10 ? '0' + transformTime.getHours() : transformTime.getHours();
    var minute = transformTime.getMinutes() < 10 ? '0' + transformTime.getMinutes() : transformTime.getMinutes();
    //var second = transformTime.getSeconds() < 10 ? '0' + transformTime.getSeconds() : transformTime.getSeconds();
    return day + ' ' + month + ' ' + year + ' ' + hour + ':' + minute;
}

$.Transformttimes = function (time)
{
    var timePoor = new Date(time);


    var timePoorUtc = timePoor.valueOf() + (timePoor.getTimezoneOffset() * 60 * 1000);

    return timePoorUtc;
}
//z转换时分秒
$.TransformFormathhmmss = function (timeFormat) {
    if (timeFormat == null || timeFormat == "") {
        return null;
    }
    var transformTime = new Date(timeFormat);
    var hour = transformTime.getHours() < 10 ? '0' + transformTime.getHours() : transformTime.getHours();
    var minute = transformTime.getMinutes() < 10 ? '0' + transformTime.getMinutes() : transformTime.getMinutes();
    var second = transformTime.getSeconds() < 10 ? '0' + transformTime.getSeconds() : transformTime.getSeconds();
    return  hour + ':' + minute + ':' + second;
}

//z转换时分秒
$.TransformFormathh = function (timeFormat) {
    if (timeFormat == null || timeFormat == "") {
        return null;
    }
    var transformTime = new Date(timeFormat);
    var hour = transformTime.getHours() < 10 ? '0' + transformTime.getHours() : transformTime.getHours();
    return hour;
}

//z转换年月日时分秒(年只有后面两位)
$.TransformFormatNoTimeddMMMYYhhmmss = function (timeFormat) {
    if (timeFormat == null || timeFormat == "") {
        return null;
    }
    var transformTime = new Date(timeFormat);

    var year = transformTime.getYear();
    var tMonth = transformTime.getMonth() + 1;
    var month = $.TransformMonth(tMonth < 10 ? '0' + tMonth : tMonth);
    var day = transformTime.getDate() < 10 ? '0' + transformTime.getDate() : transformTime.getDate();
    var hour = transformTime.getHours() < 10 ? '0' + transformTime.getHours() : transformTime.getHours();
    var minute = transformTime.getMinutes() < 10 ? '0' + transformTime.getMinutes() : transformTime.getMinutes();
    var second = transformTime.getSeconds() < 10 ? '0' + transformTime.getSeconds() : transformTime.getSeconds();
    return day + ' ' + month + ' ' + year + ' ' + hour + ':' + minute + ':' + second;
}

// 计算两个时间差 dateBegin 开始时间
$.TimeDifference = function (startTime,endTime) {
    //如果时间格式是正确的，那下面这一步转化时间格式就可以不用了
    var dateEnd = new Date(endTime);//获取当前时间
    var dateBegin = new Date(startTime);
    var dateDiff = dateEnd.getTime() - dateBegin.getTime();//时间差的毫秒数
    var dayDiff = Math.floor(dateDiff / (24 * 3600 * 1000));//计算出相差天数
    var leave1 = dateDiff % (24 * 3600 * 1000);  //计算天数后剩余的毫秒数
    var hours = Math.floor(leave1 / (3600 * 1000));//计算出小时数
    //计算相差分钟数
    var leave2 = leave1 % (3600 * 1000);  //计算小时数后剩余的毫秒数
    var minutes = Math.floor(leave2 / (60 * 1000));//计算相差分钟数
    //计算相差秒数
    var leave3 = leave2 % (60 * 1000);   //计算分钟数后剩余的毫秒数
    var seconds = Math.round(leave3 / 1000);
    var timeFn = dayDiff + " day " + hours + ":" + minutes + ":" + seconds;
    if (dayDiff == 0) {
        timeFn =hours + ":" + minutes + ":" + seconds;
    }
    return timeFn;
}