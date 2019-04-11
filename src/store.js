import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    students: [
      {
        id:1,
        first_name:'wisdom',
        last_name:'Ekpot',
        email:'wisdomekpot@gmail.com',
        phone:809665004,
        address:'100 unit estate uyo,akwa ibom state',
        date_of_birth:12/33/2223,
        parent_name:'Mr stanley james',
        parent_phone:80808080808,
        gender:['male','female']
      }
    ]
  },
  mutations: {
    ADD_STUDENT:(state,payload) => {
      state.students.push(payload)
    },
  },
  actions: {
    addStudent:(state,payload) => {
      state.commit('ADD_STUDENT',payload)
    }
  },
  getters:{
    students: (state) => {
      return state.students
    },
     lastid: (state) => {
    let lastid = 1
    state.students.forEach(element => {
      if(element.id > lastid) {
        lastid = element.id ;
      }
    });
    return lastid;
  }
  }
})
