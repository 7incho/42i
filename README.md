# 42 Challenges

This is a simple web application built using Astro and Tailwind CSS. It solves two logical challenges:

## Two Number Sum

### Situation 1:

> Given an array of integers, no number in this array is repeated, and an integer representing the target sum, implement a function that find whether there's a pair of numbers in the array that adds up to the target sum. Return the pair in an array. If such pair does not exist, return an empty array.

### Web Solution (left side)

It consists of a simple form that prompts the user to enter a list of non-repetitive numbers and a target number. Upon submitting the form, a JavaScript function is executed to search for two numbers in the list whose sum equals the target number. The result is displayed in a paragraph below the form.

### How to use

1. Enter the values of coins in your possession into the input field.
2. Click the "Calculate" button.
3. The minimum change that cannot be created will be displayed.

---

## Non-Constructible Change

### Situation 2:

> Given an array of positive integers representing the values of coins in your possession, write a function that returns the minimum amount of change (the minimum sum of money) that you **cannot** create. The given coins can have any positive integer value and aren’t necessarily unique (i.e., you can have multiple coins of the same value). For example, if you’re given coins = `[1, 2, 5]`, the minimum amount of change that you can’t create is `4`. If you’re given no coins, the minimum amount of change that you can’t create is 1.

### Web Solution (right side)

It calculates the minimum amount of change that cannot be created from a given array of positive integers representing the values of coins in your possession.

The application listens for form submission. Upon submission, it extracts the input coin values and calculates the minimum amount of change that cannot be created. The result is displayed on the page.

---

## Getting Started

To run this project locally:

```bash
git clone https://github.com/7incho/42i
npm install
npm run dev
```

Then, open your browser at:

```
http://localhost:4321/
```
