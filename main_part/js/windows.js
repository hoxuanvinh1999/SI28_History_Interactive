// windows.js
// For the Windows 10 CSS3 project 
// (c) 2016 Nitin Seshadri
//
// Checking if device is a mobile phone and alerting the user if that is the case
// If not, checks that screen is wide enough
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
 console.log("Please access this page using a computer for the best experience.");
// Hides these windows so it doesn't crowd the viewport
$("#folderwindow").hide()
$("#folderexplorer").hide()
$("#notepad").hide()
$("#winver").hide()
} else {
// Checking if screen is big enough and alerting the user if not
if($(window).width() < 800){
  alert("Please make the window larger for the best experience.");
}
}
// Defining some common functions
function menuItem(idopen) {
	$(idopen).toggle();
}
// File uploader
function onFileSelected(event) {
	dropHide();
	var selectedFile = event.target.files[0];
	var reader = new FileReader();
	var result = document.getElementById("npTextarea");
	reader.onload = function(event) {
		result.innerHTML = event.target.result;
	};
	reader.readAsText(selectedFile);
};
// Hiding the dropdown menu after an item is clicked
function dropHide(idclose) {
	$(idclose).hide();
};
// Maintains the taskbar clock. 
// New method that is better that the old date.js and taskClock.js-based method.
function checkMins(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
};
function startTime() {
var today = new Date();
var dd = today.getDate();
var jsmm = today.getMonth();
var mm = jsmm + 1; // Fix JavaScript months, which are base 0 instead of base 1
var cent = today.getYear();
var yy = 1900 + cent;
var hh = today.getHours();
var h = ((hh + 11) % 12 + 1);
var suffix = (hh >= 12)? 'PM' : 'AM';
var m = today.getMinutes();
var m = checkMins(m);
document.getElementById("taskClock").innerHTML =
h + ":" + m + "&nbsp;" + suffix + "<br>" + mm + "/" + dd + "/" + yy;
var t = setTimeout(startTime, 500);
};
// JQuery functions that handle most of the magic
$(document).ready(function() {
	// Changes focus of clicked window to be on top
	$(".window").click(function() {
		$('div[class^="window"]').css('z-index', '0');
		$(this).css('z-index', '10');
	});
	// Draggable windows
	$('.window').draggable({
		containment: "parent"
	});
	var handle = $(".window").draggable("option", "handle");
	$('.window').draggable("option", "handle", ".titleFrame");
	// winver
	// Closing the winver dialog
	$("#winverClose").click(function() {
		$("#winver").fadeOut(300);
	});
	$("#winverOK").click(function() {
		$("#winver").fadeOut(300);
	});
	// Taskbar icon
	$("#winverIconFrame").click(function() {
		$("#winver").toggle(300);
	});
	// Notepad
    // X button
	$("#npClose").click(function() {
		$("#notepad").fadeOut(300);
	});
    // Taskbar icon
	$("#notepadIconFrame").click(function() {
		$("#notepad").toggle(300);
	});
	// Some Notepad dropdown items
	// Creates new file (clears contents of textarea based on confirm dialog)
	$("#npNew").click(function() {
		var r = confirm('Do you want to save changes to Untitled?');
		if (r == true) {
			dropHide("#dropdown");
		    var text = $("#npTextarea").val();
		    var blob = new Blob([text], {
				type: "text/plain;charset=utf-8"
		    });
		    saveAs(blob, "Untitled.txt");
			$('#npTextarea').val('');
		} else {
			// Do nothing
			dropHide("#dropdown");
		}
	});
    // Save file downloads contents of textarea to disk using FileSaver.js
	$("#npSave").click(function() {
		dropHide("#dropdown");
		var text = $("#npTextarea").val();
		var blob = new Blob([text], {
			type: "text/plain;charset=utf-8"
		});
		saveAs(blob, "Untitled.txt");
	});
	// Save As does the same thing as Save
	$("#npSaveAs").click(function() {
		dropHide("#dropdown");
		var text = $("#npTextarea").val();
		var blob = new Blob([text], {
			type: "text/plain;charset=utf-8"
		});
		saveAs(blob, "Untitled.txt");
	});
	// Page Setup does nothing (so far)
	$("#npPageSetup").click(function() {
		dropHide("#dropdown");
	});
    // Prints contents of textarea
	$("#npPrint").click(function() {
		dropHide("#dropdown");
		var DocumentContainer = document.getElementById("npTextarea");
		var html = '<!DOCTYPE html><html><head><meta charset="UTF-8"><title>Print Preview</title></head><body style="background:#ffffff;"><p style="font-family:monospace;text-align:center;">Untitled</p><pre>' +
			DocumentContainer.value +
			'</pre></body></html>';

		var WindowObject = window.open("", "PrintWindow",
			"width=750,height=650,top=50,left=50,toolbars=no,scrollbars=yes,status=no,resizable=yes");
		WindowObject.document.writeln(html);
		WindowObject.document.close();
		WindowObject.focus();
		WindowObject.print();
		WindowObject.close();

	});
	// Exit menu item
	$("#npExit").click(function() {
		dropHide("#dropdown");
		$("#notepad").fadeOut(300);
	});
	// Edge (not implemented yet)
	// Taskbar icon
	$("#edgeIconFrame").click(function() {
		alert("Not supported yet");
	});
	// Task View (not implemented yet)
	// Taskbar icon
	$("#taskviewIconFrame").click(function() {
		alert("Not supported yet");
	});
	// Start Menu
	// Taskbar icon
	$("#startIconFrame").click(function() {
		$("#startMenu").toggle(300);
	});
	// Hide start menu when a window is clicked
	$('div[class^="window"]').click(function() {
		$("#startMenu").hide();
	});
	// Taskbar search bar
	$("#taskSearch").focusin(function() {
		$('div[class^="window"]').css('z-index', '0');
		$(this).css('z-index', '10');
		$("#startMenu").hide();
		$("#SearchResults").show();
	});
	$("#taskSearch").focusout(function() {
		$("#SearchResults").hide();
		$('#taskSearch').val('');
	});
	// Show desktop button in taskbar (No Peek yet)
	$("#showDesktop").click(function() {
		$('div[class^="window"]').toggle();
	});

	$("#folderIconFrame").click(function() {
		$("#folderwindow").toggle(300);
	});
	$("#npClose_1").click(function() {
		$("#folderexplorer").fadeOut(300);
	});
	// 
	$("#npNew_1").click(function() {
		var r = confirm('Do you want to save changes to Untitled?');
		if (r == true) {
			dropHide("#dropdown_1");
		    var text = $("#npTextarea_1").val();
		    var blob = new Blob([text], {
				type: "text/plain;charset=utf-8"
		    });
		    saveAs(blob, "Untitled.txt");
			$('#npTextarea_1').val('');
		} else {
			// Do nothing
			dropHide("#dropdown_1");
		}
	});
    // Save file downloads contents of textarea to disk using FileSaver.js
	$("#npSave_1").click(function() {
		dropHide("#dropdown_1");
		var text = $("#npTextarea_1").val();
		var blob = new Blob([text], {
			type: "text/plain;charset=utf-8"
		});
		saveAs(blob, "Untitled.txt");
	});
	// Save As does the same thing as Save
	$("#npSaveAs_1").click(function() {
		dropHide("#dropdown_1");
		var text = $("#npTextarea_1").val();
		var blob = new Blob([text], {
			type: "text/plain;charset=utf-8"
		});
		saveAs(blob, "Untitled.txt");
	});
	// Page Setup does nothing (so far)
	$("#npPageSetup_1").click(function() {
		dropHide("#dropdown_1");
	});
    // Prints contents of textarea
	$("#npPrint").click(function() {
		dropHide("#dropdown_1");
		var DocumentContainer = document.getElementById("npTextarea_1");
		var html = '<!DOCTYPE html><html><head><meta charset="UTF-8"><title>Print Preview</title></head><body style="background:#ffffff;"><p style="font-family:monospace;text-align:center;">Untitled</p><pre>' +
			DocumentContainer.value +
			'</pre></body></html>';

		var WindowObject = window.open("", "PrintWindow",
			"width=750,height=650,top=50,left=50,toolbars=no,scrollbars=yes,status=no,resizable=yes");
		WindowObject.document.writeln(html);
		WindowObject.document.close();
		WindowObject.focus();
		WindowObject.print();
		WindowObject.close();

	});
	// Exit menu item
	$("#npExit_1").click(function() {
		dropHide("#dropdown_1");
		$("#folderexplorer").fadeOut(300);
	});
	// folderwindow
	$("#npClose_2").click(function() {
		$("#folderwindow").fadeOut(300);
	});
});
