import state from './state'
import mutations from './mutations'
import * as actions from './actions'

export default {
  state,
  actions,
  mutations,
  namespaced: true // para garantir que o módulo auth tenha um prefixo chamado auth
}
