import React, { Component } from 'react';
import Menu from '../../components/Menu/Menu';
import Contributions from '../../components/Contributions/Contributions';
import Rewards from '../../components/Rewards/Rewards';

import ListContributions from '../../components/ListContributions/ListContributions';
import { Grid } from '@material-ui/core';

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
        dados: {
          user: "Helio",
          peso: 2, 
          lixo: "cocô",
          contribution: [{
            user: "Helio",
            peso: 2,
            lixo: "cocô",
            data: "Nov 3, 2018",
          },
          {
            user: "Bibi",
            peso: 1,
            lixo: "qué ota",
            data: "Out 21, 2018"
          },
          {
            user: "Duduxo",
            peso: 3,
            lixo: "home wrecker",
            data: "Ago 10, 2018"
          }]
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
                {name: 'Minhas Contribuições', handler: () => {}},
                {name: 'Meus Cupons', handler: () => {}},
                {name: 'Histórico', handler: () => {}},              ]
            }
          }
        />
        <Rewards/>
        <Grid container justify="center">
            <ListContributions {...dados}/>
        </Grid>
      </div>
    );
  }
}

export default User;
