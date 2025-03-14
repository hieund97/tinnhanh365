import Link from 'next/link';
import Image from 'next/image';

type Post = {
  id: string;
  title: string;
  date: string;
  image: string;
  description: string;
};

export default function BlogEntry({ post }: { post: Post }) {
  return (
    <div className="col-md-6">
      <div className="blog-entry">
        <Link href={`/blog/${post.id}`} className="img-link">
          <Image
            src={post.image}
            alt={post.title}
            width={400} // Điều chỉnh theo kích thước thực tế trong template
            height={300}
            className="img-fluid"
            loading="lazy" // Lazy loading mặc định
          />
        </Link>
        <span className="date">{post.date}</span>
        <h2>
          <Link href={`/blog/${post.id}`}>{post.title}</Link>
        </h2>
        <p>{post.description}</p>
        <p>
          <Link href={`/blog/${post.id}`} className="btn btn-sm btn-outline-primary">
            Read More
          </Link>
        </p>
      </div>
    </div>
  );
}