import React, { Component } from 'react';
import FormInput from './component/FormInput';
import SreachSort from './component/SreachSort';
import TaskList from './component/TaskList';
class App extends Component {
  constructor(props){
      super(props);
      this.state={
        task:[
          {
            id:  (Math.random() + 1).toString(36).substring(7),
            name: 'hoc lap trinh reactjs ',
            status : true 
          },
          {
            id:  (Math.random() + 1).toString(36).substring(7),
            name: 'hoc pts nang cao  ',
            status : false
          },
          {
            id:  (Math.random() + 1).toString(36).substring(7),
            name: 'hoc marketting digital',
            status : true 
          }
        ],
        isDisplayForm : false,
        taskEditting : null,
        filter : {
          name: '',
          status : -1
        }

        
        
      };
  
//  console.log(this.state);
  };
  onUpdateStatus=(id)=>{
  let   {task}=this.state
  let index=this.findIndex(id)
task[index].status=!task[index].status
 
    this.setState(
      {
     task :task
      }
    )
   
  }

  onShowForm =()=>{
    this.setState({
      isDisplayForm: true
    })
  }




  onToggleForm =()=>{
    if(this.state.isDisplayForm && this.state.taskEditting!==null){
            this.setState({
              isDisplayForm:true,
              taskEditting:null
            })}else{
        
            this.setState({
              isDisplayForm:!this.state.isDisplayForm,
              taskEditting: null
            })
    }
    // var isDisplayForm=!this.state.isDisplayForm;
    
    // this.setState({
    //   isDisplayForm : isDisplayForm
    // })
  }
  HandleDelete=(id)=>{
   
  var  task=this.state.task.filter(item=>item.id!==id)
  this.setState({
    task:task
  })


  }
  addtask =(data)=>{
         let {task}=this.state
   if(data.id===''){
    data.id= (Math.random() + 1).toString(36).substring(7);
      task=[...task,data]
   }else {
     let index=this.findIndex(data.id);
        task[index]=data
   }
   
    this.setState({
    task:task
    })
   
  }

  findIndex =(id)=>{
    var index=this.state.task.findIndex(item=>item.id===id)
    return index
  }
  onEdittask =(id)=>{
  
  let index=this.findIndex(id)
 
  var taskeditting=this.state.task[index]
  // console.log(taskeditting);
  this.setState({
    taskEditting:taskeditting
  })
  this.onShowForm()
// console.log(this.state.taskEditting);
  }


  onFiter =(name,status)=>{
    // console.log(name, status);
    this.setState({
        filter :{
         name: name,
         status:status
        }
    })

    
  }
  onSearch =(keyword)=>{
      this.setState({
        keyword:keyword
      })
  }



  render() {
     var {isDisplayForm,task,taskEditting,filter,keyword}=this.state

     if(filter){
       if(filter.name){
         task=task.filter(task=>task.name.toLowerCase().indexOf(filter.name)!==-1)
       };
       {
         task=task.filter((task)=>{
          if (filter.status==-1){
             return task
           }else{
             return task.status==(filter.status== 1 ? true : false)
           }
         })
       
        }
     }
     if(keyword){
      task=task.filter(task=>task.name.toLowerCase().indexOf(keyword)!==-1)
     }
    return (
      <div>
      <div className="container">
        <div className="text-center">
            <h1>Quản Lý Công Việc</h1>
            <hr/>
        </div>
        <div className="row">
           {isDisplayForm ? <div className= "col-xs-4 col-sm-4 col-md-4 col-lg-4"  >
                        
               < FormInput
                addtask={this.addtask}
                taskEditting={taskEditting}

                />
            </div> : ''}
            <div className={isDisplayForm ? "col-xs-8 col-sm-8 col-md-8 col-lg-8" : "col-xs-12 col-sm-12 col-md-12 col-lg-12"}>
                <button type="button"
                 className="btn btn-primary"
                 onClick={this.onToggleForm}
                 >
                    Thêm Công Việc
                </button>
                <div className="row mt-15">
                   < SreachSort   onSearch={this.onSearch}/>
                </div>
                <div className="row mt-15">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        < TaskList task={task} 
                         HandleDelete={this.HandleDelete}
                         onEdittask={this.onEdittask}
                         onUpdateStatus={this.onUpdateStatus}
                         onFiter={this.onFiter}
                         />
                    </div>
                </div>
            </div>
        </div>
    </div>
        
      </div>
    );
  }
}

export default App;