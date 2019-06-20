import { Component, OnInit, Input } from '@angular/core';
import Dragon from '../../core/models/dragon.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Input() dragons: Array<Dragon>;

  ngOnInit() {
  }

}
