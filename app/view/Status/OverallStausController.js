Ext.define('PIS.view.Status.OverallStausController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.status-overallstaus',
    onPreview: function () {
        if (Ext.isIE8) {
            Ext.Msg.alert('Unsupported Operation', 'This operation requires a newer version of Internet Explorer.');
            return;
        }
        var chart = this.lookup('chart');
        chart.preview();
    },

    onDataRender: function (v) {
        return v + '%';
    },

    onSeriesTooltipRender: function (tooltip, record, item) {
        tooltip.setHtml(record.get('vehicle') + ': ' + record.get('data1') + '%');
    }

});