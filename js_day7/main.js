const repayment = require('./repayment');

repayment.recordRepayment('LN001', 5000);
repayment.recordRepayment('LN001', 3000);

console.log('Total repaid:', repayment.getTotalRepaid('LN001'));
console.log('Outstanding balance:', repayment.getOutstandingBalance('LN001'));
console.log('Repayment schedule:', repayment.generateRepaymentSchedule('LN001'));
console.log('Missed payments:', repayment.getMissedPayments('LN001'));
