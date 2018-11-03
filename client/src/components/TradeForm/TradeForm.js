import React from 'react';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';

const items = [
  {
    type: 'lixo organico',
    id: 1,
  },
  {
    type: 'eletronico',
    id: 2,
  },
  {
    type: 'oleo de cozinha',
    id: 3,
  }
];

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
});

class TradeForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      quantity: 1,
      elements: [{
        id: 1
      }],
    };
    this.addHandler = this.addHandler.bind(this);
  }

  addHandler() {
    const { quantity, elements } = this.state;
    const newElements = [...elements];
    newElements.push({id: quantity + 1 });
    this.setState({
      quantity: quantity + 1,
      elements: newElements,
    }).then(function() {
      this.forceUpdate();
    }.bind(this));
  }

  render() {
    const { activeForm, handleCloseForm, classes } = this.props;
    const { elements, quantity } = this.state;

    return (
      <div>
          <Dialog
            open={activeForm}
            onClose={handleCloseForm}
            aria-labelledby="form-dialog-title"
          >
            <DialogTitle id="form-dialog-title">Cadastrar Reciclagem</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nemo et soluta. Quos deserunt corporis ipsum assumenda delectus error at repellendus iusto repellat, ex animi dignissimos, placeat vel ducimus inventore.
              </DialogContentText>
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="CPF"
                type="number"
                fullWidth
              />
            {
              elements.map(e => (
                  <React.Fragment>
                      <TextField
                        id="standard-select-currency"
                        select
                        label="Select"
                        className={classes.textField}
                        value='Selecione um tipo de lixo'
                        SelectProps={{
                          MenuProps: {
                            className: classes.menu,
                          },
                        }}
                        helperText="Please select your currency"
                        margin="normal"
                      >
                        {items.map(item => (
                          <MenuItem key={item.id} value={item.type}>
                            {item.type}
                          </MenuItem>
                        ))}
                    </TextField>
                    <TextField
                      id="standard-number"
                      label="Quantidade"
                      type="number"
                      className={classes.textField}
                      InputLabelProps={{
                        shrink: true,
                      }}
                      margin="normal"
                    />
                    <IconButton aria-label="Add">
                      <AddIcon onClick={this.addHandler} />
                    </IconButton>
                    <IconButton aria-label="Add">
                      <RemoveIcon />
                    </IconButton>
                  </React.Fragment>
                ))
            }
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCloseForm} color="primary">
                Cancel
              </Button>
              <Button onClick={handleCloseForm} color="primary">
                Subscribe
              </Button>
            </DialogActions>
          </Dialog>
      </div>
    );
  }
}

export default withStyles(styles)(TradeForm);
