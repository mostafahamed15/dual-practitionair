import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
interface TableButtonProps {
  status: string;
  variant:(status:string) => string,
  navigationPath:(status:string) => string
}
export default function TableButton({ status,variant,navigationPath }: TableButtonProps) {
  const navigate = useNavigate();
  const orderStatus=status!
  return (
    <Button
      className="fw-bold px-3 my-2"
      size="sm"
      variant={variant(orderStatus)}
      onClick={() => navigate(navigationPath(orderStatus))}
    >
      {status}
    </Button>
  );
}
