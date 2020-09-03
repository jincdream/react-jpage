---
title: Creator
order: 2
---

布局生成器。

````jsx
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ReactJPage,{Layout} from 'react-j-page';

class App extends Component {
  state = {}
  get(x,y){
    let rz = []
     for (let k = 0; k < x; k++) {
        let inp = []
        for (let i = 0; i < y; i++) {
          inp.push(<input key={`${i}*${k}`}/>)
        }
        rz.push(<div key={k}>
          {
            inp
          }
        </div>)
    }
    return rz
  }
  render(){
    let {x,y} = this.state
    return <div>
        <p>
          行：
          <input onChange={(v)=>{

          this.setState({
            x: v.target.value
          })
        }}/>
        </p>
        <p>
        列：
        <input onChange={v=>{
          this.setState({
            y: v.target.value
          })
        }}/>
        </p>
        <div>
          {
           this.get(+x,+y) 
          }
        </div>
      </div>
  }
}
ReactDOM.render((
  <App />
), mountNode);

````