import { useState } from "react";
import type { Post } from "../types/post";
import { API_BASE_URL_FOR_POSTS } from "../constants/api";
import Loading from "../components/Loading";

export default function HomePage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [id, setId] = useState("");

  const search = () => {
    fetch(`${API_BASE_URL_FOR_POSTS}/${id}`)
      .then((response) => response.json())
      .then((json) => {
        setLoading(false);
        setPosts([json]);
      })
      .catch((err) => console.error("Error:", err));
  };
  return (
    <>
      <h1 className="text-3xl font-bold mb-4">Posts Feed</h1>
      <div className="mb-4 space-x-4">
        <input
          type="text"
          value={id}
          onChange={(e) => setId(e.target.value)}
          className="border p-2 rounded-lg"
          placeholder="Enter post's ID"
        />
        <button
          onClick={search}
          className="border p-2 rounded-lg bg-blue-200 hover:bg-blue-300"
        >
          Search post
        </button>
      </div>

      {loading ? (
        <Loading />
      ) : (
        <div>
          {posts.map((post) => (
            <div key={post.id} className="border p-4 my-2 rounded-lg">
              <h2 className="text-xl font-bold">{post.title}</h2>
              <p>{post.body}</p>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
