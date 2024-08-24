import React, { useEffect, useState } from 'react';
import { fetchPostById, deletePost } from '../services/postService';
import { Card, CardContent, Typography, Button } from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';

const PostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const getPost = async () => {
      try {
        const { data } = await fetchPostById(id);
        setPost(data);
      } catch (error) {
        console.error(error);
      }
    };
    getPost();
  }, [id]);

  const handleDelete = async () => {
    try {
      await deletePost(id);
      navigate('/');
    } catch (error) {
      console.error(error);
    }
  };

  if (!post) return <p>Loading...</p>;

  return (
    <Card>
      <CardContent>
        <Typography variant="h4">{post.title}</Typography>
        <Typography variant="body2" color="textSecondary">
          {post.author} - {new Date(post.created_at).toLocaleDateString()}
        </Typography>
        <Typography variant="body1" style={{ marginTop: '1em' }}>
          {post.content}
        </Typography>
        <Button variant="contained" color="secondary" onClick={handleDelete} style={{ marginTop: '1em' }}>
          Delete Post
        </Button>
      </CardContent>
    </Card>
  );
};

export default PostDetail;
