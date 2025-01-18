import { createContext } from "react";

export const InvestmentContext = createContext({
    investment: {
        initialInvestment: 0,
        annualInvestment: 0,
        expectedReturn: 0,
        duration: 0
    },
    handleChange: () => { }
});