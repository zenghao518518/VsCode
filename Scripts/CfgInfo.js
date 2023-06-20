//var Url = "http://58.246.122.118:12347/";
//var Url = "http://192.168.1.168:12123/";
var Url = "http://localhost:53609/";
//var ToolUrl = "http://www.ucastcomputer.com/Singlar/Connections/SignalrEntry";
var ToolUrl = "http://192.168.1.252:61010/Connections/SignalrEntry";
var gateDistance = 60;//车辆距离大门多远才显示大门名称
var GetRoleByUserName = Url + "Track/GetRole"; //根据账号获取角色
var GetUserInfo = Url + "Track/GetUserInfo"; //根据Token获取用户登录信息
var GetUserDetailsInfo = Url + "Track/GetUserDetailsInfo";//根据Token获取用户信息
var getMenuList = Url + "Track/GetMenuList";//获取菜单
var GoMenu = Url + "Menu/GoTo";             //判断是否能跳转页面

 
//-----------Menu
var GetMenuList = Url + "Menu/GetMenuList";             //获取菜单列表
var UpdateMenu = Url + "Menu/UpdateMenu";               //更新菜单


//-----------Function
var FunctionGetList = Url + "Function/GetFunctionList";     //获取所有权限列表(包含有权限的和没权限的)
var UpdatePermission = Url + "Function/UpdatePermission";   //更新权限


//-----------CompanyInfo
var GetCompanyList = Url + "Company/GetList";//获取公司列表
var ActivatedCompanyList = Url + "Company/ActivatedCompanyList";//Activated公司
var WithdrawCompanyList = Url + "Company/WithdrawCompanyList";//Withdraw公司
var AddOrEditCompany = Url + "Company/AddEdit";//添加或编辑公司


//----------Department
var GetDepartmentList = Url + "Department/GetList";  //获取部门列表
var DepartmentAdd = Url + "Department/Add";      //添加部门
var DepartmentSave = Url + "Department/Save";     //编辑部门
var ActivatedDepartmentList = Url + "Department/ActivatedDepartmentList";//Activated部门
var WithdrawDepartmentList = Url + "Department/WithdrawDepartmentList";//Withdraw部门


//----------Role
var GetRoleList = Url + "Role/GetList";  //获取角色列表
var RoleAdd = Url + "Role/Add";      //添加角色
var RoleSave = Url + "Role/Save";     //编辑角色
var ActivatedRoleList = Url + "Role/ActivatedRoleList";//Activated角色
var WithdrawRoleList = Url + "Role/WithdrawRoleList";//Withdraw角色



//----------UserInformation
var GetUserList = Url + "ChangePassword/GetList";//获取用户信息
var AddUser = Url + "ChangePassword/Add";//添加用户
var EditUser = Url + "ChangePassword/Save";//修改用户信息
var GetUserDetails = Url + "ChangePassword/GetUserDetails"; //获取详细
var ActivateUsers = Url + "ChangePassword/ActivateUsers"; //Activated用户
var WithdrawUsers = Url + "ChangePassword/WithdrawUsers";//Withdraw用户
var EditSelfPassword = Url + "ChangePassword/BackEndUserSelfPassword";//编辑自己的密码
var EditBackEndUserPassword = Url + "ChangePassword/ChangePassword";//编辑密码
var SaveDepartmentDeliver = Url + "ChangePassword/SaveDepartmentDeliver";//配置部门


//----------DeviceInfo
var DeviceInfoGetList = Url + "DeviceInfo/GetList";//获取设备列表
var DeviceInfoAdd = Url + "DeviceInfo/Add";//添加设备
var DeviceInfoEdit = Url + "DeviceInfo/Save";//修改设备
var DeviceInfoGetDetail = Url + "DeviceInfo/GetDetails";//获取详细
var DeviceInfoRemove = Url + "DeviceInfo/Remove";//删除设备信息
var DeviceInfoBatchRemove = Url + "DeviceInfo/BatchRemove";//删除设备集合
var ActivatedDeviceInfoList = Url + "DeviceInfo/ActivatedDeviceInfoList";//Activated设备
var WithdrawDeviceInfoList = Url + "DeviceInfo/WithdrawDeviceInfoList";//Withdraw设备
var DriverChangePassword = Url + "Driver/DriverChangePassword";


//----------Driver
var DriverGetlist = Url + "Driver/GetList"; //获取司机列表
var DriverAdd = Url + "Driver/Add";//司机添加
var DriverEdit = Url + "Driver/DriverEdit";//司机编辑
var DrvierDetails = Url + "Drvier/GetDetails";
var ActivatedDriverList = Url + "Driver/ActivatedDriverList";//Activated司机
var WithdrawDriverList = Url + "Driver/WithdrawDriverList";//Withdraw司机
var DriverRemove = Url + "Driver/Remove";






//-----------FenceInfo
var GetFencesList = Url + "Fences/GetFencesList";//获取GeoFences列表
var GetFencesRelationList = Url + "Fences/GetFencesRelationList";//获取GeoFences关系列表
var FenceInfoAdd = Url + "Fences/AddFenceInfo";//添加围栏集合
var FenceInfoUpdate = Url + "Fences/UpdateFenceInfo";//更新围栏集合
//var FenceInfoRemove = Url + "Fences/Remove";//删除围栏
//var FenceInfoEnable = Url + "Fences/IsEnable";//删除围栏
var FenceInfoQuery = Url + "Fences/QueryFenceInfo";//查询围栏信息
var QueryFenceInfoList = Url + "Fences/QueryFenceInfoList";//批量查询围栏信息

var FenceInfoQueryAll = Url + "Fences/QueryFenceAll";//查询所有围栏信息

var GeoFenceCreateStruct = Url + "Fences/CreateStruct"; //生成结构体
var QueryVehicleAndFencesMaping = Url + "Fences/QueryVehicleAndFencesMaping"; //查询车辆和GeoFences关系
var QueryFenceInfoByVehicleId = Url + "Fences/QueryFenceInfoByVehicleId"; //根据车牌查询GeoFence信息
var VehicleCopyGeoFence = Url + "Fences/VehicleCopyGeoFence";//车辆复制Fence信息






//-----------SingleVehicleTrackingInfo
var SingleVehicleInfo = Url + "Track/TrackDataInfo";//按时间获取轨迹


//-----------MapShow
var MapShowLocation = Url + "MountMark/Location";// 获取挂载器当前的位置
var GetMountMarkPicNumber = Url + "MountInfo/GetMountMarkPicNumber";   //获取拍照图片

//-----------FenceLogInfo
var FenceLogGetAllList = Url + "FencesLog/GetAllList";//获取所有围栏信息集合
var FenceLogGetList = Url + "FencesLog/GetList";//查询围栏信息集合





//-----------Report
var GetRevenue = Url + "Report/GetRevenue";
var ReportRevenue=Url+"Report/ReportRevenue";
var GetTrackingReport = Url + "Report/GetTrackingReport";
var ReportTrackingReport = Url + "Report/ReportTrackingReport";

var GetTripReport = Url + "Report/GetTripReport";
var ReportTripReport = Url + "Report/ReportTripReport";

var ReportWaslTrip = Url + "Report/GetWaslTripReport";


var GetTracking = Url + "Tracking/GetTracking";
var GetWaslTrip = Url + "WaslTrip/GetWaslTripReport";


var mapLon = 46.7119565;  //经度
var mapLat = 24.7857723;//纬度
//1.3564848,103.9906264  103.6786 1.3332
//var mapLon = 121.42662;  //经度
//var mapLat = 31.24306;//纬度
var source = '3';


//----Track

var GetTrack = Url + "MountMark/TrackData";



//----VehicleType
var VehicleTypeList = Url + "VehicleType/GetList";//获取车辆类型集合
var VehicleTypeNameAdd = Url + "VehicleType/Add";//添加车辆类型
var VehicleTypeNameEdit = Url + "VehicleType/Save";//修改车辆类型
var VehicleTypeNameList = Url + "Select/GetVehicleTypeName";//获取车辆类型名称提示框
var ActivatedVehicleTypeList = Url + "VehicleType/ActivatedVehicleTypeList";//Activated车辆类型
var WithdrawVehicleTypeList = Url + "VehicleType/WithdrawVehicleTypeList";//Withdraw车辆类型


//----CategoryInfo
var CategoryInfoList = Url + "CategoryInfo/GetList";//获取挂载类型集合
var CategoryInfoAdd = Url + "CategoryInfo/Add";//添加挂载类型
var CategoryInfoEdit = Url + "CategoryInfo/Save";//修改挂载类型
var CategoryInfoRemove = Url + "CategoryInfo/Remove";//删除挂载类型
var CategoryInfoBatchRemove = Url + "CategoryInfo/BatchRemove";//删除挂载类型集合


//----EventInfo
var EventInfoGetList = Url + "EventInfo/GetList";
var EventInfoEdit = Url + "EventInfo/Save";
var EventInfoRemove = Url + "EventInfo/Remove";//删除
var EventInfoBatchRemove = Url + "EventInfo/BatchRemove";//删除集合


//----SMSInfo
var SMSInfoGetList = Url + "SMSInfo/GetList";
var SMSInfoAdd = Url + "SMSInfo/Add";
var SMSInfoEdit = Url + "SMSInfo/Save";
var SMSInfoRemove = Url + "SMSInfo/Remove";//删除
var SMSInfoBatchRemove = Url + "SMSInfo/BatchRemove";//删除集合

//----EmailInfo
var EmailInfoGetList = Url + "EmailInfo/GetList";
var EmailInfoExists = Url + "EmailInfo/Exists";
var EmailInfoAdd = Url + "EmailInfo/Add";
var EmailInfoEdit = Url + "EmailInfo/Save";
var EmailInfoRemove = Url + "EmailInfo/Remove";
var EmailInfoBatchRemove = Url + "EmailInfo/BatchRemove";

//-----------QueryParams
var QueryParams = Url + "Track/QueryParamData";
var QueryParamsGetList = Url + "Track/QueryParamsGetList";

//-----------FenceCalculate
var FenceCalAdd = Url + "FencesCal/AddFenceInfo";//添加围栏集合
var FenceCalUpdate = Url + "FencesCal/UpdateFenceInfo";//更新围栏集合
var FenceCalQueryId = Url + "FencesCal/QueryFenceId";//根据FenceId查询围栏
var FenceCalRemove = Url + "FencesCal/Remove";//删除围栏
var FenceCalEnable = Url + "FencesCal/IsEnable";//删除围栏
var FenceCalQuery = Url + "FencesCal/QueryFenceInfo";//查询围栏信息
var FenceCalQueryAll = Url + "FencesCal/QueryFenceAll";//查询所有围栏信息

//----FlatLocation
var FlatLocationGetList = Url + "FlatLocation/GetList";
var FlatLocationGetDevice = Url + "FlatLocation/QueryDevice";
var FlatLocationExists = Url + "FlatLocation/Exists";

//----LineTrack
var LineTrackAdd = Url + "LineTrack/AddLineTrack";
var LineTrackGetAll = Url + "LineTrack/QueryAll";
var LineTrackRemove = Url + "LineTrack/Remove";
var LineTrackQuery = Url + "LineTrack/QueryLineTrack";
var LineTrackEdit = Url + "LineTrack/Edit";



//----TemporaryLine
var TemporaryLineGetList = Url + "TemporaryLine/GetList";
var TemporaryLineAdd = Url + "TemporaryLine/Add";
var TemporaryLineEdit = Url + "TemporaryLine/Edit";
var TemporaryLineRemove = Url + "TemporaryLine/Remove";
var TemporaryLineBatchRemove = Url + "TemporaryLine/BatchRemove";
var TemporaryLineGetTrailer = Url + "TemporaryLine/GetTrailerInfo";
var TemporaryLineInit = Url + "TemporaryLine/InfoInit";

//----Tag
var TagGetlist = Url + "Tag/GetList";
var TagAdd = Url + "Tag/Add";
var TagRemove = Url + "Tag/Remove";
var TagBatchRemove = Url + "Tag/BatchRemove";
var TagSave = Url + "Tag/Save";
var TagInitName = Url + "Tag/TagInfoInit";
var GetTagQuery = Url + "Tag/TagQuery";
var GetTagDetailActivation = Url + "Tag/Activation";
var GetTagDetailReactivate = Url + "Tag/Reactivate";

//----WIFITag
var WIFITagGetlist = Url + "WIFITag/GetList";
var WIFITagAdd = Url + "WIFITag/Add";
var WIFITagRemove = Url + "WIFITag/Remove";
var WIFITagBatchRemove = Url + "WIFITag/BatchRemove";
var WIFITagSave = Url + "WIFITag/Save";

//-----------TagMapShow
var TagMapShowLocation = Url + "Tag/Location";// 获取挂载器当前的位置


var ChartUrl = Url + "Track/DrawTrackDataInfo";//获取chart数据

//-----------IdleReport
var IdleReportGetList = Url + "IdleReport/GetLIst";

//-----------VideoCapture
var VideoCaptureQuery = Url + "Video/PostQuery";

//----TagTrack
var GetNoTrack = Url + "MountMark/NoTrackData";

//----Select
var GetDriverSkillCode = Url + "Select/GetSkillCode"; //获取所有SkillCode
var GetCompanyNameText = Url + "Select/GetCompanyName";//获取所有公司名称
var GetCompanyName = Url + "Select/GetCompanyInfo";//获取公司下拉框
var GetDepartmentNamelist = Url + "Select/GetDepartmentName";//根据companyID获取部门中DepartmentName
var GetRoleName = Url + "Select/GetRoleName";             //获取角色名称
var GetUserNamelist = Url + "Select/GetUserName";        //根据companyID获取User中Name
var GetSelectStatus = Url + "Select/GetSelectStatus";    //获取状态 1:Activate  2:Withdraw
var GetSelectDept = Url + "Select/GetSelectDepartment"; //获取对应部门
var GetSelectRole = Url + "Select/GetSelectRole";       //获取用户的角色名称
var GetCompanySelect = Url + "Select/GetCompanySelect";              //获取菜单权限页面的Company下拉框
var GetDepartmentSelect = Url + "Select/GetDepartmentSelect";        //获取菜单权限页面的Department下拉框
var GetRoleSelect = Url + "Select/GetRoleSelect";                   //获取菜单权限页面的Role下拉框
var GetDeviceTypeName = Url + "Select/GetDeviceTypeName";//获取设备类型名称
var GetSelectDeviceTypeList = Url + "Select/GetDeviceTypeList";     //获取设备类型
var GetVehicleStatus = Url + "Select/GetVehicleStatus";            //获取车辆状态
var GetVehicleType = Url + "Select/GetVehicleType";               //获取车辆类型
var GetDeviceNo = Url + "Select/GetDeviceNo";                    //获取设备
var GetMotorizedNo = Url + "Select/GetMotorizedNo";              //获取车牌
var GetMotorizedNoBindAndUnBind = Url + "Select/GetMotorizedNoBindAndUnBind";//获取车牌(包含合并前/合并后的车牌)
var GetMotorizedNoBindAndUnBindSelect = Url + "Select/GetMotorizedNoBindAndUnBindSelect";//获取车牌(包含合并前/合并后车牌)的下拉框
var GetDviceIdlist = Url + "Select/GetDeviceIds";               //获取设备DviceId提示框.
var GetDeviceIdImei = Url + "Select/GetDeviceIdImei";            //获取设备DviceIdIMEI提示框
var GetDviceImei = Url + "Select/GetDeviceImei";               //获取设备Imei提示框
var GetVehicleIdList = Url + "Select/GetVehicleIdList";
var GetCorporationNameSelect = Url + "Select/GetCorporationInfo"; //获取Corporation公司名称下拉框
var GetActivityNameSelect = Url + "Select/GetActivityName";      //获取Activity类型名称下拉框
var GetVehicleTypeNameSelect = Url + "Select/GetVehicleTypeName"; //获取车辆类型名称下拉框
var GetPlateTypeNameSelect = Url + "Select/GetPlateTypeName";
var GetColorCodeNameSelect = Url + "Select/GetColorCodeName";
var GetLettersNameSelect = Url + "Select/GetLettersName";
var GetDriverName = Url + "Select/GetDriverName";
var GetVehicleNameSelect = Url + "Select/GetVehicleName";
var GetVehicleCountSelect = Url + "Select/GetVehicleCount";
var GetOrdersCount = Url + "Select/GetOrdersCount";
var VaboxGetSelectUpgradeSoftWare = Url + "Select/VaboxGetSelectUpgradeSoftWare";
var GetImeiByVehicleNumber = Url + "Select/GetImeiByVehicleNumber";
var GetCompletedTrips = Url + "Select/GetCompletedTrips";
var GetSelectVehicleName = Url + "Select/GetSelectVehicleName";
var GetVehicleId = Url + "Select/GetVehicleIds";
var GetVehicleNamelist = Url + "Select/GetVehicleNamelist";
//-----------Vehicle
var GetVehicleList = Url + "Vehicle/GetList";       //获取车辆列表
var VehicleAdd = Url + "Vehicle/Add";               //添加车辆
var VehicleSave = Url + "Vehicle/Save";             //编辑车辆
var VehicleRemove = Url + "Vehicle/Remove";         //删除车辆
var WithdrawVehicleList = Url + "Vehicle/WithdrawVehicleList";   //Withdraw
var VehicleMaintenance = Url + "Vehicle/VehicleMaintenance";     //车辆维修
var GetImeiFromDeviceID = Url + "Vehicle/GetImeiFromDeviceID";
var VehicleGetDetails = Url + "Vehicle/GetDetails";
var ActivatedVehicleList = Url + "Vehicle/ActivatedVehicleList";
var WithdrawVehicleList = Url + "Vehicle/WithdrawVehicleList";
//var GetVehicleNo = Url + "Vehicle/GetVehicleNo";               //获取车牌号

















//----------重置密码
var checkUserName = Url + "api/SendEmail"; //检查用户名   获取验证码
var resetPassWord = Url + "api/ResetPassword";//输入验证码 新密码  重置密码







//----------Email Department
var GetEmailDepartmentList = Url + "EmailInfo/GetList";
var EmailDepartmentAdd = Url + "EmailInfo/Add";
var EmailDepartmentSave = Url + "EmailInfo/Save";
var ActivatedEmailDepartmentList = Url + "EmailInfo/Activated";
var WithdrawEmailDepartmentList = Url + "EmailInfo/Withdraw";

//----------Tracking Report
var TrackingExportCsv = Url + "TrackingReport/TrackingExportCsv";

//----------RfidTracking Report
var RfidTrackingExportCsv = Url + "TrackingReport/RfidTrackingExportCsv";

//----------Daily Motorized Equipment Report
var DailyMountUsageExportCsv = Url + "TrackingReport/DailyMountUsageExportCsv";



//----------AuditTrail
var GetAuditTrail = Url + "TrackingReport/AuditTrailExport";

//----------Driver Skills
var GetDriverSkillsList = Url + "DriverSkills/GetDriverSkillsList";
var DriverSkillsAdd = Url + "DriverSkills/Add";
var DriverSkillsSave = Url + "DriverSkills/Save";
var ActivatedDriverSkillsList = Url + "DriverSkills/Activated";
var WithdrawDriverSkillsList = Url + "DriverSkills/Withdraw";

//----------Daily Motorised Equipment Usage
var DailyMotorisedEquipmentUsage = Url + "Report/GetUsageList";

//----------Monthly Motorised Equipment Usage
var MonthlyMountUsageExport = Url + "Report/GetMonthlyUsageList";

//----------Ops Demand
var GetOpsDemandList = Url + "DeptVehicleType/GetList";
var EditOpsDemand = Url + "DeptVehicleType/Edit";


//----------Motorized No - Group
var GetMotorizedNoGroupList = Url + "MountMix/GetList";  //获取车辆合并后的列表
var GetMountFromUnique = Url + "MountMix/GetMountFromUnique"; //获取车辆可以合并的双向Select
var GetMotorizedNoGroupDetail = Url + "MountMix/GetDetail";   //获取车辆合并详细
var MotorizedNoGroupAdd = Url + "MountMix/MountMixAdd";      //车辆合并添加
var MotorizedNoGroupEdit = Url + "MountMix/MountMixEdit";      //车辆合并编辑
var MotorizedNoGroupUnbind = Url + "MountMix/MountMixUnbind";      //车辆解绑


//----------WiFi Log
var GetWiFiLogList = Url + "WiFiLog/GetList";

//----------AdReport
var GetAdList = Url + "Report/GetAdList";


//----------Feedback
var FeedBackGetList = Url + "FeedBack/GetList";
var FeedBackAdd = Url + "FeedBack/AddFeedBack";
var FeedBackDetails = Url + "FeedBack/Details";


//----------DnataLocation
var DnataFLocationGetList = Url + "FlatLocation/GetDnataList";
var GateLocationTypeList = Url + "FlatLocation/GateLocationTypeList";
var GetDnataFlatCount = Url + "FlatLocation/GetDnataFlatCount";
var GetDnataAreaData = Url + "FlatLocation/GetDnataAreaData";
var GetDnataAreaAllData = Url + "FlatLocation/GetDnataAreaAllData";
var GetDnataMotorizedAll = Url + "Select/GetMotorizedNoNew";
var GetUldAll = Url + "Select/GetUldNew";

//----------Tips
var GetTipsList = Url + "Tips/GetTipsList"; //弹出TIPS帮助文档
var UpdateUsersTipsStatus = Url + "Tips/UpdateUsersTipsStatus"; //用户修改TIPS状态开关
var GetTipsSelectMenu = Url + "Tips/GetTipsSelectMenu"; //获取TIPS帮助文档下拉框菜单
var GetTipsDetailsById = Url + "Tips/GetTipsDetailsById"; //根据ID获取TIPS帮助文档详细
var TipsEdit = Url + "Tips/Edit";
var TipsImageUpload = Url + "Tips/TipsImageUpload";

//----------DriverAnalysis
var GetDriverAnalysis = Url + "Report/GetDriverAnalysis";

//----------TagAnalysis
var GetTagAd = Url + "Report/CreateTagExcel";

//----------NewMountMarkLocation
var NewMapShowLocation = Url + "MountMark/NewLocation";// 获取新挂载器当前的位置
var NewMountGetDetail = Url + "MountMark/GetNewDetail";//获取新明细

//----------NewTrack
var GetGateVehicleList = Url + "LineTrack/GetList";

//-------DeviceApplicationVersion
var GetDeviceVersion = Url + "ApplicationVersion/GetList";
var AddApplicationProgram = Url + "ApplicationVersion/AddEdit";//添加或编辑应用程序
//-------FixReader
var FixReaderGetList = Url + "FixReader/GetList";
var ActivatedFixReaderList = Url + "FixReader/ActivatedFixReaderList";//Activated设备
var WithdrawFixReaderList = Url + "FixReader/WithdrawFixReaderList";//Withdraw设备
var MaintanceFixReaderList = Url + "FixReader/MaintanceFixReaderList"; //Maintance
var ScrapFixReaderList = Url + "FixReader/ScrapFixReaderList"; //Scrap
var TemporaryFixReaderList = Url + "FixReader/TemporaryFixReaderList"; //Temporary
var GetSelectFixReaderType = Url + "Select/GetSelectFixReaderType";//获取fixreader类型
var FixReaderAdd = Url + "Add/FixReaderAdd";//添加fixreader类型
var FixReaderDetails = Url + "Edit/FixReaderDetails";//加载明细
var FixReaderEdit = Url + "Edit/FixReaderSave";
var GetFixReader = Url + "ALL/GetFixReader";//提示FixReader

//Flight
var GetSelectFlightType = Url + "Select/GetSelectFlightType";//飞机类型
var GetSelectGetList = Url + "Flight/GetList";//飞机类型
var FlightDetails = Url + "Flight/FlightDetails";
var FlightIdDissociate = Url + "Flight/SaveBindFlightId";//飞机编号解绑
var FlatCarIdDissociate = Url + "Flight/SaveBindFlatCarId";//板车编号解绑

//-----------FixReaderShow
var FixReaderMapShowLocation = Url + "FixReader/Location";// 获取挂载器当前的位置
var FixReaderGetDetail = Url + "FixReader/GetDetail";//获取明细

//-----------FenceWarehouse
var FenceWarehouseList = Url + "FenceWarehouse/FenceWarehouseList";//查询集合
var FenceWarehouseAdd = Url + "FenceWarehouse/AddFenceInfo";//添加围栏集合
var FenceWarehouseQuery = Url + "FenceWarehouse/FenceWarehouseQuery";//查询围栏信息
var FenceWarehouseUpdate = Url + "FenceWarehouse/FenceWarehouseUpdate";//更新围栏集合
var FenceWarehouseRemove = Url + "FenceWarehouse/FenceWarehouseRemove";//删除围栏集合

//------------FlightLinkedLogList
var FlightLinkedLogList = Url + "FlightLinkedLog/GetFlightLinkedLogList";//绑定解绑记录
//------------INOUTLoggerList
var INOUTLoggerList = Url + "INOUTLoggerList/GetINOUTLoggerList";//30天的进出记录

//----------OriginalRfidTracking Report
var OriginalRfidTrackingExportCsv = Url + "TrackingReport/RfidOldTrackingExportCsv";

//--批量导入用户
var ImporuUser = Url + "ImportUser/GetImportUserList";
//----------Tag Status Report
var TagStatusReport = Url + "Report/TagStatusReport";


//--------------RequireAttentionDashboard
var RequireAttentionDashboard = Url + "RequireAttentionController/GetDashBoardCount";//首页显示警报列表
var NMEUtilizationRate = Url + "Report/NMEUtilizationRate";
var OutboundFlight = Url + "RequireAttention/OutboundFlight";
var InboundFlight = Url + "RequireAttention/InboundFlight";
var FlightDetail = Url + "RequireAttention/FlightDetail";//航班绑定明细
var PdDetail = Url + "RequireAttention/PdDetail";//pd绑定明细
var PdMap = Url + "RequireAttention/PdMap";//pd位置

var AgentExcel = Url + "RequireAttention/AgentExcel";//Agent报表
var NmeAssciationCount = Url + "RequireAttention/NmeAssciationCount";
//--------------AgentULDRelease
var AgentULDRelease = Url + "AgentULDRelease/GetAgentULDRelease";
var AgentULDReleaseEdit = Url + "AgentULDRelease/AgentULDReleaseEdit";//修改信息
var AgentULDReleasePD = Url + "AgentULDRelease/AgentULDReleasePD";//获取pd当前位置

//------NME Association Count Histry
var NmeAssciation = Url + "Report/NmeAssciationCount";
//------NME Distribution
var NMEDistribution = Url + "Report/NmeDistribution";
//------Configuration
var GetConfiguration = Url + "Configuration/GetConfiguration";
var EditConfiguration = Url + "Configuration/EditConfiguration";

var GetSnapshotTableList = Url + "Report/ReaderSnapshot";
//----------MenuRecord
var MenuRecord = Url + "Report/MenuRecord";
var ApiMethodCountReport = Url + "Report/ApiMethodCountReport";

//----------DistributionDashboardChangePdRequired
var GetDistributionDashboardChangePd = Url + "DashBoard/GetPDRequire";
var ChangeDistributionDashboardChangePd = Url + "DashBoard/ChangePDRequire";

//----------Today OutBound Flight
var GetTodayMinuteFlight = Url + "Flight/GetTodayAttentionOutList";
var GetTodayOutList = Url + "Flight/GetTodayOutList";
var GetTodayAttentionMinute = Url + "Flight/GetTodayAttentionMinute";
var EditTodayAttentionMinute = Url + "Flight/ChangeTodayAttentionMinute";


//----------FlightUldDetailsReport
var GetFlightUldDetailsReport = Url + "Flight/FlightUldDetailsReport";

//----------DiDisassemble
var DisassembleGetList = Url + "Disassemble/GetList";

var DisassembleGetPicture = Url + "Disassemble/GetPicture";

//----------Order

var QueryOrder = Url + "Order/QueryOrder";
var CreateOrder = Url + "Order/CreateOrder";
//----------Mesage
var GetMessage = Url + "Message/GetMessage";
var SendMessage = Url + "Message/SendDeviceMessage";

//----------VehicleLocation
var VehicleLocation = Url + "VehicleLocation/Location";




//----------DVR
var VehicleTrack = Url + "Vehicle/DrawTrackData";
var DVRAdd = Url + "DVR/DVRAdd";
var GetUpload = Url + "DVRUploadItem/GetUpload";
var GetUploadItem = Url + "DVRUploadItem/GetUpload";

//---------Corporation
var CorporationGetlist = Url + "Corporation/GetList";
var CorporationAdd = Url + "Corporation/Add";
var CorporationRemove = Url + "Corporation/Remove";
var CorporationSave = Url + "Corporation/Save";


//-------获取升级文件
var VaboxUpgradeInfoFileList = Url + "Ota/UpgradeNewNumberList";//获取文件
var VaboxUpgradeInfoAdd = Url + "Ota/UpgradeInfoAdd";//文件打包
var VaboxUpgradeInfoPackge = Url + "Ota/UpgradeNewNumberList";//获取打包列表
var VaboxUpgradeAddList = Url + "Ota/UpgradeInfoFileList";
var VaboxUpgradeNewNumberListDetail = Url + "Ota/UpgradeNewNumberListDetail";//批次明细
var VaboxActivatedUpgradeInfoPackgeList = Url + "Ota/ActivatedOtaInfoPackgeList";//Activated
var VaboxWithdrawUpgradeInfoPackgeList = Url + "Ota/WithdrawOtaInfoPackgeList";//Withdraw
var VaboxGetUploadStatus = Url + "Ota/GetUploadStatus";

//--Vabox--------DeviceUpgrade
var VaboxDeviceUpgradeGetList = Url + "Ota/GetOtaList";
var VaboxDeviceUpgradeAdd = Url + "Ota/OtaAdd";
var VaboxDeviceUpgradeActivate = Url + "Ota/ActivatedOtaList";
var VaboxDeviceUpgradeWithdraw = Url + "Ota/WithdrawOtaList";


//--Vabox--------Device
var VaboxDeviceGetList = Url + "OtaDeviceAlone/GetDeviceList";
var VaboxDeviceAdd = Url + "OtaDeviceAlone/Add";
var VaboxDeviceActivate = Url + "OtaDeviceAlone/ActivatedUpgradeList";
var VaboxDeviceWithdraw = Url + "OtaDeviceAlone/WithdrawUpgradeList";

//--LoggerFile
var GetLoggerFileList = Url + "LoggerFile/GetLoggerFileList";
var GetDeviceLoggerList = Url + "LoggerFile/AddGetLoggerList";
var AddSubmitDeviceLogger = Url + "LoggerFile/AddDeviceLogger";
var RemoveDeviceLogger = Url + "LoggerFile/RemoveDeviceLogger";

//--DashBoard
var DashBoardLocation = Url + "DashBoard/Location";

//--Alert
var GetAlertList = Url + "Alert/GetList";

