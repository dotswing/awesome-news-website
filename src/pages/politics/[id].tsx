import NewsDetail from "@/components/NewsDetail";
import ThreeColumnNewsList from "@/components/PageSection/ThreeColumnNewsList";
import ThreeRowNewsList from "@/components/PageSection/ThreeRowNewsList";
import { getHighlightNewsByCategory, getNewsByUUIDAndCategory, getRelatedNewsByUUIDAndCategory, mockArray } from "@/services/news";
import { GetStaticPaths, GetStaticProps } from "next";

interface INewsDetail {
  title: string;
  description: string;
  image: string;
  publishedAt: string;
  mostViewed: any[];
  relatedNews: any[];
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [], fallback: true
  }
}
export const getStaticProps: GetStaticProps<INewsDetail> = async (context) => {
  const newsId = context.params?.id;
  const data = await getNewsByUUIDAndCategory(newsId as string, 'politics');
  const relatedNews = await getRelatedNewsByUUIDAndCategory(newsId as string, 'politics');
  // const mostViewed = await getHighlightNewsByCategory('politics');

  return {
    props: {
      title: data.title,
      description: data.description,
      image: data.image,
      publishedAt: data.publishedAt,
      mostViewed: mockArray,
      relatedNews: relatedNews,
    }
  };
}

export default function NewsDetailPage({ title, description, image, publishedAt, mostViewed, relatedNews }: INewsDetail) {
  return (
    <>
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2">
          <h3 className="py-4 text-xl font-bold">Politics News</h3>
          <NewsDetail title={title} description={description} image={image} publishedAt={publishedAt} />
        </div>
        <div className="col-span-1">
          <ThreeRowNewsList news={mostViewed} title={"Most Viewed"}/>
        </div>
        <div className="col-span-3">
          <ThreeColumnNewsList news={relatedNews} title={"Related News"}/>
        </div>
      </div>
    </>
  );
}