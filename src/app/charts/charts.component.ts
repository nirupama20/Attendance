import { Component, OnInit } from '@angular/core';
import { AttendanceService } from '../attendance.service';
import { attendanceRec } from '../model';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {
  n = new Date();
  view: any = [960, 300];
  currMonth = (this.n.getMonth() + 1).toString();
  attendanceData: Array<attendanceRec> = [];
  temp: Array<attendanceRec> = [];


  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showXAxisLabel = true;
  xAxisLabel = 'Dates';
  showYAxisLabel = true;
  yAxisLabel = 'No. of Students';

  colorScheme = {
    domain: ['red', 'green', 'blue', 'grey']
  };
  constructor(private attendanceservice: AttendanceService) {
  }

  ngOnInit(): void {
    this.loadData();
  }

  //Sorting of dates
  sort(x: any, y: any) {               
    if (x.date < y.date) {
      return -1;
    }
    if (x.date > y.date) {
      return 1;
    }
    return 0;
  }


  loadData() {
    this.attendanceservice.getAll().subscribe((data) => {
      data.sort(this.sort)
      data.forEach((date) => {
        let month = date.date.slice(5, 7);
        if (this.currMonth === month) {
          let count = 0;
          date.present.forEach((present) => {
            count++;
          })
          this.temp.push({ "name": date.date, "value": count })
        }
      })
    })
    this.attendanceData = this.temp;
  }

}
