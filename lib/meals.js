import slugify from 'slugify';
import xss from 'xss';
import sql from 'better-sqlite3';
import { S3 } from '@aws-sdk/client-s3';

import fs from 'fs';

const s3 = new S3({
    region: 'eu-north-1',  
});
const db = sql('meals.db');

export async function getMeals() {
    return db.prepare('SELECT * FROM meals').all();
}

export async function getMeal(slug) {
    return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug);
}

export async function saveMeal(meal) {
    meal.slug = slugify(meal.title, {lower: true});
    meal.instructions = xss(meal.instructions);
    
    const extension = meal.image.name.split('.').pop();
    const fileName = `${meal.slug}.${extension}`;
    const bufferedImage = await meal.image.arrayBuffer();


    s3.putObject({
        Bucket: 'zenyi1-nextjs-remy',
        Key: fileName,
        Body: Buffer.from(bufferedImage),
        ContentType: meal.image.type,
        ACL: 'public-read'
      });

      meal.image = fileName;
    
    db.prepare(`
        INSERT INTO meals (title, summary, instructions, image, creator, creator_email, slug)
        VALUES (?, ?, ?, ?, ?, ?, ?)
    `).run(meal.title, meal.summary, meal.instructions, meal.image, meal.creator, meal.creator_email, meal.slug);
}