import { Component, EventEmitter, Output, signal } from '@angular/core';
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
  
  investment = signal<Investment>({
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 5,
    duration: 10
  });

  onSubmit() {
    this.investmentCalculatorSevice.calculateInvestment(this.investment());
  }

}
