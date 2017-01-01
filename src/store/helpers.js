const defaultMutation = (state, playload) => {
  Object.assign(state, playload)
}

export function buildMutations4Action (actionName) {
  return {
    [actionName + '_REQUEST']: defaultMutation,
    [actionName + '_FAILURE']: defaultMutation,
    [actionName + '_SUCCESS']: defaultMutation
  }
}
