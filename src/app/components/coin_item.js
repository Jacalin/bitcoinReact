import React, {Component} from 'react';


class CoinItem extends Component{

  constructor(props){
    super(props)
  }

  render(){
    return(
      <li>
        {this.props.coin.name}
      </li>
    )
  }
}

export default CoinItem;
