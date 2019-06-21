import { Component, OnInit, Input } from '@angular/core';
import Dragon from '../../core/models/dragon.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() dragon: Dragon;

  constructor(
    private router: Router,
  ) {}

  ngOnInit() {}

  public edit() {
    this.router.navigate([{ outlets: { modal: ['editar', this.dragon.slug] } }]);    
  }

  public delete() {
    this.router.navigate([{ outlets: { modal: ['excluir', this.dragon.slug] } }]);    
  }
}
