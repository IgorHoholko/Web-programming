$(document).ready(function(){

	var ourRequest = new XMLHttpRequest();
	ourRequest.open('GET' , 'js/features.json');
	ourRequest.send();
	ourRequest.onload = function(){
		let our_data = JSON.parse(ourRequest.responseText);
		renderHTML(our_data);
		$('#feature_items').owlCarousel({

			margin:0,
			dotsEach: true,
			responsive:{
				0:{
					items:1
				},
				450:{
					items:2
				},
				1000:{
					items:3
				}
			}
		});

	};
	function renderHTML(data){
		let string = "";
		for (var i = 0; i < data.length; i++) {
			string +=	`
			<div class="item">
		
			<div class="stolb">
			<div class="img_feature">
			<img src="img/features/${data[i].icon}">
			</div>
			</div>
			<div class="text_feature">
			<h3> ${data[i].title}  </h3>
			<p>  ${data[i].text}  </p>
			</div>
			</div>
		
			`;
		}
		$('.feature_items').html(string);
		return ;

	};


});

