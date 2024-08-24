import React, { ChangeEvent, useEffect, useState } from "react";
import { Button, Container, Form, Table } from "react-bootstrap";
import { completeTodo, deleteTodo, inCompleteTodo, listTodos } from "./services/Todo";
import { Link, useHistory } from "react-router-dom";
import "./fileEditor/edit.css";


type Todo={
    id:number,
    title:string,
    description:string,
    status:string
}
const ToDoList=()=>{
  const [search,setSearch]=useState<string>("");
    const [todos,setTodos]=useState<Todo[]>([]);
    function getAllTodos(){
        listTodos().then((response:any)=>{
           console.log(response.data); 
           setTodos(response.data)
        }).catch((error)=>console.log(error))
        
    }

    useEffect (()=>getAllTodos(),[])
  function update(id:number){
   navigator.push(`/update/${id}`)
  }
  const navigator=useHistory()

  function remove(id:number){
    deleteTodo(id).then((response)=>{
console.log(response.data);
getAllTodos();
    }).catch((error)=>console.log(error))
  }
  function completeTask(id:number){
    completeTodo(id).then((response)=>{
console.log(response.data)
getAllTodos();
    }).catch((error)=>{
      console.log(error);
    })
  }
  function inCompleteTask(id:number){
    inCompleteTodo(id).then((response)=>{
      console.log(response.data);
      getAllTodos();
    }).catch((error)=>{
      console.log(error);
    })
  }
  const searchItem=(e:React.ChangeEvent<HTMLInputElement >)=>{
    setSearch(e.target.value)
  }
  const filteredTodos = todos.filter(todo =>
    todo.title.toLowerCase().includes(search.toLowerCase()) ||
    todo.description.toLowerCase().includes(search.toLowerCase())
);
    return(<div style={{backgroundColor:"yellow"}}>
    <header style={{backgroundColor:"black",color:"white" ,padding:"20px"}}><h4>Todo   Management   Application</h4></header>
    < Link to="/addTodo" className="btn btn-primary lg" style={{ marginBottom:"28px", marginTop:"100px",marginLeft:"28px",fontFamily:"serif"}}> Add Todo </Link>
    
    <Container>
      <h1 style={{textAlign:"center",marginBottom:"15px",fontFamily:"serif"}}> List  Of  Todos </h1>
      <Form.Control type="Text" placeholder="Search Here" value={search}onChange={searchItem}style={{ borderColor:"black", marginBottom: "5px", width: "25%", padding: "10px" ,fontFamily:"serif",color:"blue" }}/>
      <Table  striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>Todo Title</th>
          <th>Todo Description</th>
          <th>Todo Completed</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
       {
filteredTodos.map((todo)=>{
    return <tr key={todo.id}>
        
        <td>{todo.title}</td>
        <td>{todo.description}</td>
        <td>{todo.status? "Yes":"No"}</td>
        <td>
            <Button variant="info" onClick={()=>update(todo.id)}>Update</Button > &nbsp; &nbsp; &nbsp;
        <Button variant="danger" onClick={()=>remove(todo.id)}>Delete</Button> &nbsp; &nbsp; &nbsp;
        <Button variant="success" onClick={()=>completeTask(todo.id)}>Complete</Button> &nbsp; &nbsp; &nbsp;
        <Button variant="secondary" onClick={()=>inCompleteTask(todo.id)}>In Complete</Button>
        </td>
    </tr>
})
 }   
      </tbody>
    </Table> 
    </Container>
    <footer style={{backgroundColor:"black",color:"white" ,padding:"15px" ,textAlign:"center",marginTop:"370px",fontFamily:"serif"}}>&copy;HemanthKumar</footer>
    </div>
    )
}

export default ToDoList;