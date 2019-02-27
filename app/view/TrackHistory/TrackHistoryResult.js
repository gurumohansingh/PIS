
Ext.define('PIS.view.TrackHistory.TrackHistoryResult', {
    extend: 'Ext.grid.Panel',
    xtype: 'trackHistoryResult',
    requires: [
        'PIS.view.TrackHistory.TrackHistoryResultController',
        'PIS.view.TrackHistory.TrackHistoryResultModel',
        'PIS.overrides.form.field.VTypes'
    ],
    maxHeight:280,
    controller: 'trackhistory-trackhistoryresult',
    viewModel: {
        type: 'trackhistory-trackhistoryresult'
    },
    plugins: 'gridfilters',
    reference:'trackHistoryResult',
    bind: {
        store: '{trackHistoryPaging}'
    },
    columns: [{
        text: 'Train Num',
        dataIndex: 'platenum',
        flex: 1,
        filter: {           
            type: 'string'
        }
    }, {
        text: 'DateTime',
        dataIndex: 'veh_datetime_parsed',
        flex: 1,
        xtype: 'datecolumn',   
        format:'d-m-Y g:i:s',
        filter: {           
            type: 'date'
        }
    }, {
        text: 'Speed',
        dataIndex: 'veh_speed',
        flex: 1,
        filter: {           
            type: 'number'
        }
    }, {
        text: 'Status',
        dataIndex: 'veh_status',
        flex: 1,
        filter: {           
            type: 'string'
        }
    }, {
        text: 'Location',
        dataIndex: 'veh_long_coordinate',
        flex: 1,
        renderer: function (value, metaData, record) {
            return record.data.veh_long_coordinate +"-"+ record.data.veh_lat_coordinate;
        }
    }],
    dockedItems: [{
        xtype: 'toolbar',
        dock: 'bottom',
        items: [{
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
            xtype: 'tbfill'
        }
        ]
    }, {
        xtype: 'toolbar',
        dock: 'top',
        items: [{
            xtype: 'tbfill'
        },
        {
            xtype: 'trackHistoryfilter',
            displayInfo: true,
            margin:5
        },
        {
            xtype: 'tbfill'
        }
        ]
    }]

});