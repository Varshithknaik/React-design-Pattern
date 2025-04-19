import { useEffect, useState } from "react";
import { fetchUsers } from "../api/usersApi";
import styled from "styled-components";
import React from "react";
import { withAsync } from "../helper/with-async";
import { apiStatus } from "../constants/api.status";

const useFetchUsers = () => {
  const [users, setUsers] = useState<{ name: string; email: string }[]>([]);

  const [fetchUserStatus, setFetchUserStatus] = useState<string>(
    apiStatus.IDLE
  );
  const initFetchUsers = async () => {
    setFetchUserStatus(apiStatus.PENDING);

    const { response, error } = await withAsync(() => fetchUsers());

    if (error) {
      setFetchUserStatus(apiStatus.ERROR);
    } else if (response) {
      setFetchUserStatus(apiStatus.SUCCESS);
      setUsers(response.data);
    }
  };

  return { users, initFetchUsers, fetchUserStatus };
};

const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 2xl;
`;

const FlexContainer = styled.div`
  display: flex;
  gap: 2rem;
`;

const ContentContainer = styled.div`
  width: 50%;
`;

const UserName = styled.h1`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

const UserEmail = styled.h3`
  font-size: 1rem;
  color: #555555;
`;

const FetchButton = styled.button`
  margin-top: 1rem;
  background-color: #0053b3;
  color: #ffffff;
  padding: 1rem;
`;

const Users = () => {
  const { users, initFetchUsers, fetchUserStatus } = useFetchUsers();

  useEffect(() => {
    initFetchUsers();
  }, [initFetchUsers]);

  return (
    <Container>
      <FetchButton onClick={initFetchUsers}>
        {fetchUserStatus === apiStatus.PENDING ? "Loading..." : "Fetch Users"}
      </FetchButton>
      <FlexContainer>
        <ContentContainer>
          {users
            ? users.map((user, index) => (
                <React.Fragment key={index}>
                  <UserName>{user.name}</UserName>
                  <UserEmail>{user.email}</UserEmail>
                </React.Fragment>
              ))
            : null}
        </ContentContainer>
      </FlexContainer>
    </Container>
  );
};

export default Users;
