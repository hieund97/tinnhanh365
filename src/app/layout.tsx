import '../../public/css/style.css';
import '../../public/css/tiny-slider.css';
import '../../public/css/aos.css';
import '../../public/css/glightbox.min.css';
import '../../public/css/flatpickr.min.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}