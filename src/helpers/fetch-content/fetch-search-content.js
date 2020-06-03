const gfycatSearchQS = 'https://api.gfycat.com/v1/gfycats/search?search_text=';
const gfyCount = '&gfyCount=20';

export default async (searchValue) => {
  return await fetch(gfycatSearchQS + searchValue + gfyCount).then((response) => response.json());
};
