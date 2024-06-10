document.getElementById('ageForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const humanAge = parseInt(document.getElementById('humanAge').value);
    
    if (!isNaN(humanAge)) {
        let earlyYears = 2;
        earlyYears = earlyYears * 10.5;
        
        let laterYears = humanAge - 2;
        laterYears = laterYears > 0 ? laterYears * 4 : 0;

        const dogAge = earlyYears + laterYears;
        
        document.getElementById('output').textContent = `You are ${dogAge} years old in dog years.`;
    } else {
        document.getElementById('output').textContent = 'Please enter a valid age.';
    }
});
