import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  jobs: [],
  filteredJobs: [],
  initialized: false,
};

const jobSlice = createSlice({
  name: "jobSlice",
  initialState,
  reducers: {
    setJob: (state, action) => {
      state.jobs = action.payload;
      state.filteredJobs = action.payload;
      state.initialized = true;
    },
    addJob: (state, action) => {
      state.jobs.push(action.payload);
    },
    handleSearch: (state, action) => {
      const query = action.payload.toLowerCase();
      const filtered = state.jobs.filter((job) =>
        job.company.toLowerCase().includes(query)
      );
      state.filteredJobs = filtered;
    },
    filterByStatus: (state, action) => {
      state.filteredJobs = state.jobs.filter(
        (job) => job.status == action.payload
      );
    },
    filterByType: (state, action) => {
      state.filteredJobs = state.jobs.filter(
        (job) => job.type == action.payload
      );
    },
  },
});

export const { setJob, addJob, handleSearch, filterByStatus, filterByType } =
  jobSlice.actions;

export default jobSlice.reducer;
