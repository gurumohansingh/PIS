
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
                    msgTarget: 'title',
                    name: 'identity',
                    allowBlank: false,
                    emptyText:'Enter your Username.',
                    blankText: 'Enter your Username.',
                    regexText: 'Enter your username.'
                },
                {
                    xtype: 'textfield',
                    margin: '0 0 10 0',
                    fieldLabel: 'Password',
                    labelAlign: 'right',
                    msgTarget: 'title',
                    name: 'password',
                    inputType: 'password',
                    allowBlank: false,
                    emptyText:'Enter your password.',
                    blankText: 'Enter your password.'
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
