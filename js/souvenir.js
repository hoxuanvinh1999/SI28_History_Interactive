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
$("#photo1_souvenir_1").hide()
$("#photo2_souvenir_1").hide()
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


//souvenir 2
$("#window_photo1_souvenir_2").hide()
$("#window_photo2_souvenir_2").hide()
$("#window_photo3_souvenir_2").hide()
$("#window_photo4_souvenir_2").hide()
$("#window_photo5_souvenir_2").hide()
$("#window_photo6_souvenir_2").hide()
$("#window_photo7_souvenir_2").hide()
$("#window_photo8_souvenir_2").hide()
// at the beginning
$("#photo1_souvenir_2").hide()
$("#photo2_souvenir_2").hide()
$("#photo3_souvenir_2").hide()
$("#photo4_souvenir_2").hide()
$("#photo5_souvenir_2").hide()
$("#photo6_souvenir_2").hide()
$("#photo7_souvenir_2").hide()
$("#result_souvenir_2").hide()
$("#result_souvenir_2").click(function () {
    $("#window_result_souvenir_2").toggle(300);
});
$("#btnClose_result_souvenir_2").click(function () {
    $("#window_result_souvenir_2").fadeOut(300);
})
$("#btnRun_code_souvenir_2").click(function () {
    var souvenir_2_choice_1 = document.getElementById("souvenir_2_choice_1");
    var selectedValue1 = souvenir_2_choice_1.options[souvenir_2_choice_1.selectedIndex].value;
    if(selectedValue1 == "Alev()"){
        $("#photo1_souvenir_2").show()
        $("#photo2_souvenir_2").show()
        $("#photo3_souvenir_2").hide()
        $("#photo4_souvenir_2").hide()
        $("#photo5_souvenir_2").hide()
        $("#photo6_souvenir_2").hide()
        $("#photo7_souvenir_2").hide()
        $("#result_souvenir_2").show()
        npTextarea_result_souvenir_2.innerHTML = "freedom = 25" + "\n" + "hapiness = 100";
    }else if(selectedValue1 == "Sophie()"){
        $("#photo1_souvenir_2").hide()
        $("#photo2_souvenir_2").hide()
        $("#photo3_souvenir_2").show()
        $("#photo4_souvenir_2").show()
        $("#photo5_souvenir_2").show()
        $("#photo6_souvenir_2").hide()
        $("#photo7_souvenir_2").hide()
        $("#result_souvenir_2").show()
        npTextarea_result_souvenir_2.innerHTML = "freedom = 25" + "\n" + "hapiness = 25";
    }else{
        $("#photo1_souvenir_2").hide()
        $("#photo2_souvenir_2").hide()
        $("#photo3_souvenir_2").hide()
        $("#photo4_souvenir_2").hide()
        $("#photo5_souvenir_2").hide()
        $("#photo6_souvenir_2").show()
        $("#photo7_souvenir_2").show()
        $("#result_souvenir_2").show()
        npTextarea_result_souvenir_2.innerHTML = "freedom = 100" + "\n" + "hapiness = 50";
    }
});
$("#photo1_souvenir_2").click(function () {
    $("#window_photo1_souvenir_2").toggle(300);
});
$("#btnClose_photo1_souvenir_2").click(function () {
    $("#window_photo1_souvenir_2").fadeOut(300);
})
$("#photo2_souvenir_2").click(function () {
    $("#window_photo2_souvenir_2").toggle(300);
});
$("#btnClose_photo2_souvenir_2").click(function () {
    $("#window_photo2_souvenir_2").fadeOut(300);
})
$("#photo3_souvenir_2").click(function () {
    $("#window_photo3_souvenir_2").toggle(300);
});
$("#btnClose_photo3_souvenir_2").click(function () {
    $("#window_photo3_souvenir_2").fadeOut(300);
})
$("#photo4_souvenir_2").click(function () {
    $("#window_photo4_souvenir_2").toggle(300);
});
$("#btnClose_photo4_souvenir_2").click(function () {
    $("#window_photo4_souvenir_2").fadeOut(300);
})
$("#photo5_souvenir_2").click(function () {
    $("#window_photo5_souvenir_2").toggle(300);
});
$("#btnClose_photo5_souvenir_2").click(function () {
    $("#window_photo5_souvenir_2").fadeOut(300);
})
$("#photo6_souvenir_2").click(function () {
    $("#window_photo6_souvenir_2").toggle(300);
});
$("#btnClose_photo6_souvenir_2").click(function () {
    $("#window_photo6_souvenir_2").fadeOut(300);
})
$("#photo7_souvenir_2").click(function () {
    $("#window_photo7_souvenir_2").toggle(300);
});
$("#btnClose_photo7_souvenir_2").click(function () {
    $("#window_photo7_souvenir_2").fadeOut(300);
})


//souvenir 4
$("#window_photo1_souvenir_4").hide()
$("#window_photo2_souvenir_4").hide()
$("#window_photo3_souvenir_4").hide()
$("#window_photo4_souvenir_4").hide()
$("#window_photo5_souvenir_4").hide()
$("#window_photo6_souvenir_4").hide()
$("#window_photo7_souvenir_4").hide()
$("#window_photo8_souvenir_4").hide()
//at the beginning
$("#photo1_souvenir_4").hide()
$("#photo2_souvenir_4").hide()
$("#photo3_souvenir_4").hide()
$("#photo4_souvenir_4").hide()
$("#photo5_souvenir_4").hide()
$("#photo6_souvenir_4").hide()
$("#photo7_souvenir_4").hide()
$("#photo8_souvenir_4").hide()
$("#btnRun_code_souvenir_4").click(function () {
    var souvenir_4_choice_1 = document.getElementById("souvenir_4_choice_1");
    var selectedValue1 = souvenir_4_choice_1.options[souvenir_4_choice_1.selectedIndex].value;
    var souvenir_4_choice_2 = document.getElementById("souvenir_4_choice_2");
    var selectedValue2 = souvenir_4_choice_2.options[souvenir_4_choice_2.selectedIndex].value;
    if(selectedValue1 == "8"){
        if(selectedValue2 == "False"){
            $("#photo1_souvenir_4").show()
            $("#photo2_souvenir_4").hide()
            $("#photo3_souvenir_4").hide()
            $("#photo4_souvenir_4").hide()
            $("#photo5_souvenir_4").hide()
            $("#photo6_souvenir_4").hide()
            $("#photo7_souvenir_4").hide()
        }else if(selectedValue2 == "True"){
            $("#photo1_souvenir_4").hide()
            $("#photo2_souvenir_4").show()
            $("#photo3_souvenir_4").hide()
            $("#photo4_souvenir_4").hide()
            $("#photo5_souvenir_4").hide()
            $("#photo6_souvenir_4").hide()
            $("#photo7_souvenir_4").hide()
        }
    }
    else if(selectedValue1 == "5"){
        if(selectedValue2 == "False"){
            $("#photo1_souvenir_4").hide()
            $("#photo2_souvenir_4").hide()
            $("#photo3_souvenir_4").show()
            $("#photo4_souvenir_4").show()
            $("#photo5_souvenir_4").hide()
            $("#photo6_souvenir_4").hide()
            $("#photo7_souvenir_4").hide()
        }else{
            $("#photo1_souvenir_4").hide()
            $("#photo2_souvenir_4").show()
            $("#photo3_souvenir_4").show()
            $("#photo4_souvenir_4").show()
            $("#photo5_souvenir_4").show()
            $("#photo6_souvenir_4").hide()
            $("#photo7_souvenir_4").hide()
        }
    }
    else if(selectedValue1 == "2"){
        if(selectedValue2 == "False"){
            $("#photo1_souvenir_4").hide()
            $("#photo2_souvenir_4").hide()
            $("#photo3_souvenir_4").show()
            $("#photo4_souvenir_4").show()
            $("#photo5_souvenir_4").show()
            $("#photo6_souvenir_4").show()
            $("#photo7_souvenir_4").show()
        }else{
            $("#photo1_souvenir_4").hide()
            $("#photo2_souvenir_4").show()
            $("#photo3_souvenir_4").show()
            $("#photo4_souvenir_4").show()
            $("#photo5_souvenir_4").show()
            $("#photo6_souvenir_4").show()
            $("#photo7_souvenir_4").show()
        }
    }
});
$("#photo1_souvenir_4").click(function () {
    $("#window_photo1_souvenir_4").toggle(300);
});
$("#btnClose_photo1_souvenir_4").click(function () {
    $("#window_photo1_souvenir_4").fadeOut(300);
})
$("#photo2_souvenir_4").click(function () {
    $("#window_photo2_souvenir_4").toggle(300);
});
$("#btnClose_photo2_souvenir_4").click(function () {
    $("#window_photo2_souvenir_4").fadeOut(300);
})
$("#photo3_souvenir_4").click(function () {
    $("#window_photo3_souvenir_4").toggle(300);
});
$("#btnClose_photo3_souvenir_4").click(function () {
    $("#window_photo3_souvenir_4").fadeOut(300);
})
$("#photo4_souvenir_4").click(function () {
    $("#window_photo4_souvenir_4").toggle(300);
});
$("#btnClose_photo4_souvenir_4").click(function () {
    $("#window_photo4_souvenir_4").fadeOut(300);
})
$("#photo5_souvenir_4").click(function () {
    $("#window_photo5_souvenir_4").toggle(300);
});
$("#btnClose_photo5_souvenir_4").click(function () {
    $("#window_photo5_souvenir_4").fadeOut(300);
})
$("#photo6_souvenir_4").click(function () {
    $("#window_photo6_souvenir_4").toggle(300);
});
$("#btnClose_photo6_souvenir_4").click(function () {
    $("#window_photo6_souvenir_4").fadeOut(300);
})
$("#photo7_souvenir_4").click(function () {
    $("#window_photo7_souvenir_4").toggle(300);
});
$("#btnClose_photo7_souvenir_4").click(function () {
    $("#window_photo7_souvenir_4").fadeOut(300);
})
$("#photo8_souvenir_4").click(function () {
    $("#window_photo8_souvenir_4").toggle(300);
});
$("#btnClose_photo8_souvenir_4").click(function () {
    $("#window_photo8_souvenir_4").fadeOut(300);
})



//souvenir 5
$("#window_photo1_souvenir_5").hide()
$("#window_photo2_souvenir_5").hide()
$("#window_photo3_souvenir_5").hide()
$("#window_photo4_souvenir_5").hide()
$("#window_photo5_souvenir_5").hide()
$("#window_mp31_souvenir_5").hide()
// at the beginning
$("#photo1_souvenir_5").hide()
$("#photo2_souvenir_5").hide()
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
        $("#photo1_souvenir_5").hide()
        $("#photo2_souvenir_5").hide()
        $("#photo3_souvenir_5").hide()
        $("#photo4_souvenir_5").show()
        $("#photo5_souvenir_5").show()
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
    const control_mp31_souvenir_5 = document.getElementById("control_mp31_souvenir_5"); 
    control_mp31_souvenir_5.pause();
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
    const control_mp31_souvenir_5 = document.getElementById("control_mp31_souvenir_5"); 
    control_mp31_souvenir_5.pause();
    $("#window_mp31_souvenir_5").fadeOut(300);
});