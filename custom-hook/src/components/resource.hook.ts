import { useEffect, useState } from "react";
import axios from "axios";

const useResource = <T>({ resourceUrl }: { resourceUrl: string }) => {
  const [resource, setResource] = useState<T | null>(null);

  useEffect(() => {
    (async () => {
      const response = await axios.get(resourceUrl);
      setResource(response.data);
    })();
  }, [resourceUrl]);

  return resource;
};

export default useResource;
