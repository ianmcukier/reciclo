import React, { Component } from 'react';
import Menu from '../../components/Menu/Menu';
import Contributions from '../../components/Contributions/Contributions';
import Rewards from '../../components/Rewards/Rewards';


const dados = {
  user: "Helio",
  peso: 2,
  lixo: "cocô",
}

class User extends Component {
  render() {
    return (
      <div>
        <Menu title="Rodrigo" />
        <Contributions {...dados}/>
        <Rewards/>
      </div>
    );
  }
}

export default User;
