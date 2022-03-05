import React, { Component } from 'react';

class TaskItem extends Component {




    HandleDelete =()=>{
        // console.log(typeof  this.props.HandleDelete );
        this.props.HandleDelete(this.props.item.id)
    
       
    }
    onEdittask =()=>{
        
        this.props.onEdittask(this.props.item.id)
    }
    onUpdateStatus =()=>{
this.props.onUpdateStatus(this.props.item.id)
    }
    render() {
        let {item,index}=this.props
        return (
            
                 <tr>
                                    <td>{index +1}</td>
                                    <td>{item.name}</td>
                                    <td className="text-center">
                                        <span className={item.status ? "label label-success" :"label label-danger"} onClick={this.onUpdateStatus} > 
                                                   {item.status ? ' Kích Hoạt ' : 'An'}
                                                </span>
                                    </td>
                                    <td className="text-center">
                                        <button type="button" className="btn btn-warning" 
                                          onClick={this.onEdittask}>


                                            <span className="fa fa-pencil mr-5"
                               
                                            ></span>Sửa
                                        </button>
                                        &nbsp;
                                        <button type="button" className="btn btn-danger"
                                        
                                        onClick={this.HandleDelete}
                                        >
                                            <span className="fa fa-trash mr-5"></span>Xóa
                                        </button>
                                    </td>
                                </tr>
            
        );
    }
}

export default TaskItem;