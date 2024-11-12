import Image from "next/image";
import moment from "moment";

interface Blog {
  id: string;
  title: string;
  image: string;
  author: {
    name: string;
    img: string;
  };
  posted: string;
  readingTime: number;
  summary: string;
}

interface BlogDetailsProps {
  blog: Blog;
}

const BlogDetails: React.FC<BlogDetailsProps> = ({ blog }) => {
  return (
    <div className="container mx-auto py-20 px-6">
      <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
      <Image
        src={blog.image}
        alt={blog.title}
        width={200}
        height={200}
        className="object-contain w-full h-auto lg:h-96 mb-4"
      />
      <div className="flex items-center mt-4">
        <Image
          src={blog.author.img}
          alt={blog.author.name}
          width={60}
          height={60}
          className="rounded-full"
        />
        <div className="ml-4">
          <p className="text-gray-500">{blog.author.name}</p>
          <p className="text-gray-400">
            {moment(blog.posted).format("MMMM D, YYYY, h:mm A")}
          </p>
        </div>
      </div>
      <p className="mt-6 text-lg">{blog.summary}</p>
    </div>
  );
};

// Generate static parameters for each blog post based on the data in blog.json
export async function generateStaticParams() {
  const res = await fetch("http://localhost:3000/blog.json"); // Replace with your actual base URL in production
  const blogs: Blog[] = await res.json();

  return blogs.map((blog) => ({
    id: blog.id,
  }));
}

// Fetch blog data by ID
export async function getBlogData(id: string) {
  const res = await fetch("http://localhost:3000/blog.json"); // Replace with your actual base URL in production
  const blogs: Blog[] = await res.json();
  return blogs.find((blog) => blog.id === id);
}

// Generate static page based on the blog data
const Page = async ({ params }: { params: { id: string } }) => {
  const blog = await getBlogData(params.id);

  if (!blog) {
    return <div>Blog not found!</div>;
  }

  return <BlogDetails blog={blog} />;
};

export default Page;
