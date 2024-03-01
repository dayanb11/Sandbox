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
  public MatCheckboxChange: Event|undefined;
   
  clicked(event: Event | undefined) { 
    if (this.MatCheckboxChange?.AT_TARGET.valueOf) {
      alert('checked');
    } else {
      alert('unchecked');
    }


    alert('event' + (event?.AT_TARGET?.toString()));
    alert('Function not implemented.');
  }
  
  constructor(private _formBuilder: FormBuilder) {
  }
}