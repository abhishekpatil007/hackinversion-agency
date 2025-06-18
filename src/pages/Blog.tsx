import AnimatedBackground from '../components/layout/AnimatedBackground';

const featuredPost = {
  title: "How to Build and Validate Your MVP in 21 Days",
  excerpt: "A step-by-step guide to launching your MVP fast, validating with real users, and iterating for success.",
  image: "/blog-featured.jpg",
  author: "Anubhav Dube",
  date: "June 2024",
  tags: ["MVP", "Startup", "Product"],
};

const posts = [
  {
    title: "Why Speed Matters for Startups",
    excerpt: "Learn why moving fast is the key to startup success and how to avoid common pitfalls.",
    image: "/blog1.jpg",
    author: "Jane Doe",
    date: "May 2024",
    tags: ["Startup", "Speed"],
  },
  {
    title: "Choosing the Right Tech Stack for Your MVP",
    excerpt: "A practical guide to picking the best tools and frameworks for rapid MVP development.",
    image: "/blog2.jpg",
    author: "John Smith",
    date: "May 2024",
    tags: ["Tech Stack", "MVP"],
  },
  {
    title: "Designing for Validation: UX Tips",
    excerpt: "How to design your MVP for real user feedback and actionable insights.",
    image: "/blog3.jpg",
    author: "Emily Lee",
    date: "April 2024",
    tags: ["UX", "Validation"],
  },
  {
    title: "Scaling Your MVP: What Comes Next?",
    excerpt: "Strategies for taking your MVP to the next level after launch.",
    image: "/blog4.jpg",
    author: "Michael Chen",
    date: "April 2024",
    tags: ["Scaling", "Growth"],
  },
];

const categories = ["All", "MVP", "Startup", "Tech Stack", "UX", "Growth"];

export default function Blog() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white pb-20 relative">
      <AnimatedBackground variant="dark" intensity="medium" />
      
      <section className="max-w-5xl mx-auto pt-24 pb-12 px-4 relative z-10">
        <h1 className="text-4xl font-extrabold mb-2">Insights & Stories</h1>
        <p className="text-gray-400 mb-8">Premium insights, guides, and stories for founders and product teams.</p>
        {/* Featured Post */}
        <div className="rounded-2xl overflow-hidden bg-[#18181b] shadow-md flex flex-col md:flex-row mb-12">
          <img src={featuredPost.image} alt={featuredPost.title} className="w-full md:w-1/2 h-64 object-cover" />
          <div className="p-8 flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-2">{featuredPost.title}</h2>
              <p className="text-gray-300 mb-4">{featuredPost.excerpt}</p>
              <div className="flex flex-wrap gap-2 mb-2">
                {featuredPost.tags.map((tag) => (
                  <span key={tag} className="badge bg-indigo-600/10 text-indigo-400">{tag}</span>
                ))}
              </div>
            </div>
            <div className="text-sm text-gray-400 mt-4">By {featuredPost.author} · {featuredPost.date}</div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-8">
          {/* Blog Posts Grid */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {posts.map((post) => (
              <div key={post.title} className="card flex flex-col h-full">
                <img src={post.image} alt={post.title} className="w-full h-40 object-cover rounded-xl mb-4" />
                <h3 className="font-semibold text-lg mb-2">{post.title}</h3>
                <p className="text-gray-300 text-sm mb-2">{post.excerpt}</p>
                <div className="flex flex-wrap gap-2 mb-2">
                  {post.tags.map((tag) => (
                    <span key={tag} className="badge bg-indigo-600/10 text-indigo-400">{tag}</span>
                  ))}
                </div>
                <div className="text-xs text-gray-400 mt-auto">By {post.author} · {post.date}</div>
              </div>
            ))}
          </div>
          {/* Sidebar */}
          <aside className="w-full md:w-56 flex-shrink-0">
            <div className="bg-[#18181b] rounded-2xl p-6 mb-8">
              <h4 className="font-bold mb-4">Categories</h4>
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button key={cat} className="badge bg-gray-700/30 text-gray-200 hover:bg-indigo-600/20 transition">{cat}</button>
                ))}
              </div>
            </div>
            <div className="bg-[#18181b] rounded-2xl p-6">
              <h4 className="font-bold mb-4">About</h4>
              <p className="text-gray-400 text-sm">We share actionable insights and stories to help founders build, validate, and scale their MVPs.</p>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
} 