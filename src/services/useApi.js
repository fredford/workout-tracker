import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

const useApi = (service, params = []) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const fetchApi = () => {
    service(...params)
      .then((response) => {
        if (response.status === 200 || response.status === 201) {
          setLoading(false);
          setData(response.data.data);
        }
      })
      .catch((error) => {
        setError(error.response.status);
        if (error.response.status === 401) {
          navigate("/startup");
        } else if (error.response.status !== 404) {
          console.log(error);
        }
      });
  };

  useEffect(() => {
    fetchApi();
  }, [...params]);

  return { loading, data, error };
};

export default useApi;
