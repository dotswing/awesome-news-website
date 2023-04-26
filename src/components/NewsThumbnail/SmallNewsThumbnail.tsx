import styled from "styled-components";
import Image from 'next/image'
import { INewsThumbnailProps } from "./BigNewsThumbnail";
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

export default function SmallNewsThumbnail({ title, description, image, url }: INewsThumbnailProps) {
  return (
    <>
      <div className="border rounded border-gray-300 relative text-ellipsis overflow-hidden">
        <Link href={url}>
          <PictureWrapper>
            <NewsPicture>
              <img 
                src={image}
                alt="Picture of the author"
              />
            </NewsPicture>
          </PictureWrapper>
          <div className="p-4 h-20 text-xs">
            <h2 className="font-bold">{title}</h2>
            <div className="h-10 truncate">
              {description}
            </div>
          </div>
        </Link>
      </div>
    </>
  )
}