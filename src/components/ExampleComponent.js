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
      </div>
    );
  }
}

export default ExampleComponent;
