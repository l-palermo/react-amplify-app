const gfycatTrendingQS = 'https://api.gfycat.com/v1/reactions/populated?tagName=trending&gfyCount=20';

export default async () => {
  return await fetch(gfycatTrendingQS).then((response) => response.json());
};
