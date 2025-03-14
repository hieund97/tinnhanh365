import Link from 'next/link';
import Image from 'next/image';

type Post = {
  id: string;
  title: string;
  date: string;
  image: string;
  author: string;
  description: string;
};

export default function PostEntryAlt({ post }: { post: Post }) {
  return (
    <div className="post-entry-alt">
      <Link href={`/blog/${post.id}`} className="img-link">
        <Image
          src={post.image}
          alt={post.title}
          width={500} // Điều chỉnh theo kích thước thực tế
          height={300}
          className="img-fluid"
          loading="lazy"
        />
      </Link>
      <div className="excerpt">
        <h2>
          <Link href={`/blog/${post.id}`}>{post.title}</Link>
        </h2>
        <div className="post-meta align-items-center text-left clearfix">
          <figure className="author-figure mb-0 me-3 float-start">
            <Image
              src="/images/person_1.jpg" // Giả định ảnh tác giả cố định, có thể thay đổi
              alt={post.author}
              width={40}
              height={40}
              className="img-fluid"
            />
          </figure>
          <span className="d-inline-block mt-1">
            By <Link href="#">{post.author}</Link>
          </span>
          <span>&nbsp;-&nbsp; {post.date}</span>
        </div>
        <p>{post.description}</p>
        <p>
          <Link href={`/blog/${post.id}`} className="read-more">
            Continue Reading
          </Link>
        </p>
      </div>
    </div>
  );
}