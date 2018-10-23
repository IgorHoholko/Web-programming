$(document).ready(function(){
	var ourRequest = new XMLHttpRequest();
	ourRequest.open('GET' , 'js/team.json');
	ourRequest.send();
	ourRequest.onload = function(){
		let our_data = JSON.parse(ourRequest.responseText);

		renderTXT(our_data);
		caorusel();

	};

	function caorusel(){
		
		$('#carouselTwo').owlCarousel({
			margin:20,
			dotsEach: true,
		
			
			responsive:{
				0:{
					items:1
				},
				550:{
					items:2
				},
				800:{
					items:3
				},
				1100:{
					items:4
				}
			}
		});
	}

	function renderTXT(data){
		let str ="";

		for (var i = 0; i < data.length; i++) {
			str+= `
			<div class="item">
					<div class="ava">

						<div class="active_person">
							<div class="instead">
								<h3>
									Nemo enim ipsam 
									voluptatem quia voluptas 
								</h3>
								<p>
									sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem.
								</p>
							</div>
							<ul>
								<li><a href="a">
								<i class="fa fa-twitter" aria-hidden="true"></i>
								</a></li>
								<li><a href="a"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
								<li><a href="a"><i class="fa fa-google-plus" aria-hidden="true"></i></a></li>
							</ul>
						</div>

						<img src="img/team/${data[i].src}">
					</div>

					<h2> ${data[i].name} </h2>
					<p class="work"> ${data[i].work} </p>
					
				</div>

			`;
		}
		$('#carouselTwo').html(str);

	}


});

