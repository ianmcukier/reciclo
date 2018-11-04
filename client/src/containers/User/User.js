import React, { Component } from 'react';
import Menu from '../../components/Menu/Menu';
import ListContributions from '../../components/ListContributions/ListContributions'
import Rewards from '../../components/Rewards/Rewards';
import Registry from '../../components/Registry/Registry';
import Grid from '@material-ui/core/Grid';
import ListCoupons from '../../components/ListCoupons/ListCoupons';
import Greetings from '../../components/Greetings/Greetings'
import ListItem from '@material-ui/core/ListItem';
import { List } from '@material-ui/core';

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
        cpf: 111111111,
        showSidebar: false,
        activeRoute: 'Home',
    };
    this.toggleSidebar = this.toggleSidebar.bind(this);
    this.handleRoute = this.handleRoute.bind(this);
    this.fetchData = this.fetchData.bind(this);
  }

  componentDidMount() {
    const { cpf } = this.state;
    this.fetchData('user', `user/${cpf}`);
    this.fetchData('coupons', 'coupon');
  }

  toggleSidebar() {
    const { showSidebar } = this.state;
    this.setState({showSidebar: !showSidebar});
  }

  fetchData(type, endpoint) {
    fetch(`http://localhost:8080/${endpoint}`)
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      }
      throw new Error(response.statusText);
    })
    .then(data => {
      if (type === 'user') {
        this.setState({ user: data });
      } else if (type === 'rewards') {
        this.setState({ rewards: data });
      } else if (type === 'contributions') {
        this.setState({ contributions: data });
      } else if (type === 'statement') {
        this.setState({ statement: data});
      } else if (type === 'couponRegistry') {
        this.setState({couponRegistry: data});
      }
    })
    .catch((e) => {
      console.warn(e);
    });
  }

  handleRoute(route) {
    this.setState({activeRoute: route});
  }

  render() {
    const {
      showSidebar,
      activeRoute,
      coupons,
      cpf,
      contributions,
      statement,
      couponRegistry,
      user,
    } = this.state;
    console.log(couponRegistry);
    return (
      <div>
        <Menu
          title = {activeRoute}
          toggleSidebar={this.toggleSidebar}
          sidebarOpen={showSidebar}
          routes={
            {
              'top': [
                {
                  name: 'Home',
                  handler: () => {
                    this.handleRoute('Home');
                  }
                },
                {
                  name: 'Desconectar',
                  handler: () => {}
                },
              ],
              'bottom': [
                {
                  name: 'Minhas Contribuições',
                  handler: () => {
                    this.fetchData('contributions', `user/${cpf}/items`);
                    this.handleRoute('Minhas Contribuições');
                  }
                },
                {
                  name: 'Meus Cupons',
                  handler: () => {
                    this.fetchData('couponRegistry', `user/${cpf}/coupons`);
                    this.handleRoute('Meus Cupons');
                    }
                },
                {
                  name: 'Histórico',
                  handler: () => {
                    this.fetchData('statement', `user/${cpf}/statement`);
                    this.handleRoute('Histórico');
                  }
                },
              ]
            }
          }
        />
        { activeRoute === 'Minhas Contribuições' && contributions ? (
            <Grid container justify="center">
              <ListContributions {...contributions[0]}/>
            </Grid>
        ) : null}
        { activeRoute === 'Home' && coupons ? (
          <div>
            <List>
              <ListItem>
                <Greetings />
              </ListItem>
              <ListItem>
                <Rewards coupons={coupons}
                        user={user}
                        contribution={contributions}/>
              </ListItem>
            </List>
          </div>
        ): null}
        { activeRoute === 'Histórico' && statement ?
          <Registry statement={statement}/>
          : null}
        { activeRoute === 'Meus Cupons' && couponRegistry ?
          <Grid container justify="center">
              <ListCoupons couponRegistry={couponRegistry}/>
          </Grid>
          : null}
      </div>
    );
  }
}

export default User;
