import React, { Component } from "react";
import contacts from "./contacts.json";
import Contact from "./Contact";

class ContactList extends Component {
  state = {
    contact: contacts.slice(0, 5)
  };

  addRandom = () => {
    const randomIndex = Math.floor(Math.random() * 199);
    const newContact = contacts[randomIndex];

    this.setState({
      //   contact: this.state.contact.concat(newContact)
      contact: [...this.state.contact, newContact]
    });

    console.log(this.state.contact);
  };

  sortName = () => {
    const sortedContact = [...this.state.contact].sort((a, b) => {
      return a.name.localeCompare(b.name);
    });

    this.setState({
      contact: sortedContact
    });
  };

  sortPopularity = () => {
    const sortedPopularity = [...this.state.contact].sort((a, b) => {
      return b.popularity - a.popularity;
    });

    this.setState({
      contact: sortedPopularity
    });
  };

  deleteState = id => {
    console.log(id);
    let newArr = [...this.state.contact];
    if (id !== -1) {
      newArr.splice(id, 1);
      console.log(newArr);
      this.setState({
        contact: newArr
      });
    }
  };

  render() {
    return (
      <div>
        <h1>IronContacts</h1>
        <button onClick={this.addRandom}>Add Random Contact</button>
        <button onClick={this.sortName}>Sort by name</button>
        <button onClick={this.sortPopularity}>Sort by popularity</button>
        <table>
          <tbody>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Action</th>
            </tr>
            <Contact
              contact={this.state.contact}
              deleteState={this.deleteState}
            />
          </tbody>
        </table>
      </div>
    );
  }
}

export default ContactList;
