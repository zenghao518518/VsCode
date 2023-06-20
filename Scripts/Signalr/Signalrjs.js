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

    //�ر�
    connection.disconnected(function() {
    });

    //����
    connection.error(function (error) {
    });

    //�յ�
    connection.received(function (data) {
        //var msg = connection.json.stringify(data);
        //alert(msg);
        $.Receive(data);

    });
 
    connection.stateChanged(function (obj)
    {
        if (obj.newState == 1)
        {
            ////���ͻ�ȡ����IMEI
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

    //��������
    connection.reconnecting(function () {
    });
    
    //��ʼ
    connection.starting(function () {
    });
};

//����
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
        "bPaginate": false, // ��ҳ��ť
        "bFilter": true, // ������
        "bLengthChange": false, // ÿ����ʾ��¼��
        "bSort": true, // ����
        "bInfo": true, // Showing 1 to 10 of 23 entries �ܼ�¼��ûҲ��ʾ���ٵ���Ϣ
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
            "sInfo": "_START_ To _END_ Record����Total Number Of Records _TOTAL_ ",
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
        "bPaginate": false, // ��ҳ��ť
        "bFilter": false, // ������
        "bLengthChange": false, // ÿ����ʾ��¼��
        "iDisplayLength": 20, // ÿҳ��ʾ����
        "bSort": false, // ����
        "bInfo": false, // Showing 1 to 10 of 23 entries �ܼ�¼��ûҲ��ʾ���ٵ���Ϣ
        "bWidth": true,
        "bScrollCollapse": true,
        "sPaginationType": "full_numbers", // ��ҳ��һ��������ʽ ��һ��Ϊtwo_button // ��datatablesĬ��
        "bProcessing": true,
        "bDestroy": true,
        "bSortCellsTop": true,
        "aoColumns":
    [
        { "data": "ID" },
        { "data": "Value" },
      {
          data: function (e) { //��������һ�з���һ�������б�
              //e�ǵõ���json�����е�һ��item ���������ڿ��Ʊ�ǩ�����ԡ�
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
            "sInfo": "_START_ To _END_ Record����Total Number Of Records _TOTAL_ ",
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
        "bPaginate": false, // ��ҳ��ť
        "bFilter": false, // ������
        "bLengthChange": false, // ÿ����ʾ��¼��
        "iDisplayLength": 20, // ÿҳ��ʾ����
        "bSort": false, // ����
        "bInfo": false, // Showing 1 to 10 of 23 entries �ܼ�¼��ûҲ��ʾ���ٵ���Ϣ
        "bWidth": true,
        "bScrollCollapse": true,
        "sPaginationType": "full_numbers", // ��ҳ��һ��������ʽ ��һ��Ϊtwo_button // ��datatablesĬ��
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
                data: function(e) { //��������һ�з���һ�������б�

                    return '<a class="btn btn-primary btn-xs" id="RemoveID">Delete</a>';
                }
            }
        ]

    });

};

