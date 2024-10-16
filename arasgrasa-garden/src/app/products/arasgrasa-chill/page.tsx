import ProductPage from '@/components/Product';
import arasgrasa_smoking from '@/public/assets/arasgrasa_smoking.png';

export default function Product3() {
    return (
    <ProductPage
      productTitle="Arasgrasa Zen Smoke"
      productDescription={[
        "Découvrez le Arasgrasa Zen Tea, un mélange raffiné et apaisant qui vous\
                 ...",
        "Chaque gorgée offre une expérience gustative délicate, combinant des notes\
                  ..."
      ]}
      productPrice="21.99"
      productImage={arasgrasa_smoking}
      productReviews={{ rating: 4.5, count: 117 }}
      productSizes={["L", "cL"]}
      productBreadcrumb={{ href: "#", label: "Smoke : Arasgrasa Zen" }}
    />
  );
}
