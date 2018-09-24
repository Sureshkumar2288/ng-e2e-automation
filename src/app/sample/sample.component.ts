import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ShareRouting } from '../app.service';
import { DatePickerComponent } from '@syncfusion/ej2-angular-calendars';
import { DateTimePickerComponent, DateRangePickerComponent, CalendarComponent } from '@syncfusion/ej2-angular-calendars';
import { TimePickerComponent } from '@syncfusion/ej2-angular-calendars';

class User {
  constructor(
    public time: Date,
    public datetime: Date,
    public date: Date,
    public range: object,
  ) { }
}

@Component({
  selector: 'sample',
  styleUrls: ['./sample.component.css'],
  templateUrl: './sample.component.html'
})

export class SampleComponent {

  @ViewChild('datetime') public DateTimePicker1: DateTimePickerComponent;
  @ViewChild('range') public DateRangePicker1: DateRangePickerComponent;
  @ViewChild('date') public DatePicker1: DatePickerComponent;
  @ViewChild('time') public TimePicker1: TimePickerComponent;
  user: User;
  ngOnInit() {
    this.user = new User(null, null, null, { start: new Date(), end: new Date("12/12/2018") });
  }

  onSubmit(userForm) {
    if (userForm.valid) {
      document.getElementById("valid").innerHTML = "Form is Valid";
    }
    else document.getElementById("valid").innerHTML = "Form is invalid";
  }

  btnClick(): void {
    this.DateRangePicker1.value = [new  Date("1/1/2018"),  new  Date("1/1/2019")];
    this.DatePicker1.value = new  Date("1/1/2018");
    this.DateTimePicker1.value = new  Date("1/1/2018 1:30 AM");
    this.TimePicker1.value = new  Date("1/1/2018 02:30 PM");
  }

  minBtnClick(): void {
    this.DatePicker1.min = new Date('1/1/2017');
    this.DateRangePicker1.min = new Date('1/1/2017');
    this.DateTimePicker1.min = new Date('1/1/2017 10:00 PM');
    this.TimePicker1.min = new Date('1/1/2017 10:00 AM');
  }

  maxBtnClick(): void {
    this.DatePicker1.max = new Date('1/1/2017');
    this.DateRangePicker1.max = new Date('1/1/2017');
    this.DateTimePicker1.max = new Date('1/1/2017 10:00 PM');
    this.TimePicker1.max = new Date('1/1/2017 10:00 AM');
  }
}