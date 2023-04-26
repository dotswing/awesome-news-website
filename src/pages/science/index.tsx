import HighlightNews from "@/components/PageSection/HighlightNews";
import ThreeColumnNewsList from "@/components/PageSection/ThreeColumnNewsList";
import { getHighlightNewsByCategory, getLatestNewsByCategory } from "@/services/news";
import { GetStaticProps } from "next";

interface IPoliticsProps {
  news: any[];
  latestNews: any[],
}

export const getStaticProps: GetStaticProps<IPoliticsProps> = async (context) => {

  const news = await getHighlightNewsByCategory('politics');
  const latestNews = await getLatestNewsByCategory('politics');
  return {
    props: {
      news,
      latestNews,
    }
  }
}

export default function Science({ news, latestNews }: IPoliticsProps) {
  return (
    <>
      <HighlightNews title={'Science News'} news={news} />
      <ThreeColumnNewsList title={'Latest News'} news={latestNews}/>
    </>
  );
}