import { Component } from "react";

class Home extends Component {
  state = {
    myNumber: 1,
    color: "red",
  };
  increment = () => {
    this.setState((el) => el.myNumber++);
  };
  decrement = () => {
    if (this.state.myNumber > 1) this.setState((el) => el.myNumber--);
  };

 render() {
  console.log(this.props)
    return (
      <div className="flex justify-center my-auto h-[500px] ">
        <div className="grid grid-cols-2 items-center gap-4">
          <img src="logo.png" alt="logo" />
        </div>
        <div className="flex-col place-content-center">
          
          <h1
            className="text-2xl font-bold"
            style={{
              color:
              this.state.myNumber > 10
              ? "blue"
              : this.state.myNumber > 5
              ? "red" 
              : "black",
        }}
          >
            {this.state.myNumber}
          </h1>
          <div className="flex justify-center items-center gap-4 my-2">
          <button onClick={this.increment} className="btn bg-blue-600 p-2 rounded-md text-xl">increment</button>
          <button onClick={this.decrement} className="btn bg-red-700 p-2 rounded-md text-xl">decrement</button>

          </div>
          <div className="text-2xl font-bold" >
            <h1>My Name is <span style={{
              color:
              this.state.myNumber > 10
              ? "blue"
              : this.state.myNumber > 5
              ? "red" 
              : "black",
        }}>{this.props.name}</span></h1>
            <h1>My Age is <span style={{
              color:
                this.state.myNumber > 10
                  ? "red"
                  : this.state.myNumber > 5
                  ? "blue" 
                  : "black",
            }}>{this.props.age}</span></h1>
            <h1>My City is <span style={{
              color:
              this.state.myNumber > 10
              ? "yellow"
              : this.state.myNumber > 5
              ? "green" 
              : "black",
        }}>{this.props.city}</span></h1>
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
