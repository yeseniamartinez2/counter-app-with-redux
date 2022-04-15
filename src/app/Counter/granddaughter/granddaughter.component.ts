import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-granddaughter',
  templateUrl: './granddaughter.component.html',
  styleUrls: ['./granddaughter.component.scss'],
})
export class GranddaughterComponent implements OnInit {
  @Input() counter!: number;
  @Output() changeCounter = new EventEmitter<number>();
  constructor() {}

  ngOnInit(): void {}

  reset(): void {
    this.counter = 0;
    this.changeCounter.emit(this.counter);
  }
}
