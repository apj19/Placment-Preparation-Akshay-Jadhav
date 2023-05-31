# React

1.  What’s React and What are the advantages of it?

    Ans:- React is javaScript Library that is used for building single page web applications.

    1. we can create small components and reuse it whenever needed.
    2. as it is library so it is flexible to use.
    3. It uses virtual dom so react is fast.
    4. It has great developer experience

2.  What's Virtual Dom in React & What are the advantages of it?

    Ans:- React make a copy of real dom which is called as virtual dom. when react need to update anything in dom then it will create new virtual dom and compare it to previous dom and find out what need to updated then it will make changes in real dom. because of it react render dom effectively ans it is fast.

3.  Explain LifeCycle of React Components?

    Ans:- Each component in react has three phases Mounting,Updating and Unmounting

    1. Mounting- Putting element in dom.
    2. Updating- Updating element in dom
    3. Un-mounting- removing element from dom.

4.  Whats the difference between between Functional Components and Class
    Components?

        Ans:-
        |Functional |Class  |
        |:--- | :--- |
        |It is is simple Js function that accepts props as argument and return react element| It create render function that return rect element|
        |No render method is used| render method is must|
        |No render method is used| render method is must|
        |It is stateless component| It is stateful component they implement logic|
        |Lifecycle methods can't be used. hooks enables functional component to use lifecycle| Lifecycle methods can be used|

5.  What are the hooks in React & Can we use Hooks in Class Components?

    Ans:- hooks are used to make react functional component as stateful. Class component don't need hooks as it has different syntax for state. like constructor. With the hooks react functional component maintain state ad use lifecycle methods.

6.  What are the LifeCycle method and the advantages of it?

    Ans:- React component has three main phases which can be use to monitor nad manipulate the component.

    1. Mounting- Putting element in dom.
    2. Updating- Updating element in dom
    3. Un-mounting- removing element from dom.

7.  What’s useState Hook & Advantages of it?

    Ans:- useState hook is used to store/track the state of functional component. it accepts current state and return state and function to update state. The advantage of this hook is that when state is updated it automatically rerender the component.

8.  Explain useEffect & Advantages of it

    Ans:- useEffect hook is used to implement lifecycle method in functional component

9.  Explain Context Api and create a minor project on it

    Ans:-

10. Explain useReducer and Its advantages.

    Ans:-

11. build a Todo Web App Using React and useReducer Hook.

    Ans:-

12. Build A simple counter app using React

    Ans:-

13. Build Calculator Using React Only

    Ans:-

14. Build a Tic Tac Toe Game using Class Component of React

    Ans:-

15. Explain Prop Drilling & How can we avoid it?

    Ans:-

16. Create a task manager where user can create tasks and see his task

    Ans:-
