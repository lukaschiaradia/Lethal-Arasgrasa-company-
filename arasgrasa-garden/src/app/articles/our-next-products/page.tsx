import styles from '@/styles/Page.module.css';
import Image from 'next/image';
import our_next_products from '@/public/assets/our_next_products.png';
import Head from 'next/head';

export default function Article5() {
    return (
        <>
            <Head>
                <title>Our Next Products</title>
                <meta name="description" content="Discover the future products we are working on and that will be available soon" />
                <meta name="keywords" content="Arasgrasa, garden, plant, products, articles, our next products" />
            </Head>
            <div className={styles.page}>
                <h1>Our Next Products: Exciting Innovations from <strong>Arasgrasa Garden</strong></h1>
                <p>
                    In the <strong>Arasgrasa Garden</strong>, we are always striving to innovate and expand our product line to meet the evolving needs of our customers. 
                    In this article, we’ll give you a sneak peek into the upcoming products that we are excited to introduce, along with their unique benefits.
                </p>
                <Image src={our_next_products} alt="Our next products from Arasgrasa" />
                <h2>1. New Herbal Blends: Enhance Your Well-Being</h2>
                <p>
                    We are thrilled to announce the development of new <strong>herbal blends</strong> crafted from the finest ingredients. 
                    Each blend is designed to target specific wellness needs, whether it’s boosting immunity, promoting relaxation, or enhancing energy levels. 
                    Stay tuned for our special launch event where you can sample these exciting new flavors!
                </p>
                <h2>2. <strong>Eco-Friendly</strong> Packaging: Sustainability Matters</h2>
                <p>
                    As part of our commitment to sustainability, we are transitioning to <strong>eco-friendly</strong> packaging for all our products. 
                    This initiative not only reduces plastic waste but also ensures that your purchases are environmentally friendly. 
                    Look for our new packaging design featuring recyclable materials in our upcoming product releases.
                </p>
                <h2>3. Limited Edition Seasonal Offerings: Celebrate the Seasons</h2>
                <p>
                    Get ready for our limited edition seasonal offerings! These exclusive products are inspired by seasonal ingredients and flavors. 
                    From refreshing summer blends to cozy winter teas, each seasonal offering is crafted to enhance your experience and celebrate the changing seasons. 
                    Don’t miss out on these unique products—they’ll be available for a limited time only!
                </p>
                <h2>4. Collaborations with Local Artisans: Support Local Talent</h2>
                <p>
                    We are excited to collaborate with local artisans to create special edition products that showcase their talent and craftsmanship. 
                    These collaborations will result in unique items that reflect the essence of our community while enhancing our product offerings. 
                    Keep an eye out for these exclusive releases that blend quality and artistry.
                </p>
                <h2>5. Feedback-Driven Products: Your Voice Matters</h2>
                <p>
                    In the <strong>Arasgrasa Garden</strong>, we value your input. We are developing new products based on your feedback and suggestions. 
                    This means you’ll see items that resonate with what you want most. Join our community discussions and surveys to help shape the future of our product line!
                </p>
                <h2>Why Choose Our New Products?</h2>
                <p>
                    With each new product launch, we remain committed to quality, sustainability, and customer satisfaction. 
                    Our next products will embody the same values you love about <strong>Arasgrasa Garden</strong>—natural ingredients, innovative formulations, and a dedication to enhancing your well-being. 
                    We can’t wait for you to experience what’s coming next!
                </p>
            </div>
        </>
    );
}