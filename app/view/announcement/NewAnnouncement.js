
Ext.define('PIS.view.announcement.NewAnnouncement', {
    extend: 'Ext.window.Window',

    requires: [
        'PIS.view.announcement.NewAnnouncementController',
        'PIS.view.announcement.NewAnnouncementModel'
    ],

    controller: 'announcement-newannouncement',
    viewModel: {
        type: 'announcement-newannouncement'
    },
    title: 'New Announcement',
    modal: true,
    items: [{
        xtype: 'form',
        layout: 'vbox',
        buttonAlign: 'center',
        reference: 'newAnnouncement',
        defaults: {
            width: 400,
            labelWidth: 70,
            margin: 15,
            allowBlank: false
        },
        items: [{
            xtype: 'textareafield',
            fieldLabel: 'Text',
            name: 'text'
        },
        {
            xtype: 'container',
            layout: 'hbox',
            items: [{

                xtype: 'datefield',
                fieldLabel: 'Start',
                labelWidth: 70,
                name: 'start',
                format: 'Y-m-d'
            },
            {
                xtype: 'timefield',
                format: 'H:i:s',
                name: 'startDateTime',
                reference: 'startDateTime',
                minValue: '00:00:00',
                maxValue: '24:00:00',
                allowBlank: false,
                increment: 60,
                anchor: '100%'
            }]
        },
        {
            xtype: 'container',
            layout: 'hbox',
            items: [
                {
                    xtype: 'datefield',
                    fieldLabel: 'End',
                    labelWidth: 70,
                    name: 'end',
                    format: 'Y-m-d'
                }, {
                    xtype: 'timefield',
                    format: 'H:i:s',
                    name: 'endDateTime',
                    minValue: '00:00:00',
                    maxValue: '24:00:00',
                    reference: 'endDateTime',
                    allowBlank: false,
                    increment: 60
                }]
        }
        ],
        buttons: [{
            text: 'Submit',
            formBind: true, //only enabled once the form is valid
            disabled: true,
            handler: 'addAnnouncement'
        }, {
            text: 'Cancel',
            handler: 'close'
        }]
    }]

});
