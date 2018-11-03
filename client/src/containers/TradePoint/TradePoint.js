import React, { Component } from 'react';
import Menu from '../../components/Menu/Menu';

class TradePoint extends Component {
  constructor(props) {
    super(props);
    this.state = {
        dados: {
          name: "BOTAFOGO II",
        }
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
          title={dados.name}
          toggleSidebar={this.toggleSidebar}
          sidebarOpen={showSidebar}
          routes={
            {
              'top': [
                {name: 'Perfil', handler: () => {console.log('perfil')}},
                {name: 'Desconectar', handler: () => {}},
              ],
              'bottom': [
                {name: 'Registrar Troca', handler: () => {}},
              ],
            }
          }
        />
      </div>
    );
  }
}

export default TradePoint;
