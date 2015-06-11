$(document).ready(function(){
	$('.jcarousel').jcarousel({
		list : '.jcarousel-list',
		wrap: 'circular'
	});

	$('.jcarousel-prev').click(function() {
	    $('.jcarousel').jcarousel('scroll', '-=1');
	});

	$('.jcarousel-next').click(function() {
	    $('.jcarousel').jcarousel('scroll', '+=1');
	});

    // $('.jcarousel-pagination').jcarouselPagination();

    // var carouselItems = $('li');

	$('.jcarousel-pagination')
	.on('jcarouselpagination:active', 'li', function() {
		$(this).addClass('active');
	})
	.on('jcarouselpagination:inactive', 'li', function() {
		$(this).removeClass('active');
	})

 //    $('.jcarousel-pagination').jcarouselPagination({
	//     'item': function(page, carouselItems) {
	//     	console.log(page, carouselItems);
	//         return '<li><a href="#' + page + '">Page ' + page + '</a></li>';
	//     },
	//     'perPage': 1
	// });

	$('.jcarousel-pagination').jcarouselPagination({
	    'item': function(page, carouselItems) {
	        // return '<li><a href="#' + page + '">' + 'O' + '</a></li>';
	        return '<li class="jenn"><a href="#' + page + '"></a></li>';
	    },
	    //To find the right 'perPage' quantity, divide the total number of items in the carousel by the number of dots you want.

	    //Total number of items in carousel divided by items perPage = number of dots you want

	    //Number of pagination dots visible is how many clicks it will take to get from one end to the other where each click moves the carousel
	    //by incrementing by the number perPage
	    //perPage: 1 ensures the carousel shifts only one item at a time and generates one dot for every item in carousel
	    'perPage': 1
	});





	    // $('.mycarousel-prev').jcarouselControl({target:'-=1'});
	    // $('.mycarousel-next').jcarouselControl({target:'+=1'});









})