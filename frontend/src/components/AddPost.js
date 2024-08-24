import React, { useState } from 'react';
import { createPost } from '../services/postService';  // Updated import
import { TextField, Button, Container, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const AddPost = () => {
  const [title, setTitle] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createPost({ title, excerpt, content });  // Updated function call
      navigate('/');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container>
      <Typography variant="h4">Add New Post</Typography>
      <form onSubmit={handleSubmit} style={{ marginTop: '2em' }}>
        <TextField
          label="Title"
          fullWidth
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{ marginBottom: '1em' }}
        />
        <TextField
          label="Excerpt"
          fullWidth
          value={excerpt}
          onChange={(e) => setExcerpt(e.target.value)}
          style={{ marginBottom: '1em' }}
        />
        <TextField
          label="Content"
          multiline
          rows={4}
          fullWidth
          value={content}
          onChange={(e) => setContent(e.target.value)}
          style={{ marginBottom: '1em' }}
        />
        <Button variant="contained" color="primary" type="submit">
          Add Post
        </Button>
      </form>
    </Container>
  );
};

export default AddPost;
