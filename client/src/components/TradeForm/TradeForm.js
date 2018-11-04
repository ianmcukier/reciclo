import React from 'react';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import MenuItem from '@material-ui/core/MenuItem';

import { withStyles } from '@material-ui/core/styles';

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

const TradeForm = ({activeForm, handleCloseForm, classes}) => (
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
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCloseForm} color="primary">
                Cancelar
              </Button>
              <Button onClick={handleCloseForm} color="primary">
                Registrar
              </Button>
            </DialogActions>
          </Dialog>
      </div>
  );

export default withStyles(styles)(TradeForm);
