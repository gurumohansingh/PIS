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
            xtype: 'toolbar',
            itemId: 'headerBar',
            padding: 0,
            items: [
                {
                    xtype: 'component',
                    reference: 'senchaLogo',
                    html: '<h2>LIVE CONSOLE</h2>',
                    width: 250
                },
                {
                    xtype: 'component',
                    reference: 'liveTiming',
                    html: ''
                }, '->', {
                    xtype: 'button',
                    cursor: 'move',
                    text: 'Guru Singh'

                }]
        }
        ]
    }, {
        region: 'west',
        collapsible: true,
        title: 'Notifications',
        width: 300,
        split: true,
        cls: 'x-panel-body-default notificationpanel',
        scrollable: true,
        items: [{
            xtype: 'notifications'
        }]
    }, {
        region: 'south',
        title: 'Filter Data',
        collapsible: true,
        split: true,
        minHeight: 300,
        items: [
        {
            xtype: 'trackHistoryResult'
        }]
    }, {
        region: 'east',
        title: 'Overall Status',
        collapsible: true,
        split: true,
        width: 300,
        layout: 'fit',
        items:[{
            xtype:'statusChart'
        }]
    }, {
        region: 'center',
        title: 'Map View',
        layout: 'fit',
        items: [
            {
                xtype:'historyMap'
            }
        ]
    }]
});
