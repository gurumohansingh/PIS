
Ext.define('PIS.view.announcement.Announcement',{
    extend: 'Ext.panel.Panel',
    xtype:'announcement',
    requires: [
        'PIS.view.announcement.AnnouncementController',
        'PIS.view.announcement.AnnouncementModel'
    ],
    title:'Announcement',
    controller: 'announcement-announcement',
    viewModel: {
        type: 'announcement-announcement'
    },
    defaults:{
        xtype:'panel',
        collapsible:true,
        collapsed:false,       
        closable:true,
        style: {
            "word-wrap": 'break-word'
          }
    } , 
    items:[
        
    ],
    tools:[{
        type:'plus',
        tooltip: 'Push new announcement',
        // hidden:true,
        handler:'newAnnouncement'
    }]
});
