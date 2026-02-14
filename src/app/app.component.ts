import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CalculateComponent } from "./calculate/calculate.component";
import { HeaderComponent } from "./header/header.component";
import { InvestmentListComponent } from "./investment-list/investment-list.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CalculateComponent, HeaderComponent, InvestmentListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'InvestmentCalculator';
  investmentResults = false;

  onSubmitInvestment(){
    this.investmentResults = true;
  }
}
