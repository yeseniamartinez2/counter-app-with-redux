import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-daughter',
  templateUrl: './daughter.component.html',
  styleUrls: ['./daughter.component.scss'],
})
export class DaughterComponent implements OnInit {
  @Input() counter!: number;
  @Output() changeCounter = new EventEmitter<number>();
  constructor() {}

  ngOnInit(): void {}

  duplicate(): void {
    this.counter = this.counter * 2;
    this.changeCounter.emit(this.counter);
  }

  resetGrandDaughter(newCounter: number): void {
    this.counter = newCounter;
    this.changeCounter.emit(this.counter);
  }
}
