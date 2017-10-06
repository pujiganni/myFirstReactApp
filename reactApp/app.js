import React from 'react';
import ReactDOM from 'react-dom';

var dummyData = ["drink wine", "sleep", "netflix", "chill"]

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      task: ""
    }
  }

  render() {
    return (
      <ul>
        {dummyData.map((dummyData) => (<li> <button>
          X
        </button> {dummyData} </li>))}
      </ul>
    )
  }
}

class InputLine extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form>
        <div>
          <input type="text" placeholder="task"></input>
          <button type="submit" className="btn btn-info">Add todo</button>
        </div>
      </form>
    )
  }
}

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <InputLine />
        <TodoList />
      </div>
    )
  }
}







ReactDOM.render(<TodoApp />, document.getElementById('root'));
