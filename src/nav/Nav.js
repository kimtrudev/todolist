import React  from "react";

import './Nav.scss'

class Nav extends React.Component{
    render(){
        return (
            <>
         
          <div className="topnav">
  <a className="active" href="/">Home</a>
  <a href="todos">todos</a>
  <a href="product">product</a>

  {/* <a href="#about">About</a> */}
</div>
</>
        )
    }
}
export default Nav