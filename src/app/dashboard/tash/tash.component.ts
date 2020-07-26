import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { Router } from '@angular/router';


import * as _ from "../../../dumy";

@Component({
  selector: 'app-tash',
  templateUrl: './tash.component.html',
  styleUrls: ['./tash.component.scss']
})
export class TashComponent implements OnInit {

  constructor(public src: DashboardService, private route: Router ) { }

  info: any[]=[]
  ngOnInit(): void {
    this.info = _.default.info
  }

  getId(info: any){
    this.route.navigate(['E/detail/'+ info.id])
    info.status = 'seen'
  }
}
