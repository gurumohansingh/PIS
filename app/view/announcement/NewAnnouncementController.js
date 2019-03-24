Ext.define('PIS.view.announcement.NewAnnouncementController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.announcement-newannouncement',
    addAnnouncement:function()
    {        
        var view=this.getView();
        var parantView=view.parentView;
        var formdata=view.lookupReference('newAnnouncement').getForm().getValues();

        Ext.Ajax.request({
            url:ENDPOINT_HOST+"create_announcement",
            method:'POST',
            params:formdata,
            cors: true,
            useDefaultXhrHeader: false,
            success:function(result){
                Ext.Msg.alert('Create Announcement','Announcement Created Successfully.')
                parantView.getController().loadAnnouncement();
                view.close();
            },
            failure: function(error){
                Ext.Msg.alert('Create Announcement','Create Announcement failed.');
            }
        })
    },
    close:function(){
        this.getView().close();
    }
});
