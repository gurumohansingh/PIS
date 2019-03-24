Ext.define('PIS.view.TrackHistory.TrackHistoryResultController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.trackhistory-trackhistoryresult',
    init:function(){
        this.getTrains();
        var startDate=this.getView().lookupReference('startDate');
        var endDate=this.getView().lookupReference('endDate');
        var startDateTime=this.getView().lookupReference('startDateTime');
        var endDateTime=this.getView().lookupReference('endDateTime');
    },

    loadPagingStore:function( remoteStore, records, successful, operation, eOpts ) 
    {   
        var me=this,data={},marks=[];
        var pagingStore=me.getViewModel().getStore('trackHistoryPaging');
        pagingStore.getProxy().setData(remoteStore.getRange());
        pagingStore.load();
        remoteStore.each(function(record,id){
            if(record.data.lat && record.data.long){
                 marks.push({lat: parseFloat(record.data.lat), lng: parseFloat(record.data.long)})
            }
           
        });
        data.marks=marks;
        Ext.GlobalEvents.fireEvent('showOnMap', data);
    },

    filterStore:function ( textField, newValue, oldValue, eOpts ) {
        var me=this;
        var remoteStore=  me.getViewModel().getStore('trackHistory');       
        var pagingStore=me.getView().getViewModel().getStore('trackHistoryPaging');
        remoteStore.clearFilter();
        newValue=newValue.toUpperCase();
        remoteStore.filterBy(function(record, id){
            return (record.get('veh_speed') && record.get('veh_speed').toUpperCase().indexOf(newValue)!==-1)
                    || (record.get('platenum') && record.get('platenum').toUpperCase().indexOf(newValue)!==-1)
                    || (record.get('veh_status') && record.get('veh_status').toUpperCase().indexOf(newValue)!==-1)
        });  
        pagingStore.getProxy().setData(remoteStore.getRange());
        pagingStore.load();
    }
    ,
    toggelLive:function( checkBox, newValue, oldValue, eOpts )  {
        var startDate=this.getView().lookupReference('startDate');
        var endDate=this.getView().lookupReference('endDate');
        var startDateTime=this.getView().lookupReference('startDateTime');
        var endDateTime=this.getView().lookupReference('endDateTime');
        if(newValue==true)
        {
            startDate.setDisabled(true);
            endDate.setDisabled(true);
            startDateTime.setDisabled(true);
            endDateTime.setDisabled(true);
        }
        else
        {
            startDate.setDisabled(false);
            endDate.setDisabled(false);
            startDateTime.setDisabled(false);
            endDateTime.setDisabled(false);
            
        }
    },
    loadHistorydata:function()
    {
        
        var me=this;
        var trackHistoryRemote=  me.getViewModel().getStore('trackHistory');
        trackHistoryRemote.getProxy().setUrl('http://47.254.213.69:8080/get_data?start=2019-03-22 17:00:00&end=2019-03-23 17:30:05&setnum=SCS 26');
        trackHistoryRemote.on('load',this.loadPagingStore,this);
        trackHistoryRemote.load();      
    },
    getTrains:function(){
        var me=this,vm=me.getViewModel(),view=me.getView();
        var trainStore=vm.getStore('trains');               
        Ext.Ajax.request({
            url:ENDPOINT_HOST+"get_setnum",
            method:'GET',
            cors: true,
            useDefaultXhrHeader: false,
            success:function(result){
              trainStore.loadData(Ext.JSON.decode(Ext.JSON.decode(result.responseText)),false);
            },
            failure: function(error){
               console.log('Load trail List failed. Please try again.');
            }
        })
    }
    
});
