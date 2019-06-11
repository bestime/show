const dataName = 'currentRouteName'

export default {
  dataName,
  data: '',
  mutation (state, data) {
    state[dataName] = data
  }
}