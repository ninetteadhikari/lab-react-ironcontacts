import React, { Component } from "react";

class Contact extends Component {
  state = {
    contact: this.props.contact
  };

  deleteState = e => {
    console.log(this.props.contact.indexOf(e))
    // let deleteContact=[]

    let deleteIndex = this.props.contact.indexOf(e)
    let newArr=[...this.props.contact]
      if (deleteIndex !== -1) {
        newArr.splice(deleteIndex, 1);
        console.log(newArr)
        this.setState({
          contact: newArr
        });
    // this.props.contact.slice().map((el, index, arr) => {
    //   let deleteIndex = this.props.contact.indexOf(e)
    //   if (deleteIndex!== -1) {
    //     arr.splice(deleteIndex, 1);
    //     this.setState({
    //       contact: arr
    //     });
    //     // console.log(deleteContact)
    //   }

    //  });

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

// import React from 'react'

// const Contact = (props) => {
//    const contact=props.contact.map(data=>{

//        return (
//           <tr key={data.id}>
//             <td>
//                 <img src={data.pictureUrl} height= "200px" alt=""/>
//             </td>
//             <td>{data.name}</td>
//             <td>{data.popularity}</td>
//             {/* <td><button onClick={delete}>Delete</button></td> */}
//           </tr>
//        )
//    })
//    return (<React.Fragment>

//        {contact}
//    </React.Fragment>)

// }
// export default Contact
