import React, { Component } from "react";

class Contact extends Component {
  state = {
    contact: this.props.contact
  };

  deleteState = e => {
    console.log(this.props.contact.indexOf(e))

    let deleteIndex = this.props.contact.indexOf(e)
    let newArr=[...this.props.contact]
      if (deleteIndex !== -1) {
        newArr.splice(deleteIndex, 1);
        console.log(newArr)
        this.setState({
          contact: newArr
        });
  }
  }

  render() {
    const contact = this.props.contact.map(data => {
      return (
        <tr key={data.id}>
          <td>
            <img src={data.pictureUrl} height="200px" alt="" />
          </td>
          <td>{data.name}</td>
          <td>{data.popularity}</td>
          <td>
            <button onClick={()=>this.deleteState(data)}>Delete</button>
          </td>
        </tr>
      );
    });

    return <React.Fragment>{contact}</React.Fragment>;
  }
}

  
export default Contact;

