
var ourRequest = new XMLHttpRequest();
ourRequest.open('GET' , 'js/tabs.json');
ourRequest.send();
ourRequest.onload = function(){
	var our_data = JSON.parse(ourRequest.responseText);
	renderTitle(our_data);
	$(".title_tab").on("click", function() {
		$(".title_tab").removeClass('active');
		$(this).addClass('active');
		let k = $(this).attr('value');
		console.log(k);
		for (var i = 0; i < our_data.length; i++) 
			if (our_data[i].title==k) {
				k = i;
				break
			}
		console.log(our_data[k]);
		renderTXT(our_data[k]);
	});	

};


function renderTitle(data){
	let string = "";
	for (var i = 0; i < data.length; i++) {
		string += `
		<div value =  "${data[i].title}" class="title_tab">
		<p>  ${data[i].title}  </p>
		</div>
		`;
	}
	$('.menu_tabs').html(string);
}

function renderTXT(data){
	let string = `
		<p>  ${data.text} </p>
		`;
	$('.tab_text').html(string);
}