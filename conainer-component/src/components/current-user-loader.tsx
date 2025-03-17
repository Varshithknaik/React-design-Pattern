import axios from "axios";
import React from "react";
import { ReactNode, useEffect, useState } from "react";
import { UserProps, IProps as UserIProps } from "./user-info";

interface IProps {
  children: React.ReactElement<UserIProps>;
}

const CurrentUserLoader = ({ children }: IProps) => {
  const [user, setUser] = useState<UserProps | null>(null);

  useEffect(() => {
    (async () => {
      const response = await axios.get<UserProps>("/api/current-user");
      setUser(response.data);

      console.log(response.data);
    })();
  }, []);
  return (
    <>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { user });
        }
        return child;
      })}
    </>
  );
};

export default CurrentUserLoader;
