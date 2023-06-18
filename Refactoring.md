# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here

1. Changed from `TRIVIAL_PARTITION_KEY` to `DEFAULT_PARTITION_KEY` because its provides better context and clarity to the variables. Its not trivial but its a fallback value.
2. Refactored the first if/else, if event is defined, then we can simple check for partition key or create a hash of `event` object. Much easier to read and comprehend. Uses latest syntax too.
3. Refactored the second if/else as it only checks at level one, we have to be cautitious here as we have to check for candidate definition. Which makes it easier to think about at first glance. Does the same thing in fewer understandable lines.
4. There are two lines repeated to do the same thing, so converted that into function for and named it `createHash`, which conveys the purpose perfectly. And make the code much shorter.
