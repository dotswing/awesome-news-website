import SmallNewsThumbnail from "../NewsThumbnail/SmallNewsThumbnail";

interface IThreeColumnNewsList {
  title: string;
  news: any[];
}

export default function ThreeColumnNewsList({ title, news }: IThreeColumnNewsList) {
  return (
    <>
      <div className="py-8">
      <h3 className="py-4 text-xl font-bold">{title}</h3>
        <div className="grid grid-cols-3 gap-4">
          {news && news.map((story: any) => (
            <div key={story.id} className="col-span-1">
              <SmallNewsThumbnail title={story.title} description={story.description} image={story.image} url={story.url} />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}