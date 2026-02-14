import { Component, computed, inject, signal } from '@angular/core';
import { InvestmentYear } from '../../investment.model';
import { InvestmentCalculatorSevice } from '../../InvestmentCalculator.service';

@Component({
  selector: 'app-investment-list',
  imports: [],
  templateUrl: './investment-list.component.html',
  styleUrl: './investment-list.component.scss'
})
export class InvestmentListComponent {
  
  private investmentCalculatorSevice = inject(InvestmentCalculatorSevice);

  // get results() {
  //   return this.investmentCalculatorSevice.investmentResults;
  // }
  // results = computed(() => this.investmentCalculatorSevice.investmentResults());

  results = this.investmentCalculatorSevice.investmentResults.asReadonly();  


}
