import React, {Component} from "react";
import CoinItem from "./coin_item"

class CoinList extends Component {

  constructor(props){
    super(props)
  }

  render(){
    if (this.props.coins === undefined){
      return (
        <h1>loading...</h1>
      )
    }else{
      return(
        <ul>
          {this.props.coins.map(coin =>{
            return <CoinItem coin={coin}/>
          })}
        </ul>
      )
    }
  }
}

export default CoinList;
