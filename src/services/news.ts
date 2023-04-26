import axios from 'axios';

const API_TOKEN = '35nLeS4dvbpGOq2o8sTK3FIQY8BhFBKl4WXzsVzw';

const getHightlightNews = async () => {
  return [
    {
      id: 1,
      title: 'News 1',
      description: 'Description 1',
      image: 'https://nypost.com/wp-content/uploads/sites/2/2023/04/newspress-collage-26759801-1682490023961.jpg?quality=75&strip=all&1682475730&w=1024',
      author: 'Test news',
      publishedAt: 'Monday',
    },
    {
      id: 2,
      title: 'News 2',
      description: 'Description 2',
      image: 'https://bostonglobe-prod.cdn.arcpublishing.com/resizer/o6zYB4C1evrLJXx_0te2MC3mXj4=/506x0/cloudfront-us-east-1.images.arcpublishing.com/bostonglobe/2JSTEY6PEFFFTFUAEULJQNRKIM.JPG',
      author: 'Test news',
      publishedAt: 'Tuesday',
    },
    {
      id: 2,
      title: 'News 3',
      description: 'Description 3',
      image: 'https://www.bostonglobe.com/pf/resources/images/logo-bg.jpg?d=407',
      author: 'Test news',
      publishedAt: 'Tuesday',
    },
    {
      id: 2,
      title: 'News 4',
      description: 'Description 4',
      image: 'https://bostonglobe-prod.cdn.arcpublishing.com/resizer/o6zYB4C1evrLJXx_0te2MC3mXj4=/506x0/cloudfront-us-east-1.images.arcpublishing.com/bostonglobe/2JSTEY6PEFFFTFUAEULJQNRKIM.JPG',
      author: 'Test news',
      publishedAt: 'Tuesday',
    },
  ];
}

export const getHighlightNewsByCategory = async (category: string) => {
  const { data } = await axios.get('https://api.thenewsapi.com/v1/news/top', { params: { categories: category, "api_token": API_TOKEN, locale: "us" }})
  
  return data.data.map((story: any) => ({
    id: story.uuid,
    title: story.title,
    description: story.description,
    publishedAt: story.published_at,
    image: story.image_url,
    author: 'Admin',
    url: `${category}/${story.uuid}`,
  }));
}
