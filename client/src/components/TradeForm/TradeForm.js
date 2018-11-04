import React from 'react';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  inputField: {
    width: '30%',
    margin: '0 auto',
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  menu: {
    width: 200,
  },
  formArea: {
    paddingTop: '2em',
  }
});

const TradeForm = ({
  items,
  activeForm,
  handleCloseForm,
  classes,
  handleChange,
  handleSubmit,
}) => (
        <div>
          <Dialog
            open={activeForm}
            onClose={handleCloseForm}
            aria-labelledby="form-dialog-title"
          >
            <DialogTitle id="form-dialog-title">Registrar Reciclagem</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nemo et soluta. Quos deserunt corporis ipsum assumenda.
              </DialogContentText>
              <div className={classes.formArea}>
                <TextField
                  autoFocus
                  onChange={handleChange('cpf')}
                  id="cpf"
                  label="CPF"
                  type="text"
                  className={classes.inputField}
                />
                <TextField
                  id="item-type"
                  select
                  label="Tipo de Lixo"
                  onChange={handleChange('itemType')}
                  className={classes.inputField}
                  SelectProps={{
                    native: true,
                    MenuProps: {
                      className: classes.menu,
                    },
                  }}
                  margin="normal"
                >
                {items.map(item => (
                  <option key={item.id} value={item.type}>
                    {item.type}
                  </option>
                ))}
                </TextField>
                <TextField
                  id="quantity"
                  label="Quantidade"
                  type="number"
                  onChange={handleChange('quantity')}
                  className={classes.inputField}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  margin="normal"
                />
              </div>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCloseForm} color="primary">
                Cancelar
              </Button>
              <Button onClick={handleSubmit} color="primary">
                Registrar
              </Button>
            </DialogActions>
          </Dialog>
      </div>
  );

export default withStyles(styles)(TradeForm);
