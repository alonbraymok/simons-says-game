import React from 'react';
import {View} from 'react-native';
import {useSelector} from 'react-redux';
import Score from '../../components/score/score';
import {sortObject} from '../../utils/objects';

export default function ResultsScreen() {
  const results = useSelector(({resultReducer}) => resultReducer.results);

  function renderResult() {
    let keyArray = sortObject(results);

    return keyArray.map((item, index) => (
      <Score name={item} value={results[item]} index={index} />
    ));
  }
  return <View style={{flex: 1, padding: 30}}>{renderResult()}</View>;
}
