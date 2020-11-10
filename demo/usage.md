---
title: Simple Usage
order: 1
---

本 Demo 演示一行文字的用法。

````jsx
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ReactJPage,{Layout} from 'react-j-page';


function CompoenntA(props){
  return <div>{props.data.count} - {props.data.a}</div>
}

function CompoenntB(props){
  return <button onClick={()=>{
    props.changeContext({
      count: Date.now()
    })
  }}>点击联动 CompoenntA </button>
}

class Input extends Component {
  render(){
    return <input onChange={(e)=>{
      this.props.onChange && this.props.onChange(e.target.value)
    }}/>
  }
}

class Text extends Component {
  state = {ext: ""}
  render(){
    return <span style={{color: "green"}} onClick={()=>{
      this.props.onChange && this.props.onChange(this.props.text)
      console.log(this.props)
    }}>{this.props.text}-{this.state.ext}</span>
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
      context: JSON.stringify{JSON.stringify(this.props.PageContext)}
      <div>
        {this.props.children}
      </div>
    </div>
  }
}

class SwitchChildren extends Component {
  componentDidMount() {
    console.log("SwitchChildren componentDidMount")
  }
  componentWillUnmount() {
    console.log("SwitchChildren componentWillUnmount")
  }
  render() {
    let { style, children, childrenMap, value } = this.props
    return children[childrenMap[value]]
  }
}
function A (props){
  console.log(props,"aaaaa")
  return <div>afasdasd
  <div>{props.count}</div>
  {"---" + props.visible}
  </div>
}
function B(props){
  let {changeContext,count} = props
  console.log(count,"count")
  return <div>B
  {count}
  <button onClick={()=>{
    console.log(props)
    changeContext({count: 3})
  }}>打算</button>
  </div>
}
function C (props){
  let {changeContext} = props
  return <div>
  <div><button onClick={()=>{
    console.log(props)
    changeContext({page: 4})
  }}>打算fffff</button></div>
  C</div>
}
function D (props){
  let {count,name} = props
  let q = JSON.stringify(props,"\r",2)
  return <div>D:{count}<p>name: {name}</p>
  <pre>
    {q}
  </pre>
  </div>
}
function TypeChange(props){
  return <div>sad
  <button onClick={()=>{
    props.changeContext({value: props.current === "shop" ? "item" : "shop"})
    console.log("change", props.current === "shop" ? "item" : "shop")
  }}>change</button>
  </div>
}
class App extends Component {
  state = {
    schema: {
            data: {
              Block$1: {
                fields: {
                  style: {
                    background: "red"
                  }
                }
              },
              Input: {
                effect: {
                  enble: true,
                  handles: [
                    {
                      trigger: 'onChange',
                      condition: "true",
                      handle: {
                        targetUid: 'Text$5',
                        type: 'set',
                        value: {
                          ext: '$value',
                        },
                      },
                    },
                  ],
                },
                fields:{
                  text: "点我"
                }
              },
              Text$5: {
                effect: {
                  enble: true
                },
                fields:{
                  text: "别点我"
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
                Block$4: ["Input","Text$5"]
              }
            }
          }
  }
  render() {
    return (
      <div>
        <button onClick={()=>{
          this.setState({
            schema: {
            data: {},
            hierarchy: {
              componentDetail: {
                Block: {
                  text: "132"
                },
                Text: {
                  text: "32"
                }
              },
              root: "Page",
              structure: {
                Page: ["Layout$1"],
                Layout$1: ["Block$1","Block$2"],
                Block$1: ["Text$1"],
                Block$2: ["Text$2"],
              }
            }
          }
          })
        }}>reset</button>
        <ReactJPage
          PageContext={{a:123}}
          components={{
            Block,
            Page,
            Text,
            Input
          }}
          schema={this.state.schema}/>


          <ReactJPage

          PageContext={{a:123, count: 999, data: {name :"jsac"}}}
          components={{
            A,
            B,
            C,
            D,
            Block
          }}
          schema={{
            data: {
              A$1: {
                effectFields: {
                  visible: '$Context.B$1.count > $Context.C$1.page',
                  count: "$Context.B$1.count"
                },
              },
              B$1: {
                fields: {
                  count: 0,
                },
              },
              C$1: {
                fields: {
                  page: 0,
                },
              },
              D$1: {
                scriptFields: {
                  count: "$Context.count + 1",
                  name: "$Context.data.name",
                  "a.b.c": "$Context.count"
                },
                fields: {
                  a: {
                    b: {
                      c: 321,
                      d: 456
                    }
                  }
                }
              }
            },
            hierarchy: {
              root: 'Block',
              structure: {
                Block:["A$1",'B$1','C$1','D$1']
              },
            },
          }}/>
        <style>{`#usage{display:block !important}"`}</style>
        <div>
        <hr />
        <ReactJPage
          components={{CompoenntA,CompoenntB}}
          schema={{
            data: {
              CompoenntA: {
                effectFields: {
                  "data.count": "$Context.CompoenntB.count + 1"
                },
                fields: {
                  data: {
                    a: 1
                  }
                }
              },
              CompoenntB: {
                fields: {
                  count: 999
                }
              },
              Layout: {
                fields: {
                  template:[["CompoenntA","CompoenntB"]]
                }
              }
            },
            hierarchy: {
              component: [],
              componentDetail: {},
              root: "Layout",
              structure: {
                Layout: ["CompoenntA","CompoenntB"]
              }
            }
          }}
        ></ReactJPage>
        </div>
        <div>
  ========
  <hr />
        <ReactJPage
          components={{CompoenntA,CompoenntB,SwitchChildren,TypeChange}}
          schema={{
            data: {
              TypeChange: {
                effectFields: {
                  current: "$Context.TypeChange.value"
                },
                fields: {
                  value: "item"
                }
              },
              SwitchChildren: {
                effectFields: {
                  value: "$Context.TypeChange.value"
                },
                fields: {
                  value: "item",
                  childrenMap: {
                    item: 0,
                    shop: 1
                  }
                }
              },
              CompoenntA: {
                effectFields: {
                  "data.count": "$Context.CompoenntB.count + 1"
                },
                fields: {
                  data: {
                    a: 1
                  }
                }
              },
              CompoenntB: {
                fields: {
                  count: 999
                }
              },
              Layout: {
                fields: {
                  template:[["TypeChange"],["SwitchChildren"]]
                }
              },
              Layout$a: {
                fields: {
                  template:[["CompoenntA"],["CompoenntB"]]
                }
              }
            },
            hierarchy: {
              component: [],
              componentDetail: {},
              root: "Layout",
              structure: {
                Layout: ["TypeChange","SwitchChildren"],
                SwitchChildren: ["Layout$a","Layout$b"],
                Layout$a: ["CompoenntA","CompoenntB"]
              }
            }
          }}
        ></ReactJPage>
        </div>
      </div>
    );
  }
}


ReactDOM.render((
  <App />
), mountNode);
````
