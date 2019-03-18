Ext.define('PIS.view.announcement.NewAnnouncementController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.announcement-newannouncement',
    addAnnouncement:function()
    {        
        var view=this.getView();
        var parantView=view.parentView;
        var formdata=view.lookupReference('newAnnouncement').getForm().getValues();
        parantView.getController().listNewAnnouncement(formdata);
        view.close();
    }

});
