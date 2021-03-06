
        function initMap() {
            map = new google.maps.Map(document.getElementById('map'), {
                center: { lat: 3.132585, lng: 101.68456 },
                zoom: 14
            });
        }

        // WEBSOCKET
        var markerStore = {};
        var markerInfoStore = {};
        var infoWindowStore = {};
        var bounds;

        var ws = new WebSocket('ws://47.254.213.69:8080/live');
        ws.onopen = function () {
            console.log("Websocket connected!");
            // Web Socket is connected, send data using send()
            // ws.send("Message to send");
        };

        ws.onmessage = function (evt) {
            var received_msg = evt.data;
            var index;

            var captured_gps = document.getElementById('captured_gps');




            wsData = JSON.parse(received_msg);

            console.log(wsData);
            rcv_Imei = parseFloat(wsData.dev_IMEI)
            rcv_Lat = parseFloat(wsData.veh_lat);
            rcv_Lng = parseFloat(wsData.veh_long);

            latDD = wsData.veh_lat.substring(0, 2);
            latMM = wsData.veh_lat.substring(2);
            longDDD = wsData.veh_long.substring(0, 3);
            longMM = wsData.veh_long.substring(3);

            // for (var key in markerStore) {
            //     if (key === 'length' || !markerStore.hasOwnProperty(key)) continue;
            //     captured_gps.innerHTML += rcv_Imei.toString();
            // }

            // convert datetime

            var dateString = wsData.veh_datetime;
            var reggie = /(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/;
            var dateArray = reggie.exec(dateString);
            var dateObject = new Date(
                (20 + dateArray[1]),
                (+dateArray[2]) - 1, // Careful, month starts at 0!
                (+dateArray[3]),
                (+dateArray[4]),
                (+dateArray[5]),
                (+dateArray[6])
            );


            lat_parsed = parseFloat(latDD) + parseFloat((latMM / 60).toFixed(7));
            long_parsed = parseFloat(longDDD) + parseFloat((longMM / 60).toFixed(7));
            markerInfoStore[rcv_Imei] = '<p><strong>' + rcv_Imei + '</strong></p><p>Speed: ' + wsData.veh_speed + '</p><p>Coord: ' + lat_parsed + ' , ' + long_parsed + '</p><p>Last received:' + dateObject + '</p>';


            console.log(lat_parsed);
            console.log(long_parsed);
            if (markerStore.hasOwnProperty(rcv_Imei)) {
                infoWindowStore[rcv_Imei].setContent(markerInfoStore[rcv_Imei]);
                markerStore[rcv_Imei].setPosition(new google.maps.LatLng({ lat: lat_parsed, lng: long_parsed }));
                bounds = new google.maps.LatLngBounds()
                // map.setCenter(new google.maps.LatLng({ lat: lat_parsed, lng: long_parsed }));

            } else {
                console.log("NEW MARKER!");


                //Create new marker
                var marker = new google.maps.Marker({
                    position: new google.maps.LatLng({ lat: lat_parsed, lng: long_parsed }),
                    title: wsData.dev_IMEI + ": " + wsData.veh_speed + " (km/h)",
                    map: map
                });
                //Create new marker info window

                var infowindow = new google.maps.InfoWindow({
                    content: markerInfoStore[rcv_Imei],
                    disableAutoPan: true

                });

                google.maps.event.addListener(marker, 'click', function () {
                    infowindow.open(map, marker);
                });

                infowindow.open(map, marker);
                infoWindowStore[rcv_Imei] = infowindow;
                markerStore[rcv_Imei] = marker;

                
                //bounds.extend(markerStore[rcv_Imei].getPosition());
                //map.fitBounds(bounds);
            }
        };

        ws.onclose = function () {
            // websocket is closed.
            alert("Connection is closed...");
        };

        window.onbeforeunload = function (event) {
            socket.close();
        };