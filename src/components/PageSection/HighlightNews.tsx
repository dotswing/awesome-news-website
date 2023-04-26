import BigNewsThumbnail from "../NewsThumbnail/BigNewsThumbnail";
import SmallNewsThumbnail from "../NewsThumbnail/SmallNewsThumbnail";

interface IHighlightNewsProps {
  title: string;
  news: any[]
}

export default function HighlightNews({ title, news }: IHighlightNewsProps) {
  const bigNews = news[0];
  const smallNews = news.slice(1, 5);

  return (
    <>
      <h3 className="py-4 text-xl font-bold">{title}</h3>
      <div className="grid grid-cols-2 gap-4">
        <div className="col-span-1">
          <BigNewsThumbnail title={bigNews.title} description={bigNews.description} image={bigNews.image} url={bigNews.url}/>
        </div>
        <div className="col-span-1">
          <div className="grid grid-cols-2 gap-4">
            {smallNews.map((story: any) => (
              <div key={story.id} className="col-span-1">
                <SmallNewsThumbnail title={story.title} description={story.description} image={story.image} url={story.url} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}