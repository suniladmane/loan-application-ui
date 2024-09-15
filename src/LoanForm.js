import React, { useState } from 'react';

const LoanForm = ({ onSubmit }) => {
  const [amount, setAmount] = useState('');
  const [term, setTerm] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!amount || !term || !interestRate) {
      setError('All fields are required.');
      return;
    }

    if (isNaN(amount) || isNaN(term) || isNaN(interestRate)) {
      setError('Please enter valid numbers.');
      return;
    }

    setError('');
    onSubmit({ amount: parseFloat(amount), term: parseInt(term), interestRate: parseFloat(interestRate) });
  };

  return (
    <div>
      <h2>Loan Application</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Loan Amount:</label>
          <input type="text" value={amount} onChange={(e) => setAmount(e.target.value)} />
        </div>
        <div>
          <label>Term (years):</label>
          <input type="text" value={term} onChange={(e) => setTerm(e.target.value)} />
        </div>
        <div>
          <label>Interest Rate (%):</label>
          <input type="text" value={interestRate} onChange={(e) => setInterestRate(e.target.value)} />
        </div>
        <button type="submit">Submit</button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
    </div>
  );
};

export default LoanForm;
