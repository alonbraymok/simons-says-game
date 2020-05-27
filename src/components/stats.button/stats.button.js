import React, {useEffect, useState} from 'react';
import {StatsWrapper} from './stats.button.styled';
import {Text, TouchableOpacity} from 'react-native';

export default function StatsButton({onPress, isGameStarted, status}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <StatsWrapper style={{borderRadius: 100}}>
        <Text style={{color: '#fff', fontSize: 25}}>
          {isGameStarted ? status : 'Start'}
        </Text>
      </StatsWrapper>
    </TouchableOpacity>
  );
}
