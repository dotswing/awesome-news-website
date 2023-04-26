import styled from "styled-components";
import Image from 'next/image'
import Link from "next/link";

const PictureWrapper = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  padding-top: 56.25%;
`;

const NewsPicture = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
`;

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
          <PictureWrapper>
            <NewsPicture>
              <img 
                src={image}
                alt={title}
              />
            </NewsPicture>
          </PictureWrapper>
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