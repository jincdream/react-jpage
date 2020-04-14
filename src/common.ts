import isEqual from 'lodash.isequal';

export function updateSate<R>(
  keys: (keyof R)[],
  receiveProps: R,
  thisState: R
) {
  let state = {} as R
  keys.forEach((key) => {
    let value = thisState[key]
    let receiveValue = receiveProps[key]
    if (isEqual(value, receiveValue)) {
      Object.defineProperty(state, key, { value: receiveValue })
    }
  })
  return state
}

export function fixGridAreaName(name: string) {
  return name.replace(/\$|\!|\@|\#|\%|\^|\&|\*|\-|\+/g, '__')
}
