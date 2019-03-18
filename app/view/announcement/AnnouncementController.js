Ext.define('PIS.view.announcement.AnnouncementController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.announcement-announcement',
    newAnnouncement:function(){
       Ext.create('PIS.view.announcement.NewAnnouncement',{
        parentView:this.getView()
       }).show();
    },
    listNewAnnouncement(data){
        var view=this.getView();
        view.add({html:data.text})
    }
});
