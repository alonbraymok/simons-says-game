import React from 'react';
import DialogInput from 'react-native-dialog-input';

export default function InputModal({
  isDialogVisible,
  onClose,
  title,
  onSubmit,
}) {
  return (
    <DialogInput
      isDialogVisible={isDialogVisible}
      title={title}
      hintInput={'Enter your name'}
      submitInput={(inputText) => onSubmit(inputText)}
      closeDialog={onClose}
      cancelText={''}
    />
  );
}
