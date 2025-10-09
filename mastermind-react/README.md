React's DOM -- Reconciliation Algorithm --> Browser DOM

1. Declarative
2. Functional -> View
3. Component-Based
   i. stateless component -> js's function
  ii. stateful component -> a. js's class -> b. js's function + react hooks: useState()
4. How to manage application state
    i. component
   ii. context api -> reducer api
  iii. localStorage/sessionStorage
5. routing -> React Router

Mastermind: game level: 3, max tries: 10, time constraint: 100, lives: 3
Secret: 549
Player -> 123: No match
          456: -2
          574: -1+1
          548: +2
          ....
          549 -> game level: 4 -> Secret: 3615
          Reward: max tries: +2, time constraint: +40, lives: +1