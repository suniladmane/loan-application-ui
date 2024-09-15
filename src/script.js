document.getElementById('loanApplicationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Retrieve form values
    const fullName = document.getElementById('fullName').value;
    const dob = document.getElementById('dob').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const loanAmount = document.getElementById('loanAmount').value;
    const loanTerm = document.getElementById('loanTerm').value;
    const employerName = document.getElementById('employerName').value;
    const designation = document.getElementById('designation').value;
    const salary = document.getElementById('salary').value;
    const yearsInJob = document.getElementById('yearsInJob').value;

    // Basic validation
    if (!fullName || !dob || !email || !phone || !loanAmount || !loanTerm || !employerName || !designation || !salary || !yearsInJob) {
        alert('Please fill out all fields.');
        return;
    }

    // Display the submitted data
    alert(`Application Submitted:\n
        Full Name: ${fullName}\n
        Date of Birth: ${dob}\n
        Email: ${email}\n
        Phone: ${phone}\n
        Loan Amount: ₹${loanAmount}\n
        Loan Term: ${loanTerm} years\n
        Employer: ${employerName}\n
        Designation: ${designation}\n
        Salary: ₹${salary}\n
        Years with Current Employer: ${yearsInJob}`);
    
    // Optionally, you can clear the form
    document.getElementById('loanApplicationForm').reset();
});
