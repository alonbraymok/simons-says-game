import {AsyncStorage} from 'react-native';
import {filterUsersResult} from '../utils/utils';

export async function storeData({key, value}) {
  const storageData = await retrieveData('results');

  const storageItem = {
    ...storageData,
    [value.name]: value.result,
  };

  const results = filterUsersResult(storageItem);
  try {
    await AsyncStorage.setItem(key, JSON.stringify(results));
    return results;
  } catch (error) {}
}

export async function removeData(key) {
  try {
    await AsyncStorage.removeItem(key);
    return {
      massage: 'Remove successfully',
    };
  } catch (error) {}
}

export async function retrieveData(key) {
  try {
    let value = await AsyncStorage.getItem(key);
    if (value !== null) {
      return JSON.parse(value);
    }
  } catch (error) {}
}
