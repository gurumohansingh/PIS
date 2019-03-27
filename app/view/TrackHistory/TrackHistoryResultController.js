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
        me.getView().setLoading(false);
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
            return (record.get('vehspeed') && record.get('vehspeed').toUpperCase().indexOf(newValue)!==-1)
                    || (record.get('setnumber') && record.get('setnumber').toUpperCase().indexOf(newValue)!==-1)
                    || (record.get('vehstatus') && record.get('vehstatus').toUpperCase().indexOf(newValue)!==-1)
                    || (record.get('lat') && record.get('lat').toUpperCase().indexOf(newValue)!==-1)
                    || (record.get('long') && record.get('long').toUpperCase().indexOf(newValue)!==-1)
        });  
        pagingStore.getProxy().setData(remoteStore.getRange());
        pagingStore.load();
    }
    ,
    toggelLive:function( checkBox, newValue, oldValue, eOpts )  {
        var startDate=this.getView().lookupReference('startDate'),
            endDate=this.getView().lookupReference('endDate'),
            startDateTime=this.getView().lookupReference('startDateTime'),
            endDateTime=this.getView().lookupReference('endDateTime'),
            SearchBtn=this.getView().lookupReference('SearchBtn')
        if(newValue==true)
        {
            startDate.setDisabled(true);
            endDate.setDisabled(true);
            startDateTime.setDisabled(true);
            endDateTime.setDisabled(true);
            SearchBtn.setDisabled(true);
            Ext.GlobalEvents.fireEvent('liveTracking',true);
        }
        else
        {
            startDate.setDisabled(false);
            endDate.setDisabled(false);
            startDateTime.setDisabled(false);
            endDateTime.setDisabled(false);
            SearchBtn.setDisabled(false);
            Ext.GlobalEvents.fireEvent('liveTracking',false);
        }
    },
    loadHistorydata:function()
    {      

            var me=this,view=me.getView();
            view.setLoading(true);
            if(view.lookupReference('trackHistoryfilter').getForm().isValid()){
            var form=view.lookupReference('trackHistoryfilter').getForm().getValues();
            var trainNumber=form.trainNumber;
            var start=form.startDate.concat(" ",form.startDateTime),
            end=form.endDate.concat(" ",form.endDateTime)
            
            var trackHistoryRemote=  me.getViewModel().getStore('trackHistory');
            trackHistoryRemote.getProxy().setUrl(PIS.Constants.ENDPOINT_HOST+'get_data');
            trackHistoryRemote.getProxy().extraParams={start:start, end:end, setnum:trainNumber}
            trackHistoryRemote.on('load',this.loadPagingStore,this);
            trackHistoryRemote.load();
        }     
    },
    getTrains:function(){
        var me=this,vm=me.getViewModel(),view=me.getView();
        var trainStore=vm.getStore('trains');               
        Ext.Ajax.request({
            url:PIS.Constants.ENDPOINT_HOST+"get_setnum",
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
