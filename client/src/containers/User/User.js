import React, { Component } from 'react';
import Menu from '../../components/Menu/Menu';
import ListContributions from '../../components/ListContributions/ListContributions'
import Rewards from '../../components/Rewards/Rewards';
import Registry from '../../components/Registry/Registry';
import Grid from '@material-ui/core/Grid';
import data from '../../fakeApi';
import ListCoupons from '../../components/ListCoupons/ListCoupons'
import Greetings from '../../components/Greetings/Greetings'
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import { List } from '@material-ui/core';

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
        dados: data,
        showSidebar: false,
        activeRoute: 'Home',
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
          title = {activeRoute}
          toggleSidebar={this.toggleSidebar}
          sidebarOpen={showSidebar}
          routes={
            {
              'top': [
                {name: 'Home', handler: () => {this.handleRoute('Home')}},
                {name: 'Desconectar', handler: () => {}},
              ],
              'bottom': [
                {name: 'Minhas Contribuições', handler: () => {this.handleRoute('Minhas Contribuições')}},
                {name: 'Meus Cupons', handler: () => {this.handleRoute('Meus Cupons')}},
                {name: 'Histórico', handler: () => {this.handleRoute('Histórico')}},              ]
            }
          }
        />
        { activeRoute === 'Minhas Contribuições' ? (
            <Grid container justify="center">
              <ListContributions {...dados.contribution}/>
            </Grid>
        ) : null}
        { activeRoute === 'Home' ? (
          <div>
            <List>
              <ListItem>
                <Greetings />
              </ListItem>
              <ListItem>
                <Rewards coupons={dados.coupons}
                        user={dados.user}
                        contribution={dados.contribution}/> 
              </ListItem>
            </List>
          </div>
        ): null}
        { activeRoute === 'Histórico' ? 
          <Registry />
          : null}
        { activeRoute === 'Meus Cupons' ? 
          <Grid container justify="center">
              <ListCoupons {...dados.couponRegistry}/>
          </Grid>
          : null}  
      </div>
    );
  }
}

export default User;
