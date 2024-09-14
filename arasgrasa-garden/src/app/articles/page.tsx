import Link from 'next/link';

export default function Articles() {
    return (
      <div>
        <h1>Nos articles</h1>
        <ul>
          <li>
            <Link href="/articles/article1">Article 1</Link>
          </li>
          <li>
            <Link href="/articles/article2">Article 2</Link>
          </li>
          <li>
            <Link href="/articles/article3">Article 3</Link>
          </li>
          <li>
            <Link href="/articles/article4">Article 4</Link>
          </li>
          <li>
            <Link href="/articles/article5">Article 5</Link>
          </li>
        </ul>
      </div>
    );
}