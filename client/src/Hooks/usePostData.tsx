import { useState, useEffect } from "react";
import axios from "axios";

const usePostData = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:5000/blogs");
        console.log(response.data);
        const arr = response.data;
        setPosts(arr);
      } catch (error) {
        console.error("Error", error);
      }
    };

    fetchData();
  }, []);

  return { posts };
};

export default usePostData;
