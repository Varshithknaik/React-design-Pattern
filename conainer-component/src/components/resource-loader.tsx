import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { UserProps, IProps as UserIProps } from "./user-info";
import { BookProps } from "./book-info";

interface IProps {
  children: React.ReactElement<UserIProps | BookProps>;
  resourceUrl: string;
  resourceName: string;
}

const ResourceLoader = ({ resourceUrl, resourceName, children }: IProps) => {
  const [resource, setResource] = useState<UserProps | BookProps | null>(null);

  useEffect(() => {
    (async () => {
      const response = await axios.get<UserProps | BookProps>(
        `/api/${resourceUrl}`
      );
      setResource(response.data);

      console.log(response.data);
    })();
  }, [resourceUrl]);
  return (
    <>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { [resourceName]: resource });
        }
        return child;
      })}
    </>
  );
};

export default ResourceLoader;
