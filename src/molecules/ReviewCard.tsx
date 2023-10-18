
interface Props {
  numberOfStars: number;
  reviewer: string;
  review: string;
}
const ReviewCard = ({ numberOfStars, review, reviewer }: Props) => {
  return (
    <div>
      <div className=" clas">
        <h4>{reviewer}</h4>
      </div>
      <div>
        <p>{review}</p>
      </div>
    </div>
  );
};

export default ReviewCard;
