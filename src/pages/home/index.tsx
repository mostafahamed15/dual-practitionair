/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { Login } from '../../services/loginApi';

export default function Home() {
  const { id } = useParams();
  const [role, setRole] = useState<any>();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<any>(false);
  const [errorMessage, setErrorMessage] = useState('');
  const redirect =
    role && role === '983' ? (
      <Navigate to="/private/home" replace={true} />
    ) : (
      <Navigate to="/government/home" replace={true} />
    );

  // eslint-disable-next-line react-hooks/exhaustive-deps
  let data = {
    code: id,
  };
  useEffect(() => {
    Login(data)
      .then((response) => {
        let data = response.data.data;
        localStorage.setItem('token', data.ticket);
        localStorage.setItem('role', data.role);
        sessionStorage.setItem('re', 'ddd');
        setRole(data.role);
        setLoading(false);
      })
      .catch((e) => {
        setError(true);
        setLoading(false);
        setErrorMessage(e.response.data.message || 'Server Error');
      });
  }, [data]);
  return (
    <>
      {loading ? (
        <h3>Loading..</h3>
      ) : error ? (
        <h6 style={{ color: 'red' }}>{errorMessage}</h6>
      ) : (
        redirect
      )}
    </>
  );
}
