import React, { Component } from 'react';
import Menu from '../../components/Menu/Menu';
import ListContributions from '../../components/ListContributions/ListContributions'
import Rewards from '../../components/Rewards/Rewards';
import Registry from '../../components/Registry/Registry';
import Grid from '@material-ui/core/Grid';
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
          }],
          coupons: [{
            img: "https://material-ui.com/static/images/grid-list/morning.jpg",
            title: 'Starbucks',
            exchange: "15%"
          }],
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

        <Grid container justify="center">
            <ListContributions {...dados}/>
        </Grid>
        <Rewards coupons={dados.coupons}/>
        <Registry />
      </div>
    );
  }
}

export default User;
