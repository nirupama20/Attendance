import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { attendance } from './model';


@Injectable({
  providedIn: 'root'
})

export class AttendanceService {
  attendanceData: Array<attendance> = [];
  constructor(private http: HttpClient) { }

  saveAttendance(attendance: attendance) {
    this.attendanceData.push(attendance)
    return this.http.post(`https://61703b2b23781c001728994e.mockapi.io/attendance`, attendance)
  }
  getAll() {
    return this.http.get<Array<attendance>>('https://61703b2b23781c001728994e.mockapi.io/attendance')
  }

}