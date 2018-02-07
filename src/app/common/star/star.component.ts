import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit {
  @Input() // 输入修饰符
  private  star = 5;
  @Output()
  private change: EventEmitter<number> = new EventEmitter();
  private stars = [true, true, true, true, true];
  constructor() { }
  ngOnInit() {
  }
  private handleClick(index: number): void {
    this.change.emit(index);
  }
}
