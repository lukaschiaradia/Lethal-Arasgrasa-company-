import Link from 'next/link';

export default function Products() {
    return (
      <div>
        <h1>Nos produits</h1>
        <ul>
          <li>
            <Link href="/products/product1">
              Produit 1
            </Link>
          </li>
          <li>
            <Link href="/products/product2">
              Produit 2
            </Link>
          </li>
          <li>
            <Link href="/products/product3">
              Produit 3
            </Link>
          </li>
        </ul>
      </div>
    );
}