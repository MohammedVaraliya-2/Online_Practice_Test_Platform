# Online Practice Test Platform

---

## Problem Statement

**Task 1: Online Practice Test Platform**

### Objective

Implement a login system (including Google OAuth) and a signup system that directs users to a personalized dashboard. This dashboard will start an online quiz with a personalized experience based on Computerized Adaptive Testing (CAT). The demonstration uses 20 MCQ questions in mathematics for students in classes 7th to 10th.

### Requirements

1. **User Authentication:**
   - Implement a login system with email and password.
   - Include Google OAuth for login.
   - Provide a signup option.
2. **Dashboard:**
   - Upon successful login, direct users to a personalized dashboard.
   - The dashboard should allow users to start an online quiz.
3. **Quiz System:**
   - The quiz should have 20 MCQ questions with varying initial weightages based on difficulty.
   - Each question should have different tags (e.g., algebra, geometry) to classify the type of question.
   - Implement Computerized Adaptive Testing (CAT) to adapt the difficulty of the quiz based on the user's performance.
4. **Result Evaluation and Reporting:**
   - Upon submission of the quiz, generate a report evaluating the user's performance.
   - Provide suggestions for further improvements.
5. **Technologies:**
   - Use MERN stack (mandatory).
6. **Documentation:**
   - Provide detailed documentation of your code and implementation process.
7. **Submission:**
   - Host your project on GitHub and provide the repository link.

## Implementation

### User Authentication

I implemented a robust authentication system that includes:

- **Email and Password Login:** Users can sign up and log in using their email and password.
- **Google OAuth:** Users can also log in using their Google accounts for a seamless and secure authentication experience.

Auth0 provides a comprehensive solution that simplifies the integration of both email/password and Google login functionalities, ensuring secure and efficient user authentication.

### Dashboard

Upon successful authentication, users are redirected to a personalized dashboard that includes:

- **Navbar:** Navigation options for the user to access different features of the application.
- **Start Quiz Button:** Users can start the online quiz directly from the dashboard.

### Quiz System

The quiz system is designed with three difficulty levels: easy, medium, and hard. Each question has a specific point value based on its difficulty:

- **Easy:** 2 points
- **Medium:** 3 points
- **Hard:** 4 points

### Question Structure

The questions are stored in JSON files, categorized by difficulty. Below is a sample structure of a question in the JSON file:

```json
[
  {
    "id": 1,
    "question": "-67 x (-1) = ?",
    "options": ["-1", "-67", "67", "1"],
    "correct_answer": "67",
    "difficulty": "easy",
    "tags": ["arithmetic"],
    "explanation": "Multiplying any number by -1 changes its sign. Here, -67 multiplied by -1 results in 67.",
    "references": ["<https://www.mathsisfun.com/numbers/multiplication.html>"]
  }
]
```

### Computerized Adaptive Testing (CAT)

The CAT system adapts the difficulty of the quiz based on the user's performance:

- If the user answers an easy question correctly, the next question will be of medium difficulty. If they answer a medium question correctly, the next will be hard. If they answer a hard question correctly, the next will be another hard question.
- Conversely, if the user answers a medium question incorrectly, the next question will be easy. If they answer a hard question incorrectly, the next will be medium.

This ensures that the quiz adjusts to the user's level, providing a balanced challenge.

### Result Evaluation and Reporting

Upon completing the quiz, a report is generated that includes:

- **Score:** The total points scored by the user.
- **Correct Answers:** The number of correct answers out of the total questions answered.
- **Pie Chart Visualization:** A pie chart showing the distribution of correct answers across different tags (e.g., algebra, geometry).

This report helps users understand their performance and identify areas for improvement.

## Getting Started

### Prerequisites

Ensure you have the following installed:

- Node.js

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/MohammedVaraliya-2/Online_Practice_Test_Platform.git

   ```

   ```jsx
   cd Online_Practice_Test_Platform
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Run the application:**

   ```bash
   npm run dev
   ```

### Usage

1. Open your browser and navigate to the url provided by the server [`http://localhost:5173/`](http://localhost:5173/).
2. Sign up or log in using your email and password or Google account.
3. Start the quiz from the dashboard and answer the questions.
4. View the result report and analyze your performance.

---
