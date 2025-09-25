import "./Home.css";

export default function Home() {
  return (
    <div id="homePageLayout">
      <div id="rightStyle"></div>
      <div id="firstMainSection">
        <div id="textSection">
          <h1>
            Your Home&nbsp;<span style={{ color: "#6FB3A2" }}>,Comfort</span>
          </h1>
          <p>
            That's why we gave you a flat shipping rate on any order you place.
          </p>
          <span id="hashes">#YourBooks #YourHome #YourComfort</span>
        </div>
        <div id="imgSection">
          <img
            src="https://booxtore.net/static/media/ctaImg.c658ac36b42dbe02e5b8.png"
            alt="Image"
          />
        </div>
      </div>
      <div id="leftStyle"></div>
    </div>
  );
}
