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


    
	
