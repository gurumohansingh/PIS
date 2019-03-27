Ext.define('PIS.view.login.LoginController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.login-login',
    init: function () {
        if (Ext.get('page-loader')) {
            Ext.get('page-loader').destroy();
        }
    },

    onLoginButtonClick: function (button, e, eOpts) {
        var view = this.getView(),
            form = button.up('form'),
            formWindow = button.up('window'),
            values = form.getValues();              
        if (values.identity == PIS.Constants.userName && values.password === PIS.Constants.password) {
            formWindow.destroy();
            Ext.create('PIS.view.main.Main', {}).show();
        }
        else {
            Ext.Msg.alert('Login Failure',"Incorect UseName and Password");
        }

    }

});