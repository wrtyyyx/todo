import React, {useState} from 'react';
import Card from "./Card.jsx";

const RenderCard = () => {
    const [todos, setTodos] = useState([]);
    const [nextId, setNextId] = useState(1)
    const putTodo = (value) => {
        if (value) {
            setTodos([...todos, {id: nextId, text: value, done: false}]);
            setNextId(nextId + 1)
        } else {
            alert('Enter task');
        }
    };

    const removeTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };
    return (
        <div>
            {todos.map((card) => (
                <Card key={card.id} id={card.id} text={card.text} removeTodo={removeTodo}/>
            ))}
        </div>
    );
};

export default RenderCard;