import React, { Component } from 'react';
import Menu from '../../components/Menu/Menu';
import ListContributions from '../../components/ListContributions/ListContributions'
import Rewards from '../../components/Rewards/Rewards';
import Registry from '../../components/Registry/Registry';
import Grid from '@material-ui/core/Grid';
import data from '../../fakeApi';
import ListCoupons from '../../components/ListCoupons/ListCoupons'
class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
        dados: data,
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
    console.log(dados);
    return (
      <div>
        <Menu
          title={`Olá, ${dados.user}`}
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
        <Grid container justify="center">
            <ListCoupons {...dados.couponRegistry}/>
        </Grid>
      </div>
    );
  }
}

export default User;
