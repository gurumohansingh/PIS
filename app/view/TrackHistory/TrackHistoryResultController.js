Ext.define('PIS.view.TrackHistory.TrackHistoryResultController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.trackhistory-trackhistoryresult',
    init:function(){
        
    },

    loadPagingStore:function( remoteStore, records, successful, operation, eOpts ) 
    {   
        var me=this,marks=[];
        var pagingStore=me.getViewModel().getStore('trackHistoryPaging');
        pagingStore.getProxy().setData(remoteStore.getRange());
        pagingStore.load();
        remoteStore.each(function(record,id){
            debugger
            if(record.data.veh_lat_coordinate && record.data.veh_long_coordinate){
                 marks.push({lat: parseFloat(record.data.veh_lat_coordinate), lng: parseFloat(record.data.veh_long_coordinate)})
            }
           
        })
        Ext.GlobalEvents.fireEvent('showOnMap', {marks});
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
        if(newValue==true)
        {
            startDate.setDisabled(true);
            endDate.setDisabled(true);
        }
        else
        {
            startDate.setDisabled(false);
            endDate.setDisabled(false);
        }
    },
    loadHistorydata:function()
    {
        var me=this;
        var trackHistoryRemote=  me.getViewModel().getStore('trackHistory');
        trackHistoryRemote.on('load',this.loadPagingStore,this)
        trackHistoryRemote.load();        
    }
    
});
