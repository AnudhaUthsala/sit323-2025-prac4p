const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON (if needed)
app.use(express.json());


// Exponentiation Endpoint
app.get('/exponentiate', (req, res) => {
    const { num1, num2 } = req.query;
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    if (isNaN(n1) || isNaN(n2)) {
        return res.status(400).json({ error: 'Invalid input. Both num1 and num2 must be numbers.' });
    }

    const result = Math.pow(n1, n2);
    res.json({ operation: 'exponentiation', num1, num2, result });
});

// Square Root Endpoint
app.get('/sqrt', (req, res) => {
    const { num1 } = req.query;
    const n1 = parseFloat(num1);

    if (isNaN(n1)) {
        return res.status(400).json({ error: 'Invalid input. num1 must be a number.' });
    }

    if (n1 < 0) {
        return res.status(400).json({ error: 'Square root of a negative number is not supported.' });
    }

    const result = Math.sqrt(n1);
    res.json({ operation: 'square root', num1, result });
});

// Modulo Operation Endpoint
app.get('/modulo', (req, res) => {
    const { num1, num2 } = req.query;
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    if (isNaN(n1) || isNaN(n2)) {
        return res.status(400).json({ error: 'Invalid input. Both num1 and num2 must be numbers.' });
    }

    if (n2 === 0) {
        return res.status(400).json({ error: 'Modulo by zero is not allowed.' });
    }

    const result = n1 % n2;
    res.json({ operation: 'modulo', num1, num2, result });
});


// Addition Endpoint
app.get('/add', (req, res) => {
    const { num1, num2 } = req.query;
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    if (isNaN(n1) || isNaN(n2)) {
        return res.status(400).json({ error: 'Invalid input. Both num1 and num2 must be numbers.' });
    }

    const result = n1 + n2;
    res.json({ operation: 'addition', num1, num2, result });
});

// Subtraction Endpoint
app.get('/subtract', (req, res) => {
    const { num1, num2 } = req.query;
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    if (isNaN(n1) || isNaN(n2)) {
        return res.status(400).json({ error: 'Invalid input. Both num1 and num2 must be numbers.' });
    }

    const result = n1 - n2;
    res.json({ operation: 'subtraction', num1, num2, result });
});

// Multiplication Endpoint
app.get('/multiply', (req, res) => {
    const { num1, num2 } = req.query;
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    if (isNaN(n1) || isNaN(n2)) {
        return res.status(400).json({ error: 'Invalid input. Both num1 and num2 must be numbers.' });
    }

    const result = n1 * n2;
    res.json({ operation: 'multiplication', num1, num2, result });
});

// Division Endpoint
app.get('/divide', (req, res) => {
    const { num1, num2 } = req.query;
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    if (isNaN(n1) || isNaN(n2)) {
        return res.status(400).json({ error: 'Invalid input. Both num1 and num2 must be numbers.' });
    }

    if (n2 === 0) {
        return res.status(400).json({ error: 'Division by zero is not allowed.' });
    }

    const result = n1 / n2;
    res.json({ operation: 'division', num1, num2, result });
});

// Start the server
app.listen(port, () => {
    console.log(`Calculator microservice running at http://localhost:${port}`);
});