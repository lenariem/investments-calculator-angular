import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AnnualDataModel } from './investment-results.model';
import { ResultsService } from '../../app/service/results.service';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css',
})
export class InvestmentResultsComponent {
  // @Input({ required: true }) annualData!: AnnualDataModel[];

  annualData: AnnualDataModel[] = [];

  constructor(private resultsService: ResultsService) {}

  ngOnInit() {
    this.resultsService.getAnnualData().subscribe((data) => {
      this.annualData = data;
    });
  }
}

// Use the below code as a help
// e.g., integrate it into a service or component
// You may need to tweak it, depending on where and how you use it

/* function calculateInvestmentResults() {
  const annualData = [];
  let investmentValue = initialInvestment;

  for (let i = 0; i < duration; i++) {
    const year = i + 1;
    const interestEarnedInYear = investmentValue * (expectedReturn / 100);
    investmentValue += interestEarnedInYear + annualInvestment;
    const totalInterest =
      investmentValue - annualInvestment * year - initialInvestment;
    annualData.push({
     / year: year,
      interest: interestEarnedInYear,
      valueEndOfYear: investmentValue,
     / annualInvestment: annualInvestment,
     / totalInterest: totalInterest,
     / totalAmountInvested: initialInvestment + annualInvestment * year,
    });
  }

  return annualData;
}
 */

/* 

  /* annualData = [
    {
      year: 1,
      interest: 100,
      valueEndOfYear: 1100,
      annualInvestment: 1000,
      totalInterest: 100,
      totalAmountInvested: 1100
    },
    {
      year: 2,
      interest: 150,
      valueEndOfYear: 1250,
      annualInvestment: 1000,
      totalInterest: 250,
      totalAmountInvested: 2200
    }
  ]; */
