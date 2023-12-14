import React, { useEffect, useState } from "react";

export const WithLoading =
  (Component, LoadingComponent, getData) => (props) => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState();
    useEffect(() => {
      setLoading(true);
      getData()
        .then((res) => setData(res))
        .finally(() => setLoading(false));
    }, []);
    if (loading) {
      return <LoadingComponent />;
    }
    return <Component data={data} {...props} />;
  };
