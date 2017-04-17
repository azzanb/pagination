//Dynamically add pagination html with .append()
$('.page').append('<div class="pagination"><ul></ul></div>');


//Calculate number of students per page and number of pages as a whole number
let studentNum = $('.student-item').length;
let divide = (studentNum / 10);
let numOfPages = Math.ceil(divide);

//Have the number of buttons automatically calculated based on number of students using a loop
$(function(){
	for(i = 1; i <= numOfPages; i++){
		$('.pagination ul').append('<li><a href="#">' + i + '</a></li>');
	}
});

//When the page starts, only show the first 10 students
$('.page').ready(function(){
	$('.student-item:gt(9)').hide();
	$('li a').first().addClass("active");
});

//When clicking on a different button, remove "active" class from page 1 and stick to page the user clicks
$(function(){
	$('li a').click(function(){
		$('a.active').removeClass('active');
		$(this).addClass('active');

//Under the same "click, use .show() and .hide() to show 10 students for each page
	if($('a.active').text() === "1"){
		$('.student-item:lt(10)').show();
		$('.student-item:gt(9)').hide();
	}
	if($('a.active').text() === "2"){
		$('.student-item:lt(10)').hide();
		$('.student-item:gt(9)').show();
		$('.student-item:gt(19)').hide();
	}	
	if($(this).text() === "3"){
		$('.student-item:lt(20)').hide();
		$('.student-item:gt(19)').show();
		$('.student-item:gt(29)').hide();
	}	
	if($(this).text() === "4"){
		$('.student-item:lt(30)').hide();
		$('.student-item:gt(29)').show();
		$('.student-item:gt(39)').hide();
	}	
	if($(this).text() === "5"){
		$('.student-item:lt(40)').hide();
		$('.student-item:gt(39)').show();
		$('.student-item:gt(49)').hide();
	}	
	if($(this).text() === "6"){
		$('.student-item:lt(50)').hide();
		$('.student-item:gt(49)').show();
		$('.student-item:gt(59)').hide();
	}
	if($(this).text() === "7"){
		$('.student-item:lt(60)').hide();
		$('.student-item:gt(59)').show();
		$('.student-item:gt(69)').hide();
	}
	});
});





