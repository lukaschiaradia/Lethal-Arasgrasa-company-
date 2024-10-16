import ProductPage from '@/components/Product';
import arasgrasa_tea from '@/public/assets/arasgrasa_tea.png';

export default function Product1() {
  return (
    <ProductPage
      productTitle="Arasgrasa Zen Tea"
      productDescription={[
        "Découvrez le Arasgrasa Zen Tea, un mélange raffiné et apaisant qui vous\
                  transporte dans un état de tranquillité absolue. Infusé avec des herbes\
                  soigneusement sélectionnées, ce thé est idéal pour vous détendre après une\
                  longue journée ou simplement pour savourer un moment de calme.",
        "Chaque gorgée offre une expérience gustative délicate, combinant des notes\
                  subtiles et équilibrées qui éveillent vos sens tout en vous procurant un\
                  profond sentiment de sérénité. Parfait pour ceux qui recherchent une pause\
                  zen dans leur quotidien."
      ]}
      productPrice="21.99"
      productImage={arasgrasa_tea}
      productReviews={{ rating: 4, count: 117 }}
      productSizes={["L", "XL"]}
      productBreadcrumb={{ href: "#", label: "Tea : Arasgrasa Zen" }}
    />
  );
}
