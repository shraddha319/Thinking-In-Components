import React from "react";
import "./styles.css";

class BlogReact extends React.Component {
  state = {
    "love it!": ["💖", 0],
    "Here's my like": ["👍", 0],
    "claps claps": ["👏", 0],
    "I'm loving it": ["😍", 0],
    "You're a unicorn": ["🦄", 0],
    "Fly high": ["🚀", 0],
    "You deserve a trophy": ["🏆", 0],
    "It's party time": ["🎉", 0],
    "Take my money": ["💰", 0],
    "Cheers!": ["🍺", 0]
  };

  clickHandler = (item) => {
    this.setState({ [item]: [this.state[item][0], this.state[item][1] + 1] });
  };

  render() {
    return (
      <div className="reaction-container">
        {Object.keys(this.state).map((item) => {
          let emoji = this.state[item];
          return (
            <button
              className="reaction"
              key={item}
              onClick={() => this.clickHandler(item)}
            >
              <span className="reaction-emoji">{emoji[0]}</span>
              <span className="reaction-count">{emoji[1]}</span>
              <span className="reaction-text">{item}</span>
            </button>
          );
        })}
      </div>
    );
  }
}

export default BlogReact;
