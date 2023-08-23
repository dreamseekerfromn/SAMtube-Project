const API_KEY = import.meta.env.VITE_BASE_API_KEY;
const API_URL = `https://www.googleapis.com/youtube/v3`;

export default async function testAPI(){
    console.log(API_KEY)
    return await fetch(`${API_URL}/search?part=snippet&key=${API_KEY}`);
}