In which order do the React Lifecycle methods (including the optional ones) run?
  Go here for detailed answer https://engineering.musefind.com/react-lifecycle-methods-how-and-when-to-use-them-2111a1b692b1
  1. componentWillMount (99% of your components should probably not use componentWillMount. Most Common Use Case: App configuration in your root component.
  Can call setState: Don’t. Use default state instead.)
  2. componentDidMount (Basically, here you want to do all the setup you couldn’t do without a DOM, and start getting all the data you need. Most Common Use Case: Starting AJAX calls to load in data for your component.
  Can call setState: Yes.)
  3. componentWillReceiveProps (Most Common Use Case: Acting on particular prop changes to trigger state transitions. Can call setState: Yes.)
  4. shouldComponentUpdate (Most Common Use Case: Controlling exactly when your component will re-render.
  Can call setState: No.)
  5. componentWillUpdate (Most Common Use Case: Used instead of componentWillReceiveProps on a component that also has shouldComponentUpdate - but no access to previous props.
  Can call setState: No.)
  6. componentDidUpdate (Most Common Use Case: Updating the DOM in response to prop or state changes.
  Can call setState: Yes.)
  7. componentWillUnmount (Most Common Use Case: Cleaning up any leftover debris from your component.
  Can call setState: No.)

In which lyfecycle methods should you make asynchronous fetches for data?
  In componentDidMount

Give one explanation for why we have to make AJAX requests in componentDidMount
  You can’t guarantee the AJAX request won’t resolve before the component mounts. If it did, that would mean that you’d be trying to setState on an unmounted component, which not only won’t work, but React will yell at you for. Doing AJAX in componentDidMount will guarantee that there’s a component to update.

What method gets called in the unmounting phase?
  componentWillUnmount
  Here you can cancel any outgoing network requests, or remove all event listeners associated with the component.
  Basically, clean up anything to do that solely involves the component in question — when it’s gone, it should be completely gone.

What is a state tree in the context of Redux?
  The whole application, including the data is contained in a single object called state or state tree. When the user makes changes on the state, the application re-render the page and show the changes

Why don't we want to modify (i.e. mutate) our redux state?
  Redux is a small library that represents state as (immutable) object. And new states by passing the current state through pure functions to create an entirely new object/application states.
  If your eyes-glazed over there don't worry. To sum up, Redux does not represent changes in your application's state by modifying objects ( as you would with object-oriented paradigms). Instead state changes are represented as the difference between the input object and the output object (var output = reducer(input)). If you mutate either input or output you invalidate the state.
  To sum up another way, immutability is a requirement of Redux because Redux represents your application state as "frozen object snapshots". With these discrete snapshots, you can save your state, or reverse state, and generally have more "accounting" for all state changes.
  State of your app is only changed by a category of pure functions called reducers.

Describe in detail what a redux reducer is. What makes it a pure function?
  The reducer is a pure function (because it doesn't change the input, it just use it to create a new object) that takes the previous state and an action, and returns the next state. (previousState, action) => newState. It's called a reducer because it's the type of function you would pass to Array.prototype.reduce(reducer, ?initialValue) .

What is the role of the store in Redux?
  A store holds the whole state tree of your application. The only way to change the state inside it is to dispatch an action on it.

What does the subscribe method do in Redux?
  Adds a change listener. It will be called any time an action is dispatched, and some part of the state tree may potentially have changed. You may then call getState() to read the current state tree inside the callback.

What are presentational components?
  - Presentational Components are primarily concerned with how things look
  - probably only contain a render method and little else logic
  - they do not know how to load or alter the data that they render
  - they are best written as stateless functional components
  Here is an example of a presentational component:

          //defining the component as a React Component
          class Image extends Component {
           render() {
             return <img src={this.props.image} />;
           }
          }
          export default Image

          //defining the component as a constant
          const Image = props => (
           <img src={props.image} />
          )
          export default Image   

Explain Context in React
  Context provides a way to pass data through the component tree without having to pass props down manually at every level.
  In a typical React application, data is passed top-down (parent to child) via props, but this can be cumbersome for certain types of props (e.g. locale preference, UI theme) that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.
  When to Use Context:
  Context is designed to share data that can be considered “global” for a tree of React components, such as the current authenticated user, theme, or preferred language.

What does the <Provider> component do?
  Provider is a React component that allows Consumers to subscribe to context changes.
  Accepts a value prop to be passed to Consumers that are descendants of this Provider. One Provider can be connected to many Consumers. Providers can be nested to override values deeper within the tree. Example:

        const store = createStore(rootReducer)
        ​
        render(
          <Provider store={store}>
            <App />
          </Provider>,
        document.getElementById('root')
        )
