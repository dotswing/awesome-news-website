import Image from 'next/image';
import { Inter } from 'next/font/google';
import { GetStaticProps, NextPage } from 'next';
import HighlightNews from '@/components/PageSection/HighlightNews';
import MostViewedNews from '@/components/PageSection/ThreeColumnNewsList';
import { getHighlightNewsByCategory } from '@/services/news';
import { useEffect } from 'react';
import * as _ from 'lodash';
import ThreeColumnNewsList from '@/components/PageSection/ThreeColumnNewsList';

const inter = Inter({ subsets: ['latin'] })

interface IHomeProps {
  news: {
    main: any[],
    tech: any[],
    entertainment: any[],
    health: any[],
    politics: any[],
    science: any[],
    mostViewed: any[],
  };
}

export const getStaticProps: GetStaticProps<IHomeProps> = async (context) => {
  const techData = await getHighlightNewsByCategory('tech');
  const entertainmentData = await getHighlightNewsByCategory('entertainment');
  const healthData = await getHighlightNewsByCategory('health');
  const politicsData = await getHighlightNewsByCategory('politics');
  const scienceData = await getHighlightNewsByCategory('science');

  const mainHighlightNews = _.shuffle([techData[0], entertainmentData[0], healthData[0], politicsData[0], scienceData[0]]);
  return {
    props: {
      news: {
        main: mainHighlightNews,
        tech: techData,
        entertainment: entertainmentData,
        health: healthData,
        politics: politicsData,
        science: scienceData,
        mostViewed: _.shuffle(mainHighlightNews.slice(0, 3)),
      }
    }
  }
}

const Home: NextPage<IHomeProps> = ({ news }) => {
  return (
    <>
      <HighlightNews title={'News Today'} news={news.main} />
      <ThreeColumnNewsList title={'Most Viewd'} news={news.mostViewed}/>
      <HighlightNews title={'Technology News'} news={news.tech} />
      <HighlightNews title={'Entertainment News'} news={news.entertainment} />
      <HighlightNews title={'Health News'} news={news.health} />
      <HighlightNews title={'Politics News'} news={news.politics} />
      <HighlightNews title={'Science News'} news={news.science} />
    </>
  )
}

export default Home;
