import React, { useState, useEffect } from 'react';
import './App.css';

const Viewport = () => {
  const [height, setHeight] = useState(window.screen.height)
  const [width, setWidth] = useState(window.screen.width)

  function resizeFn() {
    setHeight(() => window.innerHeight)
    setWidth(() => window.innerWidth)
  }


  useEffect(() => {
    window.addEventListener("resize", resizeFn)

    return () => {
      window.removeEventListener("resize", resizeFn)
    }
  }, [height, width])

  return <>
    <div className="container">
      <div className="logo">
        <img src="https://images2.imgbox.com/93/b3/CSY2Zb2x_o.png"/>
        <p> <span>Viewport Info </span> is the tool which measures your screen height and width.
          This tool will help when you need to know device width & height.
          <span>Viewport Info </span> is created by <a href="https://github.com/rahuljiara" target="_blank">Rahul Ji Ara</a> In React.
          Source code is avilable on git hub page , Use this code and develope your own window resizer app.
        </p>

      </div>
      <div className="info">
        <div className="source-code">
          <a href="https://github.com/rahuljiara/viewportinfo-code" target="_blank">Source Code
            <img src="https://cdn-icons-png.flaticon.com/512/1006/1006363.png" />
          </a>
        </div>
        <div className="table">
          <table>
            <tr>
              <th>Height -</th>
              <td>{height}px</td>
            </tr>
            <br />
            <tr>
              <th>Width -</th>
              <td>{width}px</td>
            </tr>
          </table>
        </div>

        <div className="result">
          <h1> [{width} x {height}] </h1>
        </div>
      </div>
    </div>
  </>


}



function App() {
  return <>
    <Viewport />
  </>

}

export default App;
