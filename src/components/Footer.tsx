import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="widget">
              <h3 className="mb-4">About</h3>
              <p>Far far away, behind the word mountains...</p>
            </div>
            <div className="widget">
              <h3>Social</h3>
              <ul className="list-unstyled social">
                <li><a href="#"><span className="icon-instagram"></span></a></li>
                <li><a href="#"><span className="icon-twitter"></span></a></li>
                <li><a href="#"><span className="icon-facebook"></span></a></li>
                <li><a href="#"><span className="icon-linkedin"></span></a></li>
                <li><a href="#"><span className="icon-pinterest"></span></a></li>
                <li><a href="#"><span className="icon-dribbble"></span></a></li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 ps-lg-5">
            <div className="widget">
              <h3 className="mb-4">Company</h3>
              <ul className="list-unstyled float-start links">
                <li><Link href="/about-us">About us</Link></li>
                <li><Link href="#">Services</Link></li>
                <li><Link href="#">Vision</Link></li>
                <li><Link href="#">Mission</Link></li>
                <li><Link href="#">Terms</Link></li>
                <li><Link href="#">Privacy</Link></li>
              </ul>
              <ul className="list-unstyled float-start links">
                <li><Link href="#">Partners</Link></li>
                <li><Link href="#">Business</Link></li>
                <li><Link href="#">Careers</Link></li>
                <li><Link href="#">Blog</Link></li>
                <li><Link href="#">FAQ</Link></li>
                <li><Link href="#">Creative</Link></li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="widget">
              <h3 className="mb-4">Recent Post Entry</h3>
              <div className="post-entry-footer">
                {/* Thêm danh sách bài viết nếu cần */}
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-12 text-center">
            <p>
              Copyright &copy; {new Date().getFullYear()}. All Rights Reserved. &mdash; Designed by{' '}
              <a href="https://untree.co">Untree.co</a> Distributed by{' '}
              <a href="https://themewagon.com">ThemeWagon</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}