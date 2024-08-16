import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos: [{
        id: 1,
        todo: "Welcome to todo",
        completed: false,
    }],
    addtodo: (todo) => {},
    updatetodo: (id, todo) => {},
    deletetodo: (id) => {},
    toggletodo: (id) => {},
})


export const TodoWrapper = TodoContext.Provider;


export function usetodo(){
    return useContext(TodoContext);
}



