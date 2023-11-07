# React_Assignment
React Lab Assignment

props -> variables passed from parent to child
    body component  -> carousel component
    children cannot pass props to parents
    child can control parents variables through a function passed from parent to child

state -> components own variables
    ability to create and change limited to the parent
    can pass the value of the variable to child as a prop
        functional component -> react hooks
        class component -> this.setState()

any change to props or state will cause a re-render