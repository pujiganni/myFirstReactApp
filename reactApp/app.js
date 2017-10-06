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









ReactDOM.render(<TodoList />, document.getElementById('root'));
