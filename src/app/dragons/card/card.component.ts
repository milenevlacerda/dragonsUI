import { Component, OnInit, Input } from '@angular/core';
import Dragon from '../../core/models/dragon.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() dragon: Dragon;

  ngOnInit() {}
}
