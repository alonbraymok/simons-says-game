import React, {useEffect, useState} from 'react';
import {ButtonContainer, TouchableOpacityWrapper} from './simon.button.styled';

export default function SimonButton({color, onPress, pressed, border}) {
  return (
    <TouchableOpacityWrapper onPress={onPress}>
      <ButtonContainer
        color={color}
        pressed={pressed}
        style={{[border]: 400}}
      />
    </TouchableOpacityWrapper>
  );
}
