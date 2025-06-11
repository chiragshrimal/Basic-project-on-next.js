// src/app/page.tsx

import { CSSProperties } from 'react';

export default function BirthdayPage() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>🎉 Happy Birthday, Chirag! 🎂</h1>
      <p style={styles.message}>
        Wishing you a year full of joy, learning, and success! 🚀 <br />
        Keep building and keep shining! ✨
      </p>
      <div style={styles.cake}>🎂</div>
      <p style={styles.footer}>Made with ❤️ in Next.js</p>
    </div>
  );
}

const styles: {
  container: CSSProperties;
  heading: CSSProperties;
  message: CSSProperties;
  cake: CSSProperties;
  footer: CSSProperties;
} = {
  container: {
    minHeight: '100vh',
    backgroundColor: '#1e1e2f',
    color: '#fff',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
    padding: '2rem',
  },
  heading: {
    fontSize: '3rem',
    marginBottom: '1rem',
  },
  message: {
    fontSize: '1.5rem',
    maxWidth: '600px',
    lineHeight: '1.6',
  },
  cake: {
    fontSize: '5rem',
    margin: '2rem 0',
    // Note: This won't animate unless you add CSS animation rules
    animation: 'bounce 1s infinite',
  },
  footer: {
    marginTop: '2rem',
    fontSize: '1rem',
    color: '#aaa',
  },
};
