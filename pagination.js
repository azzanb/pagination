//Dynamically add pagination html with .append()
$('.page').append('<div class="pagination"><ul></ul></div>');
$('.page-header').append('<div class="student-search"></div>');

//Also, dynamically add list elements
//Is there a better way of doing this? I feel I skirted around the rules with the dynamic <li>s, but I couldn't think of another way. 
const _1stList = '<li><a href="#" class="active">1</a></li>';
const _2ndList = '<li><a href="#">2</a></li>';
const _3rdList = '<li><a href="#">3</a></li>';
const _4thList = '<li><a href="#">4</a></li>';
const _5thList = '<li><a href="#">5</a></li>';
const _6thList = '<li><a href="#">6</a></li>';

//Place dynamic list in an array and append to ".pagination"
const pages = [_1stList, _2ndList, _3rdList, _4thList, _5thList, _6thList];
$(pages).each(function(){
	$('.pagination ul').append(this);
});

//When the page starts, only show the first 10 students
$('.page').ready(function(){
	$('.student-item:gt(9)').hide();
});

//When clicking on a different button, remove "active" class from page 1 and stick to page the user clicks
$(function(){
	$('li a').click(function(){
		$('a.active').removeClass('active');
		$(this).addClass('active');
		});
	});

//Use .show() and .hide() to show 10 students for each page
//Here as well: is there a better method? I searched all around the jQuery API Doc and googled my ass off, but this is what I went with. 
$('.pagination li a').on('click', function(){
	if($(this).text() === "1"){
		$('.student-item:lt(10)').show();
		$('.student-item:gt(9)').hide();
	}
	if($(this).text() === "2"){
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
});


























