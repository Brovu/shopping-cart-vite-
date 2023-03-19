import { Button, Card } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { FormatCurrency } from "../utilities/formatCurrency";

type StoreItemsProp = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

export const StoreItems = ({ id, name, price, imgUrl }: StoreItemsProp) => {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();
  const quantity = getItemQuantity(id);
  return (
    <Card>
      <Card.Img
        variant="top"
        height="200px"
        src={imgUrl}
        style={{ objectFit: "cover" }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between mb-4 align-items-baseline">
          <span className="fs-2">{name}</span>
          <span className="ms-2 text-muted">{FormatCurrency(price)}</span>
        </Card.Title>
        {quantity === 0 ? (
          <Button className="w-100" onClick={() => increaseCartQuantity(id)}>
            + Add to Cart
          </Button>
        ) : (
          <div
            className="d-flex flex-column align-items-center justify-content-center"
            style={{ gap: "0.5rem" }}
          >
            <div
              className="d-flex align-items-center justify-content-center"
              style={{ gap: "0.5rem" }}
            >
              <Button onClick={() => decreaseCartQuantity(id)}>-</Button>
              <div>
                <span className="fs-3">{quantity}</span> in cart
              </div>
              <Button onClick={() => increaseCartQuantity(id)}>+</Button>
            </div>
            <Button
              variant="danger"
              size="sm"
              onClick={() => removeFromCart(id)}
            >
              Remove
            </Button>
          </div>
        )}
      </Card.Body>
    </Card>
  );
};
