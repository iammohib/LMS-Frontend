import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

import axiosInstance from "../../helpers/axiosInstance";
const initialState = {
  courseData: [],
};

export const getAllCourses = createAsyncThunk("/courses/get", async () => {
  try {
    const res = axiosInstance.get("/courses");
    toast.promise(res, {
      loading: "Wait! course is loading",
      success: (data) => {
        return data?.data?.message;
      },
      error: "Failed to get course",
    });
    return (await res).data.courses;
  } catch (error) {
    toast.error(error?.response?.data?.message);
  }
});

const courseSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllCourses.fulfilled, (state, action) => {
      if (action.payload) {
        state.courseData = [...action.payload];
        state.courseData = [...action.payload];
      }
    });
  },
});

export default courseSlice.reducer;