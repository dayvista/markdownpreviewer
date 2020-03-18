import React, { Fragment, Component } from "react";

import "./App.css";

let marked = require("marked");

class App extends Component {
  state = {
    md:
      "### Here is some mock-up markdown. Type in _the box to the left_ using markdown syntax, and your browser will render it *in the box to the right* using HTML. [Click on this link](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) to be taken to a markdown cheatsheet hosted on GitHub and created by a one *Adam Pritchard*."
  };

  mdConvert = md => {
    this.setState({
      md
    });
  };

  render() {
    let { md } = this.state;

    return (
      <Fragment>
        <div className="center-align">
          <h1>Markdown Previewer</h1>
          <h3>
            Designed by William Davis of{" "}
            <a
              href="https://dayvista.work"
              target="_blank"
              rel="noopener noreferrer"
            >
              dayvista.work
            </a>
          </h3>
        </div>
        <div className="container">
          <div id="titles" className="row">
            <h2 id="input">Input</h2>
            <h2 id="output">Output</h2>
          </div>
          <div className="row">
            <textarea
              id="editor"
              className="col s6"
              type="text"
              value={md}
              onChange={event => this.mdConvert(event.target.value)}
            ></textarea>
            <div
              id="preview"
              className="col s6"
              dangerouslySetInnerHTML={{ __html: marked(md) }}
            ></div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default App;
