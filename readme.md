# Palindrome & Cat Kitty

## Description

This project consists of two C++ programs:

1. **Palindrome**: This program checks if a number is a palindrome, meaning it reads the same forwards and backwards.
2. **Cat Kitty**: This program displays numbers from 1 to `n` with specific rules:
   - Numbers that are multiples of 3 will be replaced with **"cat"**.
   - Numbers that are multiples of 5 will be replaced with **"kitty"**.
   - Numbers that are multiples of 15 (multiples of both 3 and 5) will be replaced with **"catKitty"**.
   - Users can add new rules for specific numbers.

## Features

- **Palindrome**:

  - Checks if the entered number is a palindrome.
  - Displays the result as **true** or **false**.

- **Cat Kitty**:
  - Displays numbers from 1 to `n`.
  - Replaces numbers with words according to the multiple rules.
  - Allows users to add new rules.

## Prerequisites

- C++ compiler (such as g++, clang++).
- IDE or text editor (such as Visual Studio, Code::Blocks, or VS Code).

## How to Run

1. Clone this repository or download the source files.
2. Open a terminal/command prompt and navigate to the directory where the files are saved.
3. Compile the programs using the following commands:

   ```bash
   g++ palindrome.cpp -o palindrome
   g++ cat_kitty.cpp -o cat_kitty
   ```
