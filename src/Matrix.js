import React, { Component } from 'react';
import { pattern1 } from './data';
import Cell from './cell';

export default class Matrix extends Component {
  
  genRow = (vals) => {
    console.log(vals)
    return vals.map(val => 
      <Cell 
        value={val} 
      />
    ) 
  }
  
  genMatrix = () => {
    console.log(this.props.values)
    return this.props.values.map(rowVals => <div className="row">{this.genRow(rowVals)}</div>)
  }
  
  render() {
    return (
      <div id="matrix">
        {this.genMatrix()}
      </div>
    )
  }
  
}

Matrix.defaultProps = {
  values: Array(10).fill(Array(10).fill('#F00'))
}