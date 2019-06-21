import { Component, OnInit } from '@angular/core';
import { DragonsService } from '../../core/services/dragons/dragons.service';
import { ActivatedRoute, Router } from '@angular/router';
import Dragon from '../../core/models/dragon.model';
import PubSub from 'pubsub-js';

@Component({
  selector: 'app-modal-delete',
  templateUrl: './modal-delete.component.html',
  styleUrls: ['./modal-delete.component.scss']
})
export class ModalDeleteComponent implements OnInit {
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

  public delete() {
    // @ts-ignore
    this.dragonsService.deleteDragon(this.dragon.slug)
      .then(() => {
        PubSub.publish('FETCH_DRAGONS');
        this.router.navigate(['']);
      })
  }

  public close() {
    this.router.navigate(['']);
  }
}
