// eslint-disable-next-line @typescript-eslint/no-explicit-any
const delay = (data: any, interval: number) => {
  return new Promise((res) => {
    setTimeout(() => {
      res(data);
    }, interval);
  });
};

export default delay;
