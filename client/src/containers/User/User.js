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
        activeRoute: 'rewards',
    };
    this.toggleSidebar = this.toggleSidebar.bind(this);
    this.handleRoute = this.handleRoute.bind(this);
  }

  toggleSidebar() {
    const { showSidebar } = this.state;
    this.setState({showSidebar: !showSidebar});
  }

  handleRoute(route) {
    const { activeRoute } = this.state;
    this.setState({activeRoute: route});
  }

  render() {
    const { dados, showSidebar, activeRoute } = this.state;
    return (
      <div>
        <Menu
          title={`Olá, ${dados.user}`}
          toggleSidebar={this.toggleSidebar}
          sidebarOpen={showSidebar}
          routes={
            {
              'top': [
                {name: 'Perfil', handler: () => {this.handleRoute('rewards')}},
                {name: 'Desconectar', handler: () => {}},
              ],
              'bottom': [
                {name: 'Minhas Contribuições', handler: () => {this.handleRoute('contributions')}},
                {name: 'Meus Cupons', handler: () => {this.handleRoute('coupons')}},
                {name: 'Histórico', handler: () => {this.handleRoute('registry')}},              ]
            }
          }
        />
        { activeRoute === 'contributions' ? (
            <Grid container justify="center">
              <ListContributions {...dados.contribution}/>
            </Grid>
        ) : null}
        { activeRoute === 'rewards' ? 
          <Rewards coupons={dados.coupons}/> 
          : null}
        { activeRoute === 'registry' ? 
          <Registry />
          : null}
        { activeRoute === 'coupons' ? 
          <Grid container justify="center">
              <ListCoupons {...dados.couponRegistry}/>
          </Grid>
          : null}  
      </div>
    );
  }
}

export default User;
