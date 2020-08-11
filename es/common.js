import isEqual from 'lodash.isequal';
import expressionRun from 'expression-run';
import _set from 'lodash.set';
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
export function getScriptFilds(obj, context) {
  var rz = {};
  Object.keys(obj).forEach(function (k) {
    var n = obj[k];
    var value = expressionRun(n, {
      $Context: context
    });

    _set(rz, k, value);
  });
  return rz;
}