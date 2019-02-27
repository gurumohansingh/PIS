
Ext.define('PIS.view.Notification.Notifications',{
    extend: 'Ext.container.Container',
    xtype:'notifications',
    requires: [
        'PIS.view.Notification.NotificationsController',
        'PIS.view.Notification.NotificationsModel'
    ],

    controller: 'notification-notifications',
    viewModel: {
        type: 'notification-notifications'
    },   
    flex:1,
    defaults:{
        xtype:'panel',
        collapsible:true,
        collapsed:true,
        title:'ok',
        closable:true,
        style: {
            "word-wrap": 'break-word'
          }
    } , 
    items:[
        
    ]
});