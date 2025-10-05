import React, { useState } from 'react';

interface PostModalProps {
  onClose: () => void;
  onSubmit: (post: { title: string; content: string }) => void;
}

export default function PostModal({ onClose, onSubmit }: PostModalProps) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title && content) {
      onSubmit({ title, content });
      onClose();
    }
  };

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <h2>Create a Post</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={e => setTitle(e.target.value)}
            required
            style={styles.input}
          />
          <textarea
            placeholder="Content"
            value={content}
            onChange={e => setContent(e.target.value)}
            required
            style={styles.textarea}
          ></textarea>
          <div style={styles.buttons}>
            <button type="submit">Post</button>
            <button type="button" onClick={onClose} style={{ marginLeft: '10px' }}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
}

// Simple styles
const styles: { [key: string]: React.CSSProperties } = {
  overlay: {
    position: 'fixed',
    top: 0, left: 0,
    width: '100vw',
    height: '100vh',
    background: 'rgba(0,0,0,0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  modal: {
    background: '#fff',
    padding: '20px',
    width: '400px',
    borderRadius: '8px',
  },
  input: {
    width: '100%',
    padding: '8px',
    marginBottom: '10px',
  },
  textarea: {
    width: '100%',
    padding: '8px',
    height: '100px',
    marginBottom: '10px',
  },
  buttons: {
    textAlign: 'right',
  },
};

