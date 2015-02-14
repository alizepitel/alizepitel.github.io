var APWS = function(){
	/*make one element of the carousel*/
	var makeCarouselElement = function(imgPath){
		var res = '<div>';
		res += '<img src="'+imgPath+'"/>';
		res += '</div>';
		return res;
	};
	var makeCarousel = function(divObj,imgFolder, imgNb, ext){
		/*empty the div*/
		divObj.empty();
		divObj.addClass('owl-carousel');
		/*loop on images*/
		for (var i=1; i<imgNb+1;i++){
			/*append a carouselElement to the div*/
			divObj.append(makeCarouselElement(imgFolder+i+ext));
		}
		/*use the owlCarousel librairy*/
		divObj.owlCarousel({
			autoPlay: 6000,
			singleItem:true,
			pagination:false,
			stopOnHover:true,
			transitionStyle:'fade'
		}); 
	};
	return{
		makeCarousel : makeCarousel
	};
}();
$(document).ready(function() {
	/*Title is a link to home page*/
	$("#title").click(function(){
		window.location.href=window.location.href;
	});
	/*make home carousel*/
	APWS.makeCarousel($('#carousel'),'./img/', 5, '.jpg');
	/*List of main chapters*/
	var chapterList = ["home","work","about","contact"];
	/*On document ready, home link gets bigger*/
	$("#home-link").animate({
			opacity: 1,
			borderWidth: 3
		}, 300 );
	/*When clicking on a span element with class link class link*/
	$("span.link").click(function(){
		/*animate the element clicked*/
		$(this).animate({
			opacity: 1,
			borderWidth: 3
		}, 300 );
		/*all other span with link class get thinner*/
		$(this).siblings(".link").animate({
			opacity: 0.5,
			borderWidth: 1
		}, 300 );
		/*for each div in chapterlist */
		for(var i=0;i<chapterList.length;i++){
			/*Default state is none (invisible)*/
			var _state = 'none';
			/*if the div id is 1st part of span id eg:home / home-link*/
			if(chapterList[i]==$(this).attr("id").split('-')[0]){
				/*set the state to visible (block)*/
				_state = 'block';
			}
			//set the display to state
			$("#"+chapterList[i]).css({display:_state});
		}		
	});
});
