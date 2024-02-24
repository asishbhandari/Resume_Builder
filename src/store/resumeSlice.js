import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  personalInfo: {},
  workExperience:{},
  education: {},
  skills: {},
  template: '',
  formError: false,
  myResumes:[],
}

export const resumeSlice = createSlice({
  name: 'resume',
  initialState,
  reducers: {
    addPersonalInfo: (state,action) => {
        state.personalInfo = action.payload;
    },
    addWorkExperience: (state,action) => {
      state.workExperience =action.payload;
    },
    addEducation: (state, action) => {
      state.education = action.payload;
    },
    addSkills: (state, action)=>{
        state.skills = action.payload;
    },
    updatFformError:(state, )=>{
      state.formError = !state.formError;
    },
    useTemplate:(state, action)=>{
      state.template = action.payload;
    },
    updateMyResume:(state, action)=>{
      state.myResumes =[...state.myResumes, action.payload ]
    },
    removeStateData:(state)=>{
      state=   {
        personalInfo: {},
        workExperience:{},
        education: {},
        skills: {},
        template: '',
        formError: false,
      }
    }
  },
})

// Action creators are generated for each case reducer function
export const { addPersonalInfo, addWorkExperience, addEducation, addSkills, updatFformError,useTemplate, removeStateData, updateMyResume} = resumeSlice.actions

export default resumeSlice.reducer