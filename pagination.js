$('.page').append('<div class="pagination"><ul></ul></div>');
$('.student-search').append('<input placeholder="Search for students..."><button>Search</button>')

const _1stList = '<li><a href="#" class="active">1</a></li>';
const _2ndList = '<li><a href="#">2</a></li>';
const _3rdList = '<li><a href="#">3</a></li>';
const _4thList = '<li><a href="#">4</a></li>';
const _5thList = '<li><a href="#">5</a></li>';
const _6thList = '<li><a href="#">6</a></li>';

const pages = [_1stList, _2ndList, _3rdList, _4thList, _5thList, _6thList];


$(pages).each(function(){
	$('.pagination ul').append(this);
});

$('.page').ready(function(){
	$('.student-item:gt(9)').hide();
});

$(function(){
	$('li a').click(function(){
		$('a.active').removeClass('active');
		$(this).addClass('active');
		});
	});

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



//-------------Exceed!!---------------//
//Here's my attempt at the input, filtering through the list. 
$('.student-search').on('input', function(){
	let name = $('input').val();
	
	$('.student-item').find($('h3')).each(function(){
		if($(name).val() === $('h3').text()){
			console.log("Works");
		}
	});
});




// $(function(){
// 	$('div.student-search button').click(function(){
// 		let name = $('input').val();
// 		if(name === $('h3').text(ramon)) {
// 			let hide = $('.student-item').hide();
// 			$(hide).hide('.student-item').not($('student-item').has(name));
// 			//console.log("Works");
// 		}
// 	});
// });























