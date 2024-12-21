import Header from "./components/Header/Header.jsx";
import Form from "./components/Form/Form.jsx";
import {putTodo} from './components/Card/renderCard.jsx'
import './App.css';

function App() {
    return (
        <>
            <Header/>

            <Form putTodo={putTodo}/>
            <div className={"todos_box"}>
                {

                }
            </div>
        </>
    );
}

export default App;
