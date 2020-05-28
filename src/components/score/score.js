import React from 'react';
import {Text} from 'react-native';
import styled from 'styled-components';
import gold from '../../assets/icons/gold.png';
import silver from '../../assets/icons/silver.png';
import brunze from '../../assets/icons/brunze.png';

const ScoreWrapper = styled.View`
  background-color: #e0e0e0;
  padding: 5px;
  margin: 5px 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  /* justify-content: space-b; */
`;

const Icon = styled.Image`
  width: 40px;
  height: 40px;
  margin: 0 20px;
`;

export default function Score({name, value, index}) {
  function renderIconMedal() {
    switch (index) {
      case 0:
        return gold;
      case 1:
        return silver;
      case 2:
        return brunze;

      default:
        return null;
    }
  }

  function subName() {
    return name.length > 8 ? name.substring(0, 10 - 3) + '...' : name;
  }

  return (
    <ScoreWrapper style={{borderRadius: 5}}>
      <Icon source={renderIconMedal()} />
      <Text
        numberOfLines={1}
        ellipsizeMode="tail"
        style={{
          fontSize: 70 - index * 5,
        }}>{`${subName()}: ${value}`}</Text>
    </ScoreWrapper>
  );
}
