import Link from 'next/link';

type Post = {
  id: string;
  title: string;
  date: string;
  image: string;
};

export default function FeaturedPost({ post, index }: { post: Post; index: number }) {
  const classNames =
    index === 1 ? 'hentry img-1 h-100 gradient' : 'hentry mb-30 v-height gradient';
  return (
    <Link href={`/blog/${post.id}`} className={classNames}>
      <div className="featured-img" style={{ backgroundImage: `url(${post.image})` }}></div>
      <div className="text">
        <span>{post.date}</span>
        <h2>{post.title}</h2>
      </div>
    </Link>
  );
}