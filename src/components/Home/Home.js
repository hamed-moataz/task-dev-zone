import { Component } from "react";

class Home extends Component {
  render() {
    return (
      <div className="flex justify-center my-auto h-[500px]">
        <div className="grid grid-cols-2 items-center gap-4">
          <h1 className="text-2xl text-teal-600 font-black	">
            Welcome to the Home Page!!
          </h1>
          <img src="logo.png" alt="logo" />
        </div>
        <div></div>
      </div>
    );
  }
}
export default Home;
