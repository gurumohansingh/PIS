
Ext.define('PIS.view.TrackHistory.TrackHistoryResult', {
    extend: 'Ext.grid.Panel',
    xtype: 'trackHistoryResult',
    requires: [
        'PIS.view.TrackHistory.TrackHistoryResultController',
        'PIS.view.TrackHistory.TrackHistoryResultModel',
        'PIS.overrides.form.field.VTypes',
        'Ext.grid.filters.Filters'
    ],
    maxHeight:280,
    controller: 'trackhistory-trackhistoryresult',
    viewModel: {
        type: 'trackhistory-trackhistoryresult'
    },
    plugins: 'gridfilters',
    reference:'trackHistoryResult',
    emptyText:'No record round. Please choose filter and search again.',
    bind: {
        store: '{trackHistoryPaging}'
    },
    columns: [{
        text: 'Train Number',
        dataIndex: 'setnumber',
        flex: 1,
        filter: {           
            type: 'string'
        }
    }, {
        text: 'DateTime',
        dataIndex: 'timestamp',
        flex: 1,
        xtype: 'datecolumn',   
        format:'Y-m-d H:i:s',
        filter: {           
            type: 'date'
        }
    }, {
        text: 'Speed',
        dataIndex: 'vehspeed',
        flex: 1,
        filter: {           
            type: 'number'
        }
    }, {
        text: 'Status',
        dataIndex: 'vehstatus',
        flex: 1,
        filter: {           
            type: 'string'
        }
    }, {
        text: 'Location',
        dataIndex: 'long',
        flex: 1,
        renderer: function (value, metaData, record) {
            return record.data.lat +"-"+ record.data.long;
        }
    }],
    dockedItems: [{
        xtype: 'toolbar',
        dock: 'bottom',
        items: [
            {
                xtype: 'tbfill'
            },
        {
            xtype: 'pagingtoolbar',
            displayInfo: true,
            bind:{
                store: '{trackHistoryPaging}'
            }
        },              
        {
            xtype: 'button',
            text:'Excel',
            width:100,
            icon:'resources/images/Excel.png',
            displayInfo: true,
            handler:'generateExcel'
        },       
        {
            xtype: 'button',
            text:'CSV',
            width:100,
            icon:'resources/images/csv-icon.png',
            displayInfo: true,
            handler:'generateCSV'
        },
        {
            xtype: 'tbfill'
        }
        ]
    }, {
        xtype: 'toolbar',
        dock: 'top',
        items: [
            {
                xtype: 'tbfill'
            },
        {
            xtype: 'trackHistoryfilter',
            displayInfo: true,
            margin:5,
            scrollable:true            
        },{
            xtype: 'tbfill'
        }
        ]
    }]

});