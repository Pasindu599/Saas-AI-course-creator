import { getAuthSession } from "@/lib/auth";
import { redirect } from "next/navigation";
import React from "react";
import { InfoIcon } from "lucide-react";
import CreateCourseForm from "@/components/CreateCourseForm";

type Props = {};

async function CreatePage({}: Props) {
  const session = await getAuthSession();

  if (!session) {
    return redirect("/gallery");
  }

  return (
    <div className="flex flex-col items-start max-w-xl px-8 mx-auto pt-20  sm:px-0">
      <h1 className="self-center text-3xl font-bold text-center sm:text-6xl">
        Learning Journey
      </h1>
      <div className="flex p-4 mt-5 border-none bg-secondary">
        <InfoIcon className="w-12 h-12 mr-3 text-blue-400" />
        <div>
          Enter in a course title, or what you want to learn about. Then enter a
          list of units, which are the specifics you want to learn. And our AI
          will generate a course for you!
        </div>
      </div>

      <CreateCourseForm />
    </div>
  );
}

export default CreatePage;
