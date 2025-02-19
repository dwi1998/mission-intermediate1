import { useEffect, useState } from "react";
import "./Player.css";
import { useNavigate, useParams } from "react-router-dom";

const Player = () => {

  const {id} = useParams();
  const navigate = useNavigate();

  const [apiData, setApiData] = useState({
    name: "",
    key: "",
    published_at: "",
    typeof: ""
  });

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNDg5MjJhODE4ZDczNmMwNTkwYzc0MTI1NWIwOTUzOCIsIm5iZiI6MTczOTcwNTc5MC40ODk5OTk4LCJzdWIiOiI2N2IxY2RiZTcyMTU3NGU5NWJlMGQzZTUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.Di0o9mHKX9RRBLcaS3m_egfXqND2--yKXCQxwcu-16s'
    }
  };
  
  useEffect(()=> {
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(res => res.json())
    .then(res => setApiData(res.results[0]))
    .catch(err => console.error(err));
  }, [])




  return (
    <div className="player">
      <img src="/back_arrow_icon.png" alt="" onClick={() => {navigate(-2)}} />
      <iframe width="90%" height="90%" src={`https://www.youtube.com/embed/${apiData.key}`}
      title="trailer" frameBorder="0" allowFullScreen></iframe>
      <div className="player-info">
        <p>{apiData.published_at.slice(0, 10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  )
}

export default Player
