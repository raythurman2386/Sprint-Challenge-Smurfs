1. What problem does the context API help solve?

   > The context API helps solve the problem of Prop drilling by giving you access to your state throughout various sections of your app.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

   > Reducers are basically your functionality to update your store,
   > Actions tell your reducers which functionality to actually run
   > Store is your global state for your application

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

   > Application state refers to a global state throughout your entire application, and component state is just that,
   > State that is controlled inside of that specific component.
   > I would say it depends on your application size,
   > If you have a smaller application and certain components can rely on their very own state, and it isn't used across
   > other components, then stick with component state over an application state

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

   > Redux thunk can kinda be thought of as kinda like a middle man. (Hence why it is called middleware)
   > It interrupts your actions so it can turn your action-creators from synchronous entities, to asynchronous.

1. What is your favorite state management system you've learned and this sprint? Please explain why!
   > I really enjoy redux, it may have a good amount of boiler plate to set up, but in my mind it seems like it is the easier of the group to > use. Especially using redux with hooks. Without hooks, i'd say the context API would be my favorite.
