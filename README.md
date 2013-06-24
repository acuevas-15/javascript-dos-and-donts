javascript-dos-and-donts
========================

Code examples that illustrate many of the 'gotchas' waiting for programmers who are new to the javascript language.

Scope
-----

JavaScript uses global variables, and variables are global by default.  Many of the tips presented in this section show how to avoid using global variables and avoid name collisions.

== (double equals operator)
---------------------------

JavaScript offers a == operator(equals operator), and a === operator(strict equals operator).

#### Strict equals operator: === 
The === operator conforms to special rules when comparing strings to strings, and numbers to numbers, and it fails if two arguments are of different types. 

#### Equals Operator: ==
The == operator will compare arguments of different types, and it's behavior is more difficult to understand than the Strict Equals operator.
