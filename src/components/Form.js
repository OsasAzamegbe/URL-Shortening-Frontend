import React, {useState} from 'react';
import Button from './Button'
import './Form.css'


const Form = ({setLongUrl}) => {

    const [inputText, setInputText] = useState("")

    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    }

    const submitTodoHandler = (e) => {
        e.preventDefault()
        setLongUrl(inputText)
        setInputText("")
    }

    return (
        <div className="form">
            <form onSubmit={submitTodoHandler} >
                <input onChange={inputTextHandler} value={inputText} type="url" placeholder="paste URL" required />
                <Button type="submit" children="Shorten" buttonColor="red" buttonSize="btn--large"/>
            </form>
        </div>
    );
}

export default Form;
