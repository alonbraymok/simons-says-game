import React, {useEffect, useState} from 'react';
import {ButtonContainer, TouchableOpacityWrapper} from './simon.button.styled';

export default function SimonButton({
  color,
  onPress,
  pressed,
  setComputerPress,
}) {
  return (
    <TouchableOpacityWrapper onPress={onPress}>
      <ButtonContainer color={color} pressed={pressed} />
    </TouchableOpacityWrapper>
  );
}
