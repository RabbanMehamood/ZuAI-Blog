import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import PostList from './components/PostList';
import PostDetail from './components/PostDetail';
import AddPost from './components/AddPost';
import EditPost from './components/EditPost';
import './App.css'

function RoutesComponent() {
  return (
      <Router>
        <Header />
          <Routes className="route-container">
            <Route path="/" element={<PostList />} />
            <Route path="/posts/:id" element={<PostDetail />} />
            <Route path="/add" element={<AddPost />} />
            <Route path="/edit/:id" element={<EditPost />} />
          </Routes>
        <Footer />
      </Router>
  );
}

export default RoutesComponent;
