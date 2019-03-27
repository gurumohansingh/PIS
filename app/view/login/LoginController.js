Ext.define('PIS.view.login.LoginController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.login-login',
    init:function()
    {
        if (Ext.get('page-loader')) {
            Ext.get('page-loader').destroy();
        }
    },
    
    onLoginButtonClick: function(button, e, eOpts) {
        var view = this.getView(),
            form = button.up('form'),
            formWindow = button.up('window'),
            values = form.getValues();

        // Success
        var successCallback = function(resp, ops) {
           
            formWindow.destroy();
            Ext.create('PIS.view.main.Main',{}).show();
        };

        // Failure
        var failureCallback = function(resp, ops) {

            // Show login failure error
            Ext.Msg.alert('Login Failure', resp);

        };


        // TODO: Login using server-side authentication service
        // Ext.Ajax.request({
        //		url: "/login",
        //		params: values,
        //		success: successCallback,
        //		failure: failureCallback
        // });

        // Just run success for now
        successCallback();
    }

});