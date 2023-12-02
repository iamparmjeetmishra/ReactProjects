import { useEffect, useState } from "react";
import BlogCard from "./components/BlogCard";

const url = 'https://api.spaceflightnewsapi.net/v3/articles';

const App = () => {
  const [newsList, setNewsList] = useState([])

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
    .then((data) => setNewsList(data))
  }, [])

  return (
    <div className="text-white m-1">
      <h2 className="text-center py-4 border-b-2 text-3xl mb-3 font-bold ">Space News</h2>
      <div className="flex flex-wrap gap-2">
        {newsList.map((list, key) => (
          <BlogCard key={key} imageUrl={list.imageUrl} title={list.title} summary={list.summary} />
        ))}
      </div>
    </div>
  )
}

export default App