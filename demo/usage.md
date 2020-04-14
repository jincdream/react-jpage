---
title: Simple Usage
order: 1
---

本 Demo 演示一行文字的用法。

````jsx
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ReactJPage from 'react-j-page';

class Text extends Component {
  render(){
    return <span style={{color: "green"}}>{this.props.text}</span>
  }
}

class Block extends Component {
  render(){
    return <div style={{background: "#f5f5f5",...this.props.style}}>
      {this.props.text} 
      <div>
        {this.props.children}
      </div>
    </div>
  }
}
class Page extends Component {
  render(){
    return <div style={{border: "1px solid #ccc"}}>
      page 
      <div>
        {this.props.children}
      </div>
    </div>
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <ReactJPage
          components={{
            Block,
            Page,
            Text
          }}
          schema={{
            data: {
              Block$1: {
                fields: {
                  style: {
                    background: "red"
                  }
                }
              },
              Layout$1: {
                fields: {
                  columns: ["1fr", "100px"],
                  rows: ["100px", "50px","100px"],
                  template: [
                    ["Block$1","Block$2"],
                    ["Block$1","Block$3"],
                    ["Block$4","Block$3"],
                  ],

                }
              }
            },
            hierarchy: {
              componentDetail: {
                Block: {
                  text: "blockkkkkkk"
                },
                Text: {
                  text: "机"
                }
              },
              root: "Page",
              structure: {
                Page: ["Layout$1"],
                Layout$1: ["Block$1","Block$2","Block$3","Block$4"],
                Block$1: ["Text$1"],
                Block$2: ["Text$2"],
                Block$3: ["Text$1","Text$2"],
                Block$4: ["Text$1","Text$1"]
              }
            }
          }}/>
      </div>
    );
  }
}

ReactDOM.render((
  <App />
), mountNode);
````
