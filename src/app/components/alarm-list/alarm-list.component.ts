import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../service/api.service';


@Component({
  selector: 'app-employee-list',
  templateUrl: './alarm-list.component.html',
  styleUrls: ['./alarm-list.component.css']
})

export class AlarmListComponent implements OnInit {
  
  Alarm:any = [];
  loading = false;
  constructor(private apiService: ApiService) { 
    this.readAlarm();
  }

  ngOnInit() {}

  readAlarm(){
    this.apiService.getAlarms().subscribe((data) => {
     this.Alarm = data;
     console.log("alrm",this.Alarm);
    })    
  }
  onCreateAlarm(){
    this.loading = true;
    this.apiService.createAlarm().subscribe(
      (res) => {
        console.log('Alarm successfully created!');
       // setTimeout(function(){
          this.loading = false;
        //},1000);
        this.readAlarm();
        
      }, (error) => {
        console.log(error);
        this.loading = false;
      });
  }
  getAlarmClasses(alarm) {
    console.log(alarm.type);
    return {
      'alert-secondary' : alarm.type === 1,
      'alert-warning'   : alarm.type === 2, 
      'alert-danger'    : alarm.type === 3 
  }}

}