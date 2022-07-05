import { Link } from "react-router-dom";
import { privateHomePath, governmentHomePath } from "../../routes/Paths";
import { useDispatch } from "react-redux";

export default function Home() {
  const dispatch = useDispatch();

  return (
    <div>
      <nav>
        <Link
          onClick={() => dispatch({ type: "GOVERNMENT" })}
          to={governmentHomePath()}
        >
          government
        </Link>{" "}
        <Link
          onClick={() => dispatch({ type: "PRIVATE" })}
          to={privateHomePath()}
        >
          private
        </Link>
      </nav>
    </div>
  );
}
