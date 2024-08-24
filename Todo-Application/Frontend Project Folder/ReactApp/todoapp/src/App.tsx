import { BrowserRouter, Route, Switch } from "react-router-dom";
import ToDoList from "./ToDoList";
import ToDoComponent from "./ToDoComponent";


const App=()=>{

return (<>
 <BrowserRouter>
 <Switch>
    <Route exact path="/" component={ToDoList}></Route>
    <Route exact path="/addTodo" component={ToDoComponent}></Route>
    <Route exact path="/update/:id" component={ToDoComponent}></Route>
 </Switch>
 </BrowserRouter>

</>

)

}
export default App;