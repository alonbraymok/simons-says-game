import React from 'react';
import {View, ScrollView} from 'react-native';
import {useSelector} from 'react-redux';
import Score from '../../components/score/score';
import {sortObject} from '../../utils/utils';

export default function ResultsScreen() {
  const results = useSelector(({resultReducer}) => resultReducer.results);

  function renderResult() {
    let keyArray = sortObject(results);

    return keyArray.map((item, index) => (
      <Score name={item} value={results[item]} key={index} index={index} />
    ));
  }
  return (
    <ScrollView>
      <View style={{flex: 1, padding: 20}}>{renderResult()}</View>
    </ScrollView>
  );
}
