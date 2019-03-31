
Ext.define('PIS.view.announcement.Announcement',{
    extend: 'Ext.panel.Panel',
    xtype:'announcement',
    requires: [
        'PIS.view.announcement.AnnouncementController',
        'PIS.view.announcement.AnnouncementModel'
    ],    
    controller: 'announcement-announcement',
    viewModel: {
        type: 'announcement-announcement'
    },
    defaults:{
        xtype:'panel',
        collapsible:true,
        collapsed:false,
        //closable:true,
        style: {
            "word-wrap": 'break-word'
          },        
         buttons:[{
            text:'Edit',
            tooltip: 'Edit Announcement',            
            handler:'editAnnouncement',
            scale : "small"
        },{
            text:'Delete',
            tooltip: 'Delete',            
            handler:'deleteAnnouncement',
            scale : "small"
        }
        ]
    }, 
    items:[],
    tools:[{
        type:'refresh',
        tooltip: 'Refresh Announcement',
        // hidden:true,
        handler:'loadAnnouncement'
    },{
        xtype:'button',
        text:'Create',
        tooltip: 'Push new announcement',
        // hidden:true,
        handler:'newAnnouncement'
    }]
});
