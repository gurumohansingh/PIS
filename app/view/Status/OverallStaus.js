
Ext.define('PIS.view.Status.OverallStaus', {
    extend: 'Ext.panel.Panel',
    xtype: 'statusChart',
    requires: [
        'PIS.view.Status.OverallStausController',
        'PIS.view.Status.OverallStausModel',
        'Ext.chart.axis.Numeric',
        'Ext.chart.axis.Category',
        'Ext.chart.series.Bar',
        'Ext.chart.interactions.ItemHighlight'
    ],

    controller: 'status-overallstaus',
    viewModel: {
        type: 'status-overallstaus'
    },
    width: 300,

    items: [{
        xtype: 'polar',
        reference: 'chart',
        width: '100%',
        height: 300,
        insetPadding: 20,
        innerPadding: 10,
        store: {
            fields: ['vehicle', 'data1'],
            data: [
                { vehicle: 'Car', data1: 68.3 },
                { vehicle: 'Train', data1: 1.7 },
                { vehicle: 'Bus', data1: 17.9 },
                { vehicle: 'Taxy', data1: 10.2 },
                { vehicle: 'Others', data1: 1.9 }
            ]
        },
        legend: {
            docked: 'bottom'
        },
        interactions: ['rotate'],
        sprites: [{
            type: 'text',
            text: 'Data: IDC Predictions - 2017',
            x: 12,
            y: 425
        }, {
            type: 'text',
            text: 'Source: Internet',
            x: 12,
            y: 440
        }],
        series: [{
            type: 'pie',
            angleField: 'data1',
            label: {
                field: 'vehicle',
                calloutLine: {
                    length: 60,
                    width: 3
                    // specifying 'color' is also possible here
                }
            },
            highlight: true,
            tooltip: {
                trackMouse: true,
                renderer: 'onSeriesTooltipRender'
            }
        }]
    }, {
        xtype: 'cartesian',
        store: {
            fields: ['name', 'value'],
            data: [{
                name: 'a',
                value: 10
            }, {
                name: 'b',
                value: 7
            }, {
                name: 'c',
                value: 5
            }, {
                name: 'd',
                value: 2
            }, {
                name: 'e',
                value: 27
            }]
        },
        height: 333,
        width: 300,
        series: {
            type: 'bar',
            xField: 'name',
            yField: 'value'
        },
        axes: [{
            type: 'numeric',
            fields: 'value',
            title: {
                text: 'Sample Values',
                fontSize: 15
            },
            position: 'left'
        }, {
            type: 'category',
            fields: 'name',
            title: {
                text: 'Sample Categories',
                fontSize: 15
            },
            position: 'bottom'
        }]

    }]

});