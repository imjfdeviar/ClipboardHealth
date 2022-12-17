# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Configuration Variables

Create an .env file with those variables:

- MAX_PARTITION_KEY_LENGTH (recommended: 256)
- TRIVIAL_PARTITION_KEY (recommended: 0)

## Your Explanation Here

Target File: `deterministicPartitionKey`

- I consider my code readable, because I prevent to use the `else` clauses, and return as son is possible the answer of every case that I have studied in the function.
- I have created a function `createHash` to prevent refactoring in multiples points if hash algorithm changes
- I have implemented `.env` file with  `dotEnv` to prevent refactoring tests and algorithm if some configuration variable change in `dpk.js` file


## How to improve

- Find the documentation of CryptoJS to compare hash in unit testing