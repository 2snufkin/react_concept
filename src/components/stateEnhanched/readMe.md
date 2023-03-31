## previous excerices
in the last ex you need to build a calculator when each operation has it's own component and the result is inside
the same component
## current excercies
in this ex the diffuclty is to pass the result from two sibilings, two components that don't have parent child
relationship.
It was done by passing the state to a common parent.
the calculator component get frunctions as props and the business logic happens in the app component and the app component
can pass the data to the result component.
## Theory
State is lifted up by using props in the components that need to manipulate (that is, set) or read the state, 
and by registering the state in the ancestor component that is shared by the two other components.
