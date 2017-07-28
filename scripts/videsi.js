function initialize() {
	var mapCanvas = document.getElementById('map-canvas');
	var mapOptions = {
	  center: new google.maps.LatLng(32.802955, -96.769923),
	  zoom: 1,
	  mapTypeId: google.maps.MapTypeId.ROADMAP
	}
	var map = new google.maps.Map(mapCanvas, mapOptions)
}
$(window).load(function(){
	$("nav a").click(function(){$("nav a").removeClass("active"), $(this).addClass("active")});
	
	setInterval(function(){
		$("#part1 h1, #part2 h1, #part3 h1").css("top", "170px");
		setTimeout(function(){
			if($("#part1 h1").text()=="OUR MISSION IS"){
				$("#part1 h1").text("GIVE A");
				$("#part2 h1").text("HELPING HAND");
				$("#part3 h1").text("TO OTHERS").removeClass("three").addClass("two");
			}else if($("#part1 h1").text()=="GIVE A"){
				$("#part1 h1").text("TOGETHER WE");
				$("#part2 h1").text("CAN CHANGE");
				$("#part3 h1").text("MANY LIVES").removeClass("two").addClass("three");			
			}else if($("#part1 h1").text()=="TOGETHER WE"){
				$("#part1 h1").text("OUR MISSION IS");
				$("#part2 h1").text("TO HELP THOSE");
				$("#part3 h1").text("WHO NEED IT").removeClass("two three")			
			}
			$("#part1 h1, #part2 h1, #part3 h1").css("top", "0px")
		}, 500);
	}, 4000);
	
	$("#privacy").click(function(){
		$("#myModal").modal();
	});
	
	$("#hopeNavBar a").click(function(){
		$("div.comp").hide('fast');
		$("div."+$(this).attr("id")).show('fast');
	});
	

    initialize();
	
});