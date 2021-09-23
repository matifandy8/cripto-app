import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const signupUser: any = createAsyncThunk(
  'users/signupUser',
  async ({ email, password }:any, thunkAPI) => {
    try {
      const response = await fetch(
        'https://node---auth.herokuapp.com/users/register',
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email,
            password,
          }),
        }
      );
      let data = await response.json();
      console.log('data', data);

      if (response.status === 200) {
        localStorage.setItem('token', data.token);
        return { ...data,  email: email };
      } else {
        return thunkAPI.rejectWithValue(data);
      }
    } catch (e:any) {
      console.log('Error', e.response.data);
      return thunkAPI.rejectWithValue(e.response.data);
    }
  }
);

export const loginUser: any = createAsyncThunk(
  'users/login',
  async ({ email, password }:any, thunkAPI) => {
    try {
      const response = await fetch(
        'https://node---auth.herokuapp.com/users/login',
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email,
            password,
          }),
        }
      );
      let data = await response.json();
      console.log('response', data.token.token);
      if (response.status === 200) {
        localStorage.setItem('token', data.token.token);
        return data;
      } else {
        return thunkAPI.rejectWithValue(data);
      }
    } catch (e:any) {
      console.log('Error', e.response.data);
      thunkAPI.rejectWithValue(e.response.data);
    }
  }
);

export const fetchUserBytoken: any = createAsyncThunk(
  'users/fetchUserByToken',
  async ({ token }:any, thunkAPI) => {
    try {
      const response = await fetch(
        'https://node---auth.herokuapp.com/users/dashboard',
        {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            Authorization: token,
            'Content-Type': 'application/json',
          },
        }
      );
      let data = await response.json();
      console.log('data', data, response.status);

      if (response.status === 200) {
        return { ...data };
      } else {
        return thunkAPI.rejectWithValue(data);
      }
    } catch (e:any) {
      console.log('Error', e.response.data);
      return thunkAPI.rejectWithValue(e.response.data);
    }
  }
);

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    username: '',
    email: '',
    isFetching: false,
    isSuccess: false,
    isError: false,
    errorMessage: '',
  },
  reducers: {
    clearState: (state) => {
      state.isError = false;
      state.isSuccess = false;
      state.isFetching = false;

      return state;
    },
  },
  extraReducers: {
    [signupUser.fulfilled]: (state: any, { payload }:any) => {
      console.log('payload', payload);
      state.email = payload.email;
      state.username = payload.name;
      state.isFetching = false;
      state.isSuccess = true;
      return state;
    },
    [signupUser.pending]: (state: any) => {
      state.isFetching = true;
    },
    [signupUser.rejected]: (state: any, { payload }:any) => {
      state.isFetching = false;
      state.isError = true;
      state.errorMessage = payload.msg;
    },
    [loginUser.fulfilled]: (state: any, { payload }:any) => {
      state.email = payload.email;
      state.username = payload.name;
      state.isFetching = false;
      state.isSuccess = true;
      return state;
    },
    [loginUser.rejected]: (state: any, { payload }:any) => {
      console.log('payload', payload);
      state.isFetching = false;
      state.isError = true;
      state.errorMessage = "Error email or password incorrect";
    },
    [loginUser.pending]: (state: any) => {
      state.isFetching = true;
    },
    [fetchUserBytoken.pending]: (state: any) => {
      state.isFetching = true;
    },
    [fetchUserBytoken.fulfilled]: (state: any, { payload }: any) => {
      state.isFetching = false;
      state.isSuccess = true;

      state.email = payload.email;
      state.username = payload.name;
    },
    [fetchUserBytoken.rejected]: (state:any) => {
      console.log('fetchUserBytoken');
      state.isFetching = false;
      state.isError = true;
    },
  },
});

export const { clearState } = userSlice.actions;

export const userSelector = (state:any) => state.user;