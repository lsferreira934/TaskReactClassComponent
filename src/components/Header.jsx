import React from "react";
import './Header.css';

class Header extends React.Component {
constructor(props) {
  super(props);
}
  render() { 
    return ( 
      <h1 className="header-title">{this.props.title}</h1>
     );
  }
}
 
export default Header;