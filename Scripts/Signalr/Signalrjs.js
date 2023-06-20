var DrTable = null;
var DrCommandTable = null;
var connection = null;
var DrmTable = null;
$.SignalrBind = function () {

    connection = $.connection(ToolUrl);//Connections/SignalPersistent

    connection.start({ transport: "auto" });

    connection.qs = { "token": token };
    connection.logging = true;

    connection.connectionSlow(function () {

    });

    //关闭
    connection.disconnected(function() {
    });

    //错误
    connection.error(function (error) {
    });

    //收到
    connection.received(function (data) {
        //var msg = connection.json.stringify(data);
        //alert(msg);
        $.Receive(data);

    });
 
    connection.stateChanged(function (obj)
    {
        if (obj.newState == 1)
        {
            ////发送获取监听IMEI
            //alert(obj);
            var json =
            {
                "Action": 5,
                "Data": "1"
            }
            $.SendCommand(json);

        }
    });



    connection.reconnected(function () {

    });

    //重新连接
    connection.reconnecting(function () {
    });
    
    //开始
    connection.starting(function () {
    });
};

//接收
$.Receive = function (data) {

    if (data.MsgType == 1)
    {
        if (data.ObjcetType != 0) {
            for (var i = 0; i < data.Data.Imei.length; i++)
            {
                DrmTable.fnAddData({ "Imei": data.Data.Imei[i] });
            }
            DrmTable.fnDraw();
        } else
        {
            if (DrTable != null)
            {
                var total = DrTable.fnAddData(data.Data);
                if (total >= 19)
                {
                    DrTable.fnClearTable();
                    total = DrTable.fnAddData(data.Data);
                }
                DrTable.fnDraw();
            }
        }


    } else
    {
        $.AlertInfo("error", data.Info, "Message");
    }
};

var exportColumns = [0, 1, 2, 3, 4];
$.TableRun = function() {

    DrTable = $("#DriverDraw").dataTable({
        "oLanguage": {
            "sProcessing": "<img src='/img/TLoad.gif'/>",
            "sLengthMenu": "show _MENU_ entries ",
            "sZeroRecords": "No result found.",
            "sInfo": "_START_ To _END_ Record--Total Number Of Records _TOTAL_ ",
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
        "bSort": true, // 排序
        "bInfo": true, // Showing 1 to 10 of 23 entries 总记录数没也显示多少等信息
        "bWidth": true,
        "bProcessing": true,
        "bDestroy": true,
        "bSortCellsTop": true,
        "aaSorting": [3, "desc"],
        "buttons": [
           {
               extend: 'print',
               className: 'btn dark btn-circle btn-outline',
               exportOptions: {
                   columns: exportColumns
               }
           },
           {
               extend: 'pdf',
               className: 'btn yellow btn-circle btn-outline ',
               exportOptions: {
                   columns: exportColumns,
                   modifier: { page: 'current' }
               },
               orientation: "landscape"
           },
           {
               extend: 'excel',
               className: 'btn green btn-circle btn-outline ',
               exportOptions: {
                   columns: exportColumns
               }
           },
           {
               extend: 'csv',
               className: 'btn purple btn-circle btn-outline ',
               exportOptions: {
                   columns: exportColumns
               }
           }
        ],
        "dom": "<'row' <'col-md-12'B>><'row'<'col-md-6 col-sm-12'l><'col-md-6 col-sm-12'f>r><'table-scrollable't><'row'<'col-md-5 col-sm-12'i><'col-md-7 col-sm-12'p>>",
        "aoColumns":
        [
            { "data": "MessageType" },
            { "data": "Imei" },
            { "data": "Msg" },
            { "data": "Time" },
            { "data": "Content" }
        ]

    });

};



$.SendCommand = function (json) {

    connection.send(json);

};
$.TableCommandRun = function () {
    DrCommandTable = $("#commandTable").dataTable({
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
        "bJQueryUI": true,
        "bPaginate": false, // 分页按钮
        "bFilter": false, // 搜索栏
        "bLengthChange": false, // 每行显示记录数
        "iDisplayLength": 20, // 每页显示行数
        "bSort": false, // 排序
        "bInfo": false, // Showing 1 to 10 of 23 entries 总记录数没也显示多少等信息
        "bWidth": true,
        "bScrollCollapse": true,
        "sPaginationType": "full_numbers", // 分页，一共两种样式 另一种为two_button // 是datatables默认
        "bProcessing": true,
        "bDestroy": true,
        "bSortCellsTop": true,
        "aoColumns":
    [
        { "data": "ID" },
        { "data": "Value" },
      {
          data: function (e) { //这里给最后一列返回一个操作列表
              //e是得到的json数组中的一个item ，可以用于控制标签的属性。
              return '<a class="btn btn-primary btn-xs" id="Delete">Delete</a>';
          }
      }
    ]

    });

};


$.TableMdtIdRun = function () {
    DrmTable = $("#mTable").dataTable({
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
        "bJQueryUI": true,
        "bPaginate": false, // 分页按钮
        "bFilter": false, // 搜索栏
        "bLengthChange": false, // 每行显示记录数
        "iDisplayLength": 20, // 每页显示行数
        "bSort": false, // 排序
        "bInfo": false, // Showing 1 to 10 of 23 entries 总记录数没也显示多少等信息
        "bWidth": true,
        "bScrollCollapse": true,
        "sPaginationType": "full_numbers", // 分页，一共两种样式 另一种为two_button // 是datatables默认
        "bProcessing": true,
        "bDestroy": true,
        "bSortCellsTop": true,
        "aoColumns":
        [
                    {
                        "data": function (e)
                        {
                            return '<input type="checkbox" name="chk_list" value=' + e.Imei + '>';
                        },
                        "sClass": "textcenter"
                    },
            { "data": "Imei" },
            {
                data: function(e) { //这里给最后一列返回一个操作列表

                    return '<a class="btn btn-primary btn-xs" id="RemoveID">Delete</a>';
                }
            }
        ]

    });

};

