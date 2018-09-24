import { browser, element, by, Key } from '@syncfusion/ej2-base/e2e/index';


describe('EJ2 Calendars Angular Reactive Form testing', () => {
  browser.get('localhost:4200');

  beforeEach(() => {
    //
  });
  afterEach(() => {
    element(by.id('binding')).click();
  });
  it('Reactive Form Sample runnable', () => {
    element(by.id('reactiveForm')).click();
    browser.sleep(5000);
    browser.compareScreen(element(by.id('FormValidation')), 'ng-reactiveForm-default');
  });

  it('Reactive Form initial submit testing', () => {
    element(by.id('reactiveForm')).click();
    browser.sleep(5000);
    element(by.xpath("//*[@id='submit']")).click();
    browser.sleep(5000);
    browser.compareScreen(element(by.id('FormValidation')), 'ng-initial-submit');
  });

  it('Reactive Form initial reset testing', () => {
    element(by.id('reactiveForm')).click();
    browser.sleep(5000);
    element(by.xpath("//*[@id='submit']")).click();
    browser.sleep(5000);
    element(by.xpath("//*[@id='reset']")).click();
    browser.sleep(5000);
    browser.compareScreen(element(by.id('FormValidation')), 'ng-initial-reset');
  });

  it('Reactive Form DateRangePicker focusout testing', () => {
    element(by.id('reactiveForm')).click();
    browser.sleep(5000);
    element(by.xpath("//*[@id='daternage_input']")).click();
    browser.sleep(5000);
    element(by.id("check")).click();
    browser.sleep(5000);
    browser.compareScreen(element(by.id('FormValidation')), 'ng-dateRangePicker-focusOut');
  });

  it('Reactive Form DateRangePicker reset testing', () => {
    element(by.id('reactiveForm')).click();
    browser.sleep(5000);
    element(by.xpath("//*[@id='daternage_input']")).click();
    browser.sleep(5000);
    element(by.id("check")).click();
    browser.sleep(5000);
    element(by.xpath("//*[@id='reset']")).click();
    browser.sleep(5000);
    browser.compareScreen(element(by.id('FormValidation')), 'ng-dateRangePicker-reset');
  });

  it('Reactive Form DatePicker focusout testing', () => {
    element(by.id('reactiveForm')).click();
    element(by.xpath("//*[@id='date_input']")).click();
    browser.sleep(5000);
    element(by.id("check")).click();
    browser.sleep(5000);
    browser.compareScreen(element(by.id('FormValidation')), 'ng-datePicker-focusOut');
  });

  it('Reactive Form DatePicker reset testing', () => {
    element(by.id('reactiveForm')).click();
    element(by.xpath("//*[@id='date_input']")).click();
    browser.sleep(5000);
    element(by.id("check")).click();
    browser.sleep(5000);
    element(by.id('reset')).click();
    browser.sleep(5000);
    browser.compareScreen(element(by.id('FormValidation')), 'ng-datePicker-reset');
  });

  it('Reactive Form DateTimePicker focusout testing', () => {
    element(by.id('reactiveForm')).click();
    element(by.xpath("//*[@id='datetime_input']")).click();
    browser.sleep(5000);
    element(by.id("check")).click();
    browser.sleep(5000);
    browser.compareScreen(element(by.id('FormValidation')), 'ng-dateTimePicker-focusOut');
  });

  it('Reactive Form DateTimePicker reset testing', () => {
    element(by.id('reactiveForm')).click();
    element(by.xpath("//*[@id='datetime_input']")).click();
    browser.sleep(5000);
    element(by.id("check")).click();
    browser.sleep(5000);
    element(by.id('reset')).click();
    browser.sleep(5000);
    browser.compareScreen(element(by.id('FormValidation')), 'ng-dateTimePicker-reset');
  });

  it('Reactive Form TimePicker focusout testing', () => {
    element(by.id('reactiveForm')).click();
    element(by.xpath("//*[@id='time_input']")).click();
    browser.sleep(5000);
    element(by.id("check")).click();
    browser.sleep(5000);
    browser.compareScreen(element(by.id('FormValidation')), 'ng-TimePicker-focusOut');
  });

  it('Reactive Form TimePicker reset testing', () => {
    element(by.id('reactiveForm')).click();
    element(by.xpath("//*[@id='time_input']")).click();
    browser.sleep(5000);
    element(by.id("check")).click();
    browser.sleep(5000);
    element(by.id('reset')).click();
    browser.sleep(5000);
    browser.compareScreen(element(by.id('FormValidation')), 'ng-TimePicker-reset');
  });

  it('Reactive Form ErrorClass-WithoutValue testing', () => {
    element(by.id('reactiveForm')).click();
    element(by.xpath("//*[@id='daternage_input']")).click();
    browser.sleep(5000);
    element(by.xpath("//*[@id='date_input']")).click();
    browser.sleep(5000);
    element(by.xpath("//*[@id='datetime_input']")).click();
    browser.sleep(5000);
    element(by.xpath("//*[@id='time_input']")).click();
    browser.sleep(5000);
    element(by.id("check")).click();
    browser.sleep(5000);
    browser.compareScreen(element(by.id('FormValidation')), 'ng-Form-ErrorClass-WithoutValue');
  });

  it('Reactive Form ErrorClass-WithoutValue reset testing', () => {
    element(by.id('reactiveForm')).click();
    element(by.xpath("//*[@id='daternage_input']")).click();
    browser.sleep(5000);
    element(by.xpath("//*[@id='date_input']")).click();
    browser.sleep(5000);
    element(by.xpath("//*[@id='datetime_input']")).click();
    browser.sleep(5000);
    element(by.xpath("//*[@id='time_input']")).click();
    browser.sleep(5000);
    element(by.id("check")).click();
    browser.sleep(5000);
    element(by.id('reset')).click();
    browser.sleep(5000);
    browser.compareScreen(element(by.id('FormValidation')), 'ng-Form-ErrorClass-WithoutValue-reset');
  });

  it('Reactive Form ErrorClass testing', () => {
    element(by.id('reactiveForm')).click();
    element(by.xpath("//*[@id='daternage_input']")).click();
    element(by.xpath("//*[@id='daternage_input']")).sendKeys("9/11/20183 - 10/16/20183" + Key.ENTER);
    browser.sleep(5000);
    element(by.xpath("//*[@id='date_input']")).click();
    element(by.xpath("//*[@id='date_input']")).sendKeys("9/11/20183" + Key.ENTER);
    browser.sleep(5000);
    element(by.xpath("//*[@id='datetime_input']")).click();
    element(by.xpath("//*[@id='datetime_input']")).sendKeys("9/11/20183 10:00 AM" + Key.ENTER);
    browser.sleep(5000);
    element(by.xpath("//*[@id='time_input']")).click();
    element(by.xpath("//*[@id='time_input']")).sendKeys("10:00D AM" + Key.ENTER);
    browser.sleep(5000);
    element(by.id("check")).click();
    browser.sleep(5000);
    browser.compareScreen(element(by.id('FormValidation')), 'ng-ErrorClass');
  });

  it('Reactive Form ErrorClass reset testing', () => {
    element(by.id('reactiveForm')).click();
    element(by.xpath("//*[@id='daternage_input']")).click();
    element(by.xpath("//*[@id='daternage_input']")).sendKeys("9/11/20183 - 10/16/20183" + Key.ENTER);
    browser.sleep(5000);
    element(by.xpath("//*[@id='date_input']")).click();
    element(by.xpath("//*[@id='date_input']")).sendKeys("9/11/20183" + Key.ENTER);
    browser.sleep(5000);
    element(by.xpath("//*[@id='datetime_input']")).click();
    element(by.xpath("//*[@id='datetime_input']")).sendKeys("9/11/20183 10:00 AM" + Key.ENTER);
    browser.sleep(5000);
    element(by.xpath("//*[@id='time_input']")).click();
    element(by.xpath("//*[@id='time_input']")).sendKeys("10:00D AM" + Key.ENTER);
    browser.sleep(5000);
    element(by.id("check")).click();
    browser.sleep(5000);
    element(by.id('reset')).click();
    browser.sleep(5000);
    browser.compareScreen(element(by.id('FormValidation')), 'ng-ErrorClass-reset');
  });

  it('Reactive Form with setValue testing', () => {
    element(by.id('reactiveForm')).click();
    browser.sleep(5000);
    element(by.xpath("//*[@id='setVal']")).click();
    browser.sleep(5000);
    browser.compareScreen(element(by.id('FormValidation')), 'ng-setValue');
  });

  it('Reactive Form setValue submit testing', () => {
    element(by.id('reactiveForm')).click();
    browser.sleep(5000);
    element(by.xpath("//*[@id='setVal']")).click();
    browser.sleep(5000);
    element(by.id('submit')).click();
    browser.sleep(5000);
    browser.compareScreen(element(by.id('FormValidation')), 'ng-setValue-submit');
  });

  it('Reactive Form setValue string testing', () => {
    element(by.id('reactiveForm')).click();
    browser.sleep(5000);
    element(by.id("setValStr")).click();
    browser.sleep(5000);
    browser.compareScreen(element(by.id('FormValidation')), 'ng-setValue-string');
  });

  it('Reactive Form setValue reset testing', () => {
    element(by.id('reactiveForm')).click();
    browser.sleep(5000);
    element(by.xpath("//*[@id='setVal']")).click();
    browser.sleep(5000);
    element(by.id('reset')).click();
    browser.sleep(5000);
    browser.compareScreen(element(by.id('FormValidation')), 'ng-setValue-reset');
  });

  it('Reactive Form with exceeding max value testing', () => {
    element(by.id('reactiveForm')).click();
    browser.sleep(5000);
    element(by.xpath("//*[@id='maxVal']")).click();
    browser.sleep(5000);
    element(by.xpath("//*[@id='setVal']")).click();
    browser.sleep(5000);
    browser.compareScreen(element(by.id('FormValidation')), 'ng-setValue-exceed-max');
  });

  it('Reactive Form with exceeding max value reset testing', () => {
    element(by.id('reactiveForm')).click();
    browser.sleep(5000);
    element(by.xpath("//*[@id='maxVal']")).click();
    browser.sleep(5000);
    element(by.xpath("//*[@id='setVal']")).click();
    browser.sleep(5000);
    element(by.id('reset')).click();
    browser.sleep(5000);
    browser.compareScreen(element(by.id('FormValidation')), 'ng-setValue-exceed-max-reset');
  });

  it('Reactive Form DateRangePicker with exceeding max value testing', () => {
    element(by.id('reactiveForm')).click();
    browser.sleep(5000);
    element(by.xpath("//*[@id='maxVal']")).click();
    browser.sleep(5000);
    element(by.xpath("//*[@id='setVal']")).click();
    browser.sleep(5000);
    element(by.xpath("//*[@id='daternage_input']")).click();
    browser.sleep(5000);
    element(by.xpath("//*[@id='daternage']/div/span[2]")).click();
    browser.sleep(5000);
    element(by.id("check")).click();
    browser.sleep(5000);
    browser.compareScreen(element(by.id('FormValidation')), 'ng-DateRange-setValue-exceed-max');
  });

  it('Reactive Form DateRangePicker with exceeding max value reset testing', () => {
    element(by.id('reactiveForm')).click();
    browser.sleep(5000);
    element(by.xpath("//*[@id='maxVal']")).click();
    browser.sleep(5000);
    element(by.xpath("//*[@id='setVal']")).click();
    browser.sleep(5000);
    element(by.xpath("//*[@id='daternage_input']")).click();
    browser.sleep(5000);
    element(by.xpath("//*[@id='daternage']/div/span[2]")).click();
    browser.sleep(5000);
    element(by.id("check")).click();
    browser.sleep(5000);
    element(by.id('reset')).click();
    browser.sleep(5000);
    browser.compareScreen(element(by.id('FormValidation')), 'ng-DateRange-setValue-exceed-max-reset');
  });

  it('Reactive Form DatePicker with exceeding max value testing', () => {
    element(by.id('reactiveForm')).click();
    browser.sleep(5000);
    element(by.xpath("//*[@id='maxVal']")).click();
    browser.sleep(5000);
    element(by.xpath("//*[@id='setVal']")).click();
    browser.sleep(5000);
    element(by.xpath("//*[@id='date_input']")).click();
    browser.sleep(5000);
    element(by.xpath("//*[@id='date']/div/span[2]")).click();
    browser.sleep(5000);
    element(by.id("check")).click();
    browser.sleep(5000);
    browser.compareScreen(element(by.id('FormValidation')), 'ng-Date-setValue-exceed-max');
  });

  it('Reactive Form DatePicker with exceeding max value reset testing', () => {
    element(by.id('reactiveForm')).click();
    browser.sleep(5000);
    element(by.xpath("//*[@id='maxVal']")).click();
    browser.sleep(5000);
    element(by.xpath("//*[@id='setVal']")).click();
    browser.sleep(5000);
    element(by.xpath("//*[@id='date_input']")).click();
    browser.sleep(5000);
    element(by.xpath("//*[@id='date']/div/span[2]")).click();
    browser.sleep(5000);
    element(by.id("check")).click();
    browser.sleep(5000);
    element(by.id('reset')).click();
    browser.sleep(5000);
    browser.compareScreen(element(by.id('FormValidation')), 'ng-Date-setValue-exceed-max-reset');
  });

  it('Reactive Form DateTimePicker with exceeding max value testing', () => {
    element(by.id('reactiveForm')).click();
    browser.sleep(5000);
    element(by.xpath("//*[@id='maxVal']")).click();
    browser.sleep(5000);
    element(by.xpath("//*[@id='setVal']")).click();
    browser.sleep(5000);
    element(by.xpath("//*[@id='datetime_input']")).click();
    browser.sleep(5000);
    element(by.xpath("//*[@id='datetime']/div/span[2]")).click();
    browser.sleep(5000);
    element(by.id("check")).click();
    browser.sleep(5000);
    browser.compareScreen(element(by.id('FormValidation')), 'ng-DateTime-setValue-exceed-max');
  });

  it('Reactive Form DateTimePicker with exceeding max value reset testing', () => {
    element(by.id('reactiveForm')).click();
    browser.sleep(5000);
    element(by.xpath("//*[@id='maxVal']")).click();
    browser.sleep(5000);
    element(by.xpath("//*[@id='setVal']")).click();
    browser.sleep(5000);
    element(by.xpath("//*[@id='datetime_input']")).click();
    browser.sleep(5000);
    element(by.xpath("//*[@id='datetime']/div/span[2]")).click();
    browser.sleep(5000);
    element(by.id("check")).click();
    browser.sleep(5000);
    element(by.id('reset')).click();
    browser.sleep(5000);
    browser.compareScreen(element(by.id('FormValidation')), 'ng-DateTime-setValue-exceed-max-reset');
  });

  it('Reactive Form TimePicker with exceeding max value testing', () => {
    element(by.id('reactiveForm')).click();
    browser.sleep(5000);
    element(by.xpath("//*[@id='maxVal']")).click();
    browser.sleep(5000);
    element(by.xpath("//*[@id='setVal']")).click();
    browser.sleep(5000);
    element(by.xpath("//*[@id='time_input']")).click();
    browser.sleep(5000);
    element(by.xpath("//*[@id='time']/div/span[2]")).click();
    browser.sleep(5000);
    element(by.id("check")).click();
    browser.sleep(5000);
    browser.compareScreen(element(by.id('FormValidation')), 'ng-Time-setValue-exceed-max');
  });

  it('Reactive Form TimePicker with exceeding max value reset testing', () => {
    element(by.id('reactiveForm')).click();
    browser.sleep(5000);
    element(by.xpath("//*[@id='maxVal']")).click();
    browser.sleep(5000);
    element(by.xpath("//*[@id='setVal']")).click();
    browser.sleep(5000);
    element(by.xpath("//*[@id='time_input']")).click();
    browser.sleep(5000);
    element(by.xpath("//*[@id='time']/div/span[2]")).click();
    browser.sleep(5000);
    element(by.id("check")).click();
    browser.sleep(5000);
    element(by.id('reset')).click();
    browser.sleep(5000);
    browser.compareScreen(element(by.id('FormValidation')), 'ng-Time-setValue-exceed-max-reset');
  });

});
describe('EJ2 Calendars Angular two-way binding testing', () => {
  browser.get('localhost:4200');

  describe('without strict mode', () => {
    beforeEach(() => {
      // 
    });
    afterEach(() => {
      element(by.id('reactiveForm')).click();
    });

    it('Two-Way binding Sample runnable', () => {
      element(by.id('binding')).click();
      browser.sleep(5000);
      browser.compareScreen(element(by.id('twowayWrapper')), 'ng-two-way-binding-default');
    });

    it('Two-Way binding Sample value exceed the max value runnable', () => {
      element(by.id('binding')).click();
      browser.sleep(5000);
      element(by.id('maxVal')).click();
      browser.sleep(5000);
      element(by.id('setVal')).click();
      browser.sleep(5000);
      browser.compareScreen(element(by.id('twowayWrapper')), 'ng-two-way-binding-value-exceed');
    });

    it('Two-Way binding Sample clear button clicked', () => {
      element(by.id('binding')).click();
      browser.sleep(5000);
      element(by.xpath("//*[@id='datetimepicker_input']")).click();
      browser.sleep(5000);
      element(by.xpath("//*[@id='datetimepicker']/span/span[1]")).click();
      browser.sleep(5000);
      element(by.id("check")).click();
      browser.sleep(5000);
      browser.compareScreen(element(by.id('twowayWrapper')), 'ng-two-way-binding-clear-icon');
    });

    it('Two-Way binding Sample date input editable', () => {
      element(by.id('binding')).click();
      browser.sleep(5000);
      element(by.xpath("//*[@id='datepicker_input']")).click();
      browser.sleep(5000);
      element(by.xpath("//*[@id='datepicker_input']")).sendKeys(Key.BACK_SPACE);
      browser.sleep(5000);
      element(by.id("check")).click();
      browser.sleep(5000);
      browser.compareScreen(element(by.id('twowayWrapper')), 'ng-two-way-binding-date-editable');
    });
  });

  describe('with strict mode', () => {
    beforeEach(() => {
      // 
    });
    afterEach(() => {
      element(by.id('reactiveForm')).click();
    });

    it('Two-Way binding Sample runnable', () => {
      element(by.id('binding')).click();
      browser.sleep(2000);
      element(by.id('strict')).click();
      browser.sleep(5000);
      browser.compareScreen(element(by.id('twowayWrapper')), 'ng-two-way-binding-default-strictMode');
    });

    it('Two-Way binding Sample value exceed the max value runnable', () => {
      element(by.id('binding')).click();
      browser.sleep(2000);
      element(by.id('strict')).click();
      browser.sleep(5000);
      element(by.id('maxVal')).click();
      browser.sleep(5000);
      element(by.id('setVal')).click();
      browser.sleep(5000);
      browser.compareScreen(element(by.id('twowayWrapper')), 'ng-two-way-binding-value-exceed-strictMode');
    });

    it('Two-Way binding Sample clear button clicked', () => {
      element(by.id('binding')).click();
      browser.sleep(2000);
      element(by.id('strict')).click();
      browser.sleep(5000);
      element(by.xpath("//*[@id='datetimepicker_input']")).click();
      browser.sleep(5000);
      element(by.xpath("//*[@id='datetimepicker']/span/span[1]")).click();
      browser.sleep(5000);
      browser.compareScreen(element(by.id('twowayWrapper')), 'ng-two-way-binding-clear-icon-strictMode');
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

describe('EJ2 Calendars Angular Template triven Form testing', () => {
  browser.get('localhost:4200');

  beforeEach(() => {
    //
  });
  afterEach(() => {
    element(by.id('binding')).click();
  });
  it('Sample default runnable', () => {
    element(by.id('template')).click();
    browser.sleep(5000);
    browser.compareScreen(element(by.id('templateForm')), 'ng-templateForm-default');
  });

  it('initial submit testing', () => {
    element(by.id('template')).click();
    browser.sleep(5000);
    element(by.id('submit')).click();
    browser.sleep(5000);
    browser.compareScreen(element(by.id('templateForm')), 'ng-template-initial-submit');
  });

  it('initial reset testing', () => {
    element(by.id('template')).click();
    browser.sleep(5000);
    element(by.id('reset')).click();
    browser.sleep(5000);
    browser.compareScreen(element(by.id('templateForm')), 'ng-template-initial-reset');
  });

  it('ErrorClass testing', () => {
    element(by.id('template')).click();
    element(by.xpath("//*[@id='dateDemo_input']")).click();
    element(by.xpath("//*[@id='dateDemo_input']")).sendKeys("9/11/20183" + Key.ENTER);
    browser.sleep(5000);
    element(by.xpath("//*[@id='datetimeDemo_input']")).click();
    element(by.xpath("//*[@id='datetimeDemo_input']")).sendKeys("9/11/20183 10:00 AM" + Key.ENTER);
    browser.sleep(5000);
    element(by.xpath("//*[@id='timeDemo_input']")).click();
    element(by.xpath("//*[@id='timeDemo_input']")).sendKeys("10:00D AM" + Key.ENTER);
    browser.sleep(5000);
    element(by.xpath("//*[@id='rangeDemo_input']")).click();
    element(by.xpath("//*[@id='rangeDemo_input']")).sendKeys("9/11/20183 - 10/16/20183" + Key.ENTER);
    browser.sleep(5000);
    element(by.id("check")).click();
    browser.sleep(5000);
    browser.compareScreen(element(by.id('templateForm')), 'ng-template-ErrorClass');
  });

  it('ErrorClass reset testing', () => {
    element(by.id('template')).click();
    element(by.xpath("//*[@id='dateDemo_input']")).click();
    element(by.xpath("//*[@id='dateDemo_input']")).sendKeys("9/11/20183" + Key.ENTER);
    browser.sleep(5000);
    element(by.xpath("//*[@id='datetimeDemo_input']")).click();
    element(by.xpath("//*[@id='datetimeDemo_input']")).sendKeys("9/11/20183 10:00 AM" + Key.ENTER);
    browser.sleep(5000);
    element(by.xpath("//*[@id='timeDemo_input']")).click();
    element(by.xpath("//*[@id='timeDemo_input']")).sendKeys("10:00D AM" + Key.ENTER);
    browser.sleep(5000);
    element(by.xpath("//*[@id='rangeDemo_input']")).click();
    element(by.xpath("//*[@id='rangeDemo_input']")).sendKeys("9/11/20183 - 10/16/20183" + Key.ENTER);
    browser.sleep(5000);
    browser.sleep(5000);
    element(by.id("check")).click();
    browser.sleep(5000);
    element(by.id('reset')).click();
    browser.sleep(5000);
    browser.compareScreen(element(by.id('templateForm')), 'ng-template-ErrorClass-reset');
  });

  it('setValue testing', () => {
    element(by.id('template')).click();
    browser.sleep(5000);
    element(by.id('setVal')).click();
    browser.sleep(5000);
    browser.compareScreen(element(by.id('templateForm')), 'ng-template-setValue');
  });

  it('setValue submit testing', () => {
    element(by.id('template')).click();
    browser.sleep(5000);
    element(by.id('setVal')).click();
    browser.sleep(5000);
    element(by.id('submit')).click();
    browser.sleep(5000);
    browser.compareScreen(element(by.id('templateForm')), 'ng-template-setValue-submit');
  });

  it('exceeding max value testing', () => {
    element(by.id('template')).click();
    browser.sleep(5000);
    element(by.id('maxVal')).click();
    browser.sleep(5000);
    element(by.id('setVal')).click();
    browser.sleep(5000);
    browser.compareScreen(element(by.id('templateForm')), 'ng-template-setValue-exceed-max');
  });

  it('exceeding max value reset testing', () => {
    element(by.id('template')).click();
    browser.sleep(5000);
    element(by.id('maxVal')).click();
    browser.sleep(5000);
    element(by.id('setVal')).click();
    browser.sleep(5000);
    element(by.id('reset')).click();
    browser.sleep(5000);
    browser.compareScreen(element(by.id('templateForm')), 'ng-template-setValue-exceed-max-reset');
  });

});