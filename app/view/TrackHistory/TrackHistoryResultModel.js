Ext.define('PIS.view.TrackHistory.TrackHistoryResultModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.trackhistory-trackhistoryresult',
    stores:{
        trackHistory:{
           
            storeId:'trackHistory',           
            proxy: {
                type: 'ajax',
                method:'GET',
                cors: true,
                embeddedParams:false,
                pageParam: false, //to remove param "page"
                startParam: false, //to remove param "start"
                limitParam: false, //to remove param "limit"
                noCache: false, //to remove param "_dc"
                useDefaultXhrHeader: false,
                url: '', // url that will load data with respect to start and limit params
                reader: {
                    type: 'json',
                    rootProperty: '',
                    totalProperty:""
                }
            }
        },
        
        trackHistoryPaging:{
           
            storeId:'trackHistoryPaging',
            proxy: {
                type: 'memory',
                enablePaging: true,
                reader: {
                    rootProperty: 'data'
                }
            },
            pageSize: 100
        },
        trains:{
            fields: [              
                {name: 'setnum', type: 'string'}
            ],
            storeId:'trains'
        }
    }

});
