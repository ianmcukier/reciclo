import React, { Component } from 'react';
import Menu from '../../components/Menu/Menu';
import Contributions from '../../components/Contributions/Contributions';
import Rewards from '../../components/Rewards/Rewards';


class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
        dados: {
          user: "Helio",
          peso: 2,
          lixo: "cocô",
        },
    };
  }

  render() {
    const { dados } = this.state;
    return (
      <div>
        <Menu title={dados.user} />
        <Rewards/>
        
        <Contributions {...dados}/>
      </div>
    );
  }
}

export default User;
