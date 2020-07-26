import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Model } from 'src/model/mail';

import * as obj from "../../../dumy";

@Component({
  selector: 'app-info-details',
  templateUrl: './info-details.component.html',
  styleUrls: ['./info-details.component.scss']
})
export class InfoDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private route_: Router) { }

  obj: Model
  ngOnInit(): void {

    this.route.params.subscribe((param: Params)=>{
      if( param.id){
        let O= obj.default.info.filter(res=> res.id == param.id)
        this.obj = O[0] as any;
      }else{

      }
    })
  }

  go_back(){
    this.route_.navigate(['E/inbox'])
  }

}
