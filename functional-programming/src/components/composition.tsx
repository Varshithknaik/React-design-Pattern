/* eslint-disable @typescript-eslint/no-explicit-any */
const Button = ({ size, color, text, ...props }: any) => {
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

export default Button;

export const RedButton = (props: any) => {
  return <Button {...props} color="red" />;
};

export const GreenSmallButton = (props: any) => {
  return <Button {...props} size="small" color="green" />;
};
