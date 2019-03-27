/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('PIS.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',
    init:function(){
        this.liveTiming();
    },
    onItemSelected: function (sender, record) {
        Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
    },

    onConfirm: function (choice) {
        if (choice === 'yes') {
            //
        }
    },
    
    liveTiming:function()
    {debugger
        var liveTiming=this.getView().lookupReference('liveTiming')
        var task, clock;               
        task = {
            run: function() {
                liveTiming.getEl().dom.innerHTML ='<h2>'+Ext.Date.format(new Date(), 'l d M Y g:i:s A')+'</h2>';
            },
            interval: 1000
        };

       Ext.TaskManager.start(task);
    }
});
