Ext.define('PIS.view.announcement.AnnouncementController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.announcement-announcement',
    init: function () {

        this.loadAnnouncement();
        this.refreshAnnouncement()
    },
    newAnnouncement: function () {
        Ext.create('PIS.view.announcement.NewAnnouncement', {
            parentView: this.getView()
        }).show();
    },
    listNewAnnouncement: function (data) {
        var view = this.getView();
        var date = Ext.util.Format.date(data.STARTDT, "Y-m-d h:m") + " TO " + Ext.util.Format.date(data.ENDDT, "Y-m-d h:m");
        view.add({ title: date, html: data.TEXT, panelId: data.ID, editData: data })
    },
    loadAnnouncement: function () {
        var me = this, view = me.getView();
        Ext.Ajax.request({
            url: PIS.Constants.ENDPOINT_HOST + "get_announcement_cc",
            method: 'GET',
            cors: true,
            useDefaultXhrHeader: false,
            success: function (response, opts) {
                view.removeAll();
                var announcements = Ext.JSON.decode(Ext.JSON.decode(response.responseText))
                announcements.forEach(function (item) {
                    if (item.ACTIVE == "1") {
                        me.listNewAnnouncement(item)
                    }
                })
            },
            failure: function (response, opts) {
                console.log(response);
            }
        });
    },
    deleteAnnouncement: function (panel, eOpts) {
        var panleData = panel.up().up('panel').editData, me = this
        var id = panleData.ID
        Ext.Msg.show({
            title: 'Delete Confirm',
            msg: 'Do you want to delete?',
            buttons: Ext.Msg.YESNO,   // or Ext.Msg.OKCANCEL
            fn: function (ok) {
                if (ok == "yes") {
                    Ext.Ajax.request({
                        url: PIS.Constants.ENDPOINT_HOST + "delete_announcement?id=" + id,
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
            }
        });

    },
    refreshAnnouncement: function () {
        var me = this;
        var task;
        task = {
            run: function () {
                this.loadAnnouncement()
            },
            interval: 30000,
            scope: me
        };
        Ext.TaskManager.start(task);
    },
    editAnnouncement: function (panel, eOpts) {        
        var panleData = panel.up().up('panel').editData;
        var view=this.getView();
        Ext.create('PIS.view.announcement.NewAnnouncement', {
            editData:panleData,
            isEdit:true,
            parentView:view
        }).show()
    }
});
