import "./AboutCard.css";
export default function AboutCard({
  src,
  title,
  subTitle,
}: {
  src: string;
  title: string;
  subTitle: string;
}) {
  return (
    <div id="aboutCardStyle">
      <div id="aboutCardContent">
        <img id="aboutCardImg" src={src} alt="Card Img" />
        <h3>{title}</h3>
        <p>{subTitle}</p>
      </div>
      <div id="aboutCardOverlay"></div>
    </div>
  );
}
