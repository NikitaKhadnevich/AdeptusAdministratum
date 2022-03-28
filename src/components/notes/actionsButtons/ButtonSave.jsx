/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import SaveIcon from '@mui/icons-material/Save';

const ButtonSave = ({ id, handleSaveNote, updateDescription }) => (
  <Stack direction='row' spacing={0.5} alignItems='center'>
    <IconButton
      id={id}
      aria-label='save'
      color='primary'
      onClick={() => handleSaveNote(id, updateDescription)}
    >
      <SaveIcon />
    </IconButton>
  </Stack>
);

ButtonSave.propTypes = {
  handleSaveNote: PropTypes.func,
  updateDescription: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
ButtonSave.defaultProps = {
  handleSaveNote: 'handleSaveNote',
  updateDescription: 'updateDescription',
  id: 1 || 'id',
};

export default ButtonSave;
