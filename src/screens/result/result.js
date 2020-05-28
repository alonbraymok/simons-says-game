import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {useSelector} from 'react-redux';
import Score from '../../components/score/score';

export default function ResultsScreen() {
  const results = useSelector(({resultReducer}) => resultReducer.results);
  console.log({results});

  function renderResult() {
    let keyArray = Object.keys(results);

    return keyArray.map((item, index) => (
      <Score name={item} value={results[item]} index={index} />
    ));
  }
  return <View style={{flex: 1, padding: 30}}>{renderResult()}</View>;
}
