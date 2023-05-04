import React, { Component } from "react";
import Props from "../Props";

export default class App extends Component {
  state = {
    name: "Koushik",
    test: "wellcome to Class Component",
    products: [],
    show: false,
  };
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => this.setState({ products: data }))
      .catch((err) => console.log(err));
  }
  render() {
    return (
      <div>
        <center>
          <Props data={this.state.test} />
          <h1>Hai i am {this.state.name}</h1>
          <button
            onClick={() => this.setState({ name: "I am React Developer" })}
          >
            Hit me{" "}
          </button>
        </center>
        <button onClick={() => this.setState({ show: true })}>
          Click her for api data{" "}
        </button>
        <button>
          <a
            href="https://www.youtube.com/watch?v=njVUtjD8_Bk&t=34s"
            target="blank"
          >
            Clik Her for youtube Link
          </a>
        </button>
        {this.state.show ? (
          <>
            {" "}
            {this.state.products.map((products) => (
              <li key={products.id}>{products.title}</li>
            ))}
          </>
        ) : null}
      </div>
    );
  }
}
