import { useLoaderData } from "react-router";
import { MainContainer, MainHeading } from "./styled-elements";
import delay from "../util/delay";

const Main = () => {
  const data = useLoaderData();

  return (
    <MainContainer>
      <MainHeading>Main - {data}</MainHeading>
    </MainContainer>
  );
};

async function loader() {
  return await delay("Fetched Data", 1000);
}

export const mainRoute = { element: <Main />, loader };
