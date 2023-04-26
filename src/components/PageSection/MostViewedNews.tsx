import SmallNewsThumbnail from "../NewsThumbnail/SmallNewsThumbnail";

export default function MostViewedNews() {
  return (
    <>
      
      <div className="py-8">
      <h3 className="py-4 text-xl font-bold">Most Viewed</h3>
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-1">
            <SmallNewsThumbnail title={""} description={""} image={""} url={""} />
          </div>
          <div className="col-span-1">
            <SmallNewsThumbnail title={""} description={""} image={""} url={""} />
          </div>
          <div className="col-span-1">
            <SmallNewsThumbnail title={""} description={""} image={""} url={""} />
          </div>
        </div>
      </div>
    </>
  )
}