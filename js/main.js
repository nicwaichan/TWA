/* ***********************************
    COPYRIGHT (C) Nicholas Chan 2014
    All rights reserved worldwide
          nicwaichan.@gmail.com
	*********************************** */

$.ajaxSetup({		//	set this to allow variable passing out of $.getJSON function
	async: false
});

var i = 0,
	keyArr = [],
	valueArr = [];

$.getJSON("js/data.json", function (data) {
	checkRecursive(data);
});

function checkRecursive(data) {
	$.each(data, function (key, data) {
		if (data instanceof Object) {	//	if not key:value pair, recall checkRecursive function again
			checkRecursive(data);
		} else {						//	otherwise seperate and store key & value into 2 arrays
			keyArr[i] = key;
			valueArr[i] = data;
			i++;
		};
	});
};

iniVal = valueArr[$.inArray("start", keyArr)];
maxVal = valueArr[$.inArray("finish", keyArr)];
durVal = valueArr[$.inArray("duration", keyArr)];

running = 0;

$('progress').val(iniVal).attr("max", maxVal);

$(window).on("load", function() {
	progressing();
});

function progressing() {
	running = setInterval(function() {
		$('progress').val(iniVal)
			iniVal++;

		document.getElementById("countVal").innerHTML = "Progress " + iniVal + "%";		
		$('#ieProgressBar').css('width', iniVal+'%');	//for IE9

		if (iniVal == 101) {		//set 101 to make sure progress value(100) fully displayed  
			document.getElementById("countVal").innerHTML = "This task is 100% completed " + "<img src='images/tick.png' id='tickIco'>";
			$('progress').removeClass("progressBar").addClass('progressBarDone');
			$('#ieProgressBar').css('background', '#75BC03');
			clearInterval(running);
		}
	}, durVal / maxVal);				//use 20ms to increase 1 step, total duration = 2000ms
	
	$('progress').removeClass("progressBarDone").addClass('progressBar');	//restore to blue bar
	$('#ieProgressBar').css('background', '#7FC8FD');
};

$(window).on("load resize orientationchange", function() {
	detectScreenHeight = $(window).innerHeight();
	progressBoxHeight = $('#progressBox').outerHeight();
	middlePoint = (detectScreenHeight - progressBoxHeight) / 2 ; //float progress box in the middle of the screen
	$('#progressBox').css('top', middlePoint);
});

if ( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) == 0) {

	$('head').append('<link rel="stylesheet" href="css/styleDesktop.css" type="text/css" />');

	$('#resetBtn').on("click", function() {
		if (iniVal == 101) {
			iniVal = 0;
			progressing();
		} else {
			iniVal = 0;	
		}
	});

	$('#pauseBtn').on("mouseenter", function() {
		clearInterval(running);
		}).on("mouseleave", function() {
		if (iniVal < 101) {
			progressing();
		};
	});

	$('#closeBtn').on("click", function(){
		clearInterval(running);
		$('#progressBox').animate({
		marginTop: '100%',
		}, {
			duration: 800,
			easing: 'easeOutBounce',
		});
		$('#showBoxBtn').css('display', 'block');
		$('#resetBtn, #pauseBtn').css('display', 'none');
	});

	$('#showBoxBtn').on("click", function(){
		$(this).css('display', 'none');
		$('#resetBtn, #pauseBtn').css('display', 'block');
		$('#progressBox').animate({
		marginTop: '0%',
		}, {
			duration: 800,
			easing: 'easeOutBounce',
		});
		setTimeout(function() {
			iniVal = 0;
			progressing();
		}, 900);
	});

} else { 		//mobile layouts and events

	$('head').append('<link rel="stylesheet" href="css/styleMobile.css" type="text/css" />');

	$('#resetBtn, #pauseBtn, #showBoxBtn').on("touchstart", function(){
		$(this).css('height', '57px');
		}).on("touchend", function(){
		$(this).css('height', '60px');
	});

	$('#closeBtn').on("touchstart", function(){
		$(this).css('top', '8px').css('color', 'red');
		}).on("touchend", function(){
		$(this).css('top', '7px').css('color', '#727272');
	});

	$('#resetBtn').on("touchend", function() {
		if (iniVal == 101) {
			iniVal = 0;
			progressing();
		} else {
			iniVal = 0;	
		}
	});

	$('#pauseBtn').on("touchstart", function() {
		clearInterval(running);
		}).on("touchend", function() {
		if (iniVal < 101) {
			progressing();
		};
	});

	$('#closeBtn').on("touchend", function(){
		clearInterval(running);
		$('#progressBox').animate({
		marginTop: '100%',
		}, {
			duration: 800,
			easing: 'easeOutBounce',
		});
		$('#showBoxBtn').css('display', 'block');
		$('#resetBtn, #pauseBtn').css('display', 'none');
	});

	$('#showBoxBtn').on("touchend", function(){
		$(this).css('display', 'none');
		$('#resetBtn, #pauseBtn').css('display', 'block');
		$('#progressBox').animate({
		marginTop: '0%',
		}, {
			duration: 800,
			easing: 'easeOutBounce',
		});
		setTimeout(function() {
			iniVal = 0;
			progressing();
		}, 900);
	});

};