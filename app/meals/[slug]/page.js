import styles from './page.module.css';
import { getMeal } from '@/lib/meals';
import Image from 'next/image';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }) {
    const meal = await getMeal(params.slug);

    if (!meal) {
        notFound();
    }

    return {
        title: meal.title,
        description: meal.summary
    }
}
export default async function MealsDetails({ params }) {
    try {
        const meal = await getMeal(params.slug);


        // Ensure instructions is a string before replacing
        meal.instructions = typeof meal.instructions === 'string' 
            ? meal.instructions.replace(/\n/g, '<br />')
            : '';

        return (
            <>
            <header className={styles.header}>
                <div className={styles.image}>
                    <Image fill src={`https://zenyi1-nextjs-remy.s3.eu-north-1.amazonaws.com/${meal.image}`} alt={meal.title || 'Meal'} />
                </div>
                <div className={styles.headerText}>
                    <h1>{meal.title || 'Unknown Meal'}</h1>
                    <p className={styles.creator}>by <a href={`mailto:${meal.creator_email || ''}`}>
                        {meal.creator || 'Unknown Creator'}</a></p>
                    <p className={styles.summary}>{meal.summary || 'No summary available'}</p>
                </div>
            </header>
            <main className={styles.main}>
                <p className={styles.instructions} dangerouslySetInnerHTML={{
                    __html: meal.instructions
                }}></p>
            </main>
            </>
        );
    } catch (error) {
        console.error('Error in MealsDetails:', error);
        return notFound();
    }
}