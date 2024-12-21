import Header from "./components/Header/Header.jsx";
import Form from "./components/Form/Form.jsx";
import {useState} from "react";
import Card from "./components/Card/Card.jsx";
import './App.css';

function App() {
    const [todos, setTodos] = useState([]);
    const [nextId, setNextId] = useState(1)
    const putTodo = (value) => {
        if (value) {
            setTodos([...todos, {id: nextId, text: value, done: false}]);
            setNextId(nextId +1 )
        } else {
            alert('Enter task');
        }
    };

    const removeTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    return (
        <>
            <Header/>

            <Form putTodo={putTodo}/>
            <div className={"todos_box"}>
                {
                    todos.map((card) => (
                        <Card key={card.id} id={card.id} text={card.text} removeTodo={removeTodo}/>
                    ))
                }
            </div>
        </>
    );
}

export default App;
