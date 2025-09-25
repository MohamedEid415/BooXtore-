import { useLoaderData, useNavigate, useSearchParams } from "react-router-dom";
import Card from "../../Components/ProductCard/Card";
import API from "../../Instance/Instance";
import "./products.css";
export default function Products() {
  const nav = useNavigate();
  const [searchParams] = useSearchParams();
  const skipVariable = Number(searchParams.get("skip"));
  const handlePrev = () => {
    // console.log(skipVariable);

    if (skipVariable !== 0) {
      nav(`?skip=${skipVariable - 3}`);
    }
  };
  const handleNext = () => {
    // console.log(skipVariable);
    if (skipVariable < 48) {
      nav(`?skip=${Math.max(skipVariable + 3, 0)}`);
    }
  };
  type productSettings = {
    id: number;
    title: string;
    price: number;
    quantity: number;
    total: number;
    discountPercentage: number;
    discountedPrice: number;
    thumbnail: string;
  };
  type cartSettings = {
    id: number;
    userId: number;
    products: productSettings[];
    total: number;
    discountedTotal: number;
    totalProducts: number;
    totalQuantity: number;
  };

  const { carts } = useLoaderData<{ carts: cartSettings[] }>();
  const cardsList = carts.flatMap((cart) =>
    cart.products.map((prdObj) => (
      <Card
        key={prdObj.id}
        pImg={prdObj.thumbnail}
        pTitle={prdObj.title}
        pDiscountPercentage={prdObj.discountPercentage}
        pPrice={prdObj.price}
      />
    ))
  );
  return (
    <>
      <div id="productsLayout">
        <div id="cardsLayoutInProductPage">{cardsList}</div>
        <div id="paginationLayout">
          <button
            disabled={skipVariable === 0}
            className="sameBtnsLayoutStyle"
            id="prev"
            onClick={() => {
              handlePrev();
            }}
          >
            <span>Previous</span>
          </button>
          <button
            className="sameBtnsLayoutStyle"
            id="next"
            onClick={() => {
              handleNext();
            }}
          >
            <span>Next</span>
          </button>
        </div>
      </div>
    </>
  );
}
export async function PostsLoader({ request }: { request: Request }) {
  const url = new URL(request.url);
  const skip = Number(url.searchParams.get("skip")) || 0;
  const res = await API.get("/carts", {
    params: {
      limit: 3,
      skip: skip,
    },
  });
  return res.data;
}
