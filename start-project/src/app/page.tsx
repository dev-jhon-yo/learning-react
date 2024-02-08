import { StudentTable } from "@/components/StudentTable";
import { students } from "@/data/students";

function Page() {
  return (
    <div className="container mx-auto ">
      <h1 className="text-5xl mb-5 font-bold uppercase">Student List</h1>
      <StudentTable students={students} />
    </div>
  );
}

export default Page;
