javascript-dos-and-donts
========================

Code examples that illustrate many of the 'gotchas' waiting for programmers who are new to the javascript language.

### Scope

JavaScript uses global variables, and variables are global by default.  Many of the tips presented in this section show how to avoid using global variables and avoid name collisions.

### == Equals Operator vs. Strict Equals Operator (spoiler alert: Strict Equals Operator wins!) 

JavaScript offers a == operator(equals operator), and a === operator(strict equals operator).

#### Strict equals operator: === 
The === operator conforms to special rules when comparing strings to strings, and numbers to numbers, and it fails if two arguments are of different types. 

#### Equals Operator: ==
The == operator will compare arguments of different types, and it's behavior is more difficult to understand than the Strict Equals operator.

### Wrapper Classes
Wrapper classes can be confuse the Strict Equals operator.  The Strict Equals operator does not attempt to compare arguments of different types.  If you initialize a variable using a wrapper class, then the type of that variable will always be *object*.  The type of literal values can be different.  For example, typeof true evaluates to boolean.
