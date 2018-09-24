import { Component,ViewChild, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DatePickerComponent, DateRangePickerComponent, DateTimePickerComponent, TimePickerComponent } from '@syncfusion/ej2-angular-calendars';
import { Router, ActivatedRoute } from '@angular/router';
import { ShareRouting } from '../app.service';


@Component({
  selector: 'about',
  styleUrls: ['./about.component.css'],
  templateUrl: './about.component.html'
})
export class AboutComponent {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) { }
  @ViewChild('date')  public defaultDatePicker: DatePickerComponent;
  @ViewChild('range')  public defaultDateRangePicker: DateRangePickerComponent;
  @ViewChild('datetime')  public defaultDateTimePicker: DateTimePickerComponent;
  @ViewChild('time')  public defaultTimePicker: TimePickerComponent;
  onSubmit() {
    if (this.form.valid) {
      document.getElementById("valid").innerHTML = "Form is Valid";
    }
    else {
      document.getElementById("valid").innerHTML = "Form is invalid";
    }
  }

  ResetForm(args: any){
    this.form.reset();
    document.getElementById("valid").innerHTML = "";
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      range: [null, [Validators.required]],
       date: [null, [Validators.required]],
       datetime: [null, [Validators.required]],
       time: [null, [Validators.required]],
    });
  }

  btnClick(): void {
     this.form.controls['range'].setValue([new Date("1/1/2018"), new Date("1/1/2019")]);
    this.form.controls['date'].setValue(new Date("1/1/2018"));
    this.form.controls['datetime'].setValue(new Date("1/1/2018 1:30 AM"));
    this.form.controls['time'].setValue(new Date("1/1/2018 02:30 PM"));
  }

  strBtnClick(): void {
    //  this.form.controls['range'].setValue("1/1/2018 - 1/1/2019");
    this.form.controls['date'].setValue("1/1/2018");
    this.form.controls['datetime'].setValue("1/1/2018 1:30 AM");
    this.form.controls['time'].setValue("1/1/2018 02:30 PM");
  }

  minBtnClick(): void {
     this.defaultDatePicker.min = new Date('1/1/2017');
     this.defaultDateRangePicker.min = new Date('1/1/2017');
     this.defaultDateTimePicker.min = new Date('1/1/2017 10:00 PM');
     this.defaultTimePicker.min = new Date('1/1/2017 10:00 AM');
  }

  maxBtnClick(): void {
     this.defaultDatePicker.max = new Date('1/1/2017');
     this.defaultDateRangePicker.max = new Date('1/1/2017');
     this.defaultDateTimePicker.max = new Date('1/1/2017 10:00 PM');
     this.defaultTimePicker.max = new Date('1/1/2017 10:00 AM');
  }

}