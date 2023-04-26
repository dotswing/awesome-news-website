import Link from "next/link";

export interface INewsThumbnailProps {
  title: string;
  description: string;
  image: string;
  url: string;
}

export default function BigNewsThumbnail({ title, description, image, url }: INewsThumbnailProps) {
  return (
    <>
      <div className="border rounded border-gray-300 relative text-ellipsis overflow-hidden">
        <Link href={url}>
          <div className="news-picture-wrapper">
            <div className="news-picture">
              <img 
                src={image}
                alt={title}
              />
            </div>
          </div>
          <div className="p-4 h-40">
            <h2 className="font-bold py-2">{title}</h2>
            <div className="h-18 text-ellipsis overflow-hidden">
              {description}
            </div>
          </div>
        </Link>
      </div>
    </>
  )
}