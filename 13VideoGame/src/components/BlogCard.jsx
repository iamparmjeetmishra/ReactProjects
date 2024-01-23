const BlogCard = ({ id, title, url, imageUrl, newsSite, summary, publishedAt, updatedAt}) => {
  return (
    <div key={id} className="border w-full md:w-1/3 gap-3 border-cyan-100 rounded shadow-md">
          <img src={imageUrl} className="w-full" />
          <div className="p-2">
              <h2 className="text-md font-bold border-b-2 border-white mb-1">{title}</h2>
              <p>Summary: { summary }</p>
          </div>
    </div>
  )
}

export default BlogCard