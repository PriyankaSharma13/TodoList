import React, { useEffect, useState } from "react";
import "./singlePage.css";

const SinglePage = () => {
  const [data, setData] = useState([]);
  //   const [articles, setArticles] = useState([]);

  //    const newFetchData = () => {
  //     fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=bbeb26ef7f3444ca9eef6686aa1af219")
  //     .then(res => {
  //         return res.json()
  //     })
  //     .then(data => {
  //         setArticles(data)
  //     })
  //     .catch((error) => console.error(error));
  //   }
  //    }

  useEffect(() => {
    // newFetchData()
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then(async (res) => await res.json())
      .then((data) => setData(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <section className="maincard ">
        {data.map((user) => {
          return (
            <div key={user.id} className="cards">
              <img
                src="https://images.unsplash.com/photo-1696519293772-0b240f1e5318?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60"
                alt=""
                className="card-img"
              />
              {/* <img src={article.urlToImage} alt="" className="card-img" />
              <h3 className="card-title">{article.title}</h3>
              <p className="card-text">{article.description}</p>
              <button>Read More</button> */}
              <h3 className="card-heading">{user.title} </h3>
            </div>
          );
        })}
      </section>
    </div>
  );
};
export default SinglePage;
