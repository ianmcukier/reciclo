import React, { Component } from 'react';
import Contributions from '../../components/Contributions/Contributions';


const dados = {
  user: "Helio",
  peso: 2,
  lixo: "cocô",
}
class User extends Component {
  render() {
    return (
      <div>
        <Contributions {...dados}/>
      </div>
    );
  }
}

export default User;
