/* eslint-disable @typescript-eslint/no-explicit-any */
const partialComponent = ({ Component, partialProps }: any) => {
  return (props: any) => {
    return <Component {...partialProps} {...props} />;
  };
};

export const Button = ({ size, color, text, ...props }: any) => {
  return (
    <button
      style={{
        fontSize: size === "small" ? "8px" : "32px",
        backgroundColor: color,
      }}
      {...props}
    >
      {text}
    </button>
  );
};

export const RedButton = partialComponent({
  Component: Button,
  partialProps: {
    color: "red",
  },
});

export const SmallRedButton = partialComponent({
  Component: RedButton,
  partialProps: {
    size: "small",
  },
});
