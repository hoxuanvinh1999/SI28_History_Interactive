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
        npTextarea_result_souvenir_2.innerHTML = "freedom = 25" + "\n" + "happiness = 100";
    }else if(selectedValue1 == "Sophie()"){
        $("#photo1_souvenir_2").hide()
        $("#photo2_souvenir_2").hide()
        $("#photo3_souvenir_2").show()
        $("#photo4_souvenir_2").show()
        $("#photo5_souvenir_2").show()
        $("#photo6_souvenir_2").hide()
        $("#photo7_souvenir_2").hide()
        $("#result_souvenir_2").show()
        npTextarea_result_souvenir_2.innerHTML = "freedom = 25" + "\n" + "happiness = 25";
    }else{
        $("#photo1_souvenir_2").hide()
        $("#photo2_souvenir_2").hide()
        $("#photo3_souvenir_2").hide()
        $("#photo4_souvenir_2").hide()
        $("#photo5_souvenir_2").hide()
        $("#photo6_souvenir_2").show()
        $("#photo7_souvenir_2").show()
        $("#result_souvenir_2").show()
        npTextarea_result_souvenir_2.innerHTML = "freedom = 100" + "\n" + "happiness = 50";
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


//souvenir 3
//hide photo

$("#window_code_souvenir_3").hide();
$("#window_code_souvenir_3_2").hide();
$("#code_souvenir_3").hide();
$("#code_souvenir_3_2").hide();

$("#readme_souvenir_3_2").hide();
$("#window_readme_souvenir_3_2").hide();

$("#window_photo1_souvenir_3").hide();
$("#window_photo2_souvenir_3").hide();
$("#window_photo3_souvenir_3").hide();
$("#window_photo4_souvenir_3").hide();
$("#window_photo5_souvenir_3").hide();
$("#window_photo6_souvenir_3").hide();
$("#window_photo7_souvenir_3").hide();
$("#window_photo8_souvenir_3").hide();
$("#window_photo9_souvenir_3").hide();
$("#window_photo10_souvenir_3").hide();
$("#window_photo11_souvenir_3").hide();
$("#window_photo12_souvenir_3").hide();
$("#window_photo13_souvenir_3").hide();

$("#photo1_souvenir_3").hide();
$("#photo1_souvenir_3_2").hide()
$("#photo2_souvenir_3").hide();
$("#photo3_souvenir_3").hide();
$("#photo4_souvenir_3").hide();
$("#photo5_souvenir_3").hide();
$("#photo6_souvenir_3").hide();
$("#photo7_souvenir_3").hide();
$("#photo8_souvenir_3").hide();
$("#photo9_souvenir_3").hide();
$("#photo10_souvenir_3").hide();
$("#photo11_souvenir_3").hide();
$("#photo12_souvenir_3").hide();
$("#photo13_souvenir_3").hide();


var check_reason = 0;
$("#destination2").hide();
$("#destination3").hide();
$("#destination4").hide();

// photo souvenir 3 ----------------------------
$("#photo1_souvenir_3").click(function () {
    $("#window_photo1_souvenir_3").toggle(300);
});
$("#btnClose_photo1_souvenir_3").click(function () {
    $("#window_photo1_souvenir_3").fadeOut(300);
})

$("#photo2_souvenir_3").click(function () {
    $("#window_photo2_souvenir_3").toggle(300);
});
$("#btnClose_photo2_souvenir_3").click(function () {
    $("#window_photo2_souvenir_3").fadeOut(300);
})

$("#photo4_souvenir_3").click(function () {
    $("#window_photo4_souvenir_3").toggle(300);
});
$("#btnClose_photo4_souvenir_3").click(function () {
    $("#window_photo4_souvenir_3").fadeOut(300);
})
$("#photo5_souvenir_3").click(function () {
    $("#window_photo5_souvenir_3").toggle(300);
});
$("#btnClose_photo5_souvenir_3").click(function () {
    $("#window_photo5_souvenir_3").fadeOut(300);
})
$("#photo6_souvenir_3").click(function () {
    $("#window_photo6_souvenir_3").toggle(300);
});
$("#btnClose_photo6_souvenir_3").click(function () {
    $("#window_photo6_souvenir_3").fadeOut(300);
})

//Limousin
$("#photo3_souvenir_3").click(function () {
    $("#window_photo3_souvenir_3").toggle(300);
});
$("#btnClose_photo3_souvenir_3").click(function () {
    $("#window_photo3_souvenir_3").fadeOut(300);
})
$("#photo7_souvenir_3").click(function () {
    $("#window_photo7_souvenir_3").toggle(300);
});
$("#btnClose_photo7_souvenir_3").click(function () {
    $("#window_photo7_souvenir_3").fadeOut(300);
})

//ROAD TRIP
$("#photo8_souvenir_3").click(function () {
    $("#window_photo8_souvenir_3").toggle(300);
});
$("#btnClose_photo8_souvenir_3").click(function () {
    $("#window_photo8_souvenir_3").fadeOut(300);
})
$("#photo9_souvenir_3").click(function () {
    $("#window_photo9_souvenir_3").toggle(300);
});
$("#btnClose_photo9_souvenir_3").click(function () {
    $("#window_photo9_souvenir_3").fadeOut(300);
})
$("#photo10_souvenir_3").click(function () {
    $("#window_photo10_souvenir_3").toggle(300);
});
$("#btnClose_photo10_souvenir_3").click(function () {
    $("#window_photo10_souvenir_3").fadeOut(300);
})

$("#readme_souvenir_3_2").click(function () {
    $("#window_readme_souvenir_3_2").toggle(300);
});
$("#btnClose_readme_souvenir_3_2").click(function () {
    $("#window_readme_souvenir_3_2").fadeOut(300);
})

//USA
$("#photo11_souvenir_3").click(function () {
    $("#window_photo11_souvenir_3").toggle(300);
});
$("#btnClose_photo11_souvenir_3").click(function () {
    $("#window_photo11_souvenir_3").fadeOut(300);
})
$("#photo12_souvenir_3").click(function () {
    $("#window_photo12_souvenir_3").toggle(300);
});
$("#btnClose_photo12_souvenir_3").click(function () {
    $("#window_photo12_souvenir_3").fadeOut(300);
})
$("#photo13_souvenir_3").click(function () {
    $("#window_photo13_souvenir_3").toggle(300);
});
$("#btnClose_photo13_souvenir_3").click(function () {
    $("#window_photo13_souvenir_3").fadeOut(300);
})

//READ ME 
	$("#readme_souvenir_3").click(function () {
		$("#window_readme_souvenir_3").toggle(300);
	});
	$("#btnClose_readme_souvenir_3").click(function () {
		$("#window_readme_souvenir_3").fadeOut(300);
		$("#code_souvenir_3").show();
		if (check_reason==0){
			$("#photo7_souvenir_3").show();	
			$("#photo3_souvenir_3").show();	
			
		}
		
		
	})

//CODE 
	$("#code_souvenir_3").click(function () {
		$("#window_code_souvenir_3").toggle(300);
	});
	$("#btnClose_code_souvenir_3").click(function () {
		$("#window_code_souvenir_3").fadeOut(300);
		
	})

	
	$("#code_souvenir_3_2").click(function () {
		if(check_reason==0){
			$("#destination1").show();
			$("#destination2").hide();
			$("#destination3").hide();
			$("#destination4").hide();



		}
		else if (check_reason==1){
			$("#destination1").show();
			$("#destination2").show();
			$("#destination3").hide();
			$("#destination4").hide();

		}
		else if(check_reason==2){
			$("#destination1").show();
			$("#destination2").hide();
			$("#destination3").show();
			$("#destination4").hide();	

		}
		else if(check_reason==3){
			$("#destination1").show();
			$("#destination2").hide();
			$("#destination3").hide();
			$("#destination4").show();	
			

		}
		$("#window_code_souvenir_3_2").toggle(300);

	});
	$("#btnClose_code_souvenir_3_2").click(function () {
		$("#window_code_souvenir_3_2").fadeOut(300);
		
	})
	
	//RUN
	
	$("#btnRun_code_souvenir_3").click(function(){
        let motivation = document.querySelector('#souvenir_3_choice_1').selectedOptions[0].value;
		let raison1= document.querySelector('#souvenir_3_choice_2').selectedOptions[0].value;
		let raison2= document.querySelector('#souvenir_3_choice_3').selectedOptions[0].value;
		let raison3= document.querySelector('#souvenir_3_choice_4').selectedOptions[0].value;

		$("#code_souvenir_3_2").show();
		$("#window_code_souvenir_3_2").show(300);

		

		if ((raison1=='raison1' & raison2=='raison1' & raison3=='raison1' & motivation=='false')){
			check_reason=0
			
		}
		else if ((raison1=='raison2' & raison2=='raison2' & raison3=='raison2' & motivation=='false') |
		(raison1=='raison2' & raison2=='raison2' & raison3=='raison1' & motivation=='true') |
		(raison1=='raison2' & raison2=='raison1' & raison3=='raison2' & motivation=='true') |
		(raison1=='raison1' & raison2=='raison2' & raison3=='raison2' & motivation=='true') 
			){
			check_reason=2;
			
		}
		else if (motivation=='true' & raison1=='raison2'& raison2=='raison2' & raison3=='raison2'){
			check_reason=3;
			
		}
		else{
			check_reason=1;
			
		}

		if(check_reason==0){
			$("#destination1").show();
			$("#destination2").hide();
			$("#destination3").hide();
			$("#destination4").hide();
		}
		else if (check_reason==1){
			$("#destination1").show();
			$("#destination2").show();
			$("#destination3").hide();
			$("#destination4").hide();

		}
		else if(check_reason==2){
			$("#destination1").show();
			$("#destination2").hide();
			$("#destination3").show();
			$("#destination4").hide();	

		}
		else if(check_reason==3){
			$("#destination1").show();
			$("#destination2").hide();
			$("#destination3").hide();
			$("#destination4").show();	
		}
		
    })

    //Code
	$("#btnRun_code_souvenir_3_2").click(function(){
		
		let valuer = document.querySelector('#souvenir_3_choice_5').selectedOptions[0].value;

		if (valuer=='destination1'){
			$("#photo3_souvenir_3").show();
			$("#photo7_souvenir_3").show();
			
			$("#photo1_souvenir_3").hide();
			$("#photo2_souvenir_3").hide();
			$("#photo4_souvenir_3").hide();
			$("#photo5_souvenir_3").hide();
			$("#photo6_souvenir_3").hide();

			$("#photo8_souvenir_3").hide();
			$("#photo9_souvenir_3").hide();
			$("#photo10_souvenir_3").hide();
			$("#readme_souvenir_3_2").hide();


			$("#photo11_souvenir_3").hide();
			$("#photo12_souvenir_3").hide();
			$("#photo13_souvenir_3").hide();

		}
		else if(valuer=='destination2'){
			$("#photo3_souvenir_3").hide();
			$("#photo7_souvenir_3").hide();

			$("#photo1_souvenir_3").show();
			$("#photo2_souvenir_3").show();
			$("#photo4_souvenir_3").show();
			$("#photo5_souvenir_3").show();
			$("#photo6_souvenir_3").show();


			$("#photo8_souvenir_3").hide();
			$("#photo9_souvenir_3").hide();
			$("#photo10_souvenir_3").hide();
			$("#readme_souvenir_3_2").hide();


			$("#photo11_souvenir_3").hide();
			$("#photo12_souvenir_3").hide();
			$("#photo13_souvenir_3").hide();

		}
		else if(valuer=='destination3'){
			$("#photo3_souvenir_3").hide();
			$("#photo7_souvenir_3").hide();
			
			$("#photo1_souvenir_3").hide();
			$("#photo2_souvenir_3").hide();
			$("#photo4_souvenir_3").hide();
			$("#photo5_souvenir_3").hide();
			$("#photo6_souvenir_3").hide();

			$("#photo8_souvenir_3").show();
			$("#photo9_souvenir_3").show();
			$("#photo10_souvenir_3").show();
			$("#readme_souvenir_3_2").show();

			$("#photo11_souvenir_3").hide();
			$("#photo12_souvenir_3").hide();
			$("#photo13_souvenir_3").hide();

		}
		else if(valuer=='destination4'){
			$("#photo3_souvenir_3").hide();
			$("#photo7_souvenir_3").hide();

			$("#photo1_souvenir_3").hide();
			$("#photo2_souvenir_3").hide();
			$("#photo4_souvenir_3").hide();
			$("#photo5_souvenir_3").hide();
			$("#photo6_souvenir_3").hide();

			$("#photo8_souvenir_3").hide();
			$("#photo9_souvenir_3").hide();
			$("#photo10_souvenir_3").hide();
			$("#readme_souvenir_3_2").hide();


			$("#photo11_souvenir_3").show();
			$("#photo12_souvenir_3").show();
			$("#photo13_souvenir_3").show();

		}
		$("#window_code_souvenir_3_2").fadeOut(300);

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

//souvenir 6
var pokemon = new Audio("img/souvenir_6/Departure From the Hoenn Region.mp3");
var play_pokemon = 0
$("#btnRun_code_souvenir_6").click(function () {
    if (play_pokemon == 0){
        play_pokemon = 1;
        play_music = 0;
        div_musicIconFrame.innerHTML = `<i class="fa fa-play" aria-hidden="true"></i>`;
        audio.pause();
        pokemon.play();
    }
    else{
        play_pokemon = 0;
        pokemon.pause();
    }
});
$("#code_souvenir_6").click(function () {
    $("#window_code_souvenir_6").toggle(300);
});
$("#btnClose_code_souvenir_6").click(function () {
    play_pokemon = 0;
    pokemon.pause();
    $("#window_code_souvenir_6").fadeOut(300);
});
var play_music = 0;
var count = 0
var audio = new Audio("img/Infinite_Horizons.mp3");
audio.onended = function() {
    if(count != 1){
      this.play();
   }
};
const div_musicIconFrame = document.getElementById('musicIconFrame');
$("#musicIconFrame").click(function () {
    if(play_music == 0){
        play_music = 1
        div_musicIconFrame.innerHTML = `<i class="fa fa-pause" aria-hidden="true"></i>`;
        audio.play();
    }
    else{
        play_music = 0
        div_musicIconFrame.innerHTML = `<i class="fa fa-play" aria-hidden="true"></i>`;
        audio.pause();
    }
});
var video_souvenir_6 = document.getElementById("video_souvenir_6");
var open_video = 0
$("#photo1_souvenir_6").click(function () {
    if(open_video == 0){
        open_video = 1
        audio.pause();
        play_music = 0
        div_musicIconFrame.innerHTML = `<i class="fa fa-play" aria-hidden="true"></i>`;
        $("#window_photo1_souvenir_6").toggle(300);
    }
    else{
        //videoStopper("video_souvenir_6");
        video_souvenir_6.pause();
        location.href = "index.html";
    }
});
$("#btnClose_photo1_souvenir_6").click(function () {
    $("#window_photo1_souvenir_6").fadeOut(300);
    audio.pause();
    play_music = 0
    div_musicIconFrame.innerHTML = `<i class="fa fa-play" aria-hidden="true"></i>`;
    //videoStopper("video_souvenir_6");
    video_souvenir_6.pause();
    location.href = "index.html";
})