import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    students: [
      {
        id: 1,
        first_name: "wisdom",
        last_name: "Ekpot",
        email: "wisdomekpot@gmail.com",
        phone: "0809665004",
        address: "100 unit estate uyo,akwa ibom state",
        date_of_birth: "12-33-2223",
        parent_name: "Mr stanley james",
        parent_phone: "08096650047",
        gender: ["male", "female"]
      }
    ]
  },
  mutations: {
    ADD_STUDENT: (state, payload) => {
      state.students.push(payload)
    },
    DELETE_STUDENT: (state, student) => {
      let studentIndex = state.students.findIndex(n => n.id === student.id)
      state.students.splice(studentIndex, 1)
      // console.log(studentIndex)
    },
    UPDATE_STUDENT: (state, payload) => {
      let student = state.notes.find(student => student.id === payload.id)
      student.student = payload.student
      student.id = payload.id
      student.first_name = payload.first_name
      student.last_name = payload.last_name
      student.phone = payload.phone
      student.email = payload.email
      student.address = payload.address
      student.date_of_birth = payload.date_of_birth
      student.parent_name = payload.parent_name
      student.parent_phone = payload.parent_phone
    }
  },
  actions: {
    addStudent: (state, payload) => {
      state.commit("ADD_STUDENT", payload)
    },
    deleteStudent: (state, payload) => {
      state.commit("DELETE_STUDENT", payload)
    },
    updateStudent: (state, payload) => {
      state.commit("UPDATE_STUDENT", payload)
    }
  },
  getters: {
    students: state => {
      return state.students;
    },
    lastid: state => {
      let lastid = 1
      state.students.forEach(element => {
        if (element.id > lastid) {
          lastid = element.id
        }
      });
      return lastid
    }
  }
});
