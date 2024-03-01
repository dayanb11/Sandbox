import { Component } from '@angular/core';
import { MatCheckboxChange, MatCheckboxModule } from '@angular/material/checkbox';
import {FormBuilder, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {JsonPipe} from '@angular/common';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, MatCheckboxModule,RouterOutlet ,JsonPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
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
}