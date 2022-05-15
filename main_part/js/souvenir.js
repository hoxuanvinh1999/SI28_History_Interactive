//souvenir_1
//hide photo
$("#window_photo2_souvenir_1").hide()
$("#window_photo3_souvenir_1").hide()
$("#window_photo4_souvenir_1").hide()
$("#window_photo5_souvenir_1").hide()
$("#window_photo6_souvenir_1").hide()
$("#window_photo7_souvenir_1").hide()
$("#window_photo8_souvenir_1").hide()
// at the beginning, t=6
$("#photo3_souvenir_1").hide()
$("#photo4_souvenir_1").hide()
$("#photo5_souvenir_1").hide()
$("#photo6_souvenir_1").hide()
$("#photo7_souvenir_1").hide()
$("#photo8_souvenir_1").hide()

$("#btnRun_code_souvenir_1").click(function () {
    var souvenir_1_choice_1 = document.getElementById("souvenir_1_choice_1");
    var selectedValue = souvenir_1_choice_1.options[souvenir_1_choice_1.selectedIndex].value;
    if (selectedValue == "6") {
        $("#photo1_souvenir_1").show()
        $("#photo2_souvenir_1").show()
        $("#photo3_souvenir_1").hide()
        $("#photo4_souvenir_1").hide()
        $("#photo5_souvenir_1").hide()
        $("#photo6_souvenir_1").hide()
        $("#photo7_souvenir_1").hide()
        $("#photo8_souvenir_1").hide()  
    }
    else if (selectedValue == "8"){
        $("#photo1_souvenir_1").hide()
        $("#photo2_souvenir_1").hide()
        $("#photo3_souvenir_1").show()
        $("#photo4_souvenir_1").show()
        $("#photo5_souvenir_1").show()
        $("#photo6_souvenir_1").hide()
        $("#photo7_souvenir_1").hide()
        $("#photo8_souvenir_1").hide()
    }
    else if (selectedValue == "4"){
        $("#photo1_souvenir_1").hide()
        $("#photo2_souvenir_1").hide()
        $("#photo3_souvenir_1").hide()
        $("#photo4_souvenir_1").hide()
        $("#photo5_souvenir_1").hide()
        $("#photo6_souvenir_1").show()
        $("#photo7_souvenir_1").show()
        $("#photo8_souvenir_1").show()
    }
});
//photo souvenir 1
$("#photo1_souvenir_1").click(function () {
    $("#window_photo1_souvenir_1").toggle(300);
});
$("#photo2_souvenir_1").click(function () {
    $("#window_photo2_souvenir_1").toggle(300);
});
$("#photo3_souvenir_1").click(function () {
    $("#window_photo3_souvenir_1").toggle(300);
});
$("#photo4_souvenir_1").click(function () {
    $("#window_photo4_souvenir_1").toggle(300);
});
$("#photo5_souvenir_1").click(function () {
    $("#window_photo5_souvenir_1").toggle(300);
});
$("#photo6_souvenir_1").click(function () {
    $("#window_photo6_souvenir_1").toggle(300);
});
$("#photo7_souvenir_1").click(function () {
    $("#window_photo7_souvenir_1").toggle(300);
});
$("#photo8_souvenir_1").click(function () {
    $("#window_photo8_souvenir_1").toggle(300);
});
$("#btnClose_photo1_souvenir_1").click(function () {
    $("#window_photo1_souvenir_1").fadeOut(300);
});
$("#btnClose_photo2_souvenir_1").click(function () {
    $("#window_photo2_souvenir_1").fadeOut(300);
});
$("#btnClose_photo3_souvenir_1").click(function () {
    $("#window_photo3_souvenir_1").fadeOut(300);
});
$("#btnClose_photo4_souvenir_1").click(function () {
    $("#window_photo4_souvenir_1").fadeOut(300);
});
$("#btnClose_photo5_souvenir_1").click(function () {
    $("#window_photo5_souvenir_1").fadeOut(300);
});
$("#btnClose_photo6_souvenir_1").click(function () {
    $("#window_photo6_souvenir_1").fadeOut(300);
});
$("#btnClose_photo7_souvenir_1").click(function () {
    $("#window_photo7_souvenir_1").fadeOut(300);
});
$("#btnClose_photo8_souvenir_1").click(function () {
    $("#window_photo8_souvenir_1").fadeOut(300);
});
//