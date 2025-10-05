import React, { useState } from 'react';
import PostModal from '../components/common/PostModal';

interface Post {
  title: string;
  content: string;
}

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [posts, setPosts] = useState<Post[]>([]);

  const handleAddPost = (newPost: Post) => {
    setPosts([...posts, newPost]);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Home Page</h1>
      <button onClick={() => setIsModalOpen(true)}>Add New Post</button>

      {isModalOpen && (
        <PostModal onClose={() => setIsModalOpen(false)} onSubmit={handleAddPost} />
      )}

      <div style={{ marginTop: '20px' }}>
        {posts.length === 0 && <p>No posts yet.</p>}
        {posts.map((post, index) => (
          <div key={index} style={{ border: '1px solid #ddd', marginBottom: '10px', padding: '10px' }}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

