import { Link ,useParams} from "react-router-dom";
import { privateHomePath, governmentHomePath } from "../../routes/Paths";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { Login } from "../../networking/loginApi";

export default function Home() {
  const dispatch = useDispatch();
  const { id } = useParams() ;
let data={
    code: id
  }
useEffect(()=>{
  Login(data).then((response) => {
    let data=response.data
     console.log(data);
  })
  .catch((e) => {
    console.log(e);
  })
})
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
