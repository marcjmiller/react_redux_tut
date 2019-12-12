import React, {Component} from "react";
import {connect} from "react-redux";
import {addTodo} from "../actions";
import * as MyTypes from "../types";
import {Dispatch} from "redux";

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    addTodo: (todo: MyTypes.Todo) => dispatch(addTodo(todo))
  };
}

class ConnectedForm extends Component {
  constructor(props: Props) {
    super(props);
    this.state = {
      title: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event: React.FormEvent<HTMLFormElement>) {
    this.setState({[event.currentTarget.id]: event.currentTarget.value});
  }

  handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const {title} = this.state;
    this.props.addTodo({title});
    this.setState({title: ""});
  }

  render() {
    const {title} = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={this.handleChange}
          />
        </div>
        <button type="submit">SAVE</button>
      </form>
    );
  }
}

const Form = connect(
  null,
  mapDispatchToProps
)(ConnectedForm);

export default Form;
