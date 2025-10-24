import { useState } from "react";

const ACCESS_KEY = import.meta.env.VITE_ACCESS_KEY;

export default function App() {
  type Post = {
    id: number;
    title: string;
    body: string;
  };

  const [id, setId] = useState("");
  const [posts, setPosts] = useState<Post[]>([]);

  const search = () => {
    fetch(`https://jsonplaceholder.typicode.com/posts?id=${id}`)
      .then((response) => response.json())
      .then((json) => setPosts(json))
      .catch((err) => console.error("Error:", err));
  };

  async function getData() {
    const request = new Request("https://api.spotify.com/v1/artists", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${ACCESS_KEY}`,
      },
    });
    const response = await fetch(request);
    const data = await response.json();
    console.log(data);
  }

  return (
    <div className="m-5">
      <div className="flex gap-4">
        <input
          type="search"
          placeholder="enter id from 1 to 100"
          value={id}
          onChange={(e) => setId(e.target.value)}
          className="border p-2 rounded-lg"
        />
        <button
          onClick={search}
          className="border p-2 rounded-lg bg-blue-200 hover:bg-blue-300"
        >
          search posts
        </button>
        <button
          onClick={getData}
          className="border p-2 rounded-lg bg-green-200 hover:bg-green-300"
        >
          get spotify data
        </button>
      </div>
      <div className="mt-4">
        {posts.map((post) => (
          <div key={post.id}>
            <p className="font-bold">{post.title}</p>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
