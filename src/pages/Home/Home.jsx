import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import TitleCards from "../../components/TitleCards/TitleCards";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <Navbar/>
      <div className="hero">
        <img src="/hero_banner.jpg" alt="" className="banner-img" />
        <div className="hero-caption">
          <img src="/hero_title.png" alt="" className="caption-img" />
          <p>Sebuah benda tak dikenal mengambil alih dunia.</p>
          <div className="hero-btns">
            <button className="btn"><img src="/play_icon.png" alt="" />Mulai</button>
            <button className="btn dark-btn"><img src="/info_icon.png" alt="" />Selengkapnya</button>
          </div>

          <TitleCards/>
        </div>
      </div>
      <div className="more-cards">
        <TitleCards title={"Top Rating Film dan Series Hari ini"} category={"top_rated"}/>
        <TitleCards title={"Film Trending"} category={"popular"}/>
        <TitleCards title={"Rilis Baru"} category={"upcoming"}/>
      </div>
      <Footer/>
    </div>
  )
}

export default Home
