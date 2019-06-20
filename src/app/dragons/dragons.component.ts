import { Component, OnInit } from '@angular/core';
import { DragonsService } from '../core/services/dragons/dragons.service';
import Dragon from '../core/models/dragon.model';

@Component({
  selector: 'app-dragons',
  templateUrl: './dragons.component.html',
  styleUrls: ['./dragons.component.scss']
})
export class DragonsComponent implements OnInit {
  public dragons: Array<Dragon> = []

  constructor(
    private dragonsService: DragonsService
  ) {}

  ngOnInit() {
    this.fetchDragons();
  }

  async fetchDragons() {
    const { _metadata: { total_count } } = await this.dragonsService.listDragons(1);
    const { items: dragons } = await this.dragonsService.listDragons(total_count);

    this.dragons = dragons.filter(item => !!item.slug);
  }

}
