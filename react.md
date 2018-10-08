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
In componentDidMount (not sure about componentWillReceiveProps, componentWillUpdate & componentDidUpdate)

 Give one explanation for why we have to make AJAX requests in componentDidMount
 You can’t guarantee the AJAX request won’t resolve before the component mounts. If it did, that would mean that you’d be trying to setState on an unmounted component, which not only won’t work, but React will yell at you for. Doing AJAX in componentDidMount will guarantee that there’s a component to update.

 What method gets called in the unmounting phase?
 componentWillUnmount
Here you can cancel any outgoing network requests, or remove all event listeners associated with the component.
Basically, clean up anything to do that solely involves the component in question — when it’s gone, it should be completely gone.
