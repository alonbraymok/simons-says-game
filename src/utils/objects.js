import Sound from 'react-native-sound';
import requireAudio from '../assets/mp3/click.mp3';

export function sortObject(data) {
  const sorted = Object.keys(data).sort(function (a, b) {
    return data[b] - data[a];
  });

  return sorted;
}

export function filterUsersResult(data) {
  let keysSorted = sortObject(data);

  const filtered = Object.keys(data)
    .filter((key) => keysSorted.slice(0, 10).includes(key))
    .reduce((obj, key) => {
      obj[key] = data[key];
      return obj;
    }, {});
  return filtered;
}

export function getRandomNumber() {
  return Math.floor(Math.random() * 4);
}

export function sleep(ms = 0) {
  return new Promise((r) => setTimeout(r, ms));
}

export function playSound() {
  const s = new Sound(requireAudio, (e) => {
    if (e) {
      console.log('error', e);
      return;
    }
    s.play(() => s.release());
  });
}
