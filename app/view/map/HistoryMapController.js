Ext.define('PIS.view.map.HistoryMapController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.map-historymap',
    init:function()
    {
      var me=this;
      Ext.GlobalEvents.on('showOnMap', me.addLine, me);
    },
    addMark:function()
    {
      var map=this.getView().gmap;
    },
    addLine:function(data){
      debugger
      var map=this.getView().lookupReference('googlemap').gmap;
      var lineSymbol = {
        path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
      };
      var flightPath = new google.maps.Polyline({
        path: data.marks,
        geodesic: true,
        strokeColor: '#FF0000',
        strokeOpacity: 1.0,
        strokeWeight: 2,
        icons: [{
          icon: lineSymbol,
          offset: '100%'
        }]
      });
      map.center=new google.maps.LatLng(data.marks[0]), 
      flightPath.setMap(map);
    
    }

});
