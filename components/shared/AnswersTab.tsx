import { getUserAnswers } from "@/lib/actions/user.action";
import { SearchParamsProps } from "@/types";
import AnswerCard from "../cards/AnswerCard";
import Pagination from "./Pagination";

interface Props extends SearchParamsProps {
  userId: string;
  clerkId: string | null;
}

const AnswersTab = async ({ searchParams, userId, clerkId }: Props) => {
  const safeSearchParams = (await searchParams) || {};
  const page = safeSearchParams.page ? +safeSearchParams.page : 1;

  const result = await getUserAnswers({
    userId,
    page,
  });

  return (
    <>
      {result.answers.map((item) => (
        <AnswerCard
          key={item._id}
          clerkId={clerkId}
          _id={item._id}
          question={item.question}
          author={item.author}
          upvotes={item.upvotes.length}
          createdAt={item.createdAt}
        />
      ))}

      <div className="mt-10">
        <Pagination pageNumber={page} isNext={result.isNextAnswer} />
      </div>
    </>
  );
};

export default AnswersTab;
