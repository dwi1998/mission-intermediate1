import "./TitleCards.css";
// import cards_data from "../../assets/cards/Cards_data";
import { useRef, useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const TitleCards = ({title, category}) => {
  const [apiData, setApiData] = useState([]);
  const cardsRef = useRef();

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNDg5MjJhODE4ZDczNmMwNTkwYzc0MTI1NWIwOTUzOCIsIm5iZiI6MTczOTcwNTc5MC40ODk5OTk4LCJzdWIiOiI2N2IxY2RiZTcyMTU3NGU5NWJlMGQzZTUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.Di0o9mHKX9RRBLcaS3m_egfXqND2--yKXCQxwcu-16s'
    }
  };
  


  const handleWheel = (e) => {
    e.preventDefault();
    cardsRef.current.scrollLeft += e.deltaY
  }
  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
    .then(res => res.json())
    .then(res => setApiData(res.results))
    .catch(err => console.error(err));

    cardsRef.current.addEventListener('Wheel', handleWheel)
  }, []);


  return (
    <div className="title-cards">
      <h2>{title ? title: "Melanjutkan Nonton Film"}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card,index) =>{
          return <Link to={`/player/${card.id}`} className="card" key={index}>
            <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt="" />
            <p>{card.original_title}</p>
          </Link>
        })}
      </div>
    </div>
  )
}

export default TitleCards
