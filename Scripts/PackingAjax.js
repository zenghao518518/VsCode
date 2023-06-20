$.AjaxFun = function (url, param, callback, auth) {

    $.ajaxSetup({ cache: false });
    $.ajax({
        url: url, data: JSON.stringify(param), contentType: "application/json;charset=utf-8", dataType: "json",
        type: 'post',

        headers: {
            Authorization: "Basic " + auth
        },
        success: function (data) {
            if (typeof (data) == "undefined" || data == "") {
                return;
            }
            if (typeof (data.MsgType) != "undefined" && data.MsgType == 3) {
                window.location.href = '../Login/Index';
                return;
            }
            callback(data);
        },
        error: function (data) { }
    });
}

$.AjaxFunSysn = function (url, param, callback, auth) {

    $.ajaxSetup({ cache: false });
    $.ajax({
        url: url, data: JSON.stringify(param), contentType: "application/json;charset=utf-8", dataType: "json",
        type: 'post',
        async: false,
        headers: {
            Authorization: "Basic " + auth
        },
        success: function (data) {
            if (typeof (data) == "undefined" || data == "") {
                return;
            }
            if (typeof (data.MsgType) != "undefined" && data.MsgType == 3) {
                window.location.href = '../Login/Index';
                return;
            }
            callback(data);
        },
        error: function (data) { }
    });
}

$.AjaxFunUiLoad = function (url, param, callback, auth) {
    $.loadingfun({ target: "body", animate: true });
    $.ajaxSetup({ cache: false });
    $.ajax({
        url: url, data: JSON.stringify(param), contentType: "application/json;charset=utf-8", dataType: "json",
        type: 'post',
        headers: {
            Authorization: "Basic " + auth
        },
        success: function (data) {
            if (typeof (data) == "undefined" || data == "") {
                return;
            }
            if (typeof (data.MsgType) != "undefined" && data.MsgType == 3) {
                window.location.href = '../Login/Index';
                return;
            } if (data.MsgType == "NoPermission") {
                $.AlertInfo("error", "No Permission", "Message");
                $.loadingfunremove("body");
                return;
            }
            callback(data);
            $.loadingfunremove("body");
        },
        error: function (data) {
            $.loadingfunremove("body");
        }
    });
}
$.AjaxFunFormUiLoad = function (url, formData, callback, auth) {
    //jQuery.support.cors=true;IE 必须加上
    $.loadingfun({ target: "body", animate: true });
    $.ajaxSetup({ cache: false });
    $.ajax({
        url: url,
        method: 'POST',
        data: formData,
        contentType: false, // 注意这里应设为false
        processData: false,
        cache: false,
        headers: {
            Authorization: "Basic " + auth
        },
        success: function (data) {
            if (typeof (data) == "undefined" || data == "") {
                return;
            }
            if (typeof (data.MsgType) != "undefined" && data.MsgType == 3) {
                window.location.href = '../Login/Index';
                return;
            }
            callback(data);
            $.loadingfunremove("body");
        },
        error: function (data) {
            $.loadingfunremove("body");
        }
    });
}

$.AjaxFunAuth = function (url, param, callback, auth) {
    //jQuery.support.cors=true;IE 必须加上
    $.ajaxSetup({ cache: false });
    $.ajax({
        url: url, data: JSON.stringify(param), contentType: "application/json;charset=utf-8", dataType: "json",
        type: 'post',
        headers: {
            Authorization: "Basic " + auth
        },
        success: function (data) {
            if (typeof (data) == "undefined" || data == "") {
                return;
            }
            if (typeof (data.MsgType) != "undefined" && data.MsgType == 3) {
                window.location.href = '../Login/Index';
                return;
            }
            callback(data);
        },
        error: function (data) { }
    });
}

$.AjaxFunNotAuth = function (url, param, callback) {
    //jQuery.support.cors=true;IE 必须加上
    $.ajaxSetup({ cache: false });
    $.ajax({
        url: url, data: JSON.stringify(param), contentType: "application/json;charset=utf-8", dataType: "json",
        type: 'get',
        success: function (data) {
            if (typeof (data) == "undefined" || data == "") {
                return;
            }
            if (typeof (data.MsgType) != "undefined" && data.MsgType == 3) {
                window.location.href = '../Login/Index';
                return;
            }
            callback(data);
        },
        error: function (data) { }
    });
}
$.AjaxFunNotAuthPost = function (url, param, callback) {
    //jQuery.support.cors=true;IE 必须加上
    $.ajaxSetup({ cache: false });
    $.ajax({
        url: url, data: JSON.stringify(param), contentType: "application/json;charset=utf-8", dataType: "json",
        type: 'post',
        success: function (data) {
            if (typeof (data) == "undefined" || data == "") {
                return;
            }
            if (typeof (data.MsgType) != "undefined" && data.MsgType == 3) {
                window.location.href = '../Login/Index';
                return;
            }
            callback(data);
        },
        error: function (data) { }
    });
}
$.PagingTableFunNoPage = function (tableId, url, field, dataField, auth) {
    var table = $(tableId).dataTable({
        "oLanguage": {
            "sProcessing": "<img src='/img/TLoad.gif'/>",
            "sLengthMenu": "show _MENU_ entries ",
            "sZeroRecords": "No result found.",
            "sInfo": "_START_ To _END_ Record——Total Number Of Records _TOTAL_ ",
            "sInfoEmpty": "Record Number 00",
            "sInfoFiltered": "(Total Number of Records _MAX_  )",
            "sInfoPostFix": "",
            "sSearch": "Search",
            "sUrl": "",
            "oPaginate": {
                "sFirst": "First",
                "sPrevious": " Previous ",
                "sNext": " Next ",
                "sLast": " Last  "
            }
        },
        "bJQueryUI": false,
        "bPaginate": false, // 分页按钮
        "bFilter": true, // 搜索栏
        "bLengthChange": true, // 每行显示记录数
        "aLengthMenu": [
            [5, 10, 15, 20, 50, -1],
            [5, 10, 15, 20, 50, "all"] // change per page values here
        ],
        "iDisplayLength": 10,   //默认显示的记录数 
        "bSort": true, // 排序  
        "bInfo": true, // Showing 1 to 10 of 23 entries 总记录数没也显示多少等信息
        "bWidth": true,
        "aoColumnDefs": [{ "bSortable": false, "aTargets": [0, columns] }],
        "aaSorting": [1, "desc"],
        "bScrollCollapse": true,
        "sPaginationType": "full_numbers", // 分页，一共两种样式 另一种为two_button // 是datatables默认        
        "bServerSide": false,
        "bProcessing": false,
        "bStateSave": false,
        "bSortCellsTop": true,
        "bDestroy": true,
        "sAjaxSource": url,
        "responsive": true,
        "fnServerData": function (sSource, data, fnCallback) {
            $.ajax({
                "type": 'post',
                contentType: "application/json;charset=utf-8",
                "url": sSource,
                "dataType": "json",
                "data": JSON.stringify($.extend({ aoData: data[3].value, sEcho: data[0].value }, field())),
                headers: {
                    Authorization: "Basic " + auth
                },
                "success": function (resp) {
                    if (typeof (resp) == "undefined" || resp == "") {
                        return;
                    }
                    if (typeof (resp.MsgType) != "undefined" && resp.MsgType == 3) {
                        window.location.href = '../Login/Index';
                        return;
                    }
                    fnCallback(resp.Data);
                }
            });

        },
        "aoColumns": dataField
    });
    return table;
}

$.TableFun = function (tableId, url, json, dataField, columns, auth) {
    var div = $(tableId).parent();
    var table = $(tableId).dataTable({
        "oLanguage": {
            "sProcessing": "<img src='/img/TLoad.gif'/>",
            "sLengthMenu": "show _MENU_ entries ",
            "sZeroRecords": "No result found.",
            "sInfo": "_START_ To _END_ Record——Total Number Of Records _TOTAL_ ",
            "sInfoEmpty": "Record Number 00",
            "sInfoFiltered": "(Total Number of Records _MAX_  )",
            "sInfoPostFix": "",
            "sSearch": "Search",
            "sUrl": "",
            "oPaginate": {
                "sFirst": "First",
                "sPrevious": " Previous ",
                "sNext": " Next ",
                "sLast": " Last  "
            }
        },
        "bJQueryUI": false,
        "bPaginate": true, // 分页按钮
        "bFilter": true, // 搜索栏
        "bLengthChange": true, // 每行显示记录数
        "aLengthMenu": [
            [5, 10, 15, 20, 50],
            [5, 10, 15, 20, 50] // change per page values here
        ],
        "iDisplayLength": 10,   //默认显示的记录数 
        "bSort": true, // 排序  
        "bInfo": true, // Showing 1 to 10 of 23 entries 总记录数没也显示多少等信息
        "bWidth": true,
        "aoColumnDefs": [{ "bSortable": false, "aTargets": columns }],
        "aaSorting": [1, "desc"],
        "bScrollCollapse": true,
        "sPaginationType": "full_numbers", // 分页，一共两种样式 另一种为two_button // 是datatables默认        
        "bServerSide": false,
        "bProcessing": false,
        "bStateSave": false,
        "bSortCellsTop": true,
        "bDestroy": true,
        "sAjaxSource": url,
        "responsive": true,

        "buttons": [
            {
                extend: 'print', className: 'btn dark btn-circle btn-outline', exportOptions: {
                    columns: ':visible',
                    format: {
                        body: function (data, row, column, node) {
                            var reg = /<\/?.+?>/g;
                            var filter;
                            if (reg.test(data)) {
                                filter = data.replace(reg, "");
                            } else {
                                filter = data;
                            }
                            if (column == 0)
                                return "";
                            var start = filter.indexOf("$(");
                            var end = filter.indexOf(")");
                            if (start >= 0 && end >= 0) {
                                return filter.replace('$(', '-').replace(')', '').replace("<br>", '');
                            }
                            return filter.replace('$', '').replace("<br>", '');
                        }
                    }
                }
            },
            {
                extend: 'pdf', className: 'btn yellow btn-circle btn-outline ', exportOptions: { modifier: { page: 'current' } }, orientation: "landscape"
            },
            {
                extend: 'excel', className: 'btn green btn-circle btn-outline ', exportOptions: {
                    columns: ':visible',
                    format: {
                        body: function (data, row, column, node) {
                            var reg = /<\/?.+?>/g;
                            var filter;
                            if (reg.test(data)) {
                                filter = data.replace(reg, "");
                            } else {
                                filter = data;
                            }
                            if (column == 0)
                                return "";
                            var start = filter.indexOf("$(");
                            var end = filter.indexOf(")");
                            if (start >= 0 && end >= 0) {
                                return filter.replace('$(', '-').replace(')', '').replace("<br>", '');
                            }
                            return filter.replace('$', '').replace("<br>", '');
                        }
                    }
                }
            },
            {
                extend: 'csv', className: 'btn purple btn-circle btn-outline ', exportOptions: {
                    columns: ':visible',
                    format: {
                        body: function (data, row, column, node) {
                            var reg = /<\/?.+?>/g;
                            var filter;
                            if (reg.test(data)) {
                                filter = data.replace(reg, "");
                            } else {
                                filter = data;
                            }
                            if (column == 0)
                                return "";
                            var start = filter.indexOf("$(");
                            var end = filter.indexOf(")");
                            if (start >= 0 && end >= 0) {
                                return filter.replace('$(', '-').replace(')', '').replace("<br>", '');
                            }
                            return filter.replace('$', '').replace("<br>", '');
                        }
                    }
                }
            }
        ],
        "dom": "<'row' <'col-md-12'B>><'row'<'col-md-6 col-sm-12'l><'col-md-6 col-sm-12'f>r><'table-scrollable't><'row'<'col-md-5 col-sm-12'i><'col-md-7 col-sm-12'p>>",
        "fnServerData": function (sSource, data, fnCallback) {

            $.loadingfun({ target: div, animate: true });
            $.ajax({
                "type": 'post',
                contentType: "application/json;charset=utf-8",
                "url": sSource,
                "dataType": "json",
                "data": JSON.stringify($.extend({}, json())),
                headers: {
                    Authorization: "Basic " + auth
                },
                "success": function (resp) {
                    $.loadingfunremove(div);
                    if (typeof (resp) == "undefined" || resp == "") {
                        return;
                    }

                    fnCallback(resp.Data);
                }
            });

        },

        "aoColumns": dataField
    });
    return table;
}

$.TableFunTaxiShareNoSearch = function (tableId, url, json, dataField, columns, exportColumns, auth) {
    var div = $(tableId).parent();
    var table = $(tableId).dataTable({
        "oLanguage": {
            "sProcessing": "<img src='/img/TLoad.gif'/>",
            "sLengthMenu": "show _MENU_ entries ",
            "sZeroRecords": "No result found.",
            "sInfo": "_START_ To _END_ Record——Total Number Of Records _TOTAL_ ",
            "sInfoEmpty": "Record Number 00",
            "sInfoFiltered": "(Total Number of Records _MAX_  )",
            "sInfoPostFix": "",
            "sSearch": "Search",
            "sUrl": "",
            "oPaginate": {
                "sFirst": "First",
                "sPrevious": " Previous ",
                "sNext": " Next ",
                "sLast": " Last  "
            }
        },
        "initComplete": function () {

            if ($("#uCompanyID").val() != -1) {
                $(".hiddenCol").css("display", "none");
            }
        },

        "fnDrawCallback": function () {
            if ($("#uCompanyID").val() != -1) {
                $(".hiddenCol").css("display", "none");
            }
        },
        "bJQueryUI": false,
        "bPaginate": true, // 分页按钮
        "bFilter": false, // 搜索栏
        "bLengthChange": true, // 每行显示记录数
        "aLengthMenu": [
            [5, 10, 15, 20, 50, -1],
            [5, 10, 15, 20, 50, "all"] // change per page values here
        ],
        "iDisplayLength": 10,   //默认显示的记录数 
        "bSort": true, // 排序  
        "bInfo": true, // Showing 1 to 10 of 23 entries 总记录数没也显示多少等信息
        "bWidth": true,
        "aoColumnDefs": [{ "bSortable": false, "aTargets": columns }],
        "aaSorting": [1, "desc"],
        "bScrollCollapse": true,
        "sPaginationType": "full_numbers", // 分页，一共两种样式 另一种为two_button // 是datatables默认        
        "bServerSide": false,
        "bProcessing": false,
        "bStateSave": false,
        "bSortCellsTop": true,
        "bDestroy": true,
        "sAjaxSource": url,
        "responsive": true,
        "dom": "",
        "fnServerData": function (sSource, data, fnCallback) {

            $.loadingfun({ target: div, animate: true });
            $.ajax({
                "type": 'post',
                contentType: "application/json;charset=utf-8",
                "url": sSource,
                "dataType": "json",
                "data": JSON.stringify($.extend({}, json())),
                headers: {
                    Authorization: "Basic " + auth
                },
                "success": function (resp) {
                    $.loadingfunremove(div);
                    if (typeof (resp) == "undefined" || resp == "") {
                        return;
                    }

                    if (resp.MsgType == 2) {
                        return;
                    }
                    fnCallback(resp.Data);
                }
            });
        },
        "aoColumns": dataField
    });
    return table;
}
$.TableFunTaxiShare = function (tableId, url, json, dataField, columns, exportColumns, auth) {
    var div = $(tableId).parent();
    var table = $(tableId).dataTable({
        "oLanguage": {
            "sProcessing": "<img src='/img/TLoad.gif'/>",
            "sLengthMenu": "show _MENU_ entries ",
            "sZeroRecords": "No result found.",
            "sInfo": "_START_ To _END_ Record——Total Number Of Records _TOTAL_ ",
            "sInfoEmpty": "Record Number 00",
            "sInfoFiltered": "(Total Number of Records _MAX_  )",
            "sInfoPostFix": "",
            "sSearch": "Search",
            "sUrl": "",
            "oPaginate": {
                "sFirst": "First",
                "sPrevious": " Previous ",
                "sNext": " Next ",
                "sLast": " Last  "
            }
        },
        "initComplete": function () {

            if ($("#uCompanyID").val() != -1) {
                $(".hiddenCol").css("display", "none");
            }
        },

        "fnDrawCallback": function () {
            if ($("#uCompanyID").val() != -1) {
                $(".hiddenCol").css("display", "none");
            }
        },
        "bJQueryUI": false,
        "bPaginate": true, // 分页按钮
        "bFilter": true, // 搜索栏
        "bLengthChange": true, // 每行显示记录数
        "aLengthMenu": [
            [5, 10, 15, 20, 50, -1],
            [5, 10, 15, 20, 50, "all"] // change per page values here
        ],
        "iDisplayLength": 10,   //默认显示的记录数 
        "bSort": true, // 排序  
        "bInfo": true, // Showing 1 to 10 of 23 entries 总记录数没也显示多少等信息
        "bWidth": true,
        "aoColumnDefs": [{ "bSortable": false, "aTargets": columns }],
        "aaSorting": [1, "desc"],
        "bScrollCollapse": true,
        "sPaginationType": "full_numbers", // 分页，一共两种样式 另一种为two_button // 是datatables默认        
        "bServerSide": false,
        "bProcessing": false,
        "bStateSave": false,
        "bSortCellsTop": true,
        "bDestroy": true,
        "sAjaxSource": url,
        "responsive": true,
        "buttons": [
            {
                extend: 'print', className: 'btn dark btn-circle btn-outline', exportOptions: {
                    //columns: ':visible',
                    //format: {
                    //    body: function (data, row, column, node)
                    //    {
                    //        var reg = /<\/?.+?>/g;
                    //        var filter;
                    //        if (reg.test(data))
                    //        {
                    //            filter = data.replace(reg, "");
                    //        } else
                    //        {
                    //            filter = data;
                    //        }
                    //        if (column == 0) 
                    //            return "";
                    //        var start = filter.indexOf("$(");
                    //        var end = filter.indexOf(")");
                    //        if (start >= 0 && end >= 0)
                    //        {
                    //            return filter.replace('$(', '-').replace(')', '').replace("<br>", '');
                    //        }
                    //        return filter.replace('$', '').replace("<br>", '');
                    //    }
                    //},
                    columns: exportColumns
                }
            },
            {
                extend: 'pdf', className: 'btn yellow btn-circle btn-outline ', exportOptions: {
                    columns: exportColumns,
                    modifier: { page: 'current' }
                }, orientation: "landscape"
            },
            {
                extend: 'excel', className: 'btn green btn-circle btn-outline ', exportOptions: {
                    //columns: ':visible',
                    //format: {
                    //    body: function (data, row, column, node)
                    //    {
                    //        var reg = /<\/?.+?>/g;
                    //        var filter;
                    //        if (reg.test(data))
                    //        {
                    //            filter = data.replace(reg, "");
                    //        } else
                    //        {
                    //            filter = data;
                    //        }
                    //        if (column == 0)
                    //            return "";
                    //        var start = filter.indexOf("$(");
                    //        var end = filter.indexOf(")");
                    //        if (start >= 0 && end >= 0)
                    //        {
                    //            return filter.replace('$(', '-').replace(')', '').replace("<br>", '');
                    //        }
                    //        return filter.replace('$', '').replace("<br>", '');
                    //    }
                    //}
                    columns: exportColumns
                }
            },
            {
                extend: 'csv', className: 'btn purple btn-circle btn-outline ', exportOptions: {
                    //columns: ':visible',
                    //format: {
                    //    body: function (data, row, column, node)
                    //    {
                    //        var reg = /<\/?.+?>/g;
                    //        var filter;
                    //        if (reg.test(data))
                    //        {
                    //            filter = data.replace(reg, "");
                    //        } else
                    //        {
                    //            filter = data;
                    //        }
                    //        if (column == 0)
                    //            return "";
                    //        var start = filter.indexOf("$(");
                    //        var end = filter.indexOf(")");
                    //        if (start >= 0 && end >= 0)
                    //        {
                    //            return filter.replace('$(', '-').replace(')', '').replace("<br>", '');
                    //        }
                    //        return filter.replace('$', '').replace("<br>", '');
                    //    }
                    //}
                    columns: exportColumns
                }
            }
        ],
        "dom": "<'row' <'col-md-12'B>><'row'<'col-md-6 col-sm-12'l><'col-md-6 col-sm-12'f>r><'table-scrollable't><'row'<'col-md-5 col-sm-12'i><'col-md-7 col-sm-12'p>>",
        "fnServerData": function (sSource, data, fnCallback) {

            $.loadingfun({ target: div, animate: true });
            $.ajax({
                "type": 'post',
                contentType: "application/json;charset=utf-8",
                "url": sSource,
                "dataType": "json",
                "data": JSON.stringify($.extend({}, json())),
                headers: {
                    Authorization: "Basic " + auth
                },
                "success": function (resp) {
                    $.loadingfunremove(div);
                    if (typeof (resp) == "undefined" || resp == "") {
                        return;
                    }
                    //if (typeof (resp.MsgType) != "undefined" && resp.MsgType == "TokenError")
                    //{
                    //    window.location.href = "../BackEnd/Index";
                    //    return;
                    //}
                    //if (resp.MsgType == "NoPermission")
                    //{
                    //    $.AlertInfo("error", "No Permission", "Message");
                    //    return;
                    //}
                    if (resp.MsgType == 2) {
                        return;
                    }
                    fnCallback(resp.Data);
                }
            });

        },
        //"footerCallback": function() {
        //    var api = this.api();
        //    api.columns().indexes().flatten().each( function ( i ) {
        //        var column = api.column( i );
        //        var select = $('<select><option value=""></option></select>')
        //            .appendTo( $(column.footer()).empty() )
        //            .on( 'change', function () {
        //                var val = $.fn.dataTable.util.escapeRegex(
        //                    $(this).val()
        //                );
        //                column
        //                    .search( val ? '^'+val+'$' : '', true, false )
        //                    .draw();
        //            } );
        //        column.data().unique().sort().each( function ( d, j ) {
        //            select.append( '<option value="'+d+'">'+d+'</option>' )
        //        } );
        //    } );
        //},
        "aoColumns": dataField
    });
    return table;
}

$.TableTripReport = function (tableId, url, json, dataField, columns, exportColumns,hideColumns, auth) {
    var div = $(tableId).parent();
    var table = $(tableId).dataTable({
        "oLanguage": {
            "sProcessing": "<img src='/img/TLoad.gif'/>",
            "sLengthMenu": "show _MENU_ entries ",
            "sZeroRecords": "No result found.",
            "sInfo": "_START_ To _END_ Record——Total Number Of Records _TOTAL_ ",
            "sInfoEmpty": "Record Number 00",
            "sInfoFiltered": "(Total Number of Records _MAX_  )",
            "sInfoPostFix": "",
            "sSearch": "Search",
            "sUrl": "",
            "oPaginate": {
                "sFirst": "First",
                "sPrevious": " Previous ",
                "sNext": " Next ",
                "sLast": " Last  "
            }
        },
        "initComplete": function () {

            if ($("#uCompanyID").val() != -1) {
                $(".hiddenCol").css("display", "none");
            }
        },

        "fnDrawCallback": function () {
            if ($("#uCompanyID").val() != -1) {
                $(".hiddenCol").css("display", "none");
            }
        },
        "bJQueryUI": false,
        "bPaginate": true, // 分页按钮
        "bFilter": true, // 搜索栏
        "bLengthChange": true, // 每行显示记录数
        "aLengthMenu": [
            [5, 10, 15, 20, 50, -1],
            [5, 10, 15, 20, 50, "all"] // change per page values here
        ],
        "iDisplayLength": 10,   //默认显示的记录数 
        "bSort": true, // 排序  
        "bInfo": true, // Showing 1 to 10 of 23 entries 总记录数没也显示多少等信息
        "bWidth": true,
        "aoColumnDefs": [{ "bSortable": false, "aTargets": columns }, { "bVisible": false, "aTargets": hideColumns }],
        "aaSorting": [1, "desc"],
        "bScrollCollapse": true,
        "sPaginationType": "full_numbers", // 分页，一共两种样式 另一种为two_button // 是datatables默认        
        "bServerSide": false,
        "bProcessing": false,
        "bStateSave": false,
        "bSortCellsTop": true,
        "bDestroy": true,
        "sAjaxSource": url,
        "responsive": true,
        "buttons": [
            {
                extend: 'print', className: 'btn dark btn-circle btn-outline', exportOptions: {
                    columns: exportColumns
                }
            },
            {
                extend: 'pdf', className: 'btn yellow btn-circle btn-outline ', exportOptions: {
                    columns: exportColumns,
                    modifier: { page: 'current' }
                }, orientation: "landscape"
            },
            {
                extend: 'excel', className: 'btn green btn-circle btn-outline ', exportOptions: {
                    columns: exportColumns
                }
            },
            {
                extend: 'csv', className: 'btn purple btn-circle btn-outline ', exportOptions: {
                    columns: exportColumns
                }
            }
        ],
        "dom": "<'row' <'col-md-12'B>><'row'<'col-md-6 col-sm-12'l><'col-md-6 col-sm-12'f>r><'table-scrollable't><'row'<'col-md-5 col-sm-12'i><'col-md-7 col-sm-12'p>>",
        "fnServerData": function (sSource, data, fnCallback) {

            $.loadingfun({ target: div, animate: true });
            $.ajax({
                "type": 'post',
                contentType: "application/json;charset=utf-8",
                "url": sSource,
                "dataType": "json",
                "data": JSON.stringify($.extend({}, json())),
                headers: {
                    Authorization: "Basic " + auth
                },
                "success": function (resp) {
                    $.loadingfunremove(div);
                    if (typeof (resp) == "undefined" || resp == "") {
                        return;
                    }
                    //if (typeof (resp.MsgType) != "undefined" && resp.MsgType == "TokenError")
                    //{
                    //    window.location.href = "../BackEnd/Index";
                    //    return;
                    //}
                    //if (resp.MsgType == "NoPermission")
                    //{
                    //    $.AlertInfo("error", "No Permission", "Message");
                    //    return;
                    //}
                    if (resp.MsgType == 2) {
                        return;
                    }
                    fnCallback(resp.Data);
                }
            });

        },
        //"footerCallback": function() {
        //    var api = this.api();
        //    api.columns().indexes().flatten().each( function ( i ) {
        //        var column = api.column( i );
        //        var select = $('<select><option value=""></option></select>')
        //            .appendTo( $(column.footer()).empty() )
        //            .on( 'change', function () {
        //                var val = $.fn.dataTable.util.escapeRegex(
        //                    $(this).val()
        //                );
        //                column
        //                    .search( val ? '^'+val+'$' : '', true, false )
        //                    .draw();
        //            } );
        //        column.data().unique().sort().each( function ( d, j ) {
        //            select.append( '<option value="'+d+'">'+d+'</option>' )
        //        } );
        //    } );
        //},
        "aoColumns": dataField
    });
    return table;
}
$.TableFunSort = function (tableId, url, json, dataField, columns, sort, exportColumns, auth) {
    var div = $(tableId).parent();
    var table = $(tableId).dataTable({
        "oLanguage": {
            "sProcessing": "<img src='/img/TLoad.gif'/>",
            "sLengthMenu": "show _MENU_ entries ",
            "sZeroRecords": "No result found.",
            "sInfo": "_START_ To _END_ Record——Total Number Of Records _TOTAL_ ",
            "sInfoEmpty": "Record Number 00",
            "sInfoFiltered": "(Total Number of Records _MAX_  )",
            "sInfoPostFix": "",
            "sSearch": "Search",
            "sUrl": "",
            "oPaginate": {
                "sFirst": "First",
                "sPrevious": " Previous ",
                "sNext": " Next ",
                "sLast": " Last  "
            }
        },
        "initComplete": function () {
            if ($("#uCompanyID").val() != -1) {
                $(".hiddenCol").css("display", "none");
            }
        },

        "fnDrawCallback": function () {
            if ($("#uCompanyID").val() != -1) {
                $(".hiddenCol").css("display", "none");
            }
        },


        "bJQueryUI": false,
        "bPaginate": true, // 分页按钮
        "bFilter": true, // 搜索栏
        "bLengthChange": true, // 每行显示记录数
        "aLengthMenu": [
            [5, 10, 15, 20, 50, -1],
            [5, 10, 15, 20, 50, "all"] // change per page values here
        ],
        "iDisplayLength": 10,   //默认显示的记录数 
        "bSort": true, // 排序  
        "bInfo": true, // Showing 1 to 10 of 23 entries 总记录数没也显示多少等信息
        "bWidth": true,
        "aoColumnDefs": [{ "bSortable": false, "aTargets": columns }],
        "aaSorting": [sort, "desc"],
        "bScrollCollapse": true,
        "sPaginationType": "full_numbers", // 分页，一共两种样式 另一种为two_button // 是datatables默认        
        "bServerSide": false,
        "bProcessing": false,
        "bStateSave": false,
        "bSortCellsTop": true,
        "bDestroy": true,
        "sAjaxSource": url,
        "responsive": true,

        "buttons": [
            {
                extend: 'print', className: 'btn dark btn-circle btn-outline', exportOptions: {
                    //columns: ':visible',
                    //format: {
                    //    body: function (data, row, column, node)
                    //    {
                    //        var reg = /<\/?.+?>/g;
                    //        var filter;
                    //        if (reg.test(data))
                    //        {
                    //            filter = data.replace(reg, "");
                    //        } else
                    //        {
                    //            filter = data;
                    //        }
                    //        if (column == 0)
                    //            return "";
                    //        var start = filter.indexOf("$(");
                    //        var end = filter.indexOf(")");
                    //        if (start >= 0 && end >= 0)
                    //        {
                    //            return filter.replace('$(', '-').replace(')', '').replace("<br>", '');
                    //        }
                    //        return filter.replace('$', '').replace("<br>", '');
                    //    }
                    //}
                    columns: exportColumns
                }
            },
            {
                extend: 'pdf', className: 'btn yellow btn-circle btn-outline ', exportOptions: {
                    columns: exportColumns,
                    modifier: {
                        page: 'current'
                    }
                }, orientation: "landscape"
            },
            {
                extend: 'excel', className: 'btn green btn-circle btn-outline ', exportOptions: {
                    //columns: ':visible',
                    //format: {
                    //    body: function (data, row, column, node)
                    //    {
                    //        var reg = /<\/?.+?>/g;
                    //        var filter;
                    //        if (reg.test(data))
                    //        {
                    //            filter = data.replace(reg, "");
                    //        } else
                    //        {
                    //            filter = data;
                    //        }
                    //        if (column == 0)
                    //            return "";
                    //        var start = filter.indexOf("$(");
                    //        var end = filter.indexOf(")");
                    //        if (start >= 0 && end >= 0)
                    //        {
                    //            return filter.replace('$(', '-').replace(')', '').replace("<br>", '');
                    //        }
                    //        return filter.replace('$', '').replace("<br>", '');
                    //    }
                    //}
                    columns: exportColumns
                }
            },
            {
                extend: 'csv', className: 'btn purple btn-circle btn-outline ', exportOptions: {
                    //columns: ':visible',
                    //format: {
                    //    body: function (data, row, column, node)
                    //    {
                    //        var reg = /<\/?.+?>/g;
                    //        var filter;
                    //        if (reg.test(data))
                    //        {
                    //            filter = data.replace(reg, "");
                    //        } else
                    //        {
                    //            filter = data;
                    //        }
                    //        if (column == 0)
                    //            return "";
                    //        var start = filter.indexOf("$(");
                    //        var end = filter.indexOf(")");
                    //        if (start >= 0 && end >= 0)
                    //        {
                    //            return filter.replace('$(', '-').replace(')', '').replace("<br>", '');
                    //        }
                    //        return filter.replace('$', '').replace("<br>", '');
                    //    }
                    //}
                    columns: exportColumns
                }
            }
        ],
        "dom": "<'row' <'col-md-12'B>><'row'<'col-md-6 col-sm-12'l><'col-md-6 col-sm-12'f>r><'table-scrollable't><'row'<'col-md-5 col-sm-12'i><'col-md-7 col-sm-12'p>>",
        "fnServerData": function (sSource, data, fnCallback) {

            $.loadingfun({ target: div, animate: true });
            $.ajax({
                "type": 'post',
                contentType: "application/json;charset=utf-8",
                "url": sSource,
                "dataType": "json",
                "data": JSON.stringify($.extend({}, json())),
                headers: {
                    Authorization: "Basic " + auth
                },
                "success": function (resp) {
                    $.loadingfunremove(div);
                    if (typeof (resp) == "undefined" || resp == "") {
                        return;
                    }
                    if (resp.MsgType == 2 && resp.Info == "Error! You have no rights") {
                        $.AlertInfo("error", "No Permission", "Message");
                        return;
                    }
                    if (resp.MsgType == 2) {

                        return;
                    }
                    fnCallback(resp.Data);
                }
            });

        },
        "aoColumns": dataField
    });
    return table;
}
$.TableFunShow = function (tableId, url, json, dataField, columns, auth) {
    var div = $(tableId).parent();
    var table = $(tableId).dataTable({
        "oLanguage": {
            "sProcessing": "<img src='/img/TLoad.gif'/>",
            "sLengthMenu": "show _MENU_ entries ",
            "sZeroRecords": "No result found.",
            "sInfo": "_START_ To _END_ Record——Total Number Of Records _TOTAL_ ",
            "sInfoEmpty": "Record Number 00",
            "sInfoFiltered": "(Total Number of Records _MAX_  )",
            "sInfoPostFix": "",
            "sSearch": "Search",
            "sUrl": "",
            "oPaginate": {
                "sFirst": "First",
                "sPrevious": " Previous ",
                "sNext": " Next ",
                "sLast": " Last  "
            }
        },
        "bJQueryUI": false,
        "bPaginate": false, // 分页按钮
        "bFilter": true, // 搜索栏
        "bLengthChange": false, // 每行显示记录数
        "aLengthMenu": [
            [5, 10, 15, 20, 50, -1],
            [5, 10, 15, 20, 50, "all"] // change per page values here
        ],
        "iDisplayLength": 10,   //默认显示的记录数 
        "bSort": true, // 排序  
        "bInfo": true, // Showing 1 to 10 of 23 entries 总记录数没也显示多少等信息
        "bWidth": true,
        "aoColumnDefs": [{ "bSortable": false, "aTargets": columns }],
        "aaSorting": [1, "desc"],
        "bScrollCollapse": true,
        "sPaginationType": "full_numbers", // 分页，一共两种样式 另一种为two_button // 是datatables默认        
        "bServerSide": false,
        "bProcessing": false,
        "bStateSave": false,
        "bSortCellsTop": true,
        "bDestroy": true,
        "sAjaxSource": url,
        "responsive": true,

        //"buttons": [
        //           {
        //               extend: 'print', className: 'btn dark btn-circle btn-outline', exportOptions: {
        //                   //columns: ':visible',
        //                   //format: {
        //                   //    body: function (data, row, column, node)
        //                   //    {
        //                   //        var reg = /<\/?.+?>/g;
        //                   //        var filter;
        //                   //        if (reg.test(data))
        //                   //        {
        //                   //            filter = data.replace(reg, "");
        //                   //        } else
        //                   //        {
        //                   //            filter = data;
        //                   //        }
        //                   //        if (column == 0) 
        //                   //            return "";
        //                   //        var start = filter.indexOf("$(");
        //                   //        var end = filter.indexOf(")");
        //                   //        if (start >= 0 && end >= 0)
        //                   //        {
        //                   //            return filter.replace('$(', '-').replace(')', '').replace("<br>", '');
        //                   //        }
        //                   //        return filter.replace('$', '').replace("<br>", '');
        //                   //    }
        //                   //},
        //                   columns: exportColumns
        //               }
        //           },
        //           {
        //               extend: 'pdf', className: 'btn yellow btn-circle btn-outline ', exportOptions: {
        //                   columns: exportColumns,
        //                   modifier: { page: 'current' }
        //               }, orientation: "landscape"
        //           },
        //           {
        //               extend: 'excel', className: 'btn green btn-circle btn-outline ', exportOptions: {
        //                   //columns: ':visible',
        //                   //format: {
        //                   //    body: function (data, row, column, node)
        //                   //    {
        //                   //        var reg = /<\/?.+?>/g;
        //                   //        var filter;
        //                   //        if (reg.test(data))
        //                   //        {
        //                   //            filter = data.replace(reg, "");
        //                   //        } else
        //                   //        {
        //                   //            filter = data;
        //                   //        }
        //                   //        if (column == 0)
        //                   //            return "";
        //                   //        var start = filter.indexOf("$(");
        //                   //        var end = filter.indexOf(")");
        //                   //        if (start >= 0 && end >= 0)
        //                   //        {
        //                   //            return filter.replace('$(', '-').replace(')', '').replace("<br>", '');
        //                   //        }
        //                   //        return filter.replace('$', '').replace("<br>", '');
        //                   //    }
        //                   //}
        //                   columns: exportColumns
        //               }
        //           },
        //           {
        //               extend: 'csv', className: 'btn purple btn-circle btn-outline ', exportOptions: {
        //                   //columns: ':visible',
        //                   //format: {
        //                   //    body: function (data, row, column, node)
        //                   //    {
        //                   //        var reg = /<\/?.+?>/g;
        //                   //        var filter;
        //                   //        if (reg.test(data))
        //                   //        {
        //                   //            filter = data.replace(reg, "");
        //                   //        } else
        //                   //        {
        //                   //            filter = data;
        //                   //        }
        //                   //        if (column == 0)
        //                   //            return "";
        //                   //        var start = filter.indexOf("$(");
        //                   //        var end = filter.indexOf(")");
        //                   //        if (start >= 0 && end >= 0)
        //                   //        {
        //                   //            return filter.replace('$(', '-').replace(')', '').replace("<br>", '');
        //                   //        }
        //                   //        return filter.replace('$', '').replace("<br>", '');
        //                   //    }
        //                   //}
        //                   columns: exportColumns
        //               }
        //           }
        //],
        "dom": "<'row'<'col-md-6 col-sm-12'l><'col-md-6 col-sm-12'f>r><'table-scrollable't><'row'<'col-md-5 col-sm-12'i><'col-md-7 col-sm-12'p>>",
        "fnServerData": function (sSource, data, fnCallback) {

            $.loadingfun({ target: div, animate: true });
            $.ajax({
                "type": 'post',
                contentType: "application/json;charset=utf-8",
                "url": sSource,
                "dataType": "json",
                "data": JSON.stringify($.extend({}, json())),
                "async": false,
                headers: {
                    Authorization: "Basic " + auth
                },
                "success": function (resp) {
                    $.loadingfunremove(div);
                    if (typeof (resp) == "undefined" || resp == "") {
                        return;
                    }
                    //if (typeof (resp.MsgType) != "undefined" && resp.MsgType == "TokenError")
                    //{
                    //    window.location.href = "../BackEnd/Index";
                    //    return;
                    //}
                    //if (resp.MsgType == "NoPermission")
                    //{
                    //    $.AlertInfo("error", "No Permission", "Message");
                    //    return;
                    //}
                    if (resp.MsgType == 2) {
                        return;
                    }
                    fnCallback(resp.Data);
                }
            });

        },
        //"footerCallback": function() {
        //    var api = this.api();
        //    api.columns().indexes().flatten().each( function ( i ) {
        //        var column = api.column( i );
        //        var select = $('<select><option value=""></option></select>')
        //            .appendTo( $(column.footer()).empty() )
        //            .on( 'change', function () {
        //                var val = $.fn.dataTable.util.escapeRegex(
        //                    $(this).val()
        //                );
        //                column
        //                    .search( val ? '^'+val+'$' : '', true, false )
        //                    .draw();
        //            } );
        //        column.data().unique().sort().each( function ( d, j ) {
        //            select.append( '<option value="'+d+'">'+d+'</option>' )
        //        } );
        //    } );
        //},
        "aoColumns": dataField
    });
    return table;
}
$.TableFunPage = function (tableId, url, field, dataField, auth) {
    var table = $(tableId).dataTable({
        "oLanguage": {
            "sProcessing": "<img src='/Image/TLoad.gif'/>",

        },
        "scrollY": "350px",
        "scrollCollapse": true,
        "bJQueryUI": true,
        "bPaginate": false, // 分页按钮
        "bFilter": false, // 搜索栏
        "bLengthChange": false, // 每行显示记录数
        "iDisplayLength": 50, // 每页显示行数
        "bSort": true, // 排序  
        "bInfo": false, // Showing 1 to 10 of 23 entries 总记录数没也显示多少等信息
        "bWidth": true,
        "bScrollCollapse": false,
        "sPaginationType": "full_numbers", // 分页，一共两种样式 另一种为two_button // 是datatables默认
        "bProcessing": true,
        "bServerSide": true,
        "bDestroy": true,
        "bSortCellsTop": true,
        "sAjaxSource": url,
        "fnServerData": function (sSource, data, fnCallback) {
            $.ajax({
                "type": 'post',
                contentType: "application/json;charset=utf-8",
                "url": sSource,
                "dataType": "json",
                "data": JSON.stringify($.extend({ aoData: data[3].value, sEcho: data[0].value }, field())),
                headers: {
                    Authorization: "Basic " + auth
                },
                "success": function (resp) {
                    if (typeof (resp) == "undefined" || resp == "") {
                        return;
                    }
                    if (typeof (resp.MsgType) != "undefined" && resp.MsgType == 3) {
                        window.location.href = '../Login/Index';
                        return;
                    }
                    fnCallback(resp.Data);
                }
            });

        },
        "aoColumns": dataField
    });
    return table;
}
$.TableFunAlarm = function (tableId, url, field, dataField, auth) {
    var table = $(tableId).dataTable({
        "oLanguage": {
            "sProcessing": "<img src='/Image/TLoad.gif'/>"

        },
        "scrollY": "280px",
        "scrollCollapse": true,
        "bJQueryUI": true,
        "bPaginate": false, // 分页按钮
        "bFilter": false, // 搜索栏
        "bLengthChange": false, // 每行显示记录数
        "iDisplayLength": 50, // 每页显示行数
        "bSort": false, // 排序  
        "bInfo": false, // Showing 1 to 10 of 23 entries 总记录数没也显示多少等信息
        "bWidth": true,
        "sScrollX": "100%",
        "sScrollXInner": "110%",
        "bScrollCollapse": true,
        "sPaginationType": "full_numbers", // 分页，一共两种样式 另一种为two_button // 是datatables默认
        "bProcessing": true,
        "bServerSide": true,
        "bDestroy": true,
        "bSortCellsTop": true,
        "sAjaxSource": url,
        "fnServerData": function (sSource, data, fnCallback) {
            $.ajax({
                "type": 'post',
                contentType: "application/json;charset=utf-8",
                "url": sSource,
                "dataType": "json",
                "data": JSON.stringify($.extend({ aoData: data[3].value, sEcho: data[0].value }, field())),
                headers: {
                    Authorization: "Basic " + auth
                },
                "success": function (resp) {
                    if (typeof (resp) == "undefined" || resp === "") {
                        return;
                    }
                    if (typeof (resp.MsgType) != "undefined" && resp.MsgType === 3) {
                        window.location.href = '../Login/Index';
                        return;
                    }
                    fnCallback(resp.Data);
                }
            });

        },
        "aoColumns": dataField
    });
    return table;
}

$.TableFunMonitor = function (tableId, dataField, sort) {

    var companySelect = $("#companySelect option:selected").val();
    var status = $("#vehicleStatus option:selected").val();
    var alias = $("#vehivleNumber").val();
    var mdt = $("#MDT").val();
    var array = MemoryFun.values();
    var table;
   
    var index = 0;
    var nTable = [];
    if (status != "0" || companySelect != "0" ||alias!="" ||mdt!="" || index==0) {
        
          for (var i = 0; i < array.length; i++) {
              var info = array[i];
              if (info == null)
                  continue;
              var key = info.key.toLowerCase();
              var companyData = info.VCoID;
              var statuData = info.ST;
              var aliasData = info.PNo;
              var mdtData = info.IMEI;
        
              if (companySelect != "0" && companySelect != companyData) {
                  continue;
              }
              if (status !="0" && status!=statuData) {
                  continue;
              }
              if (alias !="" && alias != aliasData) {
                  continue;
              }
              if (mdt != "" && mdt != mdtData) {
                  continue;
              }
        
              nTable[index] = info;
              index++;

          }
          table = $.TableMonitor(tableId, dataField, sort, nTable);
          $.DrawLayer(nTable);
          return table;
    }
};

$.TableFunOnline = function (tableId, dataField, sort) {


    var array = MemoryFun.values();
    var table;

    var index = 0;
    var nTable = [];

        for (var i = 0; i < array.length; i++) {
            var info = array[i];
            if (info == null)
                continue;        
  
            if ((array[i].ST & 0x1) == 1) {
                nTable[index] = info;
                index++;
            }
                
          

        }
        table = $.TableMonitor(tableId, dataField, sort, nTable);
        $.DrawLayer(nTable);
        return table;
   
};

$.TableFunOffline = function (tableId, dataField, sort) {
    var array = MemoryFun.values();
    var table;
    var index = 0;
    var nTable = [];
    for (var i = 0; i < array.length; i++) {
        var info = array[i];
        if (info == null)
            continue;
        if ((array[i].ST & 0x1) == 0) {
            nTable[index] = info;
            index++;
        }
      
    }
    table = $.TableMonitor(tableId, dataField, sort, nTable);
    $.DrawLayer(nTable);
    return table;

};


$.TableFunVacant = function (tableId, dataField, sort) {
    var array = MemoryFun.values();
    var table;
    var index = 0;
    var nTable = [];
    for (var i = 0; i < array.length; i++) {
        var info = array[i];
        if (info == null)
            continue;
        if ((array[i].ST >> 2 & 0x1) == 0) {
            nTable[index] = info;
            index++;
        }
      
    }
    table = $.TableMonitor(tableId, dataField, sort, nTable);
    $.DrawLayer(nTable);
    return table;

};


$.TableFunHried = function (tableId, dataField, sort) {
    var array = MemoryFun.values();
    var table;
    var index = 0;
    var nTable = [];
    for (var i = 0; i < array.length; i++) {
        var info = array[i];
        if (info == null)
            continue;
        if ((array[i].ST >> 2 & 0x1) == 1) {
            nTable[index] = info;
            index++;
        }
  
    }
    table = $.TableMonitor(tableId, dataField, sort, nTable);
    $.DrawLayer(nTable);
    return table;

};
$.TableFunSOS = function (tableId, dataField, sort) {
    var array = MemoryFun.values();
    var table;
    var index = 0;
    var nTable = [];
    for (var i = 0; i < array.length; i++) {
        var info = array[i];
        if (info == null)
            continue;
        if (((array[i].ST >> 1 & 0x1) == 1 || (array[i].ST >> 3 & 0x1) == 1)) {
            nTable[index] = info;
            index++;
        }
      
    }
    table = $.TableMonitor(tableId, dataField, sort, nTable);
    $.DrawLayer(nTable);
    return table;

};




$.TableFunMonitorFixReader = function (tableId, dataField, sort) {
    var array = MemoryFun.values();
    var input = $("#Alias").val().toLowerCase();
    var company = $("#companySelect").val();
    var carType = $("#carType").val();
    var status = $("#carStatus").val();
    var showAll = $("#showAll").val();
    var index = 0;
    var nTable = [];
    var table;
    var mounthAgo = new Date(new Date(new Date().toLocaleDateString()).getTime());
    mounthAgo.setDate(mounthAgo.getDate() - 10);//10天0点之前
    var initType = 1;
    if (window.companyID == -1) {
        initType = 0;
    }

    if (input != "" || company != 0 || carType != 0 || (status != 0 && status != undefined) || showAll != 0) {
        for (var i = 0; i < array.length; i++) {
            var info = array[i];
            if (info == null)
                continue;
            var key = info.key.toLowerCase();
            if (input != "" && key.indexOf(input) < 0) {
                continue;
            }
            var typeData = info.VehicleType;
            var companyData = info.CompanyID;
            var vehicleStatus = info.VehicleStatus;
            var report = $.TransformFormat(info.Time);
            if (company != 0 && company != companyData) {
                continue;
            }
            if (carType != 0 && carType != typeData) {
                continue;
            }
            if (status != undefined && status != 0 && status != vehicleStatus) {
                continue;
            }
            if (showAll != 0 && report < $.TransformFormat(mounthAgo)) {
                continue;
            }
            nTable[index] = info;
            index++;
        }
        table = $.TableMonitor(tableId, dataField, sort, nTable);
        $("#myCount").text(nTable.length);
        if (typeof window.vehicleStatusListChange != "undefined" && status == initType) {
            setVehicleStatus("#carStatus", window.vehicleStatusListChange);
            $("#carStatus option").each(function () {
                if ($(this).val() == status) {
                    $(this).prop("selected", 'selected');
                }
            });
            var zeroCount = 0;
            for (var l = 0; l < window.vehicleStatusListChange.length; l++) {
                var count = 0;
                for (var k = 0; k < array.length; k++) {
                    var vehicleStatus = array[k].VehicleStatus;
                    if (vehicleStatus == window.vehicleStatusListChange[l].ID) {
                        count++;
                    }
                }
                zeroCount = zeroCount + count;
                $("#carStatus option").each(function () {
                    if ($(this).val() == window.vehicleStatusListChange[l].ID) {
                        $(this).html("<option value=\"" + $(this).val() + "\">" + $(this).text() + "(" + count + ")" + "</option>");
                    }
                });
            }
            $("#carStatus option").each(function () {
                if ($(this).val() == 0) {
                    $(this).html("<option value=\"" + $(this).val() + "\">" + $(this).text() + "(" + zeroCount + ")" + "</option>");
                }
            });
        }
        if (typeof window.args != "undefined" && typeof args.typeId != "undefined" && (args.typeId != null && args.typeId != "") && args.typeId == carType) {
            initType = args.typeId;
        } else {
            initType = 0;
        }

        if (typeof window.vehicleCarTypeList != "undefined" && carType == initType) {
            window.setVehicletypedll("#carType", window.vehicleCarTypeList);
            $("#carType option").each(function () {
                if ($(this).val() == carType) {
                    $(this).prop("selected", 'selected');
                }
            });
            var zeroCount = 0;
            for (var l = 0; l < window.vehicleCarTypeList.length; l++) {
                var count = 0;
                for (var k = 0; k < array.length; k++) {
                    var vehicleType = array[k].VehicleType;
                    if (vehicleType == window.vehicleCarTypeList[l].ID) {
                        count++;
                    }
                }
                zeroCount = zeroCount + count;
                $("#carType option").each(function () {
                    if ($(this).val() == window.vehicleCarTypeList[l].ID) {
                        $(this).html("<option value=\"" + $(this).val() + "\">" + $(this).text() + "(" + count + ")" + "</option>");
                    }
                });
            }
            if (window.vehicleCarTypeList.length == 0) {
                zeroCount = array.length;
            }
            $("#carType option").each(function () {
                if ($(this).val() == 0) {
                    $(this).html("<option value=\"" + $(this).val() + "\">" + $(this).text() + "(" + zeroCount + ")" + "</option>");
                }
            });
        }

        //$.AddMaskForGun(nTable);
        $.DrawLayer(nTable);
        return table;
    } else {
        table = $.TableMonitor(tableId, dataField, sort, array);
        if (typeof vehicleStatusListChange != "undefined" && status == initType) {
            setVehicleStatus("#carStatus", vehicleStatusListChange);
            $("#carStatus option").each(function () {
                if ($(this).val() == status) {
                    $(this).prop("selected", 'selected');
                }
            });
            var zeroCount = 0;
            for (var l = 0; l < vehicleStatusListChange.length; l++) {
                var count = 0;
                for (var k = 0; k < array.length; k++) {
                    var vehicleStatus = array[k].VehicleStatus;
                    if (vehicleStatus == vehicleStatusListChange[l].ID) {
                        count++;
                    }
                }
                zeroCount = zeroCount + count;
                $("#carStatus option").each(function () {
                    if ($(this).val() == vehicleStatusListChange[l].ID) {
                        $(this).html("<option value=\"" + $(this).val() + "\">" + $(this).text() + "(" + count + ")" + "</option>");
                    }
                });
            }
            $("#carStatus option").each(function () {
                if ($(this).val() == 0) {
                    $(this).html("<option value=\"" + $(this).val() + "\">" + $(this).text() + "(" + zeroCount + ")" + "</option>");
                }
            });
        }

        $("#myCount").text(array.length);
        if (typeof window.vehicleCarTypeList != "undefined" && carType == 0) {
            setVehicletypedll("#carType", vehicleCarTypeList);
            $("#carType option").each(function () {
                if ($(this).val() == carType) {
                    $(this).prop("selected", 'selected');
                }
            });
            var zeroCount = 0;
            for (var l = 0; l < vehicleCarTypeList.length; l++) {
                var count = 0;
                for (var k = 0; k < array.length; k++) {
                    var vehicleType = array[k].VehicleType;
                    if (vehicleType == vehicleCarTypeList[l].Id) {
                        count++;
                    }
                }
                zeroCount = zeroCount + count;
                $("#carType option").each(function () {
                    if ($(this).val() == vehicleCarTypeList[l].Id) {
                        $(this).html("<option value=\"" + $(this).val() + "\">" + $(this).text() + "(" + count + ")" + "</option>");
                    }
                });
            }
            if (window.vehicleCarTypeList.length == 0) {
                zeroCount = array.length;
            }
            $("#carType option").each(function () {
                if ($(this).val() == 0) {
                    $(this).html("<option value=\"" + $(this).val() + "\">" + $(this).text() + "(" + zeroCount + ")" + "</option>");
                }
            });
        }

        //$.AddMaskForGun(nTable);
        $.DrawLayer(array);
        return table;
    }


};

//热力图
$.TableFunMonitorTwo = function (tableId, dataField, sort) {
    var array = MemoryFun.values();
    var input = $("#Alias").val().toLowerCase();
    var company = $("#companySelect").val();
    var carType = $("#carType").val();
    var status = $("#carStatus").val();
    var showAll = $("#showAll").val();
    var index = 0;
    var nTable = [];
    var table;
    var mounthAgo = new Date(new Date(new Date().toLocaleDateString()).getTime());
    mounthAgo.setDate(mounthAgo.getDate() - 10);//10天0点之前
    var initType = 1;
    if (window.companyID == -1) {
        initType = 0;
    }

    if (input != "" || company != 0 || carType != 0 || (status != 0 && status != undefined) || showAll != 0) {
        for (var i = 0; i < array.length; i++) {
            var info = array[i];
            if (info == null)
                continue;
            var key = info.key.toLowerCase();
            if (input != "" && key.indexOf(input) < 0) {
                continue;
            }
            var typeData = info.VehicleType;
            var companyData = info.CompanyID;
            var vehicleStatus = info.VehicleStatus;
            var report = $.TransformFormat(info.Time);
            if (company != 0 && company != companyData) {
                continue;
            }
            if (carType != 0 && carType != typeData) {
                continue;
            }
            if (status != undefined && status != 0 && status != vehicleStatus) {
                continue;
            }
            if (showAll != 0 && report < $.TransformFormat(mounthAgo)) {
                continue;
            }
            nTable[index] = info;
            index++;
        }
        table = $.TableMonitor(tableId, dataField, sort, nTable);
        $("#myCount").text(nTable.length);
        if (typeof window.vehicleStatusListChange != "undefined" && status == initType) {
            setVehicleStatus("#carStatus", window.vehicleStatusListChange);
            $("#carStatus option").each(function () {
                if ($(this).val() == status) {
                    $(this).prop("selected", 'selected');
                }
            });
            var zeroCount = 0;
            for (var l = 0; l < window.vehicleStatusListChange.length; l++) {
                var count = 0;
                for (var k = 0; k < array.length; k++) {
                    var vehicleStatus = array[k].VehicleStatus;
                    if (vehicleStatus == window.vehicleStatusListChange[l].ID) {
                        count++;
                    }
                }
                zeroCount = zeroCount + count;
                $("#carStatus option").each(function () {
                    if ($(this).val() == window.vehicleStatusListChange[l].ID) {
                        $(this).html("<option value=\"" + $(this).val() + "\">" + $(this).text() + "(" + count + ")" + "</option>");
                    }
                });
            }
            $("#carStatus option").each(function () {
                if ($(this).val() == 0) {
                    $(this).html("<option value=\"" + $(this).val() + "\">" + $(this).text() + "(" + zeroCount + ")" + "</option>");
                }
            });
        }
        if (typeof window.args != "undefined" && typeof args.typeId != "undefined" && (args.typeId != null && args.typeId != "") && args.typeId == carType) {
            initType = args.typeId;
        } else {
            initType = 0;
        }

        if (typeof window.vehicleCarTypeList != "undefined" && carType == initType) {
            window.setVehicletypedll("#carType", window.vehicleCarTypeList);
            $("#carType option").each(function () {
                if ($(this).val() == carType) {
                    $(this).prop("selected", 'selected');
                }
            });
            var zeroCount = 0;
            for (var l = 0; l < window.vehicleCarTypeList.length; l++) {
                var count = 0;
                for (var k = 0; k < array.length; k++) {
                    var vehicleType = array[k].VehicleType;
                    if (vehicleType == window.vehicleCarTypeList[l].Id) {
                        count++;
                    }
                }
                zeroCount = zeroCount + count;
                $("#carType option").each(function () {
                    if ($(this).val() == window.vehicleCarTypeList[l].Id) {
                        $(this).html("<option value=\"" + $(this).val() + "\">" + $(this).text() + "(" + count + ")" + "</option>");
                    }
                });
            }
            if (window.vehicleCarTypeList.length == 0) {
                zeroCount = array.length;
            }
            $("#carType option").each(function () {
                if ($(this).val() == 0) {
                    $(this).html("<option value=\"" + $(this).val() + "\">" + $(this).text() + "(" + zeroCount + ")" + "</option>");
                }
            });
        }

        //$.AddMaskForGun(nTable);
        //$.DrawLayer(nTable);
        return table;
    } else {
        table = $.TableMonitor(tableId, dataField, sort, array);
        if (typeof vehicleStatusListChange != "undefined" && status == initType) {
            setVehicleStatus("#carStatus", vehicleStatusListChange);
            $("#carStatus option").each(function () {
                if ($(this).val() == status) {
                    $(this).prop("selected", 'selected');
                }
            });
            var zeroCount = 0;
            for (var l = 0; l < vehicleStatusListChange.length; l++) {
                var count = 0;
                for (var k = 0; k < array.length; k++) {
                    var vehicleStatus = array[k].VehicleStatus;
                    if (vehicleStatus == vehicleStatusListChange[l].ID) {
                        count++;
                    }
                }
                zeroCount = zeroCount + count;
                $("#carStatus option").each(function () {
                    if ($(this).val() == vehicleStatusListChange[l].ID) {
                        $(this).html("<option value=\"" + $(this).val() + "\">" + $(this).text() + "(" + count + ")" + "</option>");
                    }
                });
            }
            $("#carStatus option").each(function () {
                if ($(this).val() == 0) {
                    $(this).html("<option value=\"" + $(this).val() + "\">" + $(this).text() + "(" + zeroCount + ")" + "</option>");
                }
            });
        }

        $("#myCount").text(array.length);
        if (typeof window.vehicleCarTypeList != "undefined" && carType == 0) {
            setVehicletypedll("#carType", vehicleCarTypeList);
            $("#carType option").each(function () {
                if ($(this).val() == carType) {
                    $(this).prop("selected", 'selected');
                }
            });
            var zeroCount = 0;
            for (var l = 0; l < vehicleCarTypeList.length; l++) {
                var count = 0;
                for (var k = 0; k < array.length; k++) {
                    var vehicleType = array[k].VehicleType;
                    if (vehicleType == vehicleCarTypeList[l].Id) {
                        count++;
                    }
                }
                zeroCount = zeroCount + count;
                $("#carType option").each(function () {
                    if ($(this).val() == vehicleCarTypeList[l].Id) {
                        $(this).html("<option value=\"" + $(this).val() + "\">" + $(this).text() + "(" + count + ")" + "</option>");
                    }
                });
            }
            if (window.vehicleCarTypeList.length == 0) {
                zeroCount = array.length;
            }
            $("#carType option").each(function () {
                if ($(this).val() == 0) {
                    $(this).html("<option value=\"" + $(this).val() + "\">" + $(this).text() + "(" + zeroCount + ")" + "</option>");
                }
            });
        }

        //$.AddMaskForGun(nTable);
        //$.DrawLayer(array);
        return table;
    }


};
$.TableMonitor = function (tableId, dataField, sort, nTable) {
    var table = $(tableId).DataTable({
        data: nTable,
        "scrollX": true,
        "scrollY": "560px",
        "deferRender": true,
        "scroller": true,
        "scrollCollapse": true,
        "bAutoWidth": true,
        "bJQueryUI": true,
        "bPaginate": false, // 分页按钮
        "bFilter": false, // 搜索栏
        "bSort": true, // 排序
        "bInfo": false, // Showing 1 to 10 of 23 entries 总记录数没也显示多少等信息
        "bWidth": true,
        "aoColumnDefs": [{ "bSortable": false, "aTargets": [0, 0] }],
        "aaSorting": [sort, "desc"],
        "bScrollCollapse": true,
        "sPaginationType": "full_numbers", // 分页，一共两种样式 另一种为two_button // 是datatables默认
        "bServerSide": false,
        "bProcessing": false,
        "bStateSave": true,
        "bSortCellsTop": true,
        "bDestroy": true,
        "responsive": false,
        "columns": dataField
    });
    return table;
}
$.DnataTableMonitor = function (tableId, dataField, sort, nTable) {
    var table = $(tableId).DataTable({
        data: nTable,
        "scrollX": true,
        "scrollY": "260px",
        "deferRender": true,
        "scroller": true,
        "scrollCollapse": true,
        "bAutoWidth": false,
        "bJQueryUI": true,
        "bPaginate": false, // 分页按钮
        "bFilter": false, // 搜索栏
        "bSort": true, // 排序
        "bInfo": false, // Showing 1 to 10 of 23 entries 总记录数没也显示多少等信息
        "bWidth": true,
        "aoColumnDefs": [{ "bSortable": false, "aTargets": [0, 0] }],
        "aaSorting": [sort, "desc"],
        "bScrollCollapse": true,
        "sPaginationType": "full_numbers", // 分页，一共两种样式 另一种为two_button // 是datatables默认
        "bServerSide": false,
        "bProcessing": false,
        "bStateSave": true,
        "bSortCellsTop": true,
        "bDestroy": true,
        "responsive": false,
        "columns": dataField,
        "rowCallback": function (row, data) {
            if (data.Ac > 0) {
                $(row).css("background", "#eff8ff");
            }
        },
    });
    return table;
}
$.TableMonitorNoSort = function (tableId, dataField, nTable) {
    var table = $(tableId).dataTable({
        data: nTable,
        "scrollX": true,
        "scrollY": "560px",
        "deferRender": true,
        "scroller": false,
        "scrollCollapse": true,
        "bAutoWidth": true,
        "bJQueryUI": true,
        "bPaginate": false, // 分页按钮
        "bFilter": false, // 搜索栏
        "bSort": false, // 排序
        "bInfo": false, // Showing 1 to 10 of 23 entries 总记录数没也显示多少等信息
        "bWidth": true,
        "aoColumnDefs": [{ "bSortable": false, "aTargets": [0, 0] }],
        "bScrollCollapse": true,
        "sPaginationType": "full_numbers", // 分页，一共两种样式 另一种为two_button // 是datatables默认
        "bServerSide": false,
        "bProcessing": false,
        "bStateSave": true,
        "bSortCellsTop": true,
        "bDestroy": true,
        "responsive": false,
        "columns": dataField
    });
    return table;
}
$.TableFunTaxiShareNoPage = function (tableId, url, json, dataField, columns, exportColumns, auth) {
    var div = $(tableId).parent();
    var table = $(tableId).dataTable({
        "oLanguage": {
            "sProcessing": "<img src='/Image/TLoad.gif'/>"

        },
        "initComplete": function () {

            if ($("#uCompanyID").val() != -1) {
                $(".hiddenCol").css("display", "none");
            }
        },

        "fnDrawCallback": function () {
            if ($("#uCompanyID").val() != -1) {
                $(".hiddenCol").css("display", "none");
            }
        },
        "sScrollX": "100%",
        "bScrollCollapse": true,
        "sScrollXInner": "100%",
        "bAutoWidth": true,
        "bJQueryUI": true,
        "bPaginate": false, // 分页按钮
        "bFilter": true, // 搜索栏
        "bLengthChange": true, // 每行显示记录数
        "iDisplayLength": 10,   //默认显示的记录数 
        "bSort": true, // 排序  
        "bInfo": true, // Showing 1 to 10 of 23 entries 总记录数没也显示多少等信息
        "aoColumnDefs": [{ "bSortable": false, "aTargets": columns }],
        "aaSorting": [1, "desc"],
        "sPaginationType": "full_numbers", // 分页，一共两种样式 另一种为two_button // 是datatables默认        
        "bServerSide": false,
        "bProcessing": false,
        "bStateSave": false,
        "bSortCellsTop": true,
        "bDestroy": true,
        "sAjaxSource": url,
        "responsive": true,
        "buttons": [
            {
                extend: 'print', className: 'btn dark btn-circle btn-outline', exportOptions: {
                    columns: exportColumns
                }
            },
            {
                extend: 'pdf', className: 'btn yellow btn-circle btn-outline ', exportOptions: {
                    columns: exportColumns,
                    modifier: { page: 'current' }
                }, orientation: "landscape"
            },
            {
                extend: 'excel', className: 'btn green btn-circle btn-outline ', exportOptions: {
                    columns: exportColumns
                }
            },
            {
                extend: 'csv', className: 'btn purple btn-circle btn-outline ', exportOptions: {
                    columns: exportColumns
                }
            }
        ],
        "dom": "<'row' <'col-md-12'B>><'row'<'col-md-6 col-sm-12'><'col-md-6 col-sm-12'f>r><t><'row'<'col-md-5 col-sm-12'i><'col-md-7 col-sm-12'p>>",
        "fnServerData": function (sSource, data, fnCallback) {

            $.loadingfun({ target: div, animate: true });
            $.ajax({
                "type": 'post',
                contentType: "application/json;charset=utf-8",
                "url": sSource,
                "dataType": "json",
                "data": JSON.stringify($.extend({}, json())),
                headers: {
                    Authorization: "Basic " + auth
                },
                "success": function (resp) {
                    $.loadingfunremove(div);
                    if (typeof (resp) == "undefined" || resp == "") {
                        return;
                    }
                    if (resp.MsgType == 2) {
                        return;
                    }
                    fnCallback(resp.Data);
                }
            });

        },
        "aoColumns": dataField
    });
    return table;
}
$.TableFunTaxiShareNoPageSort = function (tableId, url, json, dataField, columns, exportColumns, sort, auth) {
    var div = $(tableId).parent();
    var table = $(tableId).dataTable({
        "oLanguage": {
            "sProcessing": "<img src='/img/TLoad.gif'/>",
            "sLengthMenu": "show _MENU_ entries ",
            "sZeroRecords": "No result found.",
            "sInfo": "_START_ To _END_ Record——Total Number Of Records _TOTAL_ ",
            "sInfoEmpty": "Record Number 00",
            "sInfoFiltered": "(Total Number of Records _MAX_  )",
            "sInfoPostFix": "",
            "sSearch": "Search",
            "sUrl": "",
            "oPaginate": {
                "sFirst": "First",
                "sPrevious": " Previous ",
                "sNext": " Next ",
                "sLast": " Last  "
            }
        },
        "scrollX": true,
        "deferRender": true,
        "scroller": true,
        "bAutoWidth": true,
        "scrollCollapse": true,
        "bJQueryUI": true,

        "bPaginate": false, // 分页按钮
        "bFilter": true, // 搜索栏
        "bLengthChange": true, // 每行显示记录数
        "iDisplayLength": 10,   //默认显示的记录数 
        "bSort": true, // 排序  
        "bInfo": true, // Showing 1 to 10 of 23 entries 总记录数没也显示多少等信息
        "bWidth": true,
        "aoColumnDefs": [{ "bSortable": false, "aTargets": columns }],
        "aaSorting": [sort, "desc"],
        "bScrollCollapse": true,
        "sPaginationType": "full_numbers", // 分页，一共两种样式 另一种为two_button // 是datatables默认        
        "bServerSide": false,
        "bProcessing": false,
        "bStateSave": false,
        "bSortCellsTop": true,
        "bDestroy": true,
        "sAjaxSource": url,
        "responsive": true,
        "buttons": [
            {
                extend: 'print', className: 'btn dark btn-circle btn-outline', exportOptions: {
                    columns: exportColumns
                }
            },
            {
                extend: 'pdf', className: 'btn yellow btn-circle btn-outline ', exportOptions: {
                    columns: exportColumns,
                    modifier: { page: 'current' }
                }, orientation: "landscape"
            },
            {
                extend: 'excel', className: 'btn green btn-circle btn-outline ', exportOptions: {
                    columns: exportColumns
                }
            },
            {
                extend: 'csv', className: 'btn purple btn-circle btn-outline ', exportOptions: {
                    columns: exportColumns
                }
            }
        ],
        "dom": "<'row' <'col-md-12'B>><'row'<'col-md-6 col-sm-12'><'col-md-6 col-sm-12'f>r><t><'row'<'col-md-5 col-sm-12'i><'col-md-7 col-sm-12'p>>",
        "fnServerData": function (sSource, data, fnCallback) {

            $.loadingfun({ target: div, animate: true });
            $.ajax({
                "type": 'post',
                contentType: "application/json;charset=utf-8",
                "url": sSource,
                "dataType": "json",
                "data": JSON.stringify($.extend({}, json())),
                headers: {
                    Authorization: "Basic " + auth
                },
                "success": function (resp) {
                    $.loadingfunremove(div);
                    if (typeof (resp) == "undefined" || resp == "") {
                        return;
                    }
                    if (resp.MsgType == 2) {
                        return;
                    }
                    fnCallback(resp.Data);
                }
            });

        },

        "aoColumns": dataField
    });
    return table;
}
$.TableFunTaxiShareNoPageSortAsc = function (tableId, url, json, dataField, columns, exportColumns, sort, auth) {
    var div = $(tableId).parent();
    var table = $(tableId).dataTable({
        "oLanguage": {
            "sProcessing": "<img src='/img/TLoad.gif'/>",
            "sLengthMenu": "show _MENU_ entries ",
            "sZeroRecords": "No result found.",
            "sInfo": "_START_ To _END_ Record——Total Number Of Records _TOTAL_ ",
            "sInfoEmpty": "Record Number 00",
            "sInfoFiltered": "(Total Number of Records _MAX_  )",
            "sInfoPostFix": "",
            "sSearch": "Search",
            "sUrl": "",
            "oPaginate": {
                "sFirst": "First",
                "sPrevious": " Previous ",
                "sNext": " Next ",
                "sLast": " Last  "
            }
        },
        "scrollX": true,
        "deferRender": true,
        "scroller": true,
        "bAutoWidth": true,
        "scrollCollapse": true,
        "bJQueryUI": true,

        "bPaginate": false, // 分页按钮
        "bFilter": true, // 搜索栏
        "bLengthChange": true, // 每行显示记录数
        "iDisplayLength": 10,   //默认显示的记录数 
        "bSort": true, // 排序  
        "bInfo": true, // Showing 1 to 10 of 23 entries 总记录数没也显示多少等信息
        "bWidth": true,
        "aoColumnDefs": [{ "bSortable": false, "aTargets": columns }],
        "aaSorting": [sort, 'asc'],
        "bScrollCollapse": true,
        "sPaginationType": "full_numbers", // 分页，一共两种样式 另一种为two_button // 是datatables默认        
        "bServerSide": false,
        "bProcessing": false,
        "bStateSave": false,
        "bSortCellsTop": true,
        "bDestroy": true,
        "sAjaxSource": url,
        "responsive": true,
        "buttons": [
            {
                extend: 'print', className: 'btn dark btn-circle btn-outline', exportOptions: {
                    columns: exportColumns
                }
            },
            {
                extend: 'pdf', className: 'btn yellow btn-circle btn-outline ', exportOptions: {
                    columns: exportColumns,
                    modifier: { page: 'current' }
                }, orientation: "landscape"
            },
            {
                extend: 'excel', className: 'btn green btn-circle btn-outline ', exportOptions: {
                    columns: exportColumns
                }
            },
            {
                extend: 'csv', className: 'btn purple btn-circle btn-outline ', exportOptions: {
                    columns: exportColumns
                }
            }
        ],
        "dom": "<'row' <'col-md-12'B>><'row'<'col-md-6 col-sm-12'><'col-md-6 col-sm-12'f>r><t><'row'<'col-md-5 col-sm-12'i><'col-md-7 col-sm-12'p>>",
        "fnServerData": function (sSource, data, fnCallback) {

            $.loadingfun({ target: div, animate: true });
            $.ajax({
                "type": 'post',
                contentType: "application/json;charset=utf-8",
                "url": sSource,
                "dataType": "json",
                "data": JSON.stringify($.extend({}, json())),
                headers: {
                    Authorization: "Basic " + auth
                },
                "success": function (resp) {
                    $.loadingfunremove(div);
                    if (typeof (resp) == "undefined" || resp == "") {
                        return;
                    }
                    if (resp.MsgType == 2) {
                        return;
                    }
                    fnCallback(resp.Data);
                }
            });

        },

        "aoColumns": dataField
    });
    return table;
}

$.TableFunDnataMonitor = function (tableId, dataField, sort) {
    var array = MemoryFun.values();
    var input = $("#Alias").val().toLowerCase();
    var company = $("#companySelect").val();
    var carType = $("#carType").val();
    var status = $("#carStatus").val();
    var index = 0;
    var nTable = [];
    var table;
    var initType = 1;
    if (window.companyID == -1) {
        initType = 0;
    }
    if (input != "" || company != 0 || carType != 0 || (status != 0 && status != undefined)) {
        for (var i = 0; i < array.length; i++) {
            var info = array[i];
            if (info == null)
                continue;
            var key = info.key.toLowerCase();
            if (input != "" && key.indexOf(input) < 0) {
                continue;
            }
            var typeData = info.VehicleType;
            var companyData = info.CompanyID;
            var vehicleStatus = info.VehicleStatus;
            if (company != 0 && company != companyData) {
                continue;
            }
            if (carType != 0 && carType != typeData) {
                continue;
            }
            if (status != undefined && status != 0 && status != vehicleStatus) {
                continue;
            }
            nTable[index] = info;
            index++;
        }


        if (typeof window.vehicleStatusListChange != "undefined" && status == initType) {
            setVehicleStatus("#carStatus", window.vehicleStatusListChange);
            $("#carStatus option").each(function () {
                if ($(this).val() == status) {
                    $(this).prop("selected", 'selected');
                }
            });
            var zeroCount = 0;
            for (var l = 0; l < window.vehicleStatusListChange.length; l++) {
                var count = 0;
                for (var k = 0; k < array.length; k++) {
                    var vehicleStatus = array[k].VehicleStatus;
                    if (vehicleStatus == window.vehicleStatusListChange[l].ID) {
                        count++;
                    }
                }
                zeroCount = zeroCount + count;
                $("#carStatus option").each(function () {
                    if ($(this).val() == window.vehicleStatusListChange[l].ID) {
                        $(this).html("<option value=\"" + $(this).val() + "\">" + $(this).text() + "(" + count + ")" + "</option>");
                    }
                });
            }
            $("#carStatus option").each(function () {
                if ($(this).val() == 0) {
                    $(this).html("<option value=\"" + $(this).val() + "\">" + $(this).text() + "(" + zeroCount + ")" + "</option>");
                }
            });
        }
        if (typeof window.args != "undefined" && typeof args.typeId != "undefined" && (args.typeId != null && args.typeId != "") && args.typeId == carType) {
            initType = args.typeId;
        } else {
            initType = 0;
        }
        if (typeof window.vehicleCarTypeList != "undefined" && carType == initType) {
            window.setVehicletypedll("#carType", window.vehicleCarTypeList);
            $("#carType option").each(function () {
                if ($(this).val() == carType) {
                    $(this).prop("selected", 'selected');
                }
            });
            var zeroCount = 0;
            for (var l = 0; l < window.vehicleCarTypeList.length; l++) {
                var count = 0;
                for (var k = 0; k < array.length; k++) {
                    var vehicleType = array[k].VehicleType;
                    if (vehicleType == window.vehicleCarTypeList[l].Id) {
                        count++;
                    }
                }
                zeroCount = zeroCount + count;
                $("#carType option").each(function () {
                    if ($(this).val() == window.vehicleCarTypeList[l].Id) {
                        $(this).html("<option value=\"" + $(this).val() + "\">" + $(this).text() + "(" + count + ")" + "</option>");
                    }
                });
            }
            if (window.vehicleCarTypeList.length == 0) {
                zeroCount = array.length;
            }
            $("#carType option").each(function () {
                if ($(this).val() == 0) {
                    $(this).html("<option value=\"" + $(this).val() + "\">" + $(this).text() + "(" + zeroCount + ")" + "</option>");
                }
            });
        }

        //$.DrawLayer(nTable);
        return nTable;
    }
    else {

        if (typeof vehicleStatusListChange != "undefined" && status == initType) {
            setVehicleStatus("#carStatus", vehicleStatusListChange);
            $("#carStatus option").each(function () {
                if ($(this).val() == status) {
                    $(this).prop("selected", 'selected');
                }
            });
            var zeroCount = 0;
            for (var l = 0; l < vehicleStatusListChange.length; l++) {
                var count = 0;
                for (var k = 0; k < array.length; k++) {
                    var vehicleStatus = array[k].VehicleStatus;
                    if (vehicleStatus == vehicleStatusListChange[l].ID) {
                        count++;
                    }
                }
                zeroCount = zeroCount + count;
                $("#carStatus option").each(function () {
                    if ($(this).val() == vehicleStatusListChange[l].ID) {
                        $(this).html("<option value=\"" + $(this).val() + "\">" + $(this).text() + "(" + count + ")" + "</option>");
                    }
                });
            }
            $("#carStatus option").each(function () {
                if ($(this).val() == 0) {
                    $(this).html("<option value=\"" + $(this).val() + "\">" + $(this).text() + "(" + zeroCount + ")" + "</option>");
                }
            });
        }

        if (typeof window.vehicleCarTypeList != "undefined" && carType == 0) {
            setVehicletypedll("#carType", vehicleCarTypeList);
            $("#carType option").each(function () {
                if ($(this).val() == carType) {
                    $(this).prop("selected", 'selected');
                }
            });
            var zeroCount = 0;
            for (var l = 0; l < vehicleCarTypeList.length; l++) {
                var count = 0;
                for (var k = 0; k < array.length; k++) {
                    var vehicleType = array[k].VehicleType;
                    if (vehicleType == vehicleCarTypeList[l].Id) {
                        count++;
                    }
                }
                zeroCount = zeroCount + count;
                $("#carType option").each(function () {
                    if ($(this).val() == vehicleCarTypeList[l].Id) {
                        $(this).html("<option value=\"" + $(this).val() + "\">" + $(this).text() + "(" + count + ")" + "</option>");
                    }
                });
            }
            if (window.vehicleCarTypeList.length == 0) {
                zeroCount = array.length;
            }
            $("#carType option").each(function () {
                if ($(this).val() == 0) {
                    $(this).html("<option value=\"" + $(this).val() + "\">" + $(this).text() + "(" + zeroCount + ")" + "</option>");
                }
            });
        }

        //$.DrawLayer(array);
        return array;
    }


};
//检查Email
$.EmailValidate = function validateEmail(sEmail) {
    var reEmail = /^(?:[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+\.)*[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+@(?:(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!\.)){0,61}[a-zA-Z0-9]?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!$)){0,61}[a-zA-Z0-9]?)|(?:\[(?:(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\.){3}(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\]))$/;

    if (!sEmail.match(reEmail)) {
        //alert("Invalid email address");
        return false;
    }
    return true;

}

$.MessgeReturn = function (status) {
    switch (status) {
        case 1:
            return "Battery 1 invalid";

        case 2:
            return "Battery 2 invalid";

        case 3:
            return "Battery 1 and Battery 2 invalid";
        case 4:
            return "Take Apart";
        case 5:
            return "Device Out Geo Fence Warning";
        case 6:
            return "Device Out Geo Fence Alarm";
        case 7:
            return "Device Continuity In Geo Fence";
        default:
    }
}



//参数状态     1代表下发设置 2代表回馈 3代表超时
$.FromParamStatus = function (value) {
    switch (value) {
        case 1:
            return "Setting";
        case 2:
            return "Reply";
        case 3:
            return "Time Out";

    }

}
$.QueryParamStatus = function (value) {
    switch (value) {
        case 1:
            return "Query";
        case 2:
            return "Reply";
        case 3:
            return "Time Out";

    }

}
//yyy-MM-dd hh:mm:ss
$.FromMSJsonStringToDate = function (value) {
    if (value == null) { return ""; }
    if (value.indexOf('T') >= 0)//包含T
    {
        value = value.replace("T", " ");
    }
    if (value.indexOf('.') >= 0)//包含毫秒
    {
        value = value.split('.')[0];
    }
    return value;
}

//yyy-MM-dd
$.FromMSJsonStringDateymd = function (value) {
    if (value == null) { return ""; }
    if (value.indexOf('T') >= 0)//包含T
    {
        value = value.replace("T", " ")
    }
    value = value.split(' ')[0];
    return value;
}
//HH;mm:ss
$.FromMSJsonHHmm = function (value) {
    if (value == null) { return ""; }
    if (value.indexOf('T') >= 0)//包含T
    {
        value = value.replace("T", " ");
    }
    value = value.split(' ')[1];
    return value;
}

//---FenceId---
$.FromMSJsonStringFenceId = function (value) {
    return value == null ? "" : value;
}

//---OnOff   1:进、2:出---
$.FromFence = function (value) {
    if (value == 1) { return "Into"; }
    if (value == 2) { return "Out"; }
}

$.FromLonAndLat = function (value1, value2) {
    if (value1 == null) {
        value1 = 0;
    }
    if (value2 == null) {
        value2 = 0;
    }
    return (Math.round(value1 * 100000) / 100000) + "," + (Math.round(value2 * 100000) / 100000);
}

$.FromLonAndLats = function (value1, value2) {
    return value1 + ";" + value2;
}
//CardInfo 1:已签 2:签出
$.FromCardInfo = function (value) {
    if (value == "1") { return "Check In"; }
    if (value == "2") { return "Check Out"; }
}

//CardType     1:磁卡 2:IC卡 3:NFC
$.FromCardType = function (value) {
    switch (value) {
        case 1:
            return "NFC";
        case 2:
            return "IC Card";
        case 3:
            return "Magnetic Card";
        default:
            return "";
    }

}

//参数状态     1表示超速 2 高温  3怠速超时
$.FromStatus = function (value) {
    switch (value) {
        case 1:
            return "Battery 1 invalid";

        case 2:
            return "Battery 2 invalid";

        case 3:
            return "Battery 1 and battery 2 invalid";
        case 4:
            return "TimeOut";
        case 5:
            return "Device In Geo Fence";
        case 6:
            return "Device Out Geo Fence";
        case 7:
            return "Device Continuity In Geo Fence";

    }

}

$.FromMSJsonStringPassword = function (password) {
    return password == null ? "" : "******";
}


$.loadingfun = function (options) {
    options = $.extend(true, {}, options);
    var html = '';
    if (options.animate) {
        html = '<div class="loading-message ' + (options.boxed ? 'loading-message-boxed' : '') + '">' + '<div class="block-spinner-bar"><div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div></div>' + '</div>';
    }

    if (options.target) { // element blocking
        var el = $(options.target);
        if (el.height() <= ($(window).height())) {
            options.cenrerY = true;
        }
        var topvalue = options.target == 'body' ? "50%" : "60%";
        var postionValue = options.target == 'body' ? 'fixed' : 'absolute';
        el.block({
            message: html,
            baseZ: options.zIndex ? options.zIndex : 1051,
            centerY: options.cenrerY !== undefined ? options.cenrerY : false,
            css: {
                top: topvalue,
                border: '0',
                padding: '0',
                backgroundColor: 'none',
                position: postionValue,
            },
            overlayCSS: {
                backgroundColor: options.overlayColor ? options.overlayColor : '#555',
                opacity: options.boxed ? 0.05 : 0.1,
                cursor: 'wait',

            }
        });
    } else { // page blocking
        $.blockUI({
            message: html,
            baseZ: options.zIndex ? options.zIndex : 1051,
            css: {
                border: '0',
                padding: '0',
                backgroundColor: 'none',

            },
            overlayCSS: {
                backgroundColor: options.overlayColor ? options.overlayColor : '#555',
                opacity: options.boxed ? 0.05 : 0.1,
                cursor: 'wait'
            }
        });
    }
};

$.loadingfunremove = function (target) {
    if (target) {
        $(target).unblock({
            onUnblock: function () {
                $(target).css('position', '');
                $(target).css('zoom', '');
            }
        });
    } else {
        $.unblockUI();
    }
}

$.FromStatusCode = function (value) {
    switch (value) {
        case 1:
            return "<span class='label label-success'>Activate</span>";
        case 2:
            return "<span class='label label-danger'>Withdraw</span>";
        case 0:
            return "<span class='label label-danger'>Not Activate</span>";
        case 3:
            return "<span class='label label-danger'>Beta</span>";

    }

};

$.FromUserStatusCode = function (index) {
    switch (index) {
        case 1:
            return "<span class='label label-success'>Activate</span>";
        case 2:
            return "<span class='label label-danger'>Withdraw</span>";
        default:
            return "<span class='label label-warning'>Lock</span>";
    }

};

$.FromDriverSkillsCode = function (index) {
    switch (index) {
        case 0:
            return "<span class='label label-success'>Activate</span>";
        case 1:
            return "<span class='label label-danger'>Withdraw</span>";
        default:
            return "<span class='label label-warning'></span>";
    }

};

$.FromVehicleStatusCode = function (index, value) {
    switch (index) {
        case 1:
            return "<span class='label label-success'>" + value + "</span>"; //激活
        default:
            return "<span class='label label-danger'>" + value + "</span>";
    }

};
$.FromType = function (index) {
    switch (index) {
        case 1:
            return "disassemble";
        case 2:
            return "install";
        default:
            return "";

    }
};

$.InOrOutStatus = function (index) {
    switch (index) {
        case 1:
            return "In";
        case 2:
            return "Out";
        default:
            return "";
    }
}


$.FenceRemarks = function (inOrOut, type, val1, val2) {
    if (inOrOut == 1) //In
    {
        switch (type) {
            case 0: //Normal
                return "No Go Zone";;

            case 1: //Overspeed
                return "Permitted with Speed Limit (" + val1 + " km/h," + val2 + " km/h)";
            default:
                return "";
        }
    } else if (inOrOut == 2) //Out
    {
        switch (type) {
            case 0:
                return "Confined Within";
            default:
                return "";
        }

    } else {
        return "";
    }

}


$.FromMotorizedType = function (index) {
    switch (index) {
        case 1:
            return "Motorized";
        case 2:
            return "Non-Motorized";
        default:
            return "Others";
    }

};




$.FromReadType = function (index) {
    switch (index) {
        //case 0:
        //    return "<span class='label'>Unread</span>"; //未读
        //case 1:
        //    return "<span class='label label-success'>AlreadyRead</span>"; //已读
        //default:
        //    return "<span class='label label-warning'>Ignore</span>"; //忽略

        case 0:
            return "Unread"; //未读
        case 1:
            return "AlreadyRead"; //已读
        default:
            return "Ignore"; //忽略
    }

};

$.FromOrderStatus = function (index) {
    switch (index) {
        case 0:
            return "Create an order";
        case 1:
            return "Bid Completion";
        case 2:
            return "Order Cancellation";
        default:
            return "";

    }
};


$.FromStatusType = function (index) {
    switch (index) {
        case 1:
            return "Sent";
        case 2:
            return "Scheduled";
        default:
            return "";

    }
};


$.FromVehicleType = function (index) {
    switch (index) {
        case 1:
            return "Normal";
        case 2:
            return "Limo";
        default:
            return "Normal";

    }
};



$.FromDerviceStatus = function (index) {
    switch (index) {
        case 1:
            return "<span class='label label-success'>Use</span>";
        case 2:
            return "<span class='label label-danger'>Suspend</span>";
        default:
            return " ";
    }

};

$.FromTripStatus = function (index) {
    switch (index) {
        case 0:
            return "<span class='label label-danger'>✕</span>";   //实际上是 1=✓ 0=✕
        case 1:  
            return "<span class='label label-success'>✓</span>";
        default:
            return "";
    }

};


$.FromGetUploadStatus = function (index) {
    switch (index) {    
        case 1:
            return "Start Downloading";
        case 2:
            return "Download Error";
        case 3:
            return "End of Download";
        case 4:
            return "Start Installation";
        case 5:
            return "Wait for the Installation results";
        case 6:
            return "Installation Error";
        case 7:
            return "Successful Installation";
        default:
            return "";
    }

};


$.FromDriverStatus = function (index) {
    switch (index) {
        case 1:
            return "<span class='label label-success'>Activate</span>";
        case 2:
            return "<span class='label label-danger'>Withdraw</span>";
        default:
            return "";
    }

};

$.FromVehicleIsEnable = function (index) {
    switch (index) {
        case 0:
            return "<span class='label label-success'>Enable</span>";
        case 1:
            return "<span class='label label-danger'>Disable</span>";
        default:
            return "";
    }
};

$.FromDriverSendStatus = function (index) {
    switch (index) {
        case 1:
            return "<span class='label label-danger'>Wait</span>";
        case 2:
            return "<span class='label label-success'>Success</span>";
        case 3:
            return "<span class='label label-danger'>Fail</span>";
        default:
            return "";
    }
    
};

$.FromMessageStatus = function (index) {
    switch (index) {
        case 1:
            return "Ordinary";
        case 2:
            return "Urgent";
        default:
            return "";
    }

};
$.FromLoginStatus = function (index) {
    if (index == true) {
        return "Yes"
    } else {
        return "No";
    }

}

$.FromMapVehicleStatus = function (index) {
    if ((index & 0x1) == 1) {
        return "Online"
    } else if((index & 0x1) == 0) {
        return "Offline";
    } else if ((index >> 2 & 0x1) == 0 ) {
        return "Vacant";
    }else if((index >> 2 & 0x1) == 1 ){
        return "Hried";
    } else if (((index >> 1 & 0x1) == 1 || (index >> 3 & 0x1) == 1)) {
        return "SOS"
    } else {
        return index
    }

}
$.FromMapAlarmStatus = function (index) {
    if (((index >> 1 & 0x1) == 1 || (index >> 3 & 0x1) == 1)) {
       return "Yes";

    } else {
       return "No";

    }

}

$.FromAlarmReadStatus = function (index) {
    switch (index) {
        case 0:
            return "Unread";
        case 1:
            return "Read";
        default:
            return "Unread";
    }

};

$.AjaxFunSysnPolling = function (url, param, callback, auth) {

    $.ajaxSetup({ cache: false });
    $.ajax({
        url: url, data: JSON.stringify(param), contentType: "application/json;charset=utf-8", dataType: "json",
        type: 'post',
        async: false,
        headers: {
            Authorization: "Basic " + auth
        },
        success: function (data) {

            if (typeof (data) == "undefined" || data == "") {
                return;
            }
            if (typeof (data.MsgType) != "undefined" && data.MsgType == "3") {
                window.location.href = '../Login/Index';
                return;
            }
            callback(data);
        },
        error: function (data) { }
    });
}

//乱码转中文
$.UnEscape = function (data) {
    return data.replace(/&#(x)?([^&]{1,5});?/g, function ($, $1, $2) {
        return String.fromCharCode(parseInt($2, $1 ? 16 : 10));
    });
}

$.FormTranslation = function (value) {
    if (value == null)
        return value;
    var reg2 = new RegExp("&lt;", "g");
    value = value.replace(reg2, "<");
    var reg3 = new RegExp("&gt;", "g");
    value = value.replace(reg3, ">");
    var reg4 = new RegExp("&nbsp;", "g");
    value = value.replace(reg4, " ");
    var reg7 = new RegExp("&quot;", "g");
    value = value.replace(reg7, "\"");
    var reg8 = new RegExp("&amp;", "g");
    value = value.replace(reg8, "&");
    var reg9 = new RegExp("&#10;", "g");
    value = value.replace(reg9, "\n");
    return value;
}

//js左边补零
$.PrefixZero = function (num, n) {
    return (Array(n).join(0) + num).slice(-n);
}

function isOutAirport(e) {
    if (e.GateDistance <= gateDistance && e.Gate != null)
        return e.Gate;
    else if (e.IsAiport)
        return "Airport";
    else {
        return "outOfAirport";
    }
}

function satsIsOutAirport(e) {
    if (e.GateDistance <= gateDistance && e.Gate != null)
        return e.Gate;
    else if (e.Ia)
        return "Airport";
    else {
        return "outOfAirport";
    }
}

function isOutAirportTable(e) {
    if (e.GateDistance <= gateDistance && e.Gate != null)
        return e.Gate + "(" + e.GateDistance + ")";
    else if (e.IsAirport)
        return "Airport";
    else {
        return "outOfAirport";
    }
}

$.AjaxFunUiLoadHTML = function (url, callback, auth) {
    $.ajax({
        type: 'GET', //提交数据的类型 POST GET
        url: url, //提交的网址
        dataType: "html", //"xml", "html", "script", "json", "jsonp", "text".
        headers: {
            Authorization: "Basic " + auth
        },
        beforeSend: function () {
            $.loadingfun({ target: "body", animate: true }); // 请求前的动画事件
        },
        //成功返回之后调用的函数
        success: function (response) {
            // console.log(response)
            callback(response);
            $.loadingfunremove("body");
        },
        //调用出错执行的函数
        error: function (error) {
            console.log("error"); //请求出错处理
            alert(error);
            $.loadingfunremove("body");
        }
    });
}

function getCharCol(n) {
    var s = '', m = 0;
    if (n == 0) {
        return 'A';
    }
    while (n > 0) {
        m = n % 26 + 1;
        s = String.fromCharCode(m + 64) + s;
        n = (n - m) / 26;
    }
    return s;
}
function s2ab(s) {
    var buf = new ArrayBuffer(s.length);
    var view = new Uint8Array(buf);
    for (var i = 0; i !== s.length; ++i) view[i] = s.charCodeAt(i) & 0xFF;
    return buf;
};
function create(a) {
    return { v: a, t: 's' };
}
function createNumber(a) {
    var value = +a;
    return { v: value, t: 'n' };
}

$.ReplaceFunction = function (e) {
    return e == null ? null : String(e).replace(/,/g, '');
}


$.ReportFunction = function (e) {
    return e /1000;
}
//热力图
$.TableFunMonitorHeat = function () {
    var array = MemoryFun.values();
    var table;
    var heatLayer = [];
    var heatmap;
    var mounthAgo = new Date(new Date(new Date().toLocaleDateString()).getTime());
    mounthAgo.setDate(mounthAgo.getDate() - 10);//10天0点之前
    var arr = [];
    var param = {};
    for (var i = 0; i < array.length; i++) {
        var _temp = { 'lat': array[i]["Latitude"], 'lng': array[i]["Longitude"], 'count': array[i]["Speed"] }
        arr.push(_temp);
    }
    param.resutl = arr;
    heatmap = new HeatmapLayer();
    //设置数据, 获取图层
    heatLayer = heatmap.setData({ data: arr, max: 100 });
    map.addLayer(heatLayer);
    return table;
};

function getValueFromJson(objJson, k) {
    var title = new Array();
    var values = new Array();
    var j = 0;
    for (var i in objJson[k]) {//objson[0]为json对象 //data.Data 5条数据
        title[j] = i;   //json key
        values[j] = objJson[k][i];   //json value
        j++;
    }
    return values;
}

function minuteToHHmm(count) {
    return (Math.floor(count / 60) >= 10 ? Math.floor(count / 60) : ("0" + Math.floor(count / 60))) + ":" + ((count % 60) >= 10 ? (count % 60) : ("0" + (count % 60)));
}
