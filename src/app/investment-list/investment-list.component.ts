import { Component } from '@angular/core';
import { InvestmentYear } from '../../investment.model';
import { InvestmentCalculatorSevice } from '../../InvestmentCalculator.service';

@Component({
  selector: 'app-investment-list',
  imports: [],
  templateUrl: './investment-list.component.html',
  styleUrl: './investment-list.component.scss'
})
export class InvestmentListComponent {
  
  investmentResults : InvestmentYear [] =[];
  constructor(private investmentCalculatorSevice : InvestmentCalculatorSevice) {}


  ngOnInit() {
    this.investmentResults = [];
    this.investmentResults = this.investmentCalculatorSevice.getInvestmentList();
    console.log(this.investmentResults);
  }
}
