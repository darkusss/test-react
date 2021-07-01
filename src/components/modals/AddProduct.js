import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Modal, makeStyles, TextField, Button, ButtonGroup,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  form: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
    display: 'flex',
    flexDirection: 'column',
  },
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
}));

const AddProduct = ({ open, handleClose, handleSave }) => {
  const classes = useStyles();
  const [formValues, setFormValues] = useState({
    name: '',
    imageUrl: '',
    weight: '',
    height: '',
    width: '',
    count: 0,
  });
  const handleFormValues = (event) => {
    const { name, value } = event.target;

    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleSave(formValues);
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <div className={classes.paper}>
        <h2 id="simple-modal-title">New product</h2>
        <form className={classes.form} noValidate autoComplete="off" onSubmit={handleSubmit}>
          <TextField required label="Name" name="name" value={formValues.name} onChange={handleFormValues} />
          <TextField label="Image url" name="imageUrl" value={formValues.imageUrl} onChange={handleFormValues} />
          <TextField label="Weight" name="weight" value={formValues.weight} onChange={handleFormValues} />
          <TextField label="Height" name="height" value={formValues.height} onChange={handleFormValues} />
          <TextField label="Width" name="width" value={formValues.width} onChange={handleFormValues} />
          <TextField label="Count" name="count" type="number" value={formValues.count} onChange={handleFormValues} />
          <ButtonGroup>
            <Button onClick={handleClose} color="secondary" variant="contained">Cancel</Button>
            <Button type="submit" color="primary" variant="contained">Add</Button>
          </ButtonGroup>
        </form>
      </div>
    </Modal>
  );
};

AddProduct.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  handleSave: PropTypes.func.isRequired,
};

export default AddProduct;
