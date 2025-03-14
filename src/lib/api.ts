// src/lib/api.ts
export async function fetchNews({
  limit,
  category,
}: {
  limit: number;
  category?: string;
}): Promise<any[]> {
  const url = new URL(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/news`);
  url.searchParams.append("limit", limit.toString());
  if (category) url.searchParams.append("category", category);

  const res = await fetch(url.toString(), { cache: "no-store" }); // Không cache để luôn lấy dữ liệu mới
  if (!res.ok) throw new Error("Failed to fetch news");
  return res.json();
}

export async function fetchNewsDetail(id: string): Promise<any> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/news/${id}`,
    {
      cache: "no-store",
    }
  );
  if (!res.ok) throw new Error("Failed to fetch news detail");
  return res.json();
}

export async function fetchNewsByCategory(
  slug: string,
  limit: number = 10
): Promise<any[]> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/news?category=${slug}&limit=${limit}`,
    { cache: "no-store" }
  );
  if (!res.ok) throw new Error("Failed to fetch news by category");
  return res.json();
}

export async function fetchNewsBySearch(
  query: string,
  limit: number = 10
): Promise<any[]> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/news?search=${
        query}&limit=${limit}`,
    { cache: "no-store" }
  );
  if (!res.ok) throw new Error("Failed to fetch news by search");
  return res.json();
}
