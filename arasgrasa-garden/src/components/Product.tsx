import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';
import Head from 'next/head';

// Déclaration de l'interface des propriétés attendues
interface ProductPageProps {
  productTitle: string;
  productDescription: string[]; // Tableau de paragraphes pour la description
  productPrice: string;
  productImage: StaticImageData; // Tu peux ajuster ce type si tu utilises un objet ou un chemin
  productReviews: {
    rating: number;
    count: number;
  };
  productSizes: string[]; // Tableau de tailles disponibles
  productBreadcrumb: {
    href: string;
    label: string;
  };
}

export default function ProductPage({
  productTitle,
  productDescription,
  productPrice,
  productImage,
  productReviews,
  productSizes,
  productBreadcrumb,
}: ProductPageProps) {
  return (
    <>
      <Head>
        <title>{productTitle}</title>
        <meta
          name="description"
          content={`Découvrez ${productTitle}, un produit conçu pour vous apporter calme et bien-être.`}
        />
      </Head>

      <div className="bg-white">
        <div className="pt-6">
          {/* Navigation de l'article */}
          <nav aria-label="Breadcrumb">
  <ol className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
    <li className="text-sm">
      <Link href={productBreadcrumb.href} className="font-medium text-gray-500 hover:text-gray-600">
        {productBreadcrumb.label}
      </Link>
    </li>
  </ol>
</nav>


          {/* Image principale */}
          <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:max-w-7xl lg:grid lg:grid-cols-1 lg:gap-x-8 lg:px-8">
            <div className="overflow-hidden sm:rounded-lg">
              <Image src={productImage} alt={`${productTitle} product`} />
            </div>
          </div>

          {/* Informations sur le produit */}
          <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
            <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
              <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                {productTitle}
              </h1>

              {/* Description du produit */}
              <div className="mt-4 text-gray-700">
                {productDescription.map((paragraph, idx) => (
                  <p key={idx} className={idx > 0 ? 'mt-2' : ''}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Options */}
            <div className="mt-4 lg:row-span-3 lg:mt-0">
              <h2 className="sr-only">Informations produit</h2>
              <p className="text-3xl tracking-tight text-gray-900">
                ${productPrice}
              </p>

              {/* Reviews */}
              <div className="mt-6">
                <h3 className="sr-only">Avis</h3>
                <div className="flex items-center">
                  <div className="flex items-center">
                    {[...Array(Math.floor(productReviews.rating))].map(
                      (_, i) => (
                        <svg
                          key={i}
                          className="h-5 w-5 flex-shrink-0 text-gray-900"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0L7.025 7.285l-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z"
                            clipRule="evenodd"
                          />
                        </svg>
                      )
                    )}
                    <svg
                      className="h-5 w-5 flex-shrink-0 text-gray-200"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0L7.025 7.285l-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <a
                    href="#"
                    className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    {productReviews.count} avis
                  </a>
                </div>
              </div>

              {/* Formulaire d'options */}
              <form className="mt-10">
                {/* Tailles */}
                <div className="mt-10">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium text-gray-900">
                      Taille
                    </h3>
                  </div>

                  <fieldset className="mt-4">
                    <div className="grid grid-cols-2 gap-4">
                      {productSizes.map((size) => (
                        <label
                          key={size}
                          className="group relative flex items-center justify-center rounded-md py-3 px-4 text-sm font-medium uppercase bg-white text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 cursor-pointer"
                        >
                          <input
                            type="radio"
                            name="size-choice"
                            value={size}
                            className="sr-only"
                          />
                          {size}
                        </label>
                      ))}
                    </div>
                  </fieldset>
                </div>

                <button
                  type="submit"
                  className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700"
                >
                  Ajouter au panier
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
