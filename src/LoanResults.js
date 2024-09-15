import React from 'react';

const LoanResults = ({ loan }) => {
  const { amount, term, interestRate } = loan;
  
  // Basic loan calculation: monthly payment using a simple formula
  const calculateMonthlyPayment = (amount, term, rate) => {
    const monthlyRate = rate / 100 / 12;
    const numberOfPayments = term * 12;
    const monthlyPayment = (amount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -numberOfPayments));
    return monthlyPayment.toFixed(2);
  };

  return (
    <div>
      <h2>Loan Details</h2>
      <p><strong>Loan Amount:</strong> ${amount.toFixed(2)}</p>
      <p><strong>Term:</strong> {term} years</p>
      <p><strong>Interest Rate:</strong> {interestRate}%</p>
      <p><strong>Monthly Payment:</strong> ${calculateMonthlyPayment(amount, term, interestRate)}</p>
    </div>
  );
};

export default LoanResults;
