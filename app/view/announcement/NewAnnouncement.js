
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
    title:'New Announcement',
    modal:true,
    items:[{
        xtype:'form',
        layout:'vbox',
        buttonAlign : 'center', 
        reference:'newAnnouncement',       
        defaults:{
            width:300,
            labelWidth:70,
            margin:15,
            allowBlank:false
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
        }],
        buttons: [{
            text: 'Submit',
            formBind: true, //only enabled once the form is valid
            disabled: true,
            handler:'addAnnouncement'
        },{
            text:'Cancel',
            handler:'close'
        }]
    }]
    
});
