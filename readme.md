# Nevus BE Submission

This project consists of three main components:

1. **Palindrome**: This program checks if a number is a palindrome, meaning it reads the same forwards and backwards.
2. **Cat Kitty**: This program displays numbers from 1 to `n` with specific rules:
   - Numbers that are multiples of 3 will be replaced with **"cat"**.
   - Numbers that are multiples of 5 will be replaced with **"kitty"**.
   - Numbers that are multiples of 15 (multiples of both 3 and 5) will be replaced with **"catKitty"**.
   - Users can add new rules for specific numbers.
3. **ProductAPI**: This component provides a RESTful API for managing products and categories.

## Features

- **Palindrome**:

  - Checks if the entered number is a palindrome.
  - Displays the result as **true** or **false**.

- **Cat Kitty**:

  - Displays numbers from 1 to `n`.
  - Replaces numbers with words according to the multiple rules.
  - Allows users to add new rules.

- **ProductAPI**:
  - Provides endpoints to create, read, update, and delete products and categories.
  - Validates input data to ensure consistency and integrity.
  - Responds with appropriate status messages for each operation.

## Prerequisites

- C++ compiler (such as g++, clang++).
- IDE or text editor (such as Visual Studio, Code::Blocks, or VS Code).
- Node.js and npm for the ProductAPI.
- PostgreSQL database for data storage.

# How to run C++ Programs

1. Clone this repository or download the source files.
2. Open a terminal/command prompt and navigate to the directory where the files are saved.
3. For the C++ programs, compile them using the following commands:

   ```bash
   g++ palindrome.cpp -o palindrome
   g++ cat_kitty.cpp -o cat_kitty
   ```

4. Run the compiled programs:
   ```bash
   ./palindrome
   ./cat_kitty
   ```
