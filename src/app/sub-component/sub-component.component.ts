import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sub-component',
  standalone: true,
  imports: [],
  templateUrl: './sub-component.component.html',
  styleUrl: './sub-component.component.css'
})
export class SubComponentComponent {
  @Output() ButtonPressed: EventEmitter<any> = new EventEmitter<any>()


onclicked(){
  alert('fire event from sub component');
  this.ButtonPressed.emit(event);

}
}