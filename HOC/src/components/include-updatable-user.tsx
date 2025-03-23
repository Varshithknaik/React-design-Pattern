/* eslint-disable @typescript-eslint/no-explicit-any */
import { ComponentType, JSX, useEffect, useState } from "react";
import { UserProps } from "./user-info";
import axios from "axios";

interface IncludeUpdatableUserProps {
  Component: ComponentType<
    React.PropsWithChildren<{
      user: UserProps;
      initialUser: UserProps;
      onChangeUser: (updates: Partial<UserProps>) => void;
      onPostUser: () => void;
      onResetUser: () => void;
    }>
  >;
  userId: string;
}

const includeUpdatableUser = ({
  Component,
  userId,
}: IncludeUpdatableUserProps) => {
  return (props: JSX.IntrinsicAttributes) => {
    const [initialUser, setInitialUser] = useState<any>(null);
    const [user, setUser] = useState<any>(null);

    useEffect(() => {
      (async () => {
        const response = await axios.get(`/api/users/${userId}`);
        setInitialUser(response.data);
        setUser(response.data);
      })();
    }, []);

    const onChangeUser = (updates: Partial<UserProps>) => {
      setUser({ ...user, ...updates });
    };

    const onPostUser = async () => {
      const response = await axios.post(`api/users/${userId}`, { user });
      setUser(response.data);
      setInitialUser(response.data);
    };

    const onResetUser = () => {
      setUser(initialUser);
    };

    return (
      <Component
        {...props}
        user={user}
        initialUser={initialUser}
        onChangeUser={onChangeUser}
        onPostUser={onPostUser}
        onResetUser={onResetUser}
      />
    );
  };
};
export default includeUpdatableUser;
