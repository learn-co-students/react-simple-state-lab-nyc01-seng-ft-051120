import React, { Component } from 'react';
import Cell from './Cell'



export default class Matrix extends Component {
  
  state ={
    matrix: (new Array(10).fill( new Array(10).fill('#F00')))
  }

  genRow = (vals) => {
    return vals.map(val =><Cell value ={val}/> ) // replace me and render a cell component instead!
  }
  
  genMatrix = () => {
    return this.props.values.map(rowVals => <div className="row">{this.genRow(rowVals)}</div>)
  }
  
  render() {
    console.log(this.state);
    return (
      <div id="matrix">
        {this.genMatrix()}
      </div>
    )
  }
  
}

Matrix.defaultProps = {
  values: (() => {
    const defRow = ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00']
    return (new Array(10).fill(defRow))
  })()
}
