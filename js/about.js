function initMap() {

	var emporium = {
        info: '<big><b>Emporium Melbourne</b></big><img src="images/logo_big_icon_dark.png" width="100px" style="float:right"><br>\
					Level 3, Cafe Court, 287 Lonsdale St, Melbourne VIC 3000<br>\
                    <br>\
					<b>Sat-Wed:</b> 10:00am - 7:00pm<br>\
					<b>Thur-Fri:</b> 10:00am - 9:00pm<br>',
		lat: -37.812421,
		long: 144.963832
	};

	var westfield = {
		info: '<big><b>Westfield Doncaster</b></big><img src="images/logo_big_icon_dark.png" width="100px" style="float:right"><br>\
					Level 1, Food Court, 619 Doncaster Rd, Doncaster VIC 3108<br>\
                    <br>\
					<b>Sat-Wed:</b> 10:00am - 5:00pm<br>\
					<b>Thur-Fri:</b> 10:00am - 9:00pm<br>',
		lat: -37.786772,
		long: 145.125089
	};

	var locations = [
      [emporium.info, emporium.lat, emporium.long, 0],
      [westfield.info, westfield.lat, westfield.long, 1],
    ];

	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 12,
        // center: new google.maps.LatLng((emporium.lat+westfield.lat)/2, (emporium.long+westfield.long)/2),
        center: new google.maps.LatLng(-37.776405, 145.047296),
		mapTypeId: google.maps.MapTypeId.ROADMAP,
        disableDefaultUI: true
	});


	var marker, i;

	for (i = 0; i < locations.length; i++) {
        var infowindow = new google.maps.InfoWindow({});
		marker = new google.maps.Marker({
			position: new google.maps.LatLng(locations[i][1], locations[i][2]),
            animation: google.maps.Animation.DROP,
			map: map
		});

		// google.maps.event.addListener(marker, 'click', (function (marker, i) {
		// 	return function () {
		// 		infowindow.setContent(locations[i][0]);
		// 		infowindow.open(map, marker);
		// 	}
		// })(marker, i));

        // if (i == 0) {
            infowindow.setContent(locations[i][0]);
            infowindow.open(map, marker);
        // }
	}
}
