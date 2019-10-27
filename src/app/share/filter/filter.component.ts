import {Component, EventEmitter, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit, OnChanges {
  keyword: string;
  @Output() changeKeyword: EventEmitter<string> = new EventEmitter<string>();
  @Output() changeStatus: EventEmitter<string> = new EventEmitter<string>();
  constructor() { }
  ngOnInit() {
  }
  ngOnChanges(changes: SimpleChanges): void {
  }
  outputKeyword() {
    this.changeKeyword.emit(this.keyword);
  }
  outputStatus(status) {
    this.changeStatus.emit(status);
  }
}
