
Ext.define('PIS.view.login.Login',{
    extend: 'Ext.window.Window',

    requires: [
        'PIS.view.login.LoginController',
        'PIS.view.login.LoginModel'
    ],

    controller: 'login-login',
    viewModel: {
        type: 'login-login'
    },
    title:'KTMB Command Center: Login',
    closable:false,
    modal:true,
    items: [
        {
            xtype: 'form',
            bodyPadding: 20,
            items: [
                {
                    xtype: 'textfield',
                    margin: '0 0 20 0',
                    fieldLabel: 'Username',
                    labelAlign: 'right',
                    name: 'identity',
                    allowBlank: false,
                    emptyText:'Enter your Username.',
                },
                {
                    xtype: 'textfield',
                    margin: '0 0 10 0',
                    fieldLabel: 'Password',
                    labelAlign: 'right',
                    name: 'password',
                    inputType: 'password',
                    allowBlank: false,
                    emptyText:'Enter your password.'    
                },
                {
                    xtype: 'button',
                    formBind: true,
                    margin: '0 15 0 0',
                    scale: 'medium',
                    text: 'Login',
                    listeners: {
                        click: 'onLoginButtonClick'
                    }
                }
            ]
        }
    ]
});
