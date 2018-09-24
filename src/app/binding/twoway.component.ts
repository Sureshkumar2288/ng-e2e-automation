import { Component ,ViewChild, OnInit, ElementRef} from '@angular/core';
import { DatePickerComponent } from '@syncfusion/ej2-angular-calendars';
import { DateTimePickerComponent,DateRangePickerComponent, CalendarComponent } from '@syncfusion/ej2-angular-calendars';
import { TimePickerComponent } from '@syncfusion/ej2-angular-calendars';
import { Router, ActivatedRoute, NavigationStart } from '@angular/router';
import { ShareRouting } from '../app.service';

@Component({
  selector: 'binding',
  styleUrls: ['./twoway.component.css'],
  templateUrl: './twoway.component.html'
})
export class TwowayComponent {
  public value : Date ;
  public datevalue : Date ;
  public rangevalue : any ;
  public timevalue : Date ;
  constructor(private route: ActivatedRoute, private router: Router, public shareData: ShareRouting) {
    this.value = new Date(2018,10,10);
    this.datevalue = null;
    this.timevalue = null;
  }
  @ViewChild('datetime1')  public DateTimePicker1: DateTimePickerComponent;
  @ViewChild('datetime2')  public DateTimePicker2: DateTimePickerComponent;
   @ViewChild('daterange1')  public DateRangePicker1: DateRangePickerComponent;
  @ViewChild('daterange2')  public DateRangePicker2: DateRangePickerComponent;
  @ViewChild('date2')  public DatePicker2: DatePickerComponent;
  @ViewChild('date1')  public DatePicker1: DatePickerComponent;
  @ViewChild('time1')  public TimePicker1: TimePickerComponent;
  @ViewChild('time2')  public TimePicker2: TimePickerComponent;
  @ViewChild('cal1')  public Calendar1: CalendarComponent;
  @ViewChild('cal2')  public Calendar2: CalendarComponent;
  strictMode(args: any) {
     if(args.checked) {
       this.DateTimePicker1.strictMode = true;
       this.DateTimePicker2.strictMode = true;
       this.DateRangePicker1.strictMode = true;
       this.DateRangePicker2.strictMode = true;
       this.DatePicker1.strictMode = true;
       this.DatePicker2.strictMode = true;
       this.TimePicker1.strictMode = true;
       this.TimePicker2.strictMode = true;
     }
     else {
        this.DateTimePicker1.strictMode = false;
       this.DateTimePicker2.strictMode = false;
       this.DatePicker1.strictMode = false;
       this.DateRangePicker1.strictMode = false;
       this.DateRangePicker2.strictMode = false;
       this.DatePicker2.strictMode = false;
       this.TimePicker1.strictMode = false;
       this.TimePicker2.strictMode = false;
     }
    }

    btnClick(): void {
       this.DateRangePicker1.value =[new Date("1/1/2018"), new Date("1/1/2019")];
      this.DateTimePicker1.value = new Date("1/1/2018 1:30 AM");
    }  
  
    maxBtnClick(): void {
       this.DatePicker1.max = new Date('1/1/2017');
       this.DateRangePicker1.max = new Date('1/1/2017');
       this.DateTimePicker1.max = new Date('1/1/2017 10:00 PM');
       this.TimePicker1.max = new Date('1/1/2017 1:00 AM');
      this.Calendar1.max = new Date('1/1/2017 1:00 AM');
      this.DatePicker2.max = new Date('1/1/2017');
       this.DateRangePicker2.max = new Date('1/1/2017');
       this.DateTimePicker2.max = new Date('1/1/2017 10:00 PM');
       this.TimePicker2.max = new Date('1/1/2017 1:00 AM');
      this.Calendar2.max = new Date('1/1/2017 1:00 AM');
    }  
}
