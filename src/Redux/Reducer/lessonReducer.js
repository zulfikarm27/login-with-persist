const lessonData = {
  lesson: [
    {
      ID: 'TNCA',
      name: 'MOBILE HYBRID DEVELOPMENT',
      instructor: 'Riqki Kamal Amrela',
    },
  ],
  note: [],
};

const lessonReducer = (state = lessonData, action) => {
  switch (action.type) {
    case 'ADD-NOTE':
      return {
        ...state,
        note: [...state.note, action.data],
      };
    case 'BURN-NOTE':
      return {
        ...state,
        note: action.data,
      };
    default:
      return state;
  }
};

export default lessonReducer;
