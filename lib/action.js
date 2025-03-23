'use server';

import { redirect } from 'next/navigation';
import { saveMeal } from './meals';
import { revalidatePath } from 'next/cache';

//need prevstste bacuse using useActionForm in the share page
export async function shareMeal(prevState,formData) {

    function isInvalidText(text) {
        return !text || text.trim() === '';
    }

    const meal = {
      title: formData.get('title'),
      summary: formData.get('summary'),
      instructions: formData.get('instructions'),
      image: formData.get('image'),
      creator: formData.get('name'),
      creator_email: formData.get('email')
    }

    if (
        isInvalidText(meal.title) ||
        isInvalidText(meal.summary) ||
        isInvalidText(meal.instructions) ||
        isInvalidText(meal.creator) ||
        isInvalidText(meal.creator_email) ||
        !meal.creator_email.includes('@') ||
        !meal.image || meal.image.size === 0
    ) {
       return {
        message: 'Invalid input.'
       }
    }

    await saveMeal(meal);
    //we want to fight next.js aggresive caching by telling it to fetch the emeals again if a new one is added.
    //layout hels revalidate all nested pages, page argumen only revalidates teh current page
    revalidatePath('/meals');
    redirect('/meals');

  }