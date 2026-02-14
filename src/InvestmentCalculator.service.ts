import { Injectable } from "@angular/core";
import { Investment, InvestmentYear } from "./investment.model";

@Injectable({providedIn: 'root'})
export class InvestmentCalculatorSevice {

    constructor() {}

    investmentResults: InvestmentYear[] = [];
    
    calculateInvestment( investment : Investment ) {
        // const InvestmentResults = [];
        let currentValue = investment.initialInvestment;
        let totalInterest = 0;
        let investedCapital = investment.initialInvestment;
      
        for (let year = 1; year <= investment.duration; year++) {
          // add yearly investment at the beginning of the year
          investedCapital += investment.annualInvestment;
          currentValue += investment.annualInvestment;
      
          // calculate interest
          const interest = currentValue * (investment.expectedReturn / 100);
          totalInterest += interest;
          currentValue += interest;
      
          this.investmentResults.push({
            year,
            investmentValue: this.round(currentValue),
            interest: this.round(interest),
            totalInterest: this.round(totalInterest),
            investedCapital: this.round(investedCapital)
          });
        }
        console.log(this.investmentResults);
        return this.investmentResults;
    }

    round(value: number): number {
        return Math.round(value * 100) / 100;
    }  

    getInvestmentList() {
      return this.investmentResults;
    }
      

}