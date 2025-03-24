import { useEffect, useState } from "react";
import { UserProps } from "./user-info";
import axios from "axios";

const useUser = ({ userId }: { userId: number }) => {
  const [currentUser, setCurrentUser] = useState<UserProps | null>(null);

  useEffect(() => {
    (async () => {
      const response = await axios.get(`/api/users/${userId}`);
      setCurrentUser(response.data);
    })();
  }, [userId]);

  return currentUser;
};

export default useUser;
