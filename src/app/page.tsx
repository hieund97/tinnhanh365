import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FeaturedPost from '../components/FeaturedPost';
import BlogEntry from '../components/BlogEntry';
import BlogEntrySmall from '../components/BlogEntrySmall';
import PostEntryAlt from '../components/PostEntryAlt';
import Preloader from '../components/Preloader';
import { fetchNews } from '../lib/api';

export default async function Home() {
  const featuredPosts = await fetchNews({ limit: 5 });
  const businessPosts = await fetchNews({ category: 'business', limit: 5 });
  const culturePosts = await fetchNews({ category: 'culture', limit: 5 });
  const politicsPosts = await fetchNews({ category: 'politics', limit: 9 });
  const travelPosts = await fetchNews({ category: 'travel', limit: 4 });

  return (
    <>
      <Preloader />
      <Navbar />

      {/* Featured Posts */}
      <section className="section bg-light">
        <div className="container">
          <div className="row align-items-stretch retro-layout">
            {featuredPosts.map((post, index) => (
              <div
                className={index === 1 ? 'col-md-4 img-5 h-100' : 'col-md-4'}
                key={post.id}
              >
                <FeaturedPost post={post} index={index} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Section */}
      <section className="section posts-entry">
        <div className="container">
          <div className="row mb-4">
            <div className="col-sm-6">
              <h2 className="posts-entry-title">Business</h2>
            </div>
            <div className="col-sm-6 text-sm-end">
              <a href="/category/business" className="read-more">
                View All
              </a>
            </div>
          </div>
          <div className="row g-3">
            <div className="col-md-9">
              <div className="row g-3">
                {businessPosts.slice(0, 2).map((post) => (
                  <BlogEntry key={post.id} post={post} />
                ))}
              </div>
            </div>
            <div className="col-md-3">
              <ul className="list-unstyled blog-entry-sm">
                {businessPosts.slice(2).map((post) => (
                  <BlogEntrySmall key={post.id} post={post} />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="section posts-entry">
        <div className="container">
          <div className="row mb-4">
            <div className="col-sm-6">
              <h2 className="posts-entry-title">Culture</h2>
            </div>
            <div className="col-sm-6 text-sm-end">
              <a href="/category/culture" className="read-more">
                View All
              </a>
            </div>
          </div>
          <div className="row g-3">
            <div className="col-md-9 order-md-2">
              <div className="row g-3">
                {culturePosts.slice(0, 2).map((post) => (
                  <BlogEntry key={post.id} post={post} />
                ))}
              </div>
            </div>
            <div className="col-md-3">
              <ul className="list-unstyled blog-entry-sm">
                {culturePosts.slice(2).map((post) => (
                  <BlogEntrySmall key={post.id} post={post} />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Politics Section */}
      <section className="section">
        <div className="container">
          <div className="row mb-4">
            <div className="col-sm-6">
              <h2 className="posts-entry-title">Politics</h2>
            </div>
            <div className="col-sm-6 text-sm-end">
              <a href="/category/politics" className="read-more">
                View All
              </a>
            </div>
          </div>
          <div className="row">
            {politicsPosts.map((post) => (
              <div className="col-lg-4 mb-4" key={post.id}>
                <PostEntryAlt post={post} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Travel Section */}
      <div className="section bg-light">
        <div className="container">
          <div className="row mb-4">
            <div className="col-sm-6">
              <h2 className="posts-entry-title">Travel</h2>
            </div>
            <div className="col-sm-6 text-sm-end">
              <a href="/category/travel" className="read-more">
                View All
              </a>
            </div>
          </div>
          <div className="row align-items-stretch retro-layout-alt">
            <div className="col-md-5 order-md-2">
              <FeaturedPost post={travelPosts[0]} index={1} />
            </div>
            <div className="col-md-7">
              <FeaturedPost post={travelPosts[1]} index={0} />
              <div className="two-col d-block d-md-flex justify-content-between">
                <FeaturedPost post={travelPosts[2]} index={0} />
                <FeaturedPost post={travelPosts[3]} index={0} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}