import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() text: string = "";
  @Input() type: string = "";
  @Output() clickEvent = new EventEmitter<void>();


  handleClick(){
    this.clickEvent.emit();
  }
}
