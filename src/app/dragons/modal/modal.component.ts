import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import Dragon from '../../core/models/dragon.model';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Input() title: string;
  @Output() onSave: EventEmitter<any> = new EventEmitter();
  @Output() onClose: EventEmitter<any> = new EventEmitter();
  @Input() dragon = {};

  constructor() { }

  ngOnInit() {
    this.dragon;
  }

  public save(form) {
    this.onSave.emit(form.value);
  }

  public close() {
    this.onClose.emit();
  }

}
