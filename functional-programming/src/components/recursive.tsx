/* eslint-disable @typescript-eslint/no-explicit-any */
const isObject = (data: unknown) => typeof data === "object" && data !== null;

const RecursiveComponent = ({ data }: { data: any }) => {
  if (!isObject(data)) {
    return <li>{data}</li>;
  }

  const pairs = Object.entries(data);

  return (
    <>
      {pairs.map(([key, value]) => {
        console.log(value);
        return (
          <ul key={key} style={{ paddingLeft: "20px" }}>
            {key}: <RecursiveComponent data={value} key={key} />
          </ul>
        );
      })}
    </>
  );
};

export default RecursiveComponent;
