import { Component, OnInit } from '@angular/core';
import { DragonsService } from '../../core/services/dragons/dragons.service';
import { Router } from '@angular/router';
import PubSub from 'pubsub-js';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  constructor(
    private dragonsService: DragonsService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  public create(dragon) {
    this.dragonsService.createNewDragon(dragon)
      .then(() => {
        PubSub.publish('FETCH_DRAGONS');
        this.router.navigate(['']);
      });
  }

  public close() {
    this.router.navigate(['']);
  }

}
