# React Without Create React App
Followed tutorial to build React ToDo List project here: [https://www.freecodecamp.org/news/react-tutorial-build-a-project/](https://www.freecodecamp.org/news/react-tutorial-build-a-project/)

## Notes
#### React Keys
If we were to update a todo's text or done value, the key is what tells React which todo item needs to be updated.
#### React refs and useRef
- To perform common actions such as clearing out an input's value or focusing our input we can use what's called a ref.
- using inputRef, we create a reference to our input element to access wherever we like
- within handleAddTodo function, we can access property inputRef.current & can mutate it directly
- we use it to automatically clear input here

#### OVERALL
- learned window.confirm for dialog prompt
- reorder to have container component at top w/ presentation components below
- learned to pass setState down & just use that hook to update state for all components (as it bubbles up)