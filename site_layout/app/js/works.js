$(document).ready(function(){

	var a=1;

	var ourRequest = new XMLHttpRequest();
	ourRequest.open('GET' , 'js/works.json');
	ourRequest.send();
	ourRequest.onload = function(){
		let our_data = JSON.parse(ourRequest.responseText);
		rendetTitleWork(our_data);
		renderIMG(our_data[0]);

		
		


		$(".works_cot_but").on('click', function(){
			let thisValue = $(this).attr("value");
			let  k;
			for (var i = 0; i < our_data.length; i++) {
				if(thisValue==our_data[i].title) {
					k=i; break;
				}
			}
		// /	renderIMG(our_data[k]);

	});

		caorusel();

	};

	function caorusel(){
		
		$('#carouselOne').owlCarousel({
			loop:true,
			center:true,
			margin:0,
			dots: false,
			URLhashListener:true,
			autoplayHoverPause:true,
			startPosition: 'URLHash',
			responsive:{
				0:{
					items:1
				},
				600:{
					items:2
				},
				1000:{
					items:3
				}
			}
		});
	}

	function rendetTitleWork(data){
		let str = "<ul>";
		let half = parseInt(data.length/2);
		console.log(half);
		for (var i = 0; i < data.length; i++) {

			str+=`
			<li><p class="works_cot_but" value="${data[i].title}"> ${data[i].title} </p></li>
			`;
			if(i==half)
			str+="</ul><ul>";
		}
		str+="</ul>"
		$(".cotegory_work").html(str);
	}

	function renderIMG(data){
		let str ="";
		for (var i = 0; i < data.src.length; i+=2) {
			str+= `
			<ul class="items">
			<li> 
			<div class="see_more">
			<div class="eye">
			<img src="img/works/eya.png">
			</div>
			<p class="big_see_more">Labore et dolore magnam</p>
			<p>Photography</p>
			</div>
			<img src="img/works/${data.src[i]}"> 
			</li>
			<li> 
			<div class="see_more">
			<div class="eye">
			<img src="img/works/eya.png">
			</div>
			<p class="big_see_more">Labore et dolore magnam</p>
			<p>Photography</p>
			</div>	
			<img src="img/works/${data.src[i+1]}"> 
			</li>
			</ul>
			`;
		}
		$('#carouselOne').html(str);

	}


});

