import React, { Component } from 'react';
import { render } from "react-dom";
import CoinList from "./components/coin_list.js";

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      coinContent:[]
    };
  }

  componentDidMount(){
      this.fetchData();
  }

  fetchData(){
    fetch('http://coincap.io/front')
    .then(response => response.json())
    .then(parsedJSON => parsedJSON.slice(0,99).map(coin =>(
      {
        name: `${coin.long}`,
        mktcap: `${coin.mktcap}`,
        price: `${coin.price}`
      }
    )))
    .then(coins => {
      this.setState({coinContent:coins})
    })
    .catch(error => console.log('parsing failed', error))
  }



  render(){
    //console.log(this.state.coinContent)
    return (
      <div>
       <CoinList coins= {this.state.coinContent} />
      </div>
    )
  }
}

render(<App/>, window.document.getElementById("root"));
