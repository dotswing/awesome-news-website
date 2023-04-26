interface INewsDetailProps {
  title: string;
  description: string;
  image: string;
  publishedAt: string;
}

export default function NewsDetail({ title, description, image, publishedAt }: INewsDetailProps) {
  return (
    <>
      <h2 className="py-2 text-2xl font-bold">{title}</h2>
      <div className="news-picture-wrapper">
        <div className="news-picture">
          <img 
            src={image}
            alt={title}
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>
      <div className="py-4 text-lg">
        {description}
      </div>
    </>
  );
};
