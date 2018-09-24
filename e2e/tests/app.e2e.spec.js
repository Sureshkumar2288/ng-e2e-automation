"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("@syncfusion/ej2-base/e2e/index");
describe('EJ2 Calendars Angular Reactive Form testing', function () {
    index_1.browser.get('localhost:4200');
    beforeEach(function () {
        //
    });
    afterEach(function () {
        index_1.element(index_1.by.id('binding')).click();
    });
    it('Reactive Form Sample runnable', function () {
        index_1.element(index_1.by.id('reactiveForm')).click();
        index_1.browser.sleep(5000);
        index_1.browser.compareScreen(index_1.element(index_1.by.id('FormValidation')), 'ng-reactiveForm-default');
    });
    it('Reactive Form initial submit testing', function () {
        index_1.element(index_1.by.id('reactiveForm')).click();
        index_1.browser.sleep(5000);
        index_1.element(index_1.by.xpath("//*[@id='submit']")).click();
        index_1.browser.sleep(5000);
        index_1.browser.compareScreen(index_1.element(index_1.by.id('FormValidation')), 'ng-initial-submit');
    });
    it('Reactive Form initial reset testing', function () {
        index_1.element(index_1.by.id('reactiveForm')).click();
        index_1.browser.sleep(5000);
        index_1.element(index_1.by.xpath("//*[@id='submit']")).click();
        index_1.browser.sleep(5000);
        index_1.element(index_1.by.xpath("//*[@id='reset']")).click();
        index_1.browser.sleep(5000);
        index_1.browser.compareScreen(index_1.element(index_1.by.id('FormValidation')), 'ng-initial-reset');
    });
    it('Reactive Form DateRangePicker focusout testing', function () {
        index_1.element(index_1.by.id('reactiveForm')).click();
        index_1.browser.sleep(5000);
        index_1.element(index_1.by.xpath("//*[@id='daternage_input']")).click();
        index_1.browser.sleep(5000);
        index_1.element(index_1.by.id("check")).click();
        index_1.browser.sleep(5000);
        index_1.browser.compareScreen(index_1.element(index_1.by.id('FormValidation')), 'ng-dateRangePicker-focusOut');
    });
    it('Reactive Form DateRangePicker reset testing', function () {
        index_1.element(index_1.by.id('reactiveForm')).click();
        index_1.browser.sleep(5000);
        index_1.element(index_1.by.xpath("//*[@id='daternage_input']")).click();
        index_1.browser.sleep(5000);
        index_1.element(index_1.by.id("check")).click();
        index_1.browser.sleep(5000);
        index_1.element(index_1.by.xpath("//*[@id='reset']")).click();
        index_1.browser.sleep(5000);
        index_1.browser.compareScreen(index_1.element(index_1.by.id('FormValidation')), 'ng-dateRangePicker-reset');
    });
    it('Reactive Form DatePicker focusout testing', function () {
        index_1.element(index_1.by.id('reactiveForm')).click();
        index_1.element(index_1.by.xpath("//*[@id='date_input']")).click();
        index_1.browser.sleep(5000);
        index_1.element(index_1.by.id("check")).click();
        index_1.browser.sleep(5000);
        index_1.browser.compareScreen(index_1.element(index_1.by.id('FormValidation')), 'ng-datePicker-focusOut');
    });
    it('Reactive Form DatePicker reset testing', function () {
        index_1.element(index_1.by.id('reactiveForm')).click();
        index_1.element(index_1.by.xpath("//*[@id='date_input']")).click();
        index_1.browser.sleep(5000);
        index_1.element(index_1.by.id("check")).click();
        index_1.browser.sleep(5000);
        index_1.element(index_1.by.id('reset')).click();
        index_1.browser.sleep(5000);
        index_1.browser.compareScreen(index_1.element(index_1.by.id('FormValidation')), 'ng-datePicker-reset');
    });
    it('Reactive Form DateTimePicker focusout testing', function () {
        index_1.element(index_1.by.id('reactiveForm')).click();
        index_1.element(index_1.by.xpath("//*[@id='datetime_input']")).click();
        index_1.browser.sleep(5000);
        index_1.element(index_1.by.id("check")).click();
        index_1.browser.sleep(5000);
        index_1.browser.compareScreen(index_1.element(index_1.by.id('FormValidation')), 'ng-dateTimePicker-focusOut');
    });
    it('Reactive Form DateTimePicker reset testing', function () {
        index_1.element(index_1.by.id('reactiveForm')).click();
        index_1.element(index_1.by.xpath("//*[@id='datetime_input']")).click();
        index_1.browser.sleep(5000);
        index_1.element(index_1.by.id("check")).click();
        index_1.browser.sleep(5000);
        index_1.element(index_1.by.id('reset')).click();
        index_1.browser.sleep(5000);
        index_1.browser.compareScreen(index_1.element(index_1.by.id('FormValidation')), 'ng-dateTimePicker-reset');
    });
    it('Reactive Form TimePicker focusout testing', function () {
        index_1.element(index_1.by.id('reactiveForm')).click();
        index_1.element(index_1.by.xpath("//*[@id='time_input']")).click();
        index_1.browser.sleep(5000);
        index_1.element(index_1.by.id("check")).click();
        index_1.browser.sleep(5000);
        index_1.browser.compareScreen(index_1.element(index_1.by.id('FormValidation')), 'ng-TimePicker-focusOut');
    });
    it('Reactive Form TimePicker reset testing', function () {
        index_1.element(index_1.by.id('reactiveForm')).click();
        index_1.element(index_1.by.xpath("//*[@id='time_input']")).click();
        index_1.browser.sleep(5000);
        index_1.element(index_1.by.id("check")).click();
        index_1.browser.sleep(5000);
        index_1.element(index_1.by.id('reset')).click();
        index_1.browser.sleep(5000);
        index_1.browser.compareScreen(index_1.element(index_1.by.id('FormValidation')), 'ng-TimePicker-reset');
    });
    it('Reactive Form ErrorClass-WithoutValue testing', function () {
        index_1.element(index_1.by.id('reactiveForm')).click();
        index_1.element(index_1.by.xpath("//*[@id='daternage_input']")).click();
        index_1.browser.sleep(5000);
        index_1.element(index_1.by.xpath("//*[@id='date_input']")).click();
        index_1.browser.sleep(5000);
        index_1.element(index_1.by.xpath("//*[@id='datetime_input']")).click();
        index_1.browser.sleep(5000);
        index_1.element(index_1.by.xpath("//*[@id='time_input']")).click();
        index_1.browser.sleep(5000);
        index_1.element(index_1.by.id("check")).click();
        index_1.browser.sleep(5000);
        index_1.browser.compareScreen(index_1.element(index_1.by.id('FormValidation')), 'ng-Form-ErrorClass-WithoutValue');
    });
    it('Reactive Form ErrorClass-WithoutValue reset testing', function () {
        index_1.element(index_1.by.id('reactiveForm')).click();
        index_1.element(index_1.by.xpath("//*[@id='daternage_input']")).click();
        index_1.browser.sleep(5000);
        index_1.element(index_1.by.xpath("//*[@id='date_input']")).click();
        index_1.browser.sleep(5000);
        index_1.element(index_1.by.xpath("//*[@id='datetime_input']")).click();
        index_1.browser.sleep(5000);
        index_1.element(index_1.by.xpath("//*[@id='time_input']")).click();
        index_1.browser.sleep(5000);
        index_1.element(index_1.by.id("check")).click();
        index_1.browser.sleep(5000);
        index_1.element(index_1.by.id('reset')).click();
        index_1.browser.sleep(5000);
        index_1.browser.compareScreen(index_1.element(index_1.by.id('FormValidation')), 'ng-Form-ErrorClass-WithoutValue-reset');
    });
    it('Reactive Form ErrorClass testing', function () {
        index_1.element(index_1.by.id('reactiveForm')).click();
        index_1.element(index_1.by.xpath("//*[@id='daternage_input']")).click();
        index_1.element(index_1.by.xpath("//*[@id='daternage_input']")).sendKeys("9/11/20183 - 10/16/20183" + index_1.Key.ENTER);
        index_1.browser.sleep(5000);
        index_1.element(index_1.by.xpath("//*[@id='date_input']")).click();
        index_1.element(index_1.by.xpath("//*[@id='date_input']")).sendKeys("9/11/20183" + index_1.Key.ENTER);
        index_1.browser.sleep(5000);
        index_1.element(index_1.by.xpath("//*[@id='datetime_input']")).click();
        index_1.element(index_1.by.xpath("//*[@id='datetime_input']")).sendKeys("9/11/20183 10:00 AM" + index_1.Key.ENTER);
        index_1.browser.sleep(5000);
        index_1.element(index_1.by.xpath("//*[@id='time_input']")).click();
        index_1.element(index_1.by.xpath("//*[@id='time_input']")).sendKeys("10:00D AM" + index_1.Key.ENTER);
        index_1.browser.sleep(5000);
        index_1.element(index_1.by.id("check")).click();
        index_1.browser.sleep(5000);
        index_1.browser.compareScreen(index_1.element(index_1.by.id('FormValidation')), 'ng-ErrorClass');
    });
    it('Reactive Form ErrorClass reset testing', function () {
        index_1.element(index_1.by.id('reactiveForm')).click();
        index_1.element(index_1.by.xpath("//*[@id='daternage_input']")).click();
        index_1.element(index_1.by.xpath("//*[@id='daternage_input']")).sendKeys("9/11/20183 - 10/16/20183" + index_1.Key.ENTER);
        index_1.browser.sleep(5000);
        index_1.element(index_1.by.xpath("//*[@id='date_input']")).click();
        index_1.element(index_1.by.xpath("//*[@id='date_input']")).sendKeys("9/11/20183" + index_1.Key.ENTER);
        index_1.browser.sleep(5000);
        index_1.element(index_1.by.xpath("//*[@id='datetime_input']")).click();
        index_1.element(index_1.by.xpath("//*[@id='datetime_input']")).sendKeys("9/11/20183 10:00 AM" + index_1.Key.ENTER);
        index_1.browser.sleep(5000);
        index_1.element(index_1.by.xpath("//*[@id='time_input']")).click();
        index_1.element(index_1.by.xpath("//*[@id='time_input']")).sendKeys("10:00D AM" + index_1.Key.ENTER);
        index_1.browser.sleep(5000);
        index_1.element(index_1.by.id("check")).click();
        index_1.browser.sleep(5000);
        index_1.element(index_1.by.id('reset')).click();
        index_1.browser.sleep(5000);
        index_1.browser.compareScreen(index_1.element(index_1.by.id('FormValidation')), 'ng-ErrorClass-reset');
    });
    it('Reactive Form with setValue testing', function () {
        index_1.element(index_1.by.id('reactiveForm')).click();
        index_1.browser.sleep(5000);
        index_1.element(index_1.by.xpath("//*[@id='setVal']")).click();
        index_1.browser.sleep(5000);
        index_1.browser.compareScreen(index_1.element(index_1.by.id('FormValidation')), 'ng-setValue');
    });
    it('Reactive Form setValue submit testing', function () {
        index_1.element(index_1.by.id('reactiveForm')).click();
        index_1.browser.sleep(5000);
        index_1.element(index_1.by.xpath("//*[@id='setVal']")).click();
        index_1.browser.sleep(5000);
        index_1.element(index_1.by.id('submit')).click();
        index_1.browser.sleep(5000);
        index_1.browser.compareScreen(index_1.element(index_1.by.id('FormValidation')), 'ng-setValue-submit');
    });
    it('Reactive Form setValue string testing', function () {
        index_1.element(index_1.by.id('reactiveForm')).click();
        index_1.browser.sleep(5000);
        index_1.element(index_1.by.id("setValStr")).click();
        index_1.browser.sleep(5000);
        index_1.browser.compareScreen(index_1.element(index_1.by.id('FormValidation')), 'ng-setValue-string');
    });
    it('Reactive Form setValue reset testing', function () {
        index_1.element(index_1.by.id('reactiveForm')).click();
        index_1.browser.sleep(5000);
        index_1.element(index_1.by.xpath("//*[@id='setVal']")).click();
        index_1.browser.sleep(5000);
        index_1.element(index_1.by.id('reset')).click();
        index_1.browser.sleep(5000);
        index_1.browser.compareScreen(index_1.element(index_1.by.id('FormValidation')), 'ng-setValue-reset');
    });
    it('Reactive Form with exceeding max value testing', function () {
        index_1.element(index_1.by.id('reactiveForm')).click();
        index_1.browser.sleep(5000);
        index_1.element(index_1.by.xpath("//*[@id='maxVal']")).click();
        index_1.browser.sleep(5000);
        index_1.element(index_1.by.xpath("//*[@id='setVal']")).click();
        index_1.browser.sleep(5000);
        index_1.browser.compareScreen(index_1.element(index_1.by.id('FormValidation')), 'ng-setValue-exceed-max');
    });
    it('Reactive Form with exceeding max value reset testing', function () {
        index_1.element(index_1.by.id('reactiveForm')).click();
        index_1.browser.sleep(5000);
        index_1.element(index_1.by.xpath("//*[@id='maxVal']")).click();
        index_1.browser.sleep(5000);
        index_1.element(index_1.by.xpath("//*[@id='setVal']")).click();
        index_1.browser.sleep(5000);
        index_1.element(index_1.by.id('reset')).click();
        index_1.browser.sleep(5000);
        index_1.browser.compareScreen(index_1.element(index_1.by.id('FormValidation')), 'ng-setValue-exceed-max-reset');
    });
    it('Reactive Form DateRangePicker with exceeding max value testing', function () {
        index_1.element(index_1.by.id('reactiveForm')).click();
        index_1.browser.sleep(5000);
        index_1.element(index_1.by.xpath("//*[@id='maxVal']")).click();
        index_1.browser.sleep(5000);
        index_1.element(index_1.by.xpath("//*[@id='setVal']")).click();
        index_1.browser.sleep(5000);
        index_1.element(index_1.by.xpath("//*[@id='daternage_input']")).click();
        index_1.browser.sleep(5000);
        index_1.element(index_1.by.xpath("//*[@id='daternage']/div/span[2]")).click();
        index_1.browser.sleep(5000);
        index_1.element(index_1.by.id("check")).click();
        index_1.browser.sleep(5000);
        index_1.browser.compareScreen(index_1.element(index_1.by.id('FormValidation')), 'ng-DateRange-setValue-exceed-max');
    });
    it('Reactive Form DateRangePicker with exceeding max value reset testing', function () {
        index_1.element(index_1.by.id('reactiveForm')).click();
        index_1.browser.sleep(5000);
        index_1.element(index_1.by.xpath("//*[@id='maxVal']")).click();
        index_1.browser.sleep(5000);
        index_1.element(index_1.by.xpath("//*[@id='setVal']")).click();
        index_1.browser.sleep(5000);
        index_1.element(index_1.by.xpath("//*[@id='daternage_input']")).click();
        index_1.browser.sleep(5000);
        index_1.element(index_1.by.xpath("//*[@id='daternage']/div/span[2]")).click();
        index_1.browser.sleep(5000);
        index_1.element(index_1.by.id("check")).click();
        index_1.browser.sleep(5000);
        index_1.element(index_1.by.id('reset')).click();
        index_1.browser.sleep(5000);
        index_1.browser.compareScreen(index_1.element(index_1.by.id('FormValidation')), 'ng-DateRange-setValue-exceed-max-reset');
    });
    it('Reactive Form DatePicker with exceeding max value testing', function () {
        index_1.element(index_1.by.id('reactiveForm')).click();
        index_1.browser.sleep(5000);
        index_1.element(index_1.by.xpath("//*[@id='maxVal']")).click();
        index_1.browser.sleep(5000);
        index_1.element(index_1.by.xpath("//*[@id='setVal']")).click();
        index_1.browser.sleep(5000);
        index_1.element(index_1.by.xpath("//*[@id='date_input']")).click();
        index_1.browser.sleep(5000);
        index_1.element(index_1.by.xpath("//*[@id='date']/div/span[2]")).click();
        index_1.browser.sleep(5000);
        index_1.element(index_1.by.id("check")).click();
        index_1.browser.sleep(5000);
        index_1.browser.compareScreen(index_1.element(index_1.by.id('FormValidation')), 'ng-Date-setValue-exceed-max');
    });
    it('Reactive Form DatePicker with exceeding max value reset testing', function () {
        index_1.element(index_1.by.id('reactiveForm')).click();
        index_1.browser.sleep(5000);
        index_1.element(index_1.by.xpath("//*[@id='maxVal']")).click();
        index_1.browser.sleep(5000);
        index_1.element(index_1.by.xpath("//*[@id='setVal']")).click();
        index_1.browser.sleep(5000);
        index_1.element(index_1.by.xpath("//*[@id='date_input']")).click();
        index_1.browser.sleep(5000);
        index_1.element(index_1.by.xpath("//*[@id='date']/div/span[2]")).click();
        index_1.browser.sleep(5000);
        index_1.element(index_1.by.id("check")).click();
        index_1.browser.sleep(5000);
        index_1.element(index_1.by.id('reset')).click();
        index_1.browser.sleep(5000);
        index_1.browser.compareScreen(index_1.element(index_1.by.id('FormValidation')), 'ng-Date-setValue-exceed-max-reset');
    });
    it('Reactive Form DateTimePicker with exceeding max value testing', function () {
        index_1.element(index_1.by.id('reactiveForm')).click();
        index_1.browser.sleep(5000);
        index_1.element(index_1.by.xpath("//*[@id='maxVal']")).click();
        index_1.browser.sleep(5000);
        index_1.element(index_1.by.xpath("//*[@id='setVal']")).click();
        index_1.browser.sleep(5000);
        index_1.element(index_1.by.xpath("//*[@id='datetime_input']")).click();
        index_1.browser.sleep(5000);
        index_1.element(index_1.by.xpath("//*[@id='datetime']/div/span[2]")).click();
        index_1.browser.sleep(5000);
        index_1.element(index_1.by.id("check")).click();
        index_1.browser.sleep(5000);
        index_1.browser.compareScreen(index_1.element(index_1.by.id('FormValidation')), 'ng-DateTime-setValue-exceed-max');
    });
    it('Reactive Form DateTimePicker with exceeding max value reset testing', function () {
        index_1.element(index_1.by.id('reactiveForm')).click();
        index_1.browser.sleep(5000);
        index_1.element(index_1.by.xpath("//*[@id='maxVal']")).click();
        index_1.browser.sleep(5000);
        index_1.element(index_1.by.xpath("//*[@id='setVal']")).click();
        index_1.browser.sleep(5000);
        index_1.element(index_1.by.xpath("//*[@id='datetime_input']")).click();
        index_1.browser.sleep(5000);
        index_1.element(index_1.by.xpath("//*[@id='datetime']/div/span[2]")).click();
        index_1.browser.sleep(5000);
        index_1.element(index_1.by.id("check")).click();
        index_1.browser.sleep(5000);
        index_1.element(index_1.by.id('reset')).click();
        index_1.browser.sleep(5000);
        index_1.browser.compareScreen(index_1.element(index_1.by.id('FormValidation')), 'ng-DateTime-setValue-exceed-max-reset');
    });
    it('Reactive Form TimePicker with exceeding max value testing', function () {
        index_1.element(index_1.by.id('reactiveForm')).click();
        index_1.browser.sleep(5000);
        index_1.element(index_1.by.xpath("//*[@id='maxVal']")).click();
        index_1.browser.sleep(5000);
        index_1.element(index_1.by.xpath("//*[@id='setVal']")).click();
        index_1.browser.sleep(5000);
        index_1.element(index_1.by.xpath("//*[@id='time_input']")).click();
        index_1.browser.sleep(5000);
        index_1.element(index_1.by.xpath("//*[@id='time']/div/span[2]")).click();
        index_1.browser.sleep(5000);
        index_1.element(index_1.by.id("check")).click();
        index_1.browser.sleep(5000);
        index_1.browser.compareScreen(index_1.element(index_1.by.id('FormValidation')), 'ng-Time-setValue-exceed-max');
    });
    it('Reactive Form TimePicker with exceeding max value reset testing', function () {
        index_1.element(index_1.by.id('reactiveForm')).click();
        index_1.browser.sleep(5000);
        index_1.element(index_1.by.xpath("//*[@id='maxVal']")).click();
        index_1.browser.sleep(5000);
        index_1.element(index_1.by.xpath("//*[@id='setVal']")).click();
        index_1.browser.sleep(5000);
        index_1.element(index_1.by.xpath("//*[@id='time_input']")).click();
        index_1.browser.sleep(5000);
        index_1.element(index_1.by.xpath("//*[@id='time']/div/span[2]")).click();
        index_1.browser.sleep(5000);
        index_1.element(index_1.by.id("check")).click();
        index_1.browser.sleep(5000);
        index_1.element(index_1.by.id('reset')).click();
        index_1.browser.sleep(5000);
        index_1.browser.compareScreen(index_1.element(index_1.by.id('FormValidation')), 'ng-Time-setValue-exceed-max-reset');
    });
});
describe('EJ2 Calendars Angular two-way binding testing', function () {
    index_1.browser.get('localhost:4200');
    describe('without strict mode', function () {
        beforeEach(function () {
            // 
        });
        afterEach(function () {
            index_1.element(index_1.by.id('reactiveForm')).click();
        });
        it('Two-Way binding Sample runnable', function () {
            index_1.element(index_1.by.id('binding')).click();
            index_1.browser.sleep(5000);
            index_1.browser.compareScreen(index_1.element(index_1.by.id('twowayWrapper')), 'ng-two-way-binding-default');
        });
        it('Two-Way binding Sample value exceed the max value runnable', function () {
            index_1.element(index_1.by.id('binding')).click();
            index_1.browser.sleep(5000);
            index_1.element(index_1.by.id('maxVal')).click();
            index_1.browser.sleep(5000);
            index_1.element(index_1.by.id('setVal')).click();
            index_1.browser.sleep(5000);
            index_1.browser.compareScreen(index_1.element(index_1.by.id('twowayWrapper')), 'ng-two-way-binding-value-exceed');
        });
        it('Two-Way binding Sample clear button clicked', function () {
            index_1.element(index_1.by.id('binding')).click();
            index_1.browser.sleep(5000);
            index_1.element(index_1.by.xpath("//*[@id='datetimepicker_input']")).click();
            index_1.browser.sleep(5000);
            index_1.element(index_1.by.xpath("//*[@id='datetimepicker']/span/span[1]")).click();
            index_1.browser.sleep(5000);
            index_1.element(index_1.by.id("check")).click();
            index_1.browser.sleep(5000);
            index_1.browser.compareScreen(index_1.element(index_1.by.id('twowayWrapper')), 'ng-two-way-binding-clear-icon');
        });
        it('Two-Way binding Sample date input editable', function () {
            index_1.element(index_1.by.id('binding')).click();
            index_1.browser.sleep(5000);
            index_1.element(index_1.by.xpath("//*[@id='datepicker_input']")).click();
            index_1.browser.sleep(5000);
            index_1.element(index_1.by.xpath("//*[@id='datepicker_input']")).sendKeys(index_1.Key.BACK_SPACE);
            index_1.browser.sleep(5000);
            index_1.element(index_1.by.id("check")).click();
            index_1.browser.sleep(5000);
            index_1.browser.compareScreen(index_1.element(index_1.by.id('twowayWrapper')), 'ng-two-way-binding-date-editable');
        });
    });
    describe('with strict mode', function () {
        beforeEach(function () {
            // 
        });
        afterEach(function () {
            index_1.element(index_1.by.id('reactiveForm')).click();
        });
        it('Two-Way binding Sample runnable', function () {
            index_1.element(index_1.by.id('binding')).click();
            index_1.browser.sleep(2000);
            index_1.element(index_1.by.id('strict')).click();
            index_1.browser.sleep(5000);
            index_1.browser.compareScreen(index_1.element(index_1.by.id('twowayWrapper')), 'ng-two-way-binding-default-strictMode');
        });
        it('Two-Way binding Sample value exceed the max value runnable', function () {
            index_1.element(index_1.by.id('binding')).click();
            index_1.browser.sleep(2000);
            index_1.element(index_1.by.id('strict')).click();
            index_1.browser.sleep(5000);
            index_1.element(index_1.by.id('maxVal')).click();
            index_1.browser.sleep(5000);
            index_1.element(index_1.by.id('setVal')).click();
            index_1.browser.sleep(5000);
            index_1.browser.compareScreen(index_1.element(index_1.by.id('twowayWrapper')), 'ng-two-way-binding-value-exceed-strictMode');
        });
        it('Two-Way binding Sample clear button clicked', function () {
            index_1.element(index_1.by.id('binding')).click();
            index_1.browser.sleep(2000);
            index_1.element(index_1.by.id('strict')).click();
            index_1.browser.sleep(5000);
            index_1.element(index_1.by.xpath("//*[@id='datetimepicker_input']")).click();
            index_1.browser.sleep(5000);
            index_1.element(index_1.by.xpath("//*[@id='datetimepicker']/span/span[1]")).click();
            index_1.browser.sleep(5000);
            index_1.browser.compareScreen(index_1.element(index_1.by.id('twowayWrapper')), 'ng-two-way-binding-clear-icon-strictMode');
        });
        // it('Two-Way binding Sample date input editable', () => {
        //   element(by.id('binding')).click();
        //   browser.sleep(2000);
        //   element(by.id('strict')).click();
        //   browser.sleep(5000);
        //   element(by.xpath("//*[@id='datepicker_input']")).click();
        //   browser.sleep(5000);
        //   element(by.xpath("//*[@id='datepicker_input']")).sendKeys(Key.BACK_SPACE);
        //   browser.sleep(5000);
        //   element(by.id("check")).click();
        //   browser.sleep(5000);
        //   browser.compareScreen(element(by.id('twowayWrapper')), 'ng-two-way-binding-date-editable-strictMode');
        // });
    });
});
describe('EJ2 Calendars Angular Template triven Form testing', function () {
    index_1.browser.get('localhost:4200');
    beforeEach(function () {
        //
    });
    afterEach(function () {
        index_1.element(index_1.by.id('binding')).click();
    });
    it('Sample default runnable', function () {
        index_1.element(index_1.by.id('template')).click();
        index_1.browser.sleep(5000);
        index_1.browser.compareScreen(index_1.element(index_1.by.id('templateForm')), 'ng-templateForm-default');
    });
    it('initial submit testing', function () {
        index_1.element(index_1.by.id('template')).click();
        index_1.browser.sleep(5000);
        index_1.element(index_1.by.id('submit')).click();
        index_1.browser.sleep(5000);
        index_1.browser.compareScreen(index_1.element(index_1.by.id('templateForm')), 'ng-template-initial-submit');
    });
    it('initial reset testing', function () {
        index_1.element(index_1.by.id('template')).click();
        index_1.browser.sleep(5000);
        index_1.element(index_1.by.id('reset')).click();
        index_1.browser.sleep(5000);
        index_1.browser.compareScreen(index_1.element(index_1.by.id('templateForm')), 'ng-template-initial-reset');
    });
    it('ErrorClass testing', function () {
        index_1.element(index_1.by.id('template')).click();
        index_1.element(index_1.by.xpath("//*[@id='dateDemo_input']")).click();
        index_1.element(index_1.by.xpath("//*[@id='dateDemo_input']")).sendKeys("9/11/20183" + index_1.Key.ENTER);
        index_1.browser.sleep(5000);
        index_1.element(index_1.by.xpath("//*[@id='datetimeDemo_input']")).click();
        index_1.element(index_1.by.xpath("//*[@id='datetimeDemo_input']")).sendKeys("9/11/20183 10:00 AM" + index_1.Key.ENTER);
        index_1.browser.sleep(5000);
        index_1.element(index_1.by.xpath("//*[@id='timeDemo_input']")).click();
        index_1.element(index_1.by.xpath("//*[@id='timeDemo_input']")).sendKeys("10:00D AM" + index_1.Key.ENTER);
        index_1.browser.sleep(5000);
        index_1.element(index_1.by.xpath("//*[@id='rangeDemo_input']")).click();
        index_1.element(index_1.by.xpath("//*[@id='rangeDemo_input']")).sendKeys("9/11/20183 - 10/16/20183" + index_1.Key.ENTER);
        index_1.browser.sleep(5000);
        index_1.element(index_1.by.id("check")).click();
        index_1.browser.sleep(5000);
        index_1.browser.compareScreen(index_1.element(index_1.by.id('templateForm')), 'ng-template-ErrorClass');
    });
    it('ErrorClass reset testing', function () {
        index_1.element(index_1.by.id('template')).click();
        index_1.element(index_1.by.xpath("//*[@id='dateDemo_input']")).click();
        index_1.element(index_1.by.xpath("//*[@id='dateDemo_input']")).sendKeys("9/11/20183" + index_1.Key.ENTER);
        index_1.browser.sleep(5000);
        index_1.element(index_1.by.xpath("//*[@id='datetimeDemo_input']")).click();
        index_1.element(index_1.by.xpath("//*[@id='datetimeDemo_input']")).sendKeys("9/11/20183 10:00 AM" + index_1.Key.ENTER);
        index_1.browser.sleep(5000);
        index_1.element(index_1.by.xpath("//*[@id='timeDemo_input']")).click();
        index_1.element(index_1.by.xpath("//*[@id='timeDemo_input']")).sendKeys("10:00D AM" + index_1.Key.ENTER);
        index_1.browser.sleep(5000);
        index_1.element(index_1.by.xpath("//*[@id='rangeDemo_input']")).click();
        index_1.element(index_1.by.xpath("//*[@id='rangeDemo_input']")).sendKeys("9/11/20183 - 10/16/20183" + index_1.Key.ENTER);
        index_1.browser.sleep(5000);
        index_1.browser.sleep(5000);
        index_1.element(index_1.by.id("check")).click();
        index_1.browser.sleep(5000);
        index_1.element(index_1.by.id('reset')).click();
        index_1.browser.sleep(5000);
        index_1.browser.compareScreen(index_1.element(index_1.by.id('templateForm')), 'ng-template-ErrorClass-reset');
    });
    it('setValue testing', function () {
        index_1.element(index_1.by.id('template')).click();
        index_1.browser.sleep(5000);
        index_1.element(index_1.by.id('setVal')).click();
        index_1.browser.sleep(5000);
        index_1.browser.compareScreen(index_1.element(index_1.by.id('templateForm')), 'ng-template-setValue');
    });
    it('setValue submit testing', function () {
        index_1.element(index_1.by.id('template')).click();
        index_1.browser.sleep(5000);
        index_1.element(index_1.by.id('setVal')).click();
        index_1.browser.sleep(5000);
        index_1.element(index_1.by.id('submit')).click();
        index_1.browser.sleep(5000);
        index_1.browser.compareScreen(index_1.element(index_1.by.id('templateForm')), 'ng-template-setValue-submit');
    });
    it('exceeding max value testing', function () {
        index_1.element(index_1.by.id('template')).click();
        index_1.browser.sleep(5000);
        index_1.element(index_1.by.id('maxVal')).click();
        index_1.browser.sleep(5000);
        index_1.element(index_1.by.id('setVal')).click();
        index_1.browser.sleep(5000);
        index_1.browser.compareScreen(index_1.element(index_1.by.id('templateForm')), 'ng-template-setValue-exceed-max');
    });
    it('exceeding max value reset testing', function () {
        index_1.element(index_1.by.id('template')).click();
        index_1.browser.sleep(5000);
        index_1.element(index_1.by.id('maxVal')).click();
        index_1.browser.sleep(5000);
        index_1.element(index_1.by.id('setVal')).click();
        index_1.browser.sleep(5000);
        index_1.element(index_1.by.id('reset')).click();
        index_1.browser.sleep(5000);
        index_1.browser.compareScreen(index_1.element(index_1.by.id('templateForm')), 'ng-template-setValue-exceed-max-reset');
    });
});
