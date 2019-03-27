
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
    reference:'trackHistoryfilter',
    items: [        
        {
            xtype: 'combo',
            displayField: 'name',
            hidden:true,
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
            displayField: 'setnum',
            valueField: 'setnum',
            emptyText:'select',
            queryMode:'local',
            allowBlank:false,
            width: 200,
            name:'trainNumber',
            bind:{
                store:'{trains}'
            }
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
            format: 'Y-m-d',
            name:'startDate',
            vtype:'daterange',
            endDate:'endDate',
            reference:'startDate',
            allowBlank:false,
            width:200

        },{
            xtype: 'timefield',
            format:'H:i:s',
            name:'startDateTime',
            reference:'startDateTime',
            minValue: '00:00:00',
            maxValue: '24:00:00',
            allowBlank:false,
            increment: 60,
            anchor: '100%',
            width:100
        },
        {
            xtype: 'datefield',            
            fieldLabel: 'End',                                   
            maxValue: new Date(),
            format: 'Y-m-d',
            name:'endDate',
            vtype:'daterange',
            startDate:'startDate',
            reference:'endDate',
            allowBlank:false,
            width:200
        },
        {
            xtype: 'timefield',
            format:'H:i:s',
            name:'endDateTime',
            minValue: '00:00:00',
            maxValue: '24:00:00',
            reference:'endDateTime',
            allowBlank:false,
            increment: 60,
            width:100
        },
        {
            xtype:'button',
            text:'Search',
            reference:'SearchBtn',
            formBind: true, //only enabled once the form is valid
            disabled: true,
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