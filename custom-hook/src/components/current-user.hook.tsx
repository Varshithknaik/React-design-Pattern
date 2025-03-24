import { useEffect, useState } from "react";
import { UserProps } from "./user-info";
import axios from "axios";

const useCurrentUser = () => {
  const [currentUser, setCurrentUser] = useState<UserProps | null>(null);

  useEffect(() => {
    (async () => {
      const response = await axios.get("/api/current-user");
      setCurrentUser(response.data);
    })();
  }, []);

  return currentUser;
};

export default useCurrentUser;
