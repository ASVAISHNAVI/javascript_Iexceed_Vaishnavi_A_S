

const { getLoanById } = require('./storage');

let repayments = [];

/**
 * Records a repayment made by a borrower.
 * @param {string} loanId - Unique ID of the loan.
 * @param {number} amount - Amount repaid.
 * @param {string} date - Date of repayment (ISO format).
 */
function recordRepayment(loanId, amount, date = new Date().toISOString()) {
  repayments.push({ loanId, amount, date });
  console.log(`Repayment recorded: ₹${amount} for Loan ID ${loanId} on ${date}`);
}

/**
 * Gets all repayments for a specific loan.
 * @param {string} loanId - Unique ID of the loan.
 * @returns {Array} - List of repayment records.
 */
function getRepaymentsByLoanId(loanId) {
  return repayments.filter(r => r.loanId === loanId);
}

/**
 * Calculates total repaid amount for a loan.
 * @param {string} loanId - Unique ID of the loan.
 * @returns {number} - Total amount repaid.
 */
function getTotalRepaid(loanId) {
  return getRepaymentsByLoanId(loanId)
    .reduce((sum, r) => sum + r.amount, 0);
}

/**
 * Calculates the outstanding balance for a loan.
 * @param {string} loanId - Unique ID of the loan.
 * @returns {number} - Remaining amount to be repaid.
 */
function getOutstandingBalance(loanId) {
  const loan = getLoanById(loanId);
  if (!loan) {
    console.warn(`Loan ID ${loanId} not found.`);
    return null;
  }
  const totalPaid = getTotalRepaid(loanId);
  return loan.amount - totalPaid;
}

/**
 * Generates a repayment schedule based on EMI and tenure.
 * @param {string} loanId - Unique ID of the loan.
 * @returns {Array} - List of scheduled payment dates.
 */
function generateRepaymentSchedule(loanId) {
  const loan = getLoanById(loanId);
  if (!loan) {
    console.warn(`Loan ID ${loanId} not found.`);
    return [];
  }

  const schedule = [];
  const startDate = new Date();

  for (let i = 0; i < loan.tenureMonths; i++) {
    const dueDate = new Date(startDate);
    dueDate.setMonth(startDate.getMonth() + i);
    schedule.push({
      dueDate: dueDate.toISOString().split('T')[0],
      amountDue: loan.emi
    });
  }

  return schedule;
}

/**
 * Flags missed payments based on today's date.
 * @param {string} loanId - Unique ID of the loan.
 * @returns {Array} - List of missed payment dates.
 */
function getMissedPayments(loanId) {
  const schedule = generateRepaymentSchedule(loanId);
  const paidDates = getRepaymentsByLoanId(loanId).map(r => r.date.split('T')[0]);
  const today = new Date().toISOString().split('T')[0];

  return schedule
    .filter(s => s.dueDate < today && !paidDates.includes(s.dueDate))
    .map(s => s.dueDate);
}

module.exports = {
  recordRepayment,
  getRepaymentsByLoanId,
  getTotalRepaid,
  getOutstandingBalance,
  generateRepaymentSchedule,
  getMissedPayments
};
