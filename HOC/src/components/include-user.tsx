/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { ComponentType, useEffect, useState } from "react";
import { UserProps } from "./user-info";

interface UserInfoWithLoaderProps {
  test: string;
  b: string;
  c: number;
}

interface IncludeUserProps {
  Component: ComponentType<React.PropsWithChildren<{ user: UserProps }>>;
  userId: string;
}

const includeUser = ({ Component, userId }: IncludeUserProps) => {
  return (props: UserInfoWithLoaderProps) => {
    const [user, setUser] = useState<any>(null);

    useEffect(() => {
      (async () => {
        const response = await axios.get(`/api/users/${userId}`);
        setUser(response.data);
      })();
    }, []);

    return <Component {...props} user={user} />;
  };
};

export default includeUser;
