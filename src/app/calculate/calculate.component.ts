import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Investment } from '../../investment.model';
import { InvestmentCalculatorSevice } from '../../InvestmentCalculator.service';

@Component({
  selector: 'app-calculate',
  imports: [ FormsModule ],
  templateUrl: './calculate.component.html',
  styleUrl: './calculate.component.scss'
})
export class CalculateComponent {

  @Output() submitInvestment = new EventEmitter<void>(); 

  constructor( private investmentCalculatorSevice: InvestmentCalculatorSevice) {}
  
  investment : Investment = {
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 5,
    duration: 10
  };

  onSubmit() {
    console.log(this.investment);
    this.investmentCalculatorSevice.calculateInvestment(this.investment);
    this.submitInvestment.emit();

  }
  
  // this.tableData = this.calculatorService.calculateInvestment(
  //   1000, // initial
  //   100,  // annual
  //   5.5,  // return %
  //   10    // years
  // );
}
