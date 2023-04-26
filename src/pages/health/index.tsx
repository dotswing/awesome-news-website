import HighlightNews from "@/components/PageSection/HighlightNews";
import ThreeColumnNewsList from "@/components/PageSection/ThreeColumnNewsList";
import { getHighlightNewsByCategory, getLatestNewsByCategory } from "@/services/news";
import { GetStaticProps } from "next";

interface IHealthProps {
  news: any[];
  latestNews: any[],
}

export const getStaticProps: GetStaticProps<IHealthProps> = async (context) => {

  const news = await getHighlightNewsByCategory('health');
  const latestNews = await getLatestNewsByCategory('health');
  return {
    props: {
      news,
      latestNews,
    }
  }
}

export default function Health({ news, latestNews }: IHealthProps) {
  return (
    <>
      <HighlightNews title={'Health News'} news={news} />
      <ThreeColumnNewsList title={'Latest News'} news={latestNews}/>
    </>
  );
}