import { Component, OnInit } from '@angular/core';
import { Cast } from 'src/app/model/cast';
import { CastService } from 'src/app/service/cast.service';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'app-cast-list',
  templateUrl: './cast-list.component.html',
  styleUrls: ['./cast-list.component.css']
})
export class CastListComponent extends BaseComponent implements OnInit {
  title: string = "Cast-List";
  casts: Cast[] = [];

  constructor(private castSvc: CastService) {
    super();
  }

  ngOnInit() {
    super.ngOnInit;
    console.log("Calling cast...");
    this.castSvc.list().subscribe(jr => {
      console.log("jr:",jr);
      this.casts = jr.data as Cast[];
    });
  }

}
