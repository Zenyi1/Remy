'use client';

import { useFormStatus } from 'react-dom';
import classes from './meals-form-submit.module.css';

export default function MealsFormSubmit() {
    const { pending } = useFormStatus();

    return (
        <button className={classes.button} type="submit" disabled={pending}>
            {pending ? 'Saving...' : 'Share Meal'}
        </button>
    );
}