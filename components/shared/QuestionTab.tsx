import { getUserQuestions } from "@/lib/actions/user.action";
import { SearchParamsProps } from "@/types";
import React from "react";
import QuestionCard from "../cards/QuestionCard";
import Pagination from "./Pagination";

interface Props extends SearchParamsProps {
  userId: string;
  clerkId: string | null;
}

const QuestionTab = async ({ searchParams, userId, clerkId }: Props) => {
  const resolvedSearchParams = await searchParams;

  const { page: pageStr } = resolvedSearchParams || {};
  const page = pageStr ? +pageStr : 1;

  const result = await getUserQuestions({
    userId,
    page,
  });

  return (
    <>
      {result.questions.map((question) => (
        <QuestionCard
          key={question._id}
          _id={question._id}
          clerkId={clerkId}
          title={question.title}
          tags={question.tags}
          author={question.author}
          upvotes={question.upvotes}
          views={question.views}
          answers={question.answers}
          createdAt={question.createdAt}
        />
      ))}

      <div className="mt-10">
        <Pagination pageNumber={page} isNext={result.isNextQuestions} />
      </div>
    </>
  );
};

export default QuestionTab;
