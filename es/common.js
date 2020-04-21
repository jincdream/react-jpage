import isEqual from 'lodash.isequal';
export function updateSate(keys, receiveProps, thisState) {
  var state = {};
  keys.forEach(function (key) {
    var value = thisState[key];
    var receiveValue = receiveProps[key];

    if (!isEqual(value, receiveValue)) {
      state[key] = receiveValue;
    }
  });
  return state;
}
export function fixGridAreaName(name) {
  return name.replace(/\$|\!|\@|\#|\%|\^|\&|\*|\-|\+/g, '__');
}