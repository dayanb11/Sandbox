import { Component, EventEmitter, Input, input } from '@angular/core';
import { MatCheckboxChange, MatCheckboxModule } from '@angular/material/checkbox';
import {FormBuilder, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {JsonPipe} from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SubComponentComponent } from './sub-component/sub-component.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, MatCheckboxModule,RouterOutlet ,JsonPipe,SubComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  @Input() ButtonPressed: EventEmitter<any> = new EventEmitter<any>()
   topping= this._formBuilder.group({
    checkme: false});
  public ischecked:boolean=false;
   
  onchange(MatCheckboxChange: MatCheckboxChange) { 
    if (MatCheckboxChange.checked) {
      alert('checked');
    } else {
      alert('unchecked');
    }
  }
  
  constructor(private _formBuilder: FormBuilder) {
  }
  onsubmit(){
    alert('Yes From Root');
  }
  buttonpressed($event: any){
    alert('Got Alert');
    debugger

  }
}