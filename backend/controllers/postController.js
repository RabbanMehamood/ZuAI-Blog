const db = require('../config/db');

// Get all posts
const getAllPosts = async (req, res) => {
  try {
    const [rows] = await db.promise().query('SELECT * FROM posts');
    res.status(200).json(rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a single post by ID
const getPostById = async (req, res) => {
  try {
    const [rows] = await db.promise().query('SELECT * FROM posts WHERE id = ?', [req.params.id]);
    if (rows.length === 0) {
      res.status(404).json({ message: 'Post not found' });
    } else {
      res.status(200).json(rows[0]);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Create a new post
const createPost = async (req, res) => {
  const { title, slug, content, excerpt, author, status } = req.body;
  try {
    const [result] = await db.promise().query(
      'INSERT INTO posts (title, slug, content, excerpt, author, status) VALUES (?, ?, ?, ?, ?, ?)',
      [title, slug, content, excerpt, author, status]
    );
    res.status(201).json({ id: result.insertId, ...req.body });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a post by ID
const updatePost = async (req, res) => {
  const { title, slug, content, excerpt, author, status } = req.body;
  try {
    const [result] = await db.promise().query(
      'UPDATE posts SET title = ?, slug = ?, content = ?, excerpt = ?, author = ?, status = ? WHERE id = ?',
      [title, slug, content, excerpt, author, status, req.params.id]
    );
    if (result.affectedRows === 0) {
      res.status(404).json({ message: 'Post not found' });
    } else {
      res.status(200).json({ message: 'Post updated successfully' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a post by ID
const deletePost = async (req, res) => {
  try {
    const [result] = await db.promise().query('DELETE FROM posts WHERE id = ?', [req.params.id]);
    if (result.affectedRows === 0) {
      res.status(404).json({ message: 'Post not found' });
    } else {
      res.status(200).json({ message: 'Post deleted successfully' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost
};
