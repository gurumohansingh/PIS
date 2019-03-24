
Ext.define('PIS.view.announcement.NewAnnouncement',{
    extend: 'Ext.window.Window',

    requires: [
        'PIS.view.announcement.NewAnnouncementController',
        'PIS.view.announcement.NewAnnouncementModel'
    ],

    controller: 'announcement-newannouncement',
    viewModel: {
        type: 'announcement-newannouncement'
    },
    modal:true,
    items:[{
        xtype:'form',
        layout:'vbox',
        reference:'newAnnouncement',
       
        defaults:{
            width:300,
            labelWidth:70,
            margin:15,
        },
        items:[{
            xtype:'textfield',
            fieldLabel:'Text',
            name:'text'
        },{
            xtype:'datefield',
            fieldLabel:'Start',
            name:'start',
            format:'Y-m-d'
        },
        {
           xtype:'datefield',
           fieldLabel:'End',
           name:'end',
           format:'Y-m-d'
        },{
            xtype:'button',
            text:'Submit',
            handler:'addAnnouncement'
        }]
    }]
    
});
