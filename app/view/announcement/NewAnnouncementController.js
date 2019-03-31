Ext.define('PIS.view.announcement.NewAnnouncementController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.announcement-newannouncement',
    init:function(){
        var me=this,view=me.getView(),form=view.lookupReference('newAnnouncement').getForm()

        if(view.isEdit)
        {
            var editData=view.editData;
            form.setValues({
                text:editData.TEXT ,
                end:new Date(editData.ENDDT),
                start:new Date(editData.STARTDT),               
                startDateTime:"00:00:00",
                endDateTime:"00:00:00"
            })
        }
    },
    addAnnouncement:function()
    {
        var view=this.getView();
        var parentView=view.parentView, params={},url
        var form=view.lookupReference('newAnnouncement').getForm().getValues()
        var start=form.start.concat(" ",form.startDateTime),
        end=form.end.concat(" ",form.endDateTime)        
        if(view.isEdit){
            url=PIS.Constants.ENDPOINT_HOST+"update_announcement",
            params={
                text:form.text,
                start:start,
                end:end,
                id:view.editData.ID
            }
        }else
        {
            url=PIS.Constants.ENDPOINT_HOST+"create_announcement"
            params={
                text:form.text,
                start:start,
                end:end
            }
        }
        Ext.Ajax.request({
            url:url,
            method:'POST',
            params:params,
            cors: true,
            useDefaultXhrHeader: false,
            success:function(result){
                Ext.Msg.alert('Create Announcement','Announcement Created Successfully.')
                parentView.getController().loadAnnouncement();
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
