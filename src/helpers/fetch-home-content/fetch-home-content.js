const gfycatEndpoint = 'https://api.gfycat.com/v1';
const trendingGifs = '/reactions/populated?tagName=trending&gfyCount=20';

export default async () => {
  return await fetch(gfycatEndpoint + trendingGifs).then((response) => {
    return response.json();
  });
};
