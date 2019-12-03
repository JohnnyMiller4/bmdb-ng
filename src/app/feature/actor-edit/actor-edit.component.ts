import { Component, OnInit } from '@angular/core';
import { Actor } from 'src/app/model/actor.class';
import { ActorService } from 'src/app/service/actor.service';
import { Router, ActivatedRoute } from '@angular/router';
//add Location
import { Location } from '@angular/common';

@Component({
  selector: 'app-actor-edit',
  templateUrl: './actor-edit.component.html',
  styleUrls: ['./actor-edit.component.css']
})
export class ActorEditComponent implements OnInit {
  title: string = "Actor Edit";
  actor: Actor = new Actor();
  id: number = 0;
  
  constructor(private actorSvc: ActorService,
              private router: Router,
              private route: ActivatedRoute,
              private loc: Location) { }

  ngOnInit() {
    this.route.params.subscribe(parms => this.id = parms['id']);
    this.actorSvc.get(this.id).subscribe(jr => {
      this.actor = jr.data as Actor;
    });
  }

  save() {
    this.actorSvc.save(this.actor).subscribe(jr => {
      console.log("edited actor...");
      console.log(this.actor);
      this.router.navigateByUrl("actor/list");
    })
  }

  backClicked() {
    this.loc.back();
  }

}
