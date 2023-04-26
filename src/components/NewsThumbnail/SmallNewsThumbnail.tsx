import styled from "styled-components";
import Image from 'next/image'
import { INewsThumbnailProps } from "./BigNewsThumbnail";
import Link from "next/link";

export default function SmallNewsThumbnail({ title, description, image, url }: INewsThumbnailProps) {
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
          <div className="p-4 h-20 text-xs">
            <h2 className="font-bold h-4 truncate">{title}</h2>
            <div className="h-10 truncate">
              {description}
            </div>
          </div>
        </Link>
      </div>
    </>
  )
}