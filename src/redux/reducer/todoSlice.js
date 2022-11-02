import { createSlice } from '@reduxjs/toolkit'

let nextTodoId = 0;

const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    todos_list: [],
  },
  reducers: {
    addTodo: (state, action) => {
      state.todos_list = [...state.todos_list, {id: ++nextTodoId, task: action.payload}];
    },
  }
})

export const { addTodo } = todoSlice.actions
export default todoSlice.reducer