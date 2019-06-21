import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DragonsService } from '../../core/services/dragons/dragons.service';
import PubSub from 'pubsub-js';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  public dragon = {};

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private dragonsService: DragonsService,
  ) { }

  ngOnInit() {
    // @ts-ignore
    this.fetchDragon(this.activatedRoute.params.value.slug);
  }

  fetchDragon(slug) {
    this.dragonsService.getDragon(slug)
      .then(dragon=> {
        this.dragon = dragon
      })
  }

  public close() {
    this.router.navigate(['']);
  }

  public edit(dragon) {
    // @ts-ignore
    this.dragonsService.updateDragon(this.dragon.slug, dragon)
      .then(() => {
        PubSub.publish('FETCH_DRAGONS');
        this.router.navigate(['']);
      })
  }
}
