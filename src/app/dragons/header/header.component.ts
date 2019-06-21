import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() onCreate: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public create() {
    this.onCreate.emit();
  }

}
