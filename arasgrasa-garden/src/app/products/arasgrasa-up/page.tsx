import ProductPage from '@/components/Product';
import arasgrasa_energy_drink from '@/public/assets/arasgrasa_energy_drink.png';

export default function Product2() {
  return (
    <ProductPage
      productTitle="Arasgrasa Up Drink"
      productDescription={[
        "Découvrez le Arasgrasa Zen Tea, un mélange raffiné et apaisant qui vous ...",
        "Chaque gorgée offre une expérience gustative délicate, combinant des notes ..."
      ]}
      productPrice="21.99"
      productImage={arasgrasa_energy_drink}
      productReviews={{ rating: 4, count: 117 }}
      productSizes={["L", "cL"]}
      productBreadcrumb={{ href: "#", label: "Energie Drink : Arasgrasa Up" }}
    />
  );
}
