#mern_trial_ts
Learning how to code with TypeScript.  Finding that TS is a superset of JavaScript, so all valid JS is valid TS, and all TS code needs to be transpiled to JS to run in a brower or Node.JS environment.  There are some excellent features TS brings to the table, making it a widely used superset in production.  It takes slightly longer for the transpiling process potentially producing higher CI (continual integration, if your company uses that) costs, but TS leads to more maintainable code, fewer bugs and better collaboration (declaring types make reading code easier, ie self-documented). 

Here are a few features TS brings to the table that are not present in Vanilla JS:
1. Static Typing -- allows you to declare data types, which helps catch type-related errors at complie time instead of runtime
2. Type Inference -- even if you don't declare the type, TS many times can figure it out and assign it.
3. Interfaces -- A way to define the structure or shape of an object.  This makes sure the object adheres to a particular specification.  Does not transpile into JS Code, used purely for type-checking and ensuring adherence to certian contracts
4. Access Modifiers -- private, public and protected modifiers
5. Decorators -- just like in Python!  annotations and meta-programming syntax for class declarations.  But don't get too excited, atm they are unstable are are experimental. 

Overall, TypeScript makes your code more readable and easier to maintain and provides advanced features for data defination (interface) that will help in large-scale applications.  