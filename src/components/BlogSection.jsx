import { motion } from "framer-motion";
import Link from "next/link";

const posts = [
  {
    title: "Why Your Backend is Slower Than a Government Office",
    date: "Jan 25, 2025",
    excerpt:
      "Performance tuning isn't optional. Your users have better things to do than wait for your API response.",
    slug: "backend-performance",
  },
  {
    title: "Security: Not Just a Checkbox (Unless You Like Getting Hacked)",
    date: "Jan 18, 2025",
    excerpt:
      "If security is an afterthought, you're already compromised. Here's how to build software like you actually care.",
    slug: "security-essentials",
  },
  {
    title: "CI/CD: Automate Everything or Enjoy Deployment Nightmares",
    date: "Jan 10, 2025",
    excerpt:
      "Manual deployments? Seriously? It's 2025. Here's how to automate your pipeline like a pro.",
    slug: "cicd-automation",
  },
];

export default function BlogSection() {
  return (
    <section className="py-12 px-6 md:px-12 lg:px-24">
      <motion.h2
        className="text-3xl font-bold text-center mb-3"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        📝 The Blog
      </motion.h2>
      <div className="mb-8">
        <p className="text-center">
          Stay updated with our latest articles and insights on software
          development.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post, index) => (
          <motion.div
            key={post.slug}
            className="p-6 bg-gray-200 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <h3 className="text-2xl font-semibold mb-2">{post.title}</h3>
            <p className="text-gray-700 text-sm mb-4">{post.date}</p>
            <p className="text-gray-900">{post.excerpt}</p>
            <Link
              href={`/blog/${post.slug}`}
              className="text-teal-700 mt-4 inline-block hover:underline"
            >
              Read More →
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
