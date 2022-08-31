import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getServiceCode, getStatus } from '../../store/actions';

interface TableButtonProps {
  serviceCode: string;
  status: string;
  variant:(status:string) => string,
  navigationPath:(status:string) => string
}

export default function TableButton({
  status,
  serviceCode,
  variant,
  navigationPath,
}: TableButtonProps) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const orderStatus=status!
  return (
    <Button
      className="fw-bold px-3  w-sm-100 my-2"
      size="sm"
      variant={variant(orderStatus)}
      onClick={() => {
        dispatch(getServiceCode(serviceCode));
        dispatch(getStatus(orderStatus));
        navigate(navigationPath(orderStatus));
        
      }}

    >
      {status}
    </Button>
  );
}
