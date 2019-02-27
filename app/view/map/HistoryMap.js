

Ext.define('PIS.view.map.HistoryMap', {
    extend: 'Ext.container.Container',
    xtype:'historyMap',
    requires: [
        'PIS.view.map.HistoryMapController',
        'PIS.view.map.HistoryMapModel'
    ],

    controller: 'map-historymap',
    viewModel: {
        type: 'map-historymap'
    },
    layout: 'fit',
    items: {
        xtype: 'gmappanel',
        gmapType: 'map',
        reference:'googlemap',        
        center: new google.maps.LatLng(3.0522233,101.7228067),   
        mapOptions: {
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            zoomControl: true,
            panControl: false,
            rotateControl: true,
            streetViewControl: true,
            mapTypeControl: true,
            zoom: 15
        }
    }    

});
