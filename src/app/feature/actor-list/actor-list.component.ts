import { Component, OnInit } from '@angular/core';
import { Actor } from 'src/app/model/actor.class';
import { ActorService } from 'src/app/service/actor.service';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'app-actor-list',
  templateUrl: './actor-list.component.html',
  styleUrls: ['./actor-list.component.css']
})
//add extend BaseComponent
export class ActorListComponent extends BaseComponent implements OnInit {
  title: string = "Actor-List";
  actors: Actor[] = [];

  //add ActorService
  constructor(private actorSvc: ActorService) {
    //add super();
    super();
   }

  ngOnInit() {
    //add super.ngOnInit();
    super.ngOnInit();
    console.log("Calling actor service list...");
    this.actorSvc.list().subscribe(jr => {
      console.log("jr", jr);
      this.actors = jr.data as Actor [];
      console.log("actors", this.actors);
    });
  }

}
