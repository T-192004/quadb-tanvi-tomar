const initialState = {
  tasks: JSON.parse(localStorage.getItem('tasks')) || []
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return {
        ...state,
        tasks: [...state.tasks, { id: action.id, text: action.text, createdTime: action.createdTime, timeLimit: action.timeLimit, completed: false }]
      };
    case 'DELETE_TASK':
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.id)
      };
    case 'EDIT_TASK':
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.id ? { ...task, text: action.text, timeLimit: action.timeLimit } : task
        )
      };
    case 'TOGGLE_TASK_COMPLETION':
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.id ? { ...task, completed: !task.completed } : task
        )
      };
    case 'LOAD_TASKS':
      return {
        ...state,
        tasks: action.tasks
      };
    default:
      return state;
  }
};

export default rootReducer;
