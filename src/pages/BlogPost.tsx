import { Link } from "react-router-dom";


const post = {
  title: "How to Build and Validate Your MVP in 21 Days",
  content: `Launching your MVP quickly is the best way to validate your idea and get real feedback. In this guide, we'll cover the steps to go from idea to live product in just three weeks...`,
  author: "Anubhav Dube",
  date: "June 2024",
  tags: ["MVP", "Startup", "Product"],
};

export default function BlogPost() {
  return (
    <div className="min-h-screen text-white py-20 px-4 flex flex-col items-center relative">
      
      
      <div className="max-w-2xl w-full mx-auto mb-8 relative z-10">
        <Link to="/blog" className="text-indigo-400 hover:underline text-sm">← Back to Blog</Link>
      </div>
      <article className="card max-w-2xl w-full mx-auto mb-8 relative z-10">
        <h1 className="text-3xl font-extrabold mb-4">{post.title}</h1>
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.map((tag) => (
            <span key={tag} className="badge bg-indigo-600/10 text-indigo-400">{tag}</span>
          ))}
        </div>
        <div className="text-sm text-gray-400 mb-6">By {post.author} · {post.date}</div>
        <div className="text-gray-200 leading-relaxed whitespace-pre-line">{post.content}</div>
      </article>
      <footer className="mt-8 text-center relative z-10">
        <h2 className="text-2xl font-bold mb-4">Want more insights?</h2>
        <Link to="/contact" className="btn inline-flex items-center gap-2">Contact Us</Link>
      </footer>
    </div>
  );
} 