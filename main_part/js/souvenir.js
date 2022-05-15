//souvenir_1
//hide photo
$("#window_photo1_souvenir_1").hide()
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
    else if (selectedValue == "8") {
        $("#photo1_souvenir_1").hide()
        $("#photo2_souvenir_1").hide()
        $("#photo3_souvenir_1").show()
        $("#photo4_souvenir_1").show()
        $("#photo5_souvenir_1").show()
        $("#photo6_souvenir_1").hide()
        $("#photo7_souvenir_1").hide()
        $("#photo8_souvenir_1").hide()
    }
    else if (selectedValue == "4") {
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
//souvenir 5
$("#window_photo1_souvenir_5").hide()
$("#window_photo2_souvenir_5").hide()
$("#window_photo3_souvenir_5").hide()
$("#window_photo4_souvenir_5").hide()
$("#window_photo5_souvenir_5").hide()
$("#window_mp31_souvenir_5").hide()
// at the beginning
$("#photo1_souvenir_5").show()
$("#photo2_souvenir_5").show()
$("#photo3_souvenir_5").hide()
$("#photo4_souvenir_5").hide()
$("#photo5_souvenir_5").hide()
$("#mp31_souvenir_5").hide()
$("#btnRun_code_souvenir_5").click(function () {
    var souvenir_5_choice_1 = document.getElementById("souvenir_5_choice_1");
    var selectedValue1 = souvenir_5_choice_1.options[souvenir_5_choice_1.selectedIndex].value;
    var souvenir_5_choice_2 = document.getElementById("souvenir_5_choice_2");
    var selectedValue2 = souvenir_5_choice_2.options[souvenir_5_choice_2.selectedIndex].value;
    if (selectedValue1 == "motivation*0.9" && selectedValue2 == "niveau-1") {
        $("#photo1_souvenir_5").show()
        $("#photo2_souvenir_5").show()
        $("#photo3_souvenir_5").hide()
        $("#photo4_souvenir_5").hide()
        $("#photo5_souvenir_5").hide()
        $("#mp31_souvenir_5").hide()
    }
    else if (selectedValue1 == "motivation") {
        $("#photo1_souvenir_5").hide()
        $("#photo2_souvenir_5").hide()
        $("#photo3_souvenir_5").show()
        $("#photo4_souvenir_5").hide()
        $("#photo5_souvenir_5").hide()
        $("#mp31_souvenir_5").show()
    }
    else {
        $("#photo1_souvenir_5").show()
        $("#photo2_souvenir_5").show()
        $("#photo3_souvenir_5").hide()
        $("#photo4_souvenir_5").hide()
        $("#photo5_souvenir_5").hide()
        $("#mp31_souvenir_5").hide()
    }
});
$("#photo1_souvenir_5").click(function () {
    $("#window_photo1_souvenir_5").toggle(300);
});
$("#photo2_souvenir_5").click(function () {
    $("#window_photo2_souvenir_5").toggle(300);
});
$("#photo3_souvenir_5").click(function () {
    $("#window_photo3_souvenir_5").toggle(300);
});
$("#photo4_souvenir_5").click(function () {
    $("#window_photo4_souvenir_5").toggle(300);
});
$("#photo5_souvenir_5").click(function () {
    $("#window_photo5_souvenir_5").toggle(300);
});
$("#mp31_souvenir_5").click(function () {
    $("#window_mp31_souvenir_5").toggle(300);
});
$("#btnClose_photo1_souvenir_5").click(function () {
    $("#window_photo1_souvenir_5").fadeOut(300);
})
$("#btnClose_photo2_souvenir_5").click(function () {
    $("#window_photo2_souvenir_5").fadeOut(300);
});
$("#btnClose_photo3_souvenir_5").click(function () {
    $("#window_photo3_souvenir_5").fadeOut(300);
});
$("#btnClose_photo4_souvenir_5").click(function () {
    $("#window_photo4_souvenir_5").fadeOut(300);
});
$("#btnClose_photo5_souvenir_5").click(function () {
    $("#window_photo5_souvenir_5").fadeOut(300);
});
$("#btnClose_mp31_souvenir_5").click(function () {
    $("#window_mp31_souvenir_5").fadeOut(300);
});