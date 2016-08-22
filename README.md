<!--
 location: SF
-->

![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)

# Building iterators
Let's build our own iterators: `myEach`, `myMap`, and `myReduce`.

## Getting started

1. **Fork & Clone** this repo.
2. **Plan Ahead**: Research each iterator before you write any code.
3. **Check Your Solution**: Write Test Driver Code, or run the included Tests (see below).

#### Before You Start Coding

For the following tasks, it is essential that you understand the specific built-in array method. See [MDN Array Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

Before you start each task, ask yourself questions such as:

* What are our inputs?
* What is our output?
* What happens on each iteration?
* What does the callback function do?
* What gets passed into our callback function? That is, what are its inputs/parameters?
* Where does the callback function come from?

You should be able to answer most of these questions based on the documentation you just read or by experimenting in the browser developer tools.

## Training Tasks
1. Create a function `myFind` which implements `Array.prototype.find`
2. Create a function `myEach` which implements `Array.prototype.forEach`
3. Create a function `myMap` which implements `Array.prototype.map`
4. Create a function `myFilter` which implements `Array.prototype.filter`
5. Create a function `myReduce` which implements `Array.prototype.reduce`

> **Pro-Tip**: It's easier to build incrementally than to try to do everything all at once. Remember to start as simple as possible and add features as you go.

### Check Your Solution
#### Checking Your Code: Using Test Driver Code

To check your code manually, we recommend you write "test driver code" inside of `index.js` instead of from inside your iterator files (e.g. `myEach.js`, `myMap.js`, `myReduce.js`). This helps keep your "test driver code" separate from your "implementation code".

Here's an example of what good test driver code looks like:

``` javascript
//index.js
var input = ["a","b","c"];
var output = myMap(input, function capitalize(v){
    return v.toUpperCase();
});
console.log('Testing myMap')
console.log("Expected:", ["A", "B", "C"], "Got:", output)
```

To execute this code from the command-line, you need to type:

``` bash
# make sure you are inside the building-js-iterators-lab directory
node index.js
```


> **Note**: Even though `myMap` lives in a different file, we still have access to it in `index.js`. That's what `require` is doing in each of the first few lines.

### Checking Your Code Using Automated Tests

For each task (`tasks.forEach`!), you can run the provided tests to check your work and confirm your solution.

#### Test Setup

Make sure you are inside the `building-js-iterators-lab` directory.

From the command-line, run:

```bash
# make sure you are inside the building-js-iterators-lab directory
npm install
npm install -g mocha
```

#### Running the tests

To run the tests for `myMap` from the command-line, type:

```bash
# make sure you are inside the building-js-iterators-lab directory
mocha spec/myMapSpec.js
```

This will test the `myMap` function you wrote in `myMap.js`.

You can do the same thing for the other iterators as well:

```bash
# make sure you are inside the building-js-iterators-lab directory
mocha spec/myEachSpec.js
mocha spec/myReduceSpec.js
```

> **Pro-Tip**: Let the tests call your function for you. You should not be calling, e.g. `myMap` in your code directly.

#### Sample output:

<strong style="color:green;">GREEN</strong> (✓) - test has passed. Nice work!
<strong style="color:red;">RED</strong> - test has failed. Keep working!

For example, here is some test output with three passing (✓) tests:

```
$ mocha spec/myMapSpec.js


 myMap
   1) takes and calls a callback function
      results:  []
   2) passes each item in the array to the callback
      results:  []
   3) passes each index in the array to the callback
   ✓ passes the entire array to the callback
      results:  undefined
   4) returns an array
      results:  undefined
   5) returns an array with the same number of elements
      results:  undefined
   6) returns an array constructed from the return values of the callback
      results:  [ 'a', 'b', 'c', 'd' ]
   ✓ doesn't alter the original array
      results:  []
   ✓ works with arrays of length 0
      results:  []
   7) works with arrays of length 1
```

> **Note**: Sometimes tests pass right away. This is called a "false positive". As you start writing code, some of your prematurely "green" tests will turn "red"!

**Example - Failure Message 7**

Here's an example of a failure messages (pay close attention to these, they give you hints!):

```
7) myMap works with arrays of length 1:

  AssertionError: expected 0 to equal 1
  + expected - actual

  +1
  -0

  at Context.testArrayL1 (spec/myMapSpec.js:126:38)
```

An **assertion** is a statement that *asserts* or says this "MUST BE TRUE".  If
the statement turns out to be false, then the assertion fails and the test fails.  

In the above output we can see that the assertion in `spec/myMapSpec.js:126:38` (at line 126, and at character 38) expected `0` (the "actual" result) to equal `1` (the "expected" result).

This is a little unclear, but at least it tells us exactly what part of the file to look at.

**Example - Failure Message 2**

```
2) myMap passes each item in the array to the callback:
   AssertionError: expected [] to have the same members as [ 'a', 'b', 'c', 'd' ]
    at Context.testEachItem (spec/myMapSpec.js:37:36)
```

*What do you think this means?*

<details><summary>click for explanation</summary>At line 37 in the test file there was an expectation that an array would have the elements `['a', 'b', 'c', 'd']`.  But instead it got an empty array!</details>
