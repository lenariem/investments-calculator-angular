import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormDataModel } from './user-input.model';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  @Output() formData = new EventEmitter<FormDataModel>();
  
  enteredInitialInvestment = 0;
  enteredAnnualInvestment = 0;
  enteredExpectedReturn = 0;
  enteredDuration = 0;

  onSubmit() {
    const formData = {
      enteredInitialInvestment: this.enteredInitialInvestment,
      enteredAnnualInvestment: this.enteredAnnualInvestment,
      enteredExpectedReturn: this.enteredExpectedReturn,
      enteredDuration: this.enteredDuration,
    };
    this.formData.emit(formData);
  }
}
