
Ext.define('PIS.view.Component.MapPanel',{
    extend: 'Ext.panel.Panel',
    xtype: 'mappanel',
    requires: [
        'PIS.view.Component.MapPanelController',
        'PIS.view.Component.MapPanelModel'
    ],

    controller: 'component-mappanel',
    viewModel: {
        type: 'component-mappanel'
    },
    layout: 'fit',
    title: 'GMap Window',
    width:900,
    height:900,
    constructor: function(config) {        
        config = config || {};
        map = new ol.Map({
            layers: [
                new ol.layer.Tile({
                    source: new ol.source.Stamen({
                        layer: 'watercolor'
                    })
                })
            ],
            view: new ol.View({
                projection: 'EPSG:4326',
                center: [11.315918, 42.827639],
                //center: ol.proj.fromLonLat( [-8.751278, 40.611368] ),
                zoom: 5,
                maxZoom: 16,
                minZoom: 1
            })
        });
        this.callParent(arguments);
    },
    
    /*listeners: {
        afterrender: 'onAfterRender'
    }*/
    
    
});
