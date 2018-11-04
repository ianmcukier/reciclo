import React, { Component } from 'react';
import Menu from '../../components/Menu/Menu';

import TradeForm from '../../components/TradeForm/TradeForm';
import data from '../../fakeApi';

class TradePoint extends Component {
  constructor(props) {
    super(props);
    this.state = {
        dados: {
          name: "BOTAFOGO II",
          activeForm: false,
          ...data,
        }
    };
    this.handleCloseForm = this.handleCloseForm.bind(this);
    this.handleOpenForm = this.handleOpenForm.bind(this);
    this.toggleSidebar = this.toggleSidebar.bind(this);
  }

  toggleSidebar() {
    const { showSidebar } = this.state;
    this.setState({showSidebar: !showSidebar});
  }

  handleOpenForm() {
    this.setState({
      activeForm: true,
    });
  }

  handleCloseForm() {
    this.setState({
      activeForm: false,
    });
  }

  render() {
    const { dados, showSidebar, activeForm } = this.state;
    return (
      <div>
        <Menu
          title={dados.name}
          toggleSidebar={this.toggleSidebar}
          sidebarOpen={showSidebar}
          routes={
            {
              'top': [
                {name: 'Histórico', handler: () => {}},
                {name: 'Desconectar', handler: () => {}},
              ],
              'bottom': [
                {name: 'Registrar Troca', handler: this.handleOpenForm},
              ],
            }
          }
        />
      <TradeForm activeForm={activeForm} handleCloseForm={this.handleCloseForm} items={dados} />
      </div>
    );
  }
}

export default TradePoint;
