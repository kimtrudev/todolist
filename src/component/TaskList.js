import React, { Component } from 'react';
import TaskItem from './TaskItem';

class TaskList extends Component {

    constructor (props){
        super(props);
       this.state ={
           fiterName : '',
           filterStatus : -1
       }
    }
      

     onChange =(e)=>{
           let target=e.target
           let name=target.name
           let value=target.value
           this.props.onFiter(name==="fiterName" ? value : this.state.fiterName,
                             name ==='filterStatus' ? value : this.state.filterStatus)
           this.setState({
               [name]:value}
            
     )
    
      
     }
    render() {
        // console.log(typeof this.state.filterStatus);
        let {task}=this.props;
        let taskElement=task.map((item,index)=>{
                               
           return  <TaskItem 
           key={item.id}
            index={index} 
           item={item }
           HandleDelete={this.props.HandleDelete}
           onEdittask={this.props.onEdittask}
           onUpdateStatus={this.props.onUpdateStatus}
          />

        })
        return (
            
                <table className="table table-bordered table-hover">
                            <thead>
                                <tr>
                                    <th className="text-center">STT</th>
                                    <th className="text-center">Tên</th>
                                    <th className="text-center">Trạng Thái</th>
                                    <th className="text-center">Hành Động</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td></td>
                                    <td>
                                        <input type="text" 
                                        className="form-control"
                                        value={this.state.fiterName}
                                        name ='fiterName'
                                        onChange={this.onChange}
                                        />
                                    </td>
                                    <td>
                                    {/* <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3"> */}
                      
                          <select className="form-control"
                             name='filterStatus'
                             value={this.state.filterStatus}
                             onChange={this.onChange}  
                      >
                          
                                         <option value={-1} > tat ca  </option>
                                         <option value={1}>Trạng Thái Kích Hoạt</option>
                                         <option value={0}>Trạng Thái Ẩn</option>

                                     </select>
              
                                    </td>
                                    
                                </tr>
                          {taskElement}
                            </tbody>
                        </table>
            
        );
    }
}

export default TaskList;