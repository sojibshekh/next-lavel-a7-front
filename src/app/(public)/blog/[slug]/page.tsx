import { Metadata } from "next";
import { notFound } from "next/navigation";
import SingleBlogClient from "@/components/BlogPage/SingleBlogClient";
import { fetchBlogBySlug } from "@/lib/apis";




export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const slug = (await params).slug
  const blog = await fetchBlogBySlug(slug)
  if (!blog.success || !blog.data) {
    return {
      title: "Blog Not Found",
      description: "The blog post you are looking for does not exist.",
    }
  }

  return {
    title: blog.data.title,
    description: blog.data.content.slice(0, 160), // First 160 chars as description
    openGraph: {
      title: blog.data.title,
      description: blog.data.content.slice(0, 160),
      type: 'article',
      url: `https://portfolio-frontend-blush-eta.vercel.app/${blog.data.slug}`,
      images: blog.data.thumbnail ? [
        {
          url: blog.data.thumbnail,
          width: 800,
          height: 600,
          alt: blog.data.title,
        },
      ] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title: blog.data.title,
      description: blog.data.content.slice(0, 160),
      images: blog.data.thumbnail ? [blog.data.thumbnail] : undefined,
    },
  }
}


export default async function page({ params }: { params: Promise<{ slug: string }> })  {
  const slug = (await params).slug
  console.log("Fetching blog for slug:", slug)
  const blog = await fetchBlogBySlug(slug)

  if (!blog) {
    notFound()
  }

  return (<SingleBlogClient blog={blog.data} />)
};

