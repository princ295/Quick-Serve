import { Injectable } from '@angular/core';

import * as info from "../../dumy";

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor() { }

  info: any[]=[]
  ngOnInit(){
    this.info = info.default.info;
    console.log('===============')
    console.log(info.default.info)
  }

}
