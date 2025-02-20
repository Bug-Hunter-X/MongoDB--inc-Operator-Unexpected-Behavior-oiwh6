# MongoDB $inc Operator Unexpected Behavior

This repository demonstrates an uncommon error related to the `$inc` operator in MongoDB.

The issue arises when attempting to increment a field that does not exist within a document.  The expected behavior is an increment of the field. However, if the field is missing, the result might be unexpected or lead to a failure. 

The `bug.js` file contains the erroneous code, while `bugSolution.js` provides the correct implementation.
