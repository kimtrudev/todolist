import react from 'react'
import { toast } from 'react-toastify';
import AddTodo from './AddTodo';
import './ListTodo.scss'
class ListTodo extends react.Component {
    state={
        ListTodo:[
            {id:'todo1',title: 'doing homework'},
            {id:'todo2',title: 'making video'},
            {id:'todo3',title: 'fixing bugs'}

        ],
        editodo:{}
    }
    addTodo =(newtodo)=>{
       
        this.setState({
            ListTodo : [...this.state.ListTodo,newtodo]
        })
    }
  
    handleDelete =(todo)=>{
        // alert('click me ')
        
        let currenttodos=this.state.ListTodo;
        currenttodos=currenttodos.filter(item=>item.id!==todo.id)
    this.setState({
      ListTodo:currenttodos
  })
       toast.success('delete success ! ')
    }

    handleEdit =(todo)=>{

    let {ListTodo,editodo}=this.state
    let isEmpty=Object.keys(editodo).length === 0
    console.log(Object.keys(editodo));
    // console.log( isEmpty);
    if(isEmpty===false && editodo.id===todo.id){
         let listtodocoppy=[...ListTodo]
        //  console.log(listtodocoppy);

        let objIndex = listtodocoppy.findIndex((item => item.id === todo.id));

         listtodocoppy[objIndex].title = editodo.title
         this.setState({
             ListTodo: listtodocoppy,
             editodo:{}
         })
         
         toast.success('update success !')
        return
    }
   
    
        this.setState({
           editodo : todo
                })


    }
    handleOnchangeEdit =(e)=>{
        let editcoppy={...this.state.editodo}
        editcoppy.title=e.target.value
        this.setState({
            editodo:editcoppy
        })
    }
    render (){
        let {ListTodo,editodo}=this.state;
        let isEmpty=Object.keys(editodo).length === 0
        
        return (
            
            <div className="list-todo-container">

           <AddTodo addtodo={this.addTodo} />
           
           <div className="list-todo-contents">
               {ListTodo && ListTodo.length > 0 && ListTodo.map((item,index)=>{
                   return (
                    <div className="todo-child"  key={item.id}>
                  {isEmpty===true ?

                    <span> {index+1} - {item.title}</span>
                   : 
                   <>
                   {editodo.id===item.id ? <span>
                   <input type="text"
                Value={editodo.title}
                onChange={(e) =>{this.handleOnchangeEdit(e)}}
                    
                    />
                   </span> :
                    <span> {index+1} - {item.title}</span>
                    }
                   </>
            
                  }

                <button className="edit" 
                onClick={()=>this.handleEdit(item)}
                >
          {isEmpty===false && editodo.id===item.id ? 'save' : 'edit'}
                
                </button>
                <button className="delete"
                 onClick={()=>this.handleDelete(item)}
                 
                 >Delete</button>
                </div>
                   )
               })}
         
           </div>
       
                </div>
         
       
        )
       
    }
}
export default ListTodo;