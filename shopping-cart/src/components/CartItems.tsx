import { Button, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import storeItems from "../data/items.json";
import { FormatCurrency } from "../utilities/formatCurrency";

interface CartItemsProps {
  id: number;
  quantity: number;
}

const CartItems = ({ id, quantity }: CartItemsProps) => {
  const { removeFromCart } = useShoppingCart();
  const item = storeItems.find((i) => i.id === id);
  if (item === null) return null;
  return (
    <Stack direction="horizontal" gap={2}>
      <img
        src={item?.imgUrl}
        alt="Product's picture"
        style={{ width: "125px", height: "75px", objectFit: "cover" }}
      />
      <div className="me-auto">
        <div>
          {" "}
          {item?.name}
          {quantity > 1 && (
            <span
              className="text-muted"
              style={{ fontSize: "1rem", marginLeft: "5px" }}
            >
              x{quantity}
            </span>
          )}
        </div>
        <div className="text-muted">{FormatCurrency(item?.price || 0)}</div>
      </div>
      <div>{FormatCurrency((item?.price || 0) * quantity)}</div>
      <Button
        variant="outline-danger"
        size="sm"
        onClick={() => removeFromCart(item?.id || 0)}
      >
        &times;
      </Button>
    </Stack>
  );
};

export default CartItems;
