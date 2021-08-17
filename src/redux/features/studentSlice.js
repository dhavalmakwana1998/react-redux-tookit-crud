import { createSlice } from "@reduxjs/toolkit";

export const studentSlice = createSlice({
  name: "student",
  initialState: {
    students: [
      {
        id: 1,
        firstName: "Dm",
        lastName: "Mak",
        email: "Chandramani_Talwar73@hotmail.com",
        phone: "7600446773",
        address: "474 Banerjee Fords",
      },
      {
        id: 2,
        firstName: "Kamal",
        lastName: "Chaturvedi",
        email: "test@gmail.com",
        phone: "0987654321",
        address: "52520 Bhisham Brooks",
      },
      {
        id: 3,
        firstName: "MAk",
        lastName: "Dhaval",
        email: "test@gmail.com",
        phone: "0987654321",
        address: "78079 Patel Park",
      },
      {
        id: 4,
        firstName: "Test1",
        lastName: "Test",
        email: "test@gmail.com",
        phone: "0987654321",
        address: "57761 Shreyashi Junctions",
      },
      {
        id: 5,
        firstName: "Vickey",
        lastName: "Doe",
        email: "test@gmail.com",
        phone: "0987654321",
        address: "860 Gautama Turnpike",
      },
    ],
    student: {
      firstName: "",
      lastName: "",
      email: "",
      address: "",
      phone: "",
    },
  },
  reducers: {
    getStudent: (state, action) => {
      state.student = state.students.find((el) => el.id == action.payload);
    },
    clearStudent: (state) => {
      state.student = {
        firstName: "",
        lastName: "",
        email: "",
        address: "",
        phone: "",
      };
    },
    addStudent: (state, action) => {
      state.students = [action.payload, ...state.students];
    },
    updateStudent: (state, action) => {
      state.students = state.students.map((el) =>
        el.id === action.payload.id ? action.payload : el
      );
    },
    deleteStudent: (state, action) => {
      state.students = state.students.filter((el) => el.id !== action.payload);
    },
  },
});

export const {
  getStudent,
  clearStudent,
  addStudent,
  updateStudent,
  deleteStudent,
} = studentSlice.actions;

export default studentSlice.reducer;
