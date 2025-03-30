import { useEffect, useState } from "react";

interface DataSourceProp<T> {
  getData: () => Promise<T> | T;
}

const useDataSource = <T>({ getData }: DataSourceProp<T>) => {
  const [resource, setResource] = useState<T | null>(null);
  useEffect(() => {
    (async () => {
      const data = await getData();
      setResource(data);
    })();
  }, [getData]);

  return resource;
};

export default useDataSource;
