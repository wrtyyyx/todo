import React, {useState} from 'react';
import './Form.css'

const Form = (props) => {
    const [value, setValue] = useState('')
    return (
        <>
            <form className={'form'} onSubmit={(e) => {
                e.preventDefault();
                props.putTodo(value);
                setValue('')
            }}>
                <input type="text" placeholder={'Enter task'} value={value} onChange={(e) => {
                    setValue(e.target.value)
                }}/>
                <button className={'btn'}>Add task</button>
            </form>

        </>
    );
};

export default Form;