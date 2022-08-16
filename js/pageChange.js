$("#v-pills-home-tab,#v-pills-home-tab2").click(function () {
    $("#dashbord").css("display","block");
    $("#v-pills-home-tab").addClass("active");
    $("#customer,#item,#order,#employee,#setting,#logoff").css("display","none");
    $("#v-pills-profile-tab,#v-pills-messages-tab,#v-pills-settings-tab,#v-pills-employee-tab,#v-pills-setting2-tab,#v-pills-logoff-tab").removeClass("active");

});

$("#v-pills-profile-tab,#v-pills-profile-tab2").click(function () {
    $("#customer").css("display","block");
    $("#v-pills-profile-tab").addClass("active");
    $("#dashbord,#item,#order,#employee,#setting,#logoff").css("display","none");
    $("#v-pills-home-tab,#v-pills-messages-tab,#v-pills-settings-tab,#v-pills-employee-tab,#v-pills-setting2-tab,#v-pills-logoff-tab").removeClass("active");


});
$("#v-pills-messages-tab,#v-pills-messages-tab2").click(function () {
    $("#item").css("display","block");
    $("#v-pills-messages-tab").addClass("active");
    $("#customer,#dashbord,#order,#employee,#setting,#logoff").css("display","none");
    $("#v-pills-home-tab,#v-pills-profile-tab,#v-pills-settings-tab,#v-pills-employee-tab,#v-pills-setting2-tab,#v-pills-logoff-tab").removeClass("active");


});
$("#v-pills-settings-tab,#v-pills-settings-tab2").click(function () {
    $("#order").css("display","block");
    $("#v-pills-settings-tab").addClass("active");
    $("#customer,#item,#dashbord,#employee,#setting,#logoff").css("display","none");
    $("#v-pills-home-tab,#v-pills-profile-tab,#v-pills-messages-tab,#v-pills-employee-tab,#v-pills-setting2-tab,#v-pills-logoff-tab").removeClass("active");

});
$("#v-pills-employee-tab,#v-pills-employee-tab2").click(function () {
    $("#employee").css("display","block");
    $("#v-pills-employee-tab").addClass("active");
    $("#customer,#item,#order,#dashbord,#setting,#logoff").css("display","none");
    $("#v-pills-home-tab,#v-pills-profile-tab,#v-pills-messages-tab,#v-pills-settings-tab,#v-pills-setting2-tab,#v-pills-logoff-tab").removeClass("active");

});
$("#v-pills-setting2-tab,#v-pills-setting2-tab2").click(function () {
    $("#setting").css("display","block");
    $("#v-pills-setting2-tab").addClass("active");
    $("#customer,#item,#order,#employee,#dashbord,#logoff").css("display","none");
    $("#v-pills-home-tab,#v-pills-profile-tab,#v-pills-messages-tab,#v-pills-settings-tab,#v-pills-employee-tab,#v-pills-logoff-tab").removeClass("active");

});
$("#v-pills-logoff-tab").click(function () {
    $("#logoff").css("display","block");
    $("#v-pills-logoff-tab").addClass("active");
    $("#customer,#item,#order,#employee,#setting,#dashbord").css("display","none");
    $("#v-pills-home-tab,#v-pills-profile-tab,#v-pills-messages-tab,#v-pills-settings-tab,#v-pills-employee-tab,#v-pills-setting2-tab").removeClass("active");

});