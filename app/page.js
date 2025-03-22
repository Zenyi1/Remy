import Link from 'next/link';
import styles from './page.module.css'
import ImageSlideshow from '@/components/images/image-slideshow';
export default function Home() {
  return (
    <>
    <header className={styles.header}>
      <div className={styles.slideshow}>
        <ImageSlideshow />
      </div>
      <div>
        <div className={styles.hero}>
            <h1>Remy - Your personal cooking assistant</h1>
            <p>Become a chef and automate your nutrition with Remy.</p>
        </div>
        <div className={styles.cta}>
          <Link href="/meals">Explore Meals</Link>
          <Link href="/community">Join the Community</Link>
          
        </div>
      </div>
    </header>
    <main>
    <section className={styles.section}>
          <h2>How it works</h2>
          <p>
            Remy is a platform for students to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes, and to
            connect with other food lovers.
          </p>
          <p>
            Based on your location, Remy will scour the web for ingredients and recipes that match your dietary goals.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Why Remy?</h2>
          <p>
            As a student, I got diagnosed with diabetes from living off deliveroo and takeaway. I looked for a way to make delicious and healthy meals at home, but most importantly to make cooking fun.
          </p>
          <p>
            Remy will adapt to your dietary needs and goals, and craft everything weekly meal plans, to a special meal for a special ocation. 
          </p>
        </section>
    </main>
    </>
  );
}
