# **Calculator Microservice Documentation**  

## **Overview**  
This documentation provides a detailed step-by-step guide for building a **Calculator Microservice** using **Node.js** and **Express**. The microservice exposes RESTful API endpoints for performing basic arithmetic operations (addition, subtraction, multiplication, and division) and includes proper error handling.

---

## **Table of Contents**  
1. [**Project Setup**](#1-project-setup)  
2. [**Creating the Express Server**](#2-creating-the-express-server)  
3. [**Designing API Endpoints**](#3-designing-api-endpoints)  
4. [**Implementing Arithmetic Operations**](#4-implementing-arithmetic-operations)  
5. [**Error Handling**](#5-error-handling)  
6. [**Running the Microservice**](#6-running-the-microservice)  
7. [**Testing the API**](#7-testing-the-api)  
8. [**Conclusion**](#8-conclusion)  

---

## **1. Project Setup**  
### **Prerequisites**  
- Node.js
- npm (Node Package Manager)  
- A code editor (VS Code)  

### **Steps**  
1. **Initialize a Node.js Project**  
   ```bash
   mkdir calculator-microservice
   cd calculator-microservice
   npm init -y
   ```
   - This creates a `package.json` file with default settings.

2. **Install Required Dependencies**  
   ```bash
   npm install express
   npm install --save-dev nodemon
   ```
   - `express`: Web framework for Node.js.  
   - `nodemon`: Automatically restarts the server on code changes (for development).  

3. **Update `package.json`**  
   Add the following scripts for running the server:  
   ```json
   "scripts": {
     "start": "node server.js",
     "dev": "nodemon server.js"
   }
   ```

---

## **2. Creating the Express Server**  
### **File: `server.js`**  
1. **Import Express and Initialize the App**  
   ```javascript
   const express = require('express');
   const app = express();
   const PORT = process.env.PORT || 3000;
   ```

2. **Add Middleware for JSON Parsing**  
   ```javascript
   app.use(express.json());
   ```

3. **Define a Root Endpoint (Optional - for API documentation)**  
   ```javascript
   app.get('/', (req, res) => {
     res.json({
       message: 'Welcome to the Calculator Microservice!',
       endpoints: {
         addition: '/add?num1=5&num2=3',
         subtraction: '/subtract?num1=5&num2=3',
         multiplication: '/multiply?num1=5&num2=3',
         division: '/divide?num1=5&num2=3'
       }
     });
   });
   ```

4. **Start the Server**  
   ```javascript
   app.listen(PORT, () => {
     console.log(`Calculator microservice running on port ${PORT}`);
   });
   ```

---

## **3. Designing API Endpoints**  
The microservice will have four endpoints:  

| **Endpoint**      | **HTTP Method** | **Description**                     | **Example Request**               |
|-------------------|----------------|-------------------------------------|-----------------------------------|
| `/add`           | GET            | Adds two numbers (`num1 + num2`)    | `/add?num1=5&num2=3` → `8`        |
| `/subtract`      | GET            | Subtracts two numbers (`num1 - num2`)| `/subtract?num1=5&num2=3` → `2`   |
| `/multiply`      | GET            | Multiplies two numbers (`num1 * num2`)| `/multiply?num1=5&num2=3` → `15`  |
| `/divide`        | GET            | Divides two numbers (`num1 / num2`) | `/divide?num1=10&num2=2` → `5`    |

---

## **4. Implementing Arithmetic Operations**  
### **Helper Function (Input Validation)**  
```javascript
const validateNumbers = (num1, num2) => {
  if (typeof num1 !== 'number' || typeof num2 !== 'number' || isNaN(num1) || isNaN(num2)) {
    return false;
  }
  return true;
};
```

### **Addition Endpoint (`/add`)**  
```javascript
app.get('/add', (req, res) => {
  try {
    const { num1, num2 } = req.query;
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    if (!validateNumbers(n1, n2)) {
      return res.status(400).json({ error: 'Invalid input. Provide valid numbers.' });
    }

    res.json({
      operation: 'addition',
      num1: n1,
      num2: n2,
      result: n1 + n2
    });
  } catch (error) {
    res.status(500).json({ error: 'Server error during addition.' });
  }
});
```

### **Subtraction Endpoint (`/subtract`)**  
```javascript
app.get('/subtract', (req, res) => {
  try {
    const { num1, num2 } = req.query;
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    if (!validateNumbers(n1, n2)) {
      return res.status(400).json({ error: 'Invalid input. Provide valid numbers.' });
    }

    res.json({
      operation: 'subtraction',
      num1: n1,
      num2: n2,
      result: n1 - n2
    });
  } catch (error) {
    res.status(500).json({ error: 'Server error during subtraction.' });
  }
});
```

### **Multiplication Endpoint (`/multiply`)**  
```javascript
app.get('/multiply', (req, res) => {
  try {
    const { num1, num2 } = req.query;
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    if (!validateNumbers(n1, n2)) {
      return res.status(400).json({ error: 'Invalid input. Provide valid numbers.' });
    }

    res.json({
      operation: 'multiplication',
      num1: n1,
      num2: n2,
      result: n1 * n2
    });
  } catch (error) {
    res.status(500).json({ error: 'Server error during multiplication.' });
  }
});
```

### **Division Endpoint (`/divide`)**  
```javascript
app.get('/divide', (req, res) => {
  try {
    const { num1, num2 } = req.query;
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    if (!validateNumbers(n1, n2)) {
      return res.status(400).json({ error: 'Invalid input. Provide valid numbers.' });
    }

    if (n2 === 0) {
      return res.status(400).json({ error: 'Division by zero is not allowed.' });
    }

    res.json({
      operation: 'division',
      num1: n1,
      num2: n2,
      result: n1 / n2
    });
  } catch (error) {
    res.status(500).json({ error: 'Server error during division.' });
  }
});
```

---

## **5. Error Handling**  
The microservice handles:  
✅ **Invalid inputs** (non-numeric values)  
✅ **Division by zero**  
✅ **Missing parameters**  
✅ **Unexpected server errors**  

Example error responses:  
```json
{
  "error": "Invalid input. Provide valid numbers."
}
```
```json
{
  "error": "Division by zero is not allowed."
}
```

---

## **6. Running the Microservice**  
### **Development Mode (Auto-restart on changes)**  
```bash
npm run dev
```
### **Production Mode**  
```bash
npm start
```
- The server runs on `http://localhost:3000`.

---

## **7. Testing the API**  
### **Using `curl`**  
```bash
curl "http://localhost:3000/add?num1=5&num2=3"
```
**Expected Output:**  
```json
{
  "operation": "addition",
  "num1": 5,
  "num2": 3,
  "result": 8
}
```

### **Using a Browser or Postman**  
- Open `http://localhost:3000/divide?num1=10&num2=2`  
- Expected response:  
  ```json
  {
    "operation": "division",
    "num1": 10,
    "num2": 2,
    "result": 5
  }
  ```

### **Testing Error Cases**  
```bash
curl "http://localhost:3000/divide?num1=5&num2=0"
```
**Expected Output:**  
```json
{
  "error": "Division by zero is not allowed."
}
```

---

## **8. Conclusion**  
This microservice successfully:  
✔ Provides a **RESTful API** for basic arithmetic operations.  
✔ Includes **input validation and error handling**.  

---

### **Final Code Repository**  
The complete code is available in the provided `server.js` and `package.json`.
