
Ext.define('PIS.view.panel.LeftPanel', {
    extend: 'Ext.tab.Panel',
    xtype: 'leftPanel',
    requires: [
        'PIS.view.panel.LeftPanelController',
        'PIS.view.panel.LeftPanelModel'
    ],

    controller: 'panel-leftpanel',
    viewModel: {
        type: 'panel-leftpanel'
    },    
    items: [
        {
            title: 'Notifications',
            reference: 'notificationsTab',           
            layout:'fit',
            items: [{
                xtype: 'notifications',
                scrollable: 'y'
            }]
        }, {
            title: 'Announcement',
            reference: 'announcementTab',
            layout:'fit',         
            items: [{
                xtype: 'announcement',
                scrollable: 'y'
            }]
        }]
});
