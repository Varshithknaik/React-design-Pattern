const DisplayMousePosition = ({ x, y }: { x: number; y: number }) => {
  return (
    <section className="absolute-section">
      <p>
        <span className="bold-span">X</span>: {x}
      </p>
      <p>
        <span className="bold-span">Y</span>: {y}
      </p>
    </section>
  );
};

export default DisplayMousePosition;
