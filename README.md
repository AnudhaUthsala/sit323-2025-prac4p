
---

# SIT323/SIT737 - Cloud Native Application Development  
## 4.1P & 4.2C: Building and Enhancing a Calculator Microservice  

![Node.js](https://img.shields.io/badge/Node.js-18.x-green) ![Express](https://img.shields.io/badge/Express-4.x-blue)

This repository contains the implementation of a **calculator microservice** built using **Node.js** and **Express**. The microservice provides REST API endpoints for performing basic and advanced arithmetic operations. 

---

## Table of Contents

1. [Overview](#overview)
2. [Features](#features)
3. [Prerequisites](#prerequisites)
4. [Setup Instructions](#setup-instructions)
5. [API Endpoints](#api-endpoints)
6. [Error Handling](#error-handling)
7. [Testing the Microservice](#testing-the-microservice)
8. [Deployment](#deployment)
9. [Contributing](#contributing)
10. [License](#license)

---

## Overview

The aim of this project is to design and implement a **microservice** that provides calculator functionality to clients. In **4.1P**, we implemented basic arithmetic operations (addition, subtraction, multiplication, and division). In **4.2C**, we enhanced the microservice by adding support for advanced arithmetic operations such as **exponentiation**, **square root**, and **modulo operations**.

The microservice accepts HTTP requests via REST API endpoints, performs arithmetic operations on the provided input numbers, and returns the results in JSON format. Robust error handling ensures meaningful error messages are returned to clients in case of invalid inputs or other issues.

---

## Features

### Basic Arithmetic Operations
- **Addition**: Perform addition of two numbers.
- **Subtraction**: Perform subtraction of two numbers.
- **Multiplication**: Perform multiplication of two numbers.
- **Division**: Perform division of two numbers (with error handling for division by zero).

### Advanced Arithmetic Operations (4.2C)
- **Exponentiation**: Raise `num1` to the power of `num2`.
- **Square Root**: Compute the square root of `num1`.
- **Modulo Operation**: Compute the remainder when `num1` is divided by `num2`.

### Error Handling
- Provides meaningful error messages for invalid inputs, unsupported operations, and edge cases (e.g., division by zero, negative numbers for square root).

---

## Prerequisites

Before setting up and running the microservice, ensure you have the following tools installed:

1. **Node.js** (v18.x or higher): [Download Node.js](https://nodejs.org/en/download/)
2. **Git**: [Download Git](https://git-scm.com/downloads)
3. **Visual Studio Code** (or any code editor): [Download VS Code](https://code.visualstudio.com/)
4. **Postman** (optional, for testing APIs): [Download Postman](https://www.postman.com/downloads/)

---

## Setup Instructions

### Step 1: Clone the Repository
Clone the repository to your local machine using the following command:
```bash
git clone https://github.com/AnudhaUthsala/sit323-2025-prac4p.git
cd sit323-2025-prac4p
```

### Step 2: Install Dependencies
Install the required dependencies using `npm`:
```bash
npm install
```

### Step 3: Start the Server
Run the microservice locally:
```bash
node index.js
```
The server will start on `http://localhost:3000`.

---

## API Endpoints

The microservice exposes the following REST API endpoints:

### Basic Arithmetic Operations

#### 1. **Addition**
- **URL**: `/add`
- **Method**: `GET`
- **Query Parameters**:
  - `num1`: First number (required)
  - `num2`: Second number (required)
- **Example Request**:
  ```
  http://localhost:3000/add?num1=10&num2=5
  ```
- **Example Response**:
  ```json
  {
      "operation": "addition",
      "num1": 10,
      "num2": 5,
      "result": 15
  }
  ```

#### 2. **Subtraction**
- **URL**: `/subtract`
- **Method**: `GET`
- **Query Parameters**:
  - `num1`: First number (required)
  - `num2`: Second number (required)
- **Example Request**:
  ```
  http://localhost:3000/subtract?num1=10&num2=5
  ```
- **Example Response**:
  ```json
  {
      "operation": "subtraction",
      "num1": 10,
      "num2": 5,
      "result": 5
  }
  ```

#### 3. **Multiplication**
- **URL**: `/multiply`
- **Method**: `GET`
- **Query Parameters**:
  - `num1`: First number (required)
  - `num2`: Second number (required)
- **Example Request**:
  ```
  http://localhost:3000/multiply?num1=10&num2=5
  ```
- **Example Response**:
  ```json
  {
      "operation": "multiplication",
      "num1": 10,
      "num2": 5,
      "result": 50
  }
  ```

#### 4. **Division**
- **URL**: `/divide`
- **Method**: `GET`
- **Query Parameters**:
  - `num1`: First number (required)
  - `num2`: Second number (required)
- **Example Request**:
  ```
  http://localhost:3000/divide?num1=10&num2=5
  ```
- **Example Response**:
  ```json
  {
      "operation": "division",
      "num1": 10,
      "num2": 5,
      "result": 2
  }
  ```

---

### Advanced Arithmetic Operations (4.2C)

#### 5. **Exponentiation**
- **URL**: `/exponentiate`
- **Method**: `GET`
- **Query Parameters**:
  - `num1`: Base number (required)
  - `num2`: Exponent (required)
- **Example Request**:
  ```
  http://localhost:3000/exponentiate?num1=2&num2=3
  ```
- **Example Response**:
  ```json
  {
      "operation": "exponentiation",
      "num1": 2,
      "num2": 3,
      "result": 8
  }
  ```

#### 6. **Square Root**
- **URL**: `/sqrt`
- **Method**: `GET`
- **Query Parameters**:
  - `num1`: Number (required)
- **Example Request**:
  ```
  http://localhost:3000/sqrt?num1=16
  ```
- **Example Response**:
  ```json
  {
      "operation": "square root",
      "num1": 16,
      "result": 4
  }
  ```

#### 7. **Modulo Operation**
- **URL**: `/modulo`
- **Method**: `GET`
- **Query Parameters**:
  - `num1`: Dividend (required)
  - `num2`: Divisor (required)
- **Example Request**:
  ```
  http://localhost:3000/modulo?num1=10&num2=3
  ```
- **Example Response**:
  ```json
  {
      "operation": "modulo",
      "num1": 10,
      "num2": 3,
      "result": 1
  }
  ```
  ```

---

## Testing the Microservice

You can test the microservice using any of the following methods:

1. **Browser**:
   - Open a browser and navigate to the endpoint URLs (e.g., `http://localhost:3000/add?num1=10&num2=5`).

2. **Postman**:
   - Use Postman to send GET requests to the API endpoints.

3. **Curl**:
   - Use the `curl` command in the terminal:
     ```bash
     curl "http://localhost:3000/add?num1=10&num2=5"
     ```

---

## Deployment

To deploy the microservice to a cloud platform (e.g., AWS, Heroku), follow these steps:

1. Push your code to GitHub.
2. Deploy the application to your preferred platform (e.g., Heroku, AWS Elastic Beanstalk).
3. Update the deployment URL in your documentation.

---

## Contributing

If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/AnudhaUthsala`).
3. Commit your changes (`git commit -m "Add your feature"`).
4. Push to the branch (`git push origin feature/AnudhaUthsala`).
5. Open a pull request.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Contact

For questions or feedback, feel free to reach out to me at uthanuda@gmail.com.

--- 
