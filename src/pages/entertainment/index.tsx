import HighlightNews from "@/components/PageSection/HighlightNews";
import ThreeColumnNewsList from "@/components/PageSection/ThreeColumnNewsList";
import { getHighlightNewsByCategory, getLatestNewsByCategory } from "@/services/news";
import { GetStaticProps } from "next";

interface IEntertainmentProps {
  news: any[];
  latestNews: any[],
}

export const getStaticProps: GetStaticProps<IEntertainmentProps> = async (context) => {

  const news = await getHighlightNewsByCategory('entertainment');
  const latestNews = await getLatestNewsByCategory('entertainment');
  return {
    props: {
      news,
      latestNews,
    }
  }
}

export default function Entertainment({ news, latestNews }: IEntertainmentProps) {
  return (
    <>
      <HighlightNews title={'Entertainment News'} news={news} />
      <ThreeColumnNewsList title={'Latest News'} news={latestNews}/>
    </>
  );
}