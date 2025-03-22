import Link from 'next/link';
import styles from './page.module.css';
import MealsGrid from '@/components/meals/meals-grid';
import { getMeals } from '@/lib/meals';
import { Suspense } from 'react';

async function MealsInfo()  {
    const meals = await getMeals();

    return <MealsGrid meals={meals} />;

}


export default function Meals() {


    return (
        <>
        <header className={styles.header}>
            <h1>
                Delicious meals, created <span className={styles.highlight}>by you</span>
            </h1>
            <p>Choose your favorite recipe, get the ingredients, and cook it yourself</p>
            <p className={styles.cta}>
                <Link href="/meals/share">Share your order/recipe</Link>
            </p>
        </header>
        <main className={styles.main}>
            <Suspense fallback={<p className={styles.loading}>Fetching meals...</p>}>
                <MealsInfo />
            </Suspense>
        </main>
        </>
    );
}