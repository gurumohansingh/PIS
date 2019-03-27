Ext.define('PIS.view.TrackHistory.TrackHistoryResultModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.trackhistory-trackhistoryresult',
    stores:{
        trackHistory:{
            fields: [              
                {name: 'timestamp', type: 'date', 
                convert:function (value, record) {
                    var datetime=value.split("T");                    
                    return new Date(datetime[0].concat(" ",datetime[1].substring(0,10)))
                } }
            ],
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
            pageSize: 1000
        },
        trains:{
            fields: [
                {name: 'setnum', type: 'string'}
            ],
            data:[{'setnum':'All'}],
            storeId:'trains',
            sorters: {
                property : 'setnum',
                direction: 'ASC'
            }
        }
    }

});
