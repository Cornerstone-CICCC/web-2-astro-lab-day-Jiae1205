// src/content.config.js
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

// blog 컬렉션: src/data/blog/*.md 를 모두 불러옴
const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/data/blog" })
});

// projects 컬렉션: src/data/projects/*.md 를 모두 불러옴
const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/data/projects" })
});

export const collections = { blog, projects };
