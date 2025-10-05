// pages/home.tsx
import Header from '../components/layout/Header';
import Card from '../components/common/Card';

export default function Home() {
  return (
    <>
      <Header />
      <main style={{ padding: '1rem' }}>
        <h1>Home Page</h1>

        <Card title="Card One" content="This is the first card content." />
        <Card title="Card Two" content="Second card with different content." />
        <Card title="Card Three" content="Another card with more info." />
      </main>
    </>
  );
}

