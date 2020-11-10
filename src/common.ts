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

export function getScriptFilds<O extends object, C, R extends object>(obj: { [k in keyof O]: string }, context: C, rz: R = {} as R): R {
  Object.keys(obj).forEach((k: keyof O) => {
    let n = obj[k]
    let value
    try {
      value = expressionRun(n, { $Context: context })
    } catch (error) {
      // console.error("[getScriptFilds error]:", error)
      return;
    }
    _set<R>(rz, k, value)
  })
  return rz
}