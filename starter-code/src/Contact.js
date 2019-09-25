import React, { Component } from "react";

class Contact extends Component {
  



  render() {
    const contact = this.props.contact.map(data => {
      return (
        <tr key={data.id}>
          <td>
            <img src={data.pictureUrl} height="100px" alt={data.name} />
          </td>
          <td>{data.name}</td>
          <td>{data.popularity.toFixed(2)}</td>
          <td>
            <button onClick={()=>this.props.deleteState(data.id)}>Delete</button>
          </td>
        </tr>
      );
    });

    return <React.Fragment>{contact}</React.Fragment>;
  }
}

  
export default Contact;

