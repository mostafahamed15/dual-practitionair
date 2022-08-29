import { Link, useParams } from 'react-router-dom';
import { privateHomePath, governmentHomePath } from '../../routes/Paths';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { Login } from '../../networking/loginApi';

export default function Home() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [error, setError] = useState<boolean>(false);
  let data = {
    code: id,
  };
  useEffect(() => {
    Login(data)
      .then((response) => {
        let data = response.data;
        localStorage.setItem('token', data.ticket);
        console.log(data);
        setError(false);
      })
      .catch((e) => {
        setError(true);
        console.log(e);
      });
  });
  return (
    <>
      {!error ? (
        <div>
          <nav>
            <Link
              onClick={() => dispatch({ type: 'GOVERNMENT' })}
              to={governmentHomePath()}
            >
              government
            </Link>{' '}
            <Link
              onClick={() => dispatch({ type: 'PRIVATE' })}
              to={privateHomePath()}
            >
              private
            </Link>
          </nav>
        </div>
      ) : (
        <div>error</div>
      )}
    </>
  );
}
