import isEqual from 'lodash.isequal'
import expressionRun from 'expression-run'
import _set from 'lodash.set'

export function updateSate<R>(
  keys: (keyof R)[],
  receiveProps: R,
  thisState: R
) {
  let state = {} as R
  keys.forEach((key) => {
    let value = thisState[key]
    let receiveValue = receiveProps[key]
    if (!isEqual(value, receiveValue)) {
      state[key] = receiveValue
    }
  })
  return state
}

export function fixGridAreaName(name: string) {
  return name.replace(/\$|\!|\@|\#|\%|\^|\&|\*|\-|\+/g, '__')
}

export function getScriptFilds<O extends object, C>(obj: { [k in keyof O]: string }, context: C): O {
  let rz = {} as O
  Object.keys(obj).forEach((k: keyof O) => {
    let n = obj[k]
    let value = expressionRun(n, { $Context: context })
    _set<O>(rz, k, value)
  })
  return rz
}