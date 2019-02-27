Ext.define('PIS.view.TrackHistory.TrackHistoryResultModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.trackhistory-trackhistoryresult',
    stores:{
        trackHistory:{
            fields: [              
                {name: 'platenum', type: 'string', convert:function (value, record) {                    
                    return record.data.vehicle[0].platenum;
                } },
                {name: 'veh_datetime_parsed', type: 'date', convert:function (value, record) {                    
                    return new Date(record.get('veh_datetime_parsed'));
                } }
            ],
            storeId:'trackHistory',           
            proxy: {
                type: 'ajax',
                url: '/jsondata.json', // url that will load data with respect to start and limit params
                reader: {
                    type: 'json',
                    rootProperty: 'data',
                    totalProperty:"size"
                }
            }
        },
        
        trackHistoryPaging:{
            fields: [              
                {name: 'platenum', type: 'string', convert:function (value, record) {                    
                    return record.data.vehicle[0].platenum;
                } },
                {name: 'veh_datetime_parsed', type: 'date', convert:function (value, record) {                    
                    return new Date(record.get('veh_datetime_parsed'));
                } }
            ],
            storeId:'trackHistoryPaging',
            proxy: {
                type: 'memory',
                enablePaging: true,
                reader: {
                    rootProperty: 'data'
                }
            },
            pageSize: 100
        }
    }

});
