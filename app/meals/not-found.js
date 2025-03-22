import Link from 'next/link';
import styles from './page.module.css'

export default function NotFound() {
    return <main className="not-found">
        <h1>Meal not found</h1>
        <p>The recipe you are looking for has not been created yet. Why not be the first?</p>
        <div className={styles.cta}>
            <Link href="/meals/share">Share your order/recipe</Link>
        </div>
    </main>
}