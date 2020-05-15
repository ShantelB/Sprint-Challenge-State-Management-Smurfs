1. What problem does the context API help solve?
It lets us share data in all levels of the application

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
Actions create the action payload that the reducer will use.
 reducers applies the action to type. 
 store takes all the information in reducer and applies it to the entire application.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?
Application is used Globally and allows you to use hooks.
Component is used locally and allows you to use props
Application Global=hooks  Component State local=props
1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
It's a middleware that lets you call action creator that returns a function

1. What is your favorite state management system you've learned and this sprint? Please explain why!
