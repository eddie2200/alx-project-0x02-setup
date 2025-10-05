// components/layout/Header.tsx
import Link from 'next/link';

export default function Header() {
  return (
    <header>
      <nav>
        <ul style={{ display: 'flex', gap: '1rem' }}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/home">/home</Link>
          </li>
          <li>
            <Link href="/about">/about</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

