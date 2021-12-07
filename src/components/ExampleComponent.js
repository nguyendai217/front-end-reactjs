import React, { Component } from "react";

export class ExampleComponent extends Component {
  state = {
    firstname: "",
    lastname: "",
  };

  handleChangeFirstName = (e) => {
    this.setState({
      firstname: e.target.value
    });
  };

  handleChangeLastName = (e) => {
    this.setState({
      lastname: e.target.value
    });
  };

  handleClick() {
      console.log("log state", this.state);
  }
  
  render() {
    let {note, address}= this.props;
    return (
      <div className="example">
        <form>
          <label>First name:</label>
          <br />
          <input
            type="text" value={this.state.firstname}
            onChange={(e) => {
              this.handleChangeFirstName(e);
            }}
          />
          <br />
          <label>Last name:</label>
          <br />
          <input type="text" value={this.state.lastname}
            onChange={(e) => {
              this.handleChangeLastName(e);
            }}
          />
          <br />
          <input type="button" value="Submit"
            onClick={() => {
              this.handleClick();
            }}
          ></input>
        </form>

        <label>Note: {note}</label><br/>
        <label>Adress: {address}</label>
      </div>
    );
  }
}

export default ExampleComponent;
