
Ext.define('PIS.view.TrackHistory.TrackHistoryFilter', {
    extend: 'Ext.form.Panel',
    xtype: 'trackHistoryfilter', 
    layout: {
       type: 'hbox',
       pack:'center'
    },
    defaults:{
        margin:'0 0 0 5px'  
    },
    fieldLabel: 'Filters',
    items: [        
        {
            xtype: 'combo',
            displayField: 'name',
            valueField: 'value',
            value:'Service',
            width: 200,
            store: {
                data: [
                    { name: 'Service', value: "Service" },
                    { name: 'Track', value: "Track" },
                    { name: 'GPS', value: "GPS" }]
            }
        },
        {
            xtype: 'combo',
            displayField: 'name',
            valueField: 'value',
            emptyText:'select',
            width: 200,
            store: {
                data: [
                    { name: 'WSC 5025', value: "WSC 5025" }]
            },
            listeners:{}
        },
        {
            xtype: 'checkbox',
            fieldLabel:'Live',
            width:70,
            labelWidth:30,
            listeners:{
                change:'toggelLive'
            }
        },
        {
            xtype: 'datefield',           
            fieldLabel: 'Start',
            format:'d/m/Y',
            name:'startDate',
            vtype:'daterange',
            endDate:'endDate',
            reference:'startDate',
            width:200

        },{
            xtype: 'timefield',          
            minValue: '00:00 AM',
            maxValue: '00:00 PM',
            increment: 60,
            anchor: '100%',
            width:100
        },
        {
            xtype: 'datefield',            
            fieldLabel: 'End',                                   
            maxValue: new Date(),
            format: 'd-M-Y',
            name:'endDate',
            vtype:'daterange',
            startDate:'startDate',
            reference:'endDate',
            width:200
        },
        {
            xtype: 'timefield',          
            minValue: '00:00 AM',
            maxValue: '00:00 PM',
            increment: 30,
            width:100
        },
        {
            xtype:'button',
            text:'Submit',
            handler:'loadHistorydata'
        },
        {
            xtype: 'textfield',
            width: 200,
            emptyText:'Search...',
            listeners:{
                change:'filterStore'
            }
        }

    ]
});