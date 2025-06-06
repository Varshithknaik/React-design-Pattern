import { ReviewsContainer } from "./styled-elements";

const Reviews = () => {
  return (
    <ReviewsContainer>
      <ul>
        {Array(300)
          .fill("")
          .map((_, i) => (
            <Review key={i} index={i} />
          ))}
      </ul>
    </ReviewsContainer>
  );
};

const Review = ({ index }: { index: number }) => {
  const init = performance.now();
  while (init > performance.now() - 10) {
    // Fake slow down.
  }
  return <li>Review #{index}</li>;
};

export default Reviews;
