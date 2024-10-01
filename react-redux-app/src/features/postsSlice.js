import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
  posts: [],
  status: 'idle',
  error: null,
};

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
  console.log(response)
  const postsWithUuid = response.data.map(post => ({
    ...post,
    uuid: uuidv4(),
  }));
  return postsWithUuid;
});

export const addPost = createAsyncThunk('posts/addPost', async (newPostData) => {
  const newPost = {
    userId: newPostData.userId,
    id: newPostData.id,
    title: newPostData.title,
    body: newPostData.body,
    uuid: uuidv4(),
  };
  return newPost;
});

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.posts = action.payload;
        state.status = 'succeeded';
      })
      .addCase(addPost.fulfilled, (state, action) => {
        state.posts.push(action.payload);
      });
  },
});

export default postsSlice.reducer;
