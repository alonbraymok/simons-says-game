import React from 'react';
import {Text} from 'react-native';

export default function Score({name, value, index}) {
  return (
    <Text
      style={{
        fontSize: 70 - index * 5,
        marginVertical: 5,
      }}>{`${name}: ${value}`}</Text>
  );
}
