import React, { Component } from 'react';
<<<<<<< HEAD
import Menu from '../../components/Menu/Menu';
=======
import Contributions from '../../components/Contributions/Contributions';
import Rewards from '../../components/Rewards/Rewards';


const dados = {
  user: "Helio",
  peso: 2,
  lixo: "cocô",
}
>>>>>>> 5ecf0632230b14cb6b59ef10c5b88e72337140ea

class User extends Component {
  render() {
    return (
      <div>
<<<<<<< HEAD
        <Menu title="Rodrigo" />
=======
        <Contributions {...dados}/>
        <Rewards/>
>>>>>>> 5ecf0632230b14cb6b59ef10c5b88e72337140ea
      </div>
    );
  }
}

export default User;
