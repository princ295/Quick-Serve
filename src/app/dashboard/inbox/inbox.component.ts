import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';

import * as _ from "../../../dumy";
import { Router } from '@angular/router';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.scss']
})
export class InboxComponent implements OnInit {

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
