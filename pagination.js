$('.page').append('<ul class="pagination"><li><a class="active" href="#"></a></li></ul>');
// $('.pagination').append('<li><a class="active" href="#">1</a></li>');
// $('.pagination li').append('<a class="active" href="#">1</a>');


$('.pagination').pagination({
	items: $('.student-item').length,
	itemsOnPage: 10
});


let list = [];
$('.student-list').each(function(){
	list = $('li.student-item')
});  

$(list).each(function(){
	for(let i = 0; i <= list.length; i += 1){
		if(i < 10){
			$('.pagination li.active').append(list[i]);
			}
		}
});



// I'm lost on creating HTML pagination. The buttons are there, but should I use a jquery method to create a string and link them both through the DOM? 

// 1) jquery method to move ul instantly to an array
// 2) use .each() to iterate through the array