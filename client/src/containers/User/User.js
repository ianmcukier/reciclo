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
        showSidebar: false,
    };
    this.toggleSidebar = this.toggleSidebar.bind(this);
  }

  toggleSidebar() {
    const { showSidebar } = this.state;
    this.setState({showSidebar: !showSidebar});
  }

  render() {
    const { dados, showSidebar } = this.state;
    return (
      <div>
        <Menu
          title={dados.user}
          toggleSidebar={this.toggleSidebar}
          sidebarOpen={showSidebar}
          routes={
            {
              'top': [
                {name: 'Perfil', handler: () => {console.log('perfil')}},
                {name: 'Desconectar', handler: () => {}},
              ],
              'bottom': [
                {name: 'Minhas Contibuições', handler: () => {}},
                {name: 'Meus Cupons', handler: () => {}},
                {name: 'Histórico', handler: () => {}},              ]
            }
          }
        />
        <Contributions {...dados}/>
        <Rewards/>
      </div>
    );
  }
}

export default User;
