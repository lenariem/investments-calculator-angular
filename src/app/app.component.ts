import { AnnualDataModel } from './../components/investment-results/investment-results.model';
import { Component } from '@angular/core';

import { HeaderComponent } from '../components/header/header.component';
import { InvestmentResultsComponent } from '../components/investment-results/investment-results.component';
import { UserInputComponent } from '../components/user-input/user-input.component';
import { FormDataModel } from '../components/user-input/user-input.model';
import { ResultsService } from './service/results.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, InvestmentResultsComponent, UserInputComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  constructor(private resultsService: ResultsService) {}
  
  ngOnInit() {
    this.resultsService.getFormData().subscribe((formData) => {
      if (formData) {
        const annualData = this.calculateInvestmentResults(
          formData.enteredInitialInvestment,
          formData.enteredAnnualInvestment,
          formData.enteredDuration,
          formData.enteredExpectedReturn
        );
        this.resultsService.setAnnualData(annualData);
      }
    });
  }

  calculateInvestmentResults(
    initialInvestment: number,
    annualInvestment: number,
    duration: number,
    expectedReturn: number
  ): AnnualDataModel[] {
    const annualData: AnnualDataModel[] = [];
    let investmentValue = initialInvestment;

    for (let i = 0; i < duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (expectedReturn / 100);
      investmentValue += interestEarnedInYear + annualInvestment;
      const totalInterest = investmentValue - annualInvestment * year - initialInvestment;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        annualInvestment: annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: initialInvestment + annualInvestment * year,
      });
    }

    return annualData;
  }
}