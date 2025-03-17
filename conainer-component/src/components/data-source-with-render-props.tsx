import { ReactElement, useEffect, useState } from "react";

interface IProps {
  getData: () => any;
  render: (resource: any) => ReactElement;
}

const DataSourceRenderProps = ({ getData = () => {}, render }: IProps) => {
  const [resource, setResource] = useState(null);

  useEffect(() => {
    (async () => {
      const data = await getData();
      setResource(data);

      console.log(data);
    })();
  }, [getData]);
  return render(resource);
};

export default DataSourceRenderProps;
