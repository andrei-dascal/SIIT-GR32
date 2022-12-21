import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit, OnChanges {
  @Input() menuText: string = '';
  @Output() showSomethingBoolean: EventEmitter<boolean> = new EventEmitter();
  @Output() showSomethingString: EventEmitter<string> = new EventEmitter();

  ngOnChanges(changes: SimpleChanges): void {
    
  }

  ngOnInit(): void {
    this.menuText = 'Something';
  }

  emitToParent() {
    this.showSomethingBoolean.emit(true);
    this.showSomethingString.emit("test");
  }
}