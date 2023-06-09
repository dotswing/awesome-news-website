import HighlightNews from "@/components/PageSection/HighlightNews";
import ThreeColumnNewsList from "@/components/PageSection/ThreeColumnNewsList";
import { getHighlightNewsByCategory, getLatestNewsByCategory } from "@/services/news";
import { GetStaticProps } from "next";

interface ITechProps {
  news: any[];
  latestNews: any[],
}

export const getStaticProps: GetStaticProps<ITechProps> = async (context) => {

  const news = await getHighlightNewsByCategory('tech');
  const latestNews = await getLatestNewsByCategory('tech');
  return {
    props: {
      news,
      latestNews,
    }
  }
}

export default function Tech({ news, latestNews }: ITechProps) {
  return (
    <>
      <HighlightNews title={'Technology News'} news={news} />
      <ThreeColumnNewsList title={'Latest News'} news={latestNews}/>
    </>
  );
}