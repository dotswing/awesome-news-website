import axios from 'axios';

const API_TOKEN = process.env.NEXT_NEWS_API_TOKEN;

export const mockArray = [
  {
    id: 'aaa',
    title: 'title',
    description: 'description',
    image: 'https://s.isanook.com/me/0/rp/rc/w728h437/yatxacm1w0/aHR0cHM6Ly9zLmlzYW5vb2suY29tL21lLzAvdWQvMTYvODM5MTcvYmFsZW5jaWFnYS5qcGc=.webp',
    publishedAt: '2021-08-01T00:00:00Z',
    url: `/tech/aaa`
  },
  {
    id: 'bbb',
    title: 'title',
    description: 'description',
    image: 'https://s.isanook.com/me/0/rp/rc/w728h437/yatxacm1w0/aHR0cHM6Ly9zLmlzYW5vb2suY29tL21lLzAvdWQvMTYvODM5MTcvYmFsZW5jaWFnYS5qcGc=.webp',
    publishedAt: '2021-08-01T00:00:00Z',
    url: `/tech/bbb`
  },
  {
    id: 'ccc',
    title: 'title',
    description: 'description',
    image: 'https://s.isanook.com/me/0/rp/rc/w728h437/yatxacm1w0/aHR0cHM6Ly9zLmlzYW5vb2suY29tL21lLzAvdWQvMTYvODM5MTcvYmFsZW5jaWFnYS5qcGc=.webp',
    publishedAt: '2021-08-01T00:00:00Z',
    url: `/tech/ccc`
  }
]

export const getHighlightNewsByCategory = async (category: string) => {
  const { data } = await axios.get('https://api.thenewsapi.com/v1/news/top', { params: { categories: category, "api_token": API_TOKEN, locale: "us", language: "en" }})
  return data.data.map((story: any) => ({
    id: story.uuid,
    title: story.title,
    description: story.description,
    publishedAt: story.published_at,
    image: story.image_url,
    author: 'Admin',
    url: `/${category}/${story.uuid}`,
  }));
}

export const getLatestNewsByCategory = async (category: string) => {
  const { data } = await axios.get('https://api.thenewsapi.com/v1/news/all', { params: { categories: category, "api_token": API_TOKEN, locale: "us", sort: "published_at", language: "en" }})
  return data.data.map((story: any) => ({
    id: story.uuid,
    title: story.title,
    description: story.description,
    publishedAt: story.published_at,
    image: story.image_url,
    author: 'Admin',
    url: `/${category}/${story.uuid}`,
  }));
}

export const getNewsByUUIDAndCategory = async (uuid: string, category: string) => {
  const { data } = await axios.get(`https://api.thenewsapi.com/v1/news/uuid/${uuid}`, { params: { categories: category, "api_token": API_TOKEN, locale: "us", language: "en" }});
  return {
    id: data.uuid,
    title: data.title,
    description: data.description,
    publishedAt: data.published_at,
    image: data.image_url,
    author: 'Admin',
    url: `/${category}/${data.uuid}`,
  };
}

export const getRelatedNewsByUUIDAndCategory = async (uuid: string, category: string) => {
  const { data } = await axios.get(`https://api.thenewsapi.com/v1/news/similar/${uuid}`, { params: { categories: category, "api_token": API_TOKEN, locale: "us", language: "en" }});
  return data.data.map((story: any) => ({
    id: story.uuid,
    title: story.title,
    description: story.description,
    publishedAt: story.published_at,
    image: story.image_url,
    author: 'Admin',
    url: `/${category}/${story.uuid}`,
  }));
}

export const getMostViewdByCategory = async (category: string) => {
  return generateMockArray(category);
}