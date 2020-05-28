import {AsyncStorage} from 'react-native';

export async function storeData({key, value}) {
  const storageData = await retrieveData('results');

  const storageItem = {
    ...storageData,
    [value.name]: value.result,
  };

  const results = filterUsersResult(storageItem);
  try {
    await AsyncStorage.setItem(key, JSON.stringify(results));
    // await AsyncStorage.removeItem(key);
    return results;
  } catch (error) {
    // Error saving data
  }
}

export async function retrieveData(key) {
  try {
    let value = await AsyncStorage.getItem(key);
    if (value !== null) {
      return JSON.parse(value);
    }
  } catch (error) {
    // Error retrieving data
  }
}

function filterUsersResult(data) {
  let keysSorted = Object.keys(data).sort(function (a, b) {
    return data[b] - data[a];
  });

  const filtered = Object.keys(data)
    .filter((key) => keysSorted.slice(0, 10).includes(key))
    .reduce((obj, key) => {
      obj[key] = data[key];
      return obj;
    }, {});
  return filtered;
}
