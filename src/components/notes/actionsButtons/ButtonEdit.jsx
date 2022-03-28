import React from 'react';
import PropTypes from 'prop-types';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import IconButton from '@mui/material/IconButton';

const ButtonEdit = ({ id, handleItem, callToEditNote, noteList }) => (
  <IconButton
    aria-label='edit'
    onClick={() => handleItem(id, noteList, callToEditNote)}
  >
    <ModeEditIcon />
  </IconButton>
);
export default ButtonEdit;

ButtonEdit.propTypes = {
  handleItem: PropTypes.func,
  callToEditNote: PropTypes.func,
  noteList: PropTypes.oneOfType([PropTypes.any, PropTypes.array]),
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
ButtonEdit.defaultProps = {
  handleItem: 'handleItem',
  callToEditNote: 'callToEditNote',
  noteList: [] || undefined,
  id: 1 || 'id',
};
