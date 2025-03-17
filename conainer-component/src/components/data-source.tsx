import React from "react";
import { useEffect, useState } from "react";
import { IProps as UserIProps } from "./user-info";
import { BookProps } from "./book-info";

interface IProps {
  children: React.ReactElement<UserIProps | BookProps>;
  getData: () => any;
  resourceName: string;
}

const DataSource = ({ getData = () => {}, resourceName, children }: IProps) => {
  const [resource, setResource] = useState(null);

  useEffect(() => {
    (async () => {
      const data = await getData();
      setResource(data);

      console.log(data);
    })();
  }, [getData]);
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

export default DataSource;
