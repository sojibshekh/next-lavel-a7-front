import AboutSection from "@/components/HomePage/AboutSection";
import BlogSection from "@/components/HomePage/BlogSection";
import CTASection from "@/components/HomePage/CTASection";
import Hero from "@/components/HomePage/Hero";
import ProjectSection from "@/components/HomePage/ProjectSection";
import { fetchBlogs, fetchProjects } from "@/lib/apis";

export default async function Home() {
const blogs = await fetchBlogs(3, 1);
  const projects = await fetchProjects(3, 1);


  return (
   
    <div className="flex flex-col">
      <Hero />
      <AboutSection />
   
      <ProjectSection projects={projects.data} />
      <BlogSection blogs={blogs.data} />
     
      <CTASection />
    </div>
  );
}
