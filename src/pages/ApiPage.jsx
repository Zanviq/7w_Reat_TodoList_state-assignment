import { useEffect, useState } from "react";
import axios from "axios";
import "./ApiPage.css";

const API_URL = "https://jsonplaceholder.typicode.com/posts?_limit=5";

function ApiPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await axios.get(API_URL);
        setPosts(response.data);
      } catch (err) {
        setError(err.message ?? "알 수 없는 오류가 발생했습니다.");
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <section className="api-page">
      <h2>외부 API 데이터</h2>

      {loading && <div className="api-state loading">Loading...</div>}

      {!loading && error && (
        <div className="api-state error">
          <strong>API 요청 실패</strong>
          <p>{error}</p>
        </div>
      )}

      {!loading && !error && (
        <>
          <div className="api-state success">API 요청 성공</div>
          <ul className="api-list">
            {posts.map((post) => (
              <li key={post.id} className="api-item">
                <span className="api-id">#{post.id}</span>
                <div className="api-body">
                  <h3>{post.title}</h3>
                  <p>{post.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </>
      )}
    </section>
  );
}

export default ApiPage;
