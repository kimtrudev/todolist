import React, { Component } from 'react';

class FormInput extends Component {
    constructor (props){
        super(props);
        this.state={
           
                 id: '',
                name:'',
                 status: false
   
           
        }
    }
  
componentDidMount (){
      if(this.props.taskEditting){
          this.setState({
            id: this.props.taskEditting.id,
            name: this.props.taskEditting.name,
             status: this.props.taskEditting.status
          })
      }
}

    UNSAFE_componentWillReceiveProps (prevProps){
    console.log('th1');
   if (prevProps&&prevProps.taskEditting){
        this.setState({id: prevProps.taskEditting.id,
            name: prevProps.taskEditting.name,
             status: prevProps.taskEditting.status});
    }else if(!prevProps.taskEditting){
        console.log('th2');
        this.setState({
            id: '',
            name:'',
             status: false

        })
    }
}




    onChange=(e)=>{
     let target=e.target
      let name=target.name
      let value=target.value

    if(name==='status'){
     value=target.value==='true' ? true : false
}
      this.setState({
        
          [name]:value
    })
   
    }
    handleAddtask=()=>{
    
        this.props.addtask(this.state);
        

    };
    onClear=()=>{
        this.setState({
            name:'',
            status: false
        })
    }
  

    render() {
     
        let {id}=this.state
        return (
          
                 <div className="panel panel-warning">
                    <div className="panel-heading">
                        <h3 className="panel-title">{ id ? 'cap nhat cong viec ' : 'them cong viec'}</h3>
                    </div>
                    <div className="panel-body">
                        <form  >
                            <div className="form-group">
                                <label>Tên :</label>
                                <input type="text"
                                 className="form-control" 
                                 name='name'
                                 value={this.state.name}
                                 onChange={this.onChange}
                                 />
                            </div>
                            <label>Trạng Thái :</label>
                            <select className="form-control"
                             required="required"
                              name='status'
                              value={this.state.status}
                              onChange={this.onChange}
                            >
                                <option value={true}>Kích Hoạt</option>
                                <option value={false}>Ẩn</option>
                            </select>
                            <br/>
                            <div className="text-center">
                                <button type="button" className="btn btn-warning"
                                 onClick={()=>this.handleAddtask()}
                                  
                                >{id? 'update' : 'them '}</button>&nbsp;
                                <button type="button" 
                                className="btn btn-danger"
                                onClick={this.onClear}
                                
                                >Hủy Bỏ</button>
                            </div>
                        </form>
                    </div>
                </div>
        
        );
    }
}

export default FormInput;