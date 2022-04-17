import React from "react";
import "./App.css";
import Plot from 'react-plotly.js';


function App() {
  return <div className="App">
    <h1 className="text-3xl text-red-900">Hello World</h1>
    <Plot
        data={[
          {
            x: [1, 2, 3],
            y: [2, 6, 3],
            type: 'scatter',
            mode: 'lines+markers',
            marker: {color: 'red'},
          },
          {type: 'bar', x: [1, 2, 3], y: [2, 5, 3]},
        ]}
        layout={ {width: 500, height: 700, title: 'A Fancy Plot'} }
      />
  </div>;
}

export default App;