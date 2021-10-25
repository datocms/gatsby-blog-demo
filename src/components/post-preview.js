import React from "react";
import Avatar from "../components/avatar";
import Date from "../components/date";
import CoverImage from "./cover-image";
import { Link } from "gatsby";

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  return (
    <div>
      <div className="mb-5">
        <CoverImage slug={slug} title={title} fluid={coverImage.small} />
      </div>
      <h3 className="text-3xl mb-3 leading-snug">
        <Link to={`/posts/${slug}`} className="hover:underline">
          {title}
        </Link>
      </h3>
      <div className="text-lg mb-4">
        <Date dateString={date} />
      </div>
      <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
      <Avatar name={author?.name} picture={author?.picture} />
    </div>
  );
}
