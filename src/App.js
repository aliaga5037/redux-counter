import { increment, decrement } from "./actions/counter";
import { Component } from "react";

class App extends Component {
  state = {
    times: 1,
  };

  changeHandler = (e) => {
    this.setState({ times: e.target.value });
  };
  render() {
    const { store } = this.props;
    return (
      <div className="App">
        <input
          type="text"
          value={this.state.times}
          onChange={this.changeHandler}
        />
        <button onClick={() => store.dispatch(increment(this.state.times))}>
          Increment
        </button>
        <h1>{store.getState().counter}</h1>
        <button onClick={() => store.dispatch(decrement(this.state.times))}>
          Decrement
        </button>
      </div>
    );
  }
}

export default App;
