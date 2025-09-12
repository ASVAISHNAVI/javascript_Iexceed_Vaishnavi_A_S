// storage.js

const loans = [
  { id: 'LN001', amount: 10000, tenureMonths: 6, emi: 1666.67 },
  { id: 'LN002', amount: 5000, tenureMonths: 5, emi: 1000 }
];

function getLoanById(loanId) {
  return loans.find(loan => loan.id === loanId);
}

module.exports = { getLoanById };
