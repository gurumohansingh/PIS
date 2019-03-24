Ext.define('PIS.view.announcement.AnnouncementController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.announcement-announcement',
    init:function(){
        this.loadAnnouncement();
    },
    newAnnouncement:function(){
       Ext.create('PIS.view.announcement.NewAnnouncement',{
        parentView:this.getView()
       }).show();
    },
    listNewAnnouncement:function(data){
        var view=this.getView();
        view.add({title:data.text.substring(0, 20),html:data.text,panelId:data.ID})
    },
    loadAnnouncement:function(){
        var me=this, view=me.getView();
        view.removeAll();
        Ext.Ajax.request({
            url:ENDPOINT_HOST+"get_announcement_cc",
            method: 'GET',
            cors: true,
            useDefaultXhrHeader: false,                     
            success: function (response, opts) {
               var announcements= Ext.JSON.decode(Ext.JSON.decode(response.responseText))
               announcements.forEach(function(item){
                   if(item.ACTIVE=="1"){
                    me.listNewAnnouncement({text:item.TEXT,ID:item.ID})
                   }
               })
            },
            failure: function (response, opts) {
                console.log(response);
            }
        }); 
    },
    deleteAnnouncement:function(panel, eOpts){             
        var id=panel.panelId,me=this;
         Ext.Ajax.request({
            url:ENDPOINT_HOST+"delete_announcement?id="+id,
            method: 'GET',
            cors: true,
            useDefaultXhrHeader: false,                   
            success: function (response, opts) {
               me.loadAnnouncement();
            },
            failure: function (response, opts) {
                console.log(response);
            }
        }); 
    }
});
