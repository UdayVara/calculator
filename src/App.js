import React, { useState } from 'react';
import './App.css';


function App() {
  const [result,updateResult]=useState("0");
  const ac = () =>{ 
    updateResult("0");
  }
  const negativeSign = () =>{
    if (result==='0') {
      updateResult("-")
    } else {
      updateResult(result.concat("-")); 
    } 
  
  }
  const modulus = () =>{
    updateResult(result.concat("%"));
  }
  const divide = () =>{
    updateResult(result.concat("/"));
  }
  const seven = () =>{
    if (result==='0') {
      updateResult("7")
    } else {
      updateResult(result.concat("7")); 
    } 
  }
  const eight = () =>{
    if (result==='0') {
      updateResult("8")
    } else {
      updateResult(result.concat("8")); 
    }
  }
  const nine = () =>{
    if (result==='0') {
      updateResult("9")
    } else {
      updateResult(result.concat("9")); 
    }
  }
  const multiply = () =>{
    updateResult(result.concat("*"));
  }
  const four = () =>{
    if (result==='0') {
      updateResult("4")
    } else {
      updateResult(result.concat("4")); 
    }
  }
  const five = () =>{
    if (result==='0') {
      updateResult("5")
    } else {
      updateResult(result.concat("5")); 
    }
  }
  const six = () =>{
    if (result==='0') {
      updateResult("6")
    } else {
      updateResult(result.concat("6")); 
    }
  }
  const subtract = () =>{
    if (result==='0') {
      updateResult("-")
    } else {
      updateResult(result.concat("-")); 
    }
  }
  const one = () =>{
    if (result==='0') {
      updateResult("1")
    } else {
      updateResult(result.concat("1")); 
    }
  }
  const two = () =>{
    if (result==='0') {
      updateResult("2")
    } else {
      updateResult(result.concat("2")); 
    }
  }
  const three = () =>{
    if (result==='0') {
      updateResult("3")
    } else {
      updateResult(result.concat("3")); 
    }
  }
  const add = () =>{
    
      updateResult(result.concat("+")); 
    
  }
  const zero = () =>{
    updateResult(result.concat("0"));
  }
  const decimal = ()=>{
    updateResult(result.concat("."))
  }
  const equal = () =>{
    let temp=eval(result);
    let tempR=temp; 
    updateResult(''+tempR+'');

  }
  return (
    <>
        
        <div className="container text-light fixed-bottom d-flex  flex-column" style={{maxWidth:"32rem"}}>
        <h1 className="result text-light mb-4 ms-auto me-3 display-2">{result}</h1>
                <div className="d-flex justify-content-between mb-4">
                <button className={`btn btn-primary fs-3 mx-2 btn-lg px-2 w-100`} style={{backgroundColor:'#f49304'}} onClick={ac} >AC</button>
                <button className={`btn btn-primary fs-3 mx-2 btn-lg px-2 w-100`} style={{backgroundColor:'#f49304'}} onClick={negativeSign}>+/-</button>
                <button className={`btn btn-primary fs-3 mx-2 btn-lg px-2 w-100`} style={{backgroundColor:'#f49304'}} onClick={modulus}>%</button>
                <button className={`btn btn-primary fs-3 mx-2 btn-lg px-2 w-100`} style={{backgroundColor:'#f49304'}} onClick={divide}>/</button>
                </div>
                <div className="d-flex justify-content-between mb-4">
                <button className={`btn btn-secondary fs-3 mx-2 btn-lg px-2 w-100`} onClick={seven}>7</button>
                <button className={`btn btn-secondary fs-3 mx-2 btn-lg px-2 w-100`} onClick={eight}>8</button>
                <button className={`btn btn-secondary fs-3 mx-2 btn-lg px-2 w-100`} onClick={nine}>9</button>
                <button className={`btn btn-primary fs-3 mx-2 btn-lg px-2 w-100`} style={{backgroundColor:'#f49304'}} onClick={multiply}>X</button>
                </div>
                <div className="d-flex justify-content-between mb-4">
                <button className={`btn btn-secondary fs-3 mx-2 btn-lg px-2 w-100`} onClick={four} >4</button>
                <button className={`btn btn-secondary fs-3 mx-2 btn-lg px-2 w-100`} onClick={five}>5</button>
                <button className={`btn btn-secondary fs-3 mx-2 btn-lg px-2 w-100`} onClick={six}>6</button>
                <button className={`btn btn-primary fs-3 mx-2 btn-lg px-2 w-100`} style={{backgroundColor:'#f49304'}} onClick={subtract}>-</button>
                </div>
                <div className="d-flex justify-content-between mb-4">
                <button className={`btn btn-secondary fs-3 mx-2 btn-lg px-2 w-100`} onClick={one} >1</button>
                <button className={`btn btn-secondary fs-3 mx-2 btn-lg px-2 w-100`} onClick={two}>2</button>
                <button className={`btn btn-secondary fs-3 mx-2 btn-lg px-2 w-100`} onClick={three}>3</button>
                <button className={`btn btn-primary fs-3 mx-2 btn-lg px-2 w-100`} style={{backgroundColor:'#f49304'}} onClick={add}>+</button>
                </div>
                <div className="d-flex justify-content-between mb-2">
                
                <button className={`btn btn-secondary fs-3 mx-2 btn-lg px-2 w-100`} onClick={zero}>0</button>
                <button className={`btn btn-secondary fs-3 mx-2 btn-lg px-2 w-100`} onClick={decimal}>.</button>
                <button className={`btn btn-primary fs-3 mx-2 btn-lg px-2 w-100`} style={{backgroundColor:'#f49304'}} onClick={equal}>=</button>
                </div>
        </div>
    </>
  );
}

export default App;
