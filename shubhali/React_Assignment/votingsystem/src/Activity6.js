import React, { Component } from "react";
import "./App.css";
class Activity6 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      langs: [
        { name: "Virat Kohli", votes: 0 },
        { name: "Don Bradman", votes: 0 },
        { name: "MS Dhoni", votes: 0 },
        { name: "Steve Smith", votes: 0 },
      ],
    };
  }
  vote(i) {
    let newlangs = [...this.state.langs];
    console.log(newlangs);
    newlangs[i].votes++;
    this.setState({ langs: newlangs });
  }
  render() {
    return (
      <>
        <h1>Voting System</h1>
        <div className="languages">
          {this.state.langs.map((lang, i) => (
            <div key={i} className="language">
              <div className="languageName">{lang.name}</div>
              <div className="voteCount">{lang.votes}</div>
              <button onClick={this.vote.bind(this, i)}>Vote</button>
            </div>
          ))}
        </div>
      </>
    );
  }
}
export default Activity6;
