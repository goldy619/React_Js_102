import React from 'react';
import ReactDOM from 'react-dom';

class Clock extends React.Component {

  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount(){
    this.timerId = setInterval(
      () => this.tick(),1000
    );
  }

  tick() {
    //this.state = new Date();
    this.setState({ date: new Date() });
  }

  componentWillUnmount(){
    clearInterval(this.timerId);
  }

  render() {
    return (
      <div>
        <h1>Hello There</h1>
        <h2> It is {this.state.date.toLocaleTimeString()}</h2>
      </div>
    );
  }

}

ReactDOM.render(
  <Clock />
  ,document.getElementById("root") );