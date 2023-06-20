import { getSortedPostsData } from "./posts";

const posts = getSortedPostsData();

export function postCategories() {
  const uniqueCategories = [];
  const uniqueCategoryNames = [];
  posts.forEach((post) => {
    post.category.forEach((category) => {
      if (!uniqueCategoryNames.includes(category.name)) {
        uniqueCategoryNames.push(category.name);
        uniqueCategories.push(category);
      }
    });
  });
  return uniqueCategories;
}

export function pageIds() {
  const ids = [];
  posts.forEach((post) => {
    ids.push(post.id);
  });
  return ids;
}

export function getRandomPosts() {
  const shuffledPosts = [...posts];
  for (let i = shuffledPosts.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledPosts[i], shuffledPosts[j]] = [shuffledPosts[j], shuffledPosts[i]];
  }
  return shuffledPosts.slice(0, 3);
}
