import react from 'react'

import {  toast } from 'react-toastify';
 
class AddTodo extends react.Component {

    state={
       
        title:''

    }
    handleOnchange=(event)=>{
        // console.log(event);
        this.setState({
            title:event.target.value
        })
    
    }
   
    handleAdd =()=>{
       if(!this.state.title){
           alert('missing you')
           return 
       }
        let todo={
            id: Math.floor(Math.random()*1000),
            title : this.state.title
        }
        this.props.addtodo(todo)

        this.setState({
            title: ''
        })
        toast.success("Wow so easy!")
    }

    render (){
        let {title}=this.state
        return (
            <div className="add-todo">
            <input type="text" 
            value={title}
            onChange={(e)=>this.handleOnchange(e)}
            
            />
            <button type="button" className="add"
            onClick={()=>this.handleAdd()}
            
            
            >Add</button>
        </div>
        )
    }
}

export default AddTodo;