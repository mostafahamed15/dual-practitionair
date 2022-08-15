import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Status } from "../../core/enums/Enum";
import { createEditOrderPath } from "../../routes/Paths";
import { acceptOrderPath } from "../../routes/Paths";
import { cancelOrderPath,rejectOrderPath } from "../../routes/Paths";

interface TableButtonProps {
  status: string;
}

export default function TableButton({ status }: TableButtonProps) {
  const navigate = useNavigate();

  const variant = (): string => {
    if (status === Status.ACCEPTED) return "outline-primary";
    else if (status === Status.CANCELLED  ) return "outline-danger";
    else if (status === Status.NEW) return "outline-secondary";
    else if (status === Status.Waiting) return "outline-info";
    else if (status === Status.Rejected) return "outline-reject";
    else return "outline-gray-800";
  };
  
  const navigationPath = (): string => {
    if (status === Status.ACCEPTED) return acceptOrderPath();
    else if (status === Status.CANCELLED) return cancelOrderPath();
    else if (status === Status.NEW) return createEditOrderPath();
    else if (status === Status.Rejected) return rejectOrderPath();
    else return "#";
  };

  return (
    <Button
      className="fw-bold w-75 my-2"
      size="sm"
      variant={variant()}
      onClick={() => navigate(navigationPath())}
    >
      {status}
    </Button>
  );
}
