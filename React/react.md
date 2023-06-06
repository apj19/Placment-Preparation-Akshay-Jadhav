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

    Ans:- useEffect hook is used to implement lifecycle method in functional component.

    ```
    Mounting
    useEffect(()=>{

    },[]);

    Updating
    useEffect(()=>{

    },[dependentState]);

    Unmounting
    useEffect(()=>{

        return {

        }

    },[]);
    ```

9.  Explain Context Api and create a minor project on it

    Ans:- Context api is used to avoide props drilling. The context api is satatemangment whew the data is avalaiabe at parent that can be used any nested component using usecontext.

10. Explain useReducer and Its advantages.

    Ans:- useReducer hook is preffered over usestate where it need to implement conplex logic. it take intial state and reducer function it will return state nad dispatch method. wwith the dispatch method we can imporve

11. build a Todo Web App Using React and useReducer Hook.

    Ans:- [Live Demo](https://taskapjcr.netlify.app/)

12. Build A simple counter app using React

    Ans:-

    1. [Live Demo](https://gilded-nougat-8a4216.netlify.app/)
    2. [Code](./reactSolution/)

13. Build Calculator Using React Only

    Ans:-

    1. [Live Demo](https://gilded-nougat-8a4216.netlify.app/)
    2. [Code](./reactSolution/)

14. Build a Tic Tac Toe Game using Class Component of React

    Ans:-

15. Explain Prop Drilling & How can we avoid it?

    Ans:- Prop Drilling is the process where we send data from top comopnent to last nested component. if there are multiple components nested inside each other so transfer data from one level to another level data will flow from every components which don't need it.
    to avoide prop srilling we use context api sate managment where the data is available at top level and any conponent can use it use usecontext

16. Create a task manager where user can create tasks and see his task

    Ans:- [live Demo](https://visionary-capybara-fb9e3a.netlify.app/)
