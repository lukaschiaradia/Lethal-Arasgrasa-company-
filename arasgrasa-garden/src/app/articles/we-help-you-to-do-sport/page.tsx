import styles from '@/styles/Page.module.css';
import Image from 'next/image';
import we_help_you_to_do_sport from '@/public/assets/we_help_you_to_do_sport.png';
import Head from 'next/head';

export default function Article2() {
    return (
        <>
            <Head>
                <title>We Help You to Do Sport</title>
                <meta name="description" content="We help you to do sport with our Arasgrasa products" />
                <meta name="keywords" content="Arasgrasa, garden, plant, products, articles, sport, health, fitness, community, progress" />
            </Head>
            <div className={styles.page}>
                <h1>We Help You to Do <strong>Sport</strong> : Your Path to a Healthier Lifestyle</h1>
                <p>
                    In the <strong>Arasgrasa Garden</strong>, we believe that everyone should have access to the tools and support they need to lead an active lifestyle. 
                    In this article, we’ll explore how we can assist you in achieving your fitness goals and making sports a regular part of your routine.
                </p>
                <h2>1. Understanding Your Goals: Finding What Motivates You</h2>
                <p>
                    Every fitness journey begins with a personal goal. Whether you want to lose weight, build muscle, or simply improve your overall health, 
                    we take the time to understand your aspirations. Our team is here to listen and help you define clear and achievable objectives that inspire you to move.
                </p>
                <h2>2. Personalized <strong>Fitness</strong> Plans: Tailored to Your Needs</h2>
                <p>
                    We know that one size doesn’t fit all. That’s why we create personalized <em>fitness</em> plans designed specifically for you. 
                    Our experts analyze your current fitness level, preferences, and schedule to develop a program that fits seamlessly into your life and keeps you motivated.
                </p>
                <h2>3. Expert Guidance: Support Every Step of the Way</h2>
                <p>
                    With <strong>Arasgrasa Garden</strong>, you’re never alone on your fitness journey. Our experienced trainers and coaches are here to provide 
                    ongoing support, motivation, and accountability. Whether you need tips on proper techniques or encouragement during tough workouts, we’ve got your back.
                </p>
                <h2>4. Community Engagement: Join a Supportive Network</h2>
                <p>
                    Engaging in sports is even more enjoyable with a community. We offer various group classes and events where you can meet like-minded individuals, 
                    share your progress, and celebrate achievements together. Our supportive environment fosters friendships and keeps you motivated.
                </p>
                <h2>5. Track Your Progress: Celebrate Your Achievements</h2>
                <p>
                    Progress tracking is essential to stay motivated and committed. We provide you with tools and resources to monitor your <strong>workouts</strong>, 
                    assess your <strong>performance</strong>, and celebrate your milestones. Every step forward is a reason to celebrate!
                </p>
                <h2>Why Choose Us?</h2>
                <p>
                    In the <strong>Arasgrasa Garden</strong>, our mission is to empower you to embrace an active lifestyle. We’re committed to providing the resources, 
                    expertise, and community support you need to make sports an enjoyable part of your life. Join us today and take the first step towards a healthier you!
                </p>
                <Image src={we_help_you_to_do_sport} alt="We help you to do sport with our Arasgrasa products" />
            </div>
        </>
    );
}