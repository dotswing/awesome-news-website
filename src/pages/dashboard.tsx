import Image from 'next/image'
import { Inter } from 'next/font/google'
import { GetStaticProps, NextPage } from 'next'
import HighlightNews from '@/components/PageSection/HighlightNews'
import MostViewedNews from '@/components/PageSection/MostViewedNews'
import { getHighlightNewsByCategory } from '@/services/news'
import { useEffect } from 'react'

const inter = Inter({ subsets: ['latin'] })

interface IHomeProps {
  news: {
    tech: any[];
  };
}

export const getStaticProps: GetStaticProps<IHomeProps> = async (context) => {
  const techData = await getHighlightNewsByCategory('tech');
  const entertainmentData = await getHighlightNewsByCategory('entertainment');
  const gamesData = await getHighlightNewsByCategory('games');

  const mainHighlightNews = [techData[0], entertainmentData[0], gamesData[0]];
  return {
    props: {
      news: {
        tech: techData,
        entertainment: entertainmentData,
      }
    }
  }
}

const Home: NextPage<IHomeProps> = ({ news }) => {
  useEffect(() => {
    console.log(news)
  }, []);

  return (
    <>
      <HighlightNews title={'News Today'} news={news} />
      <MostViewedNews />
      <HighlightNews title={'Technology news'} news={news} />
    </>
  )
}

export default Home;
