/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('PIS.view.main.Main', {
    extend: 'Ext.container.Viewport',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',

        'PIS.view.main.MainController',
        'PIS.view.main.MainModel'
    ],

    controller: 'main',
    viewModel: 'main',
    layout: 'border',
    flex: 1,
    items: [{
        region: 'north',
        border: false,
        margin: '0 0 0 0',
        maxHeight: 40,
        items: [{
            xtype: 'container',
            itemId: 'headerBar',
            layout:'hbox',
            padding: 0,
            items: [
                {
                    xtype: 'image',
                    reference: 'KTMLOGO',                   
                    src:'resources/images/KTMB-logo.png',
                    width: 130,
                    margin:5,
                    height:30
                },
                {
                    xtype: 'component',
                    reference: 'liveTiming',
                    margin:'0 0 0 100px',                    
                    html: ''
                }]
        }
        ]
    }, {
        region: 'west',
        collapsible: true,
        width: 300,
        split: true,
        cls: 'x-panel-body-default notificationpanel',
        layout:'fit',
        items: [{
            xtype: 'leftPanel'
           }]
    }, {
        region: 'south',
        title: 'Filter Data',
        collapsible: true,
        split: true,
        layout:'fit',      
        items: [
            {
                xtype: 'trackHistoryResult'
            }]
    }, {
        region: 'center',
        title: 'Map View',
        layout: 'fit',
        items: [
            {
                xtype: 'historyMap'
            }
        ]
    }]
});
