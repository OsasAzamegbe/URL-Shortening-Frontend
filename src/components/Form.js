import React from 'react';
import Button from './Button'
import './Form.css'


const Form = ({inputText, setInputText, todos, setTodos, id, setId}) => {

    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    }

    const submitTodoHandler = (e) => {
        e.preventDefault()
        const newTodo = {
            text: inputText,
            done: false,
            id: id
        }
        setTodos([...todos, newTodo])
        setId(id + 1)
        setInputText("")
    }

    return (
        <div>
            <form>
                <input type="text" placeholder="paste URL" />
                <Button type="submit" children="Shorten" buttonColor="red" buttonSize="btn--large"/>
            </form>
        </div>
    );
}

export default Form;
