Ext.define('PIS.overrides.form.field.VTypes', {
    override: 'Ext.form.field.VTypes',
    daterange: function (val, field) {
        var date = field.parseDate(val);
        if (!date) {
            return false;
        }
        if (field.startDate && (!this.dateRangeMax || (date.getTime() != this.dateRangeMax.getTime()))) {
            var start = field.up('form').getForm().findField(field.startDate); 
            start.setMaxValue(date);
            start.validate();
            this.dateRangeMax = date;

        } else if (field.endDate && (!this.dateRangeMin || (date.getTime() != this.dateRangeMin.getTime()))) {
            var end = field.up('form').getForm().findField(field.endDate); 
            end.setMinValue(date);
            end.validate();
            this.dateRangeMin = date;
        }
        return true;
    }
});