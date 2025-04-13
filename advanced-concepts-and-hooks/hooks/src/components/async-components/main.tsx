import { Await, useLoaderData } from "react-router";
import { MainContainer, MainHeading } from "./styled-elements";
import delay from "../util/delay";
import { Suspense } from "react";

const Main = () => {
  const data = useLoaderData();

  return (
    <MainContainer>
      <MainHeading>
        Main -
        <Suspense fallback={<p>Fetching...</p>}>
          <Await resolve={data}>{data}</Await>
        </Suspense>
      </MainHeading>
    </MainContainer>
  );
};

async function loader() {
  return await delay("Fetched Data", 2000);
}

export const mainRoute = { element: <Main />, loader };
