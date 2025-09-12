function loanToolkit({
  name,
  principal,
  annualRate,
  tenureMonths,
  income,
  existingEmi,
  age,
  employmentType,
  requestedLoan,
  onTimePayments,
  totalPayments,
  creditUtilization,
  activeLoans,
  prepaymentMonth = null,
  prepaymentAmount = 0
}) {
  const monthlyRate = annualRate / 12 / 100;
  const emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, tenureMonths)) /
              (Math.pow(1 + monthlyRate, tenureMonths) - 1);
  let balance = principal;
  const schedule = [];

  for (let i = 1; i <= tenureMonths; i++) {
    const interest = balance * monthlyRate;
    const principalPaid = emi - interest;
    balance -= principalPaid;

    if (prepaymentMonth && i === prepaymentMonth) {
      balance -= prepaymentAmount;
    }

    schedule.push({
      month: i,
      emi: parseFloat(emi.toFixed(2)),
      principalPaid: parseFloat(principalPaid.toFixed(2)),
      interestPaid: parseFloat(interest.toFixed(2)),
      remainingBalance: parseFloat(balance.toFixed(2))
    });

    if (balance <= 0) break;
  }

  const totalPaid = schedule.reduce((sum, item) => sum + item.emi, 0);
  const totalInterest = totalPaid - principal;

  // Loan Eligibility Check
  const maxEmiAllowed = income * 0.4;
  const isEligible = existingEmi + emi < maxEmiAllowed && age >= 21 && age <= 60;
  const eligibilityReason = isEligible
    ? "Eligible for loan"
    : "Not eligible due to EMI burden or age restrictions";

  // Credit Score Estimation
  const paymentScore = (onTimePayments / totalPayments) * 100;
  const utilizationScore = 100 - creditUtilization;
  const loanPenalty = activeLoans * 10;
  let creditScore = 300 + (paymentScore * 0.3) + (utilizationScore * 0.4) - loanPenalty;
  creditScore = Math.min(Math.max(creditScore, 300), 850);
  const riskLevel = creditScore > 750 ? "Low" : creditScore > 600 ? "Medium" : "High";

  return {
    name,
    emi: parseFloat(emi.toFixed(2)),
    totalPaid: parseFloat(totalPaid.toFixed(2)),
    totalInterest: parseFloat(totalInterest.toFixed(2)),
    schedule,
    eligibility: {
      eligible: isEligible,
      reason: eligibilityReason
    },
    creditReport: {
      estimatedCreditScore: Math.round(creditScore),
      riskLevel
    }
  };
}
const result = loanToolkit({
  name: "Ravi",
  principal: 500000,
  annualRate: 8.5,
  tenureMonths: 60,
  income: 60000,
  existingEmi: 10000,
  age: 35,
  employmentType: "Salaried",
  requestedLoan: 500000,
  onTimePayments: 54,
  totalPayments: 60,
  creditUtilization: 30,
  activeLoans: 2,
  prepaymentMonth: 12,
  prepaymentAmount: 50000
});

console.log(result);
