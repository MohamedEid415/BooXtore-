import "./Card.css";

export default function Card({
  pImg,
  pTitle,
  pDiscountPercentage,
  pPrice,
}: {
  pImg: string;
  pTitle: string;
  pDiscountPercentage: number;
  pPrice: number;
}) {
  return (
    <>
      <div id="cardLayoutForOneProduct">
        <div id="discount">
          <span>SAVE</span>
          <span title="num">{pDiscountPercentage}%</span>
        </div>
        <h4>{pTitle}</h4>
        <img src={pImg} alt="Product-Img" />
        <img
          src="https://booxtore.net/static/media/abstractBreakLine.bfbd04e93bb5ee712869fafad6614166.svg"
          alt="Separator"
          className="spImg"
        />
        <p>
          Get a full discount on the delivery price when you add this product to
          your cart.
        </p>
        <img
          src="https://booxtore.net/static/media/abstractBreakLine.bfbd04e93bb5ee712869fafad6614166.svg"
          alt="LeftSeparator"
          className="spImg"
        />
        <div id="horizHolder">
          <div id="priceLayout">
            <span>
              Price:&nbsp;
              <span style={{ fontWeight: "bold" }}>{pPrice} L.E</span>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
