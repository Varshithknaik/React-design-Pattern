import { useEffect } from "react";
import { fetchUsers } from "../api/usersApi";
import styled from "styled-components";
import React from "react";

import LazyLoader from "./lazy-loader";
import useApi from "../api/hooks/useApi";

const useFetchUsers = () => {
  const {
    data: users,
    exec: initFetchUsers,
    status: fetchUserStatus,
    isIdle: isFetchUsersStatusIdle,
    isError: isFetchUsersStatusError,
    isPending: isFetchUsersStatusPending,
    isSuccess: isFetchUsersStatusSuccess,
  } = useApi({ fn: () => fetchUsers().then((res) => res.data) });

  return {
    users,
    isFetchUsersStatusError,
    isFetchUsersStatusIdle,
    isFetchUsersStatusPending,
    isFetchUsersStatusSuccess,
    initFetchUsers,
    fetchUserStatus,
  };
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
  const { users, initFetchUsers, isFetchUsersStatusPending } = useFetchUsers();

  useEffect(() => {
    initFetchUsers();
  }, []);

  return (
    <Container>
      <FetchButton onClick={initFetchUsers}>
        <LazyLoader
          show={isFetchUsersStatusPending}
          delay={500}
          defaultValue="Fetch Users"
        />
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
