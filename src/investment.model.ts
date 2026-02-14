export interface Investment {
        initialInvestment: number,
        annualInvestment: number,
        expectedReturn: number,
        duration: number
}

export interface InvestmentYear {
    year: number;
    investmentValue: number;
    interest: number;
    totalInterest: number;
    investedCapital: number;
}