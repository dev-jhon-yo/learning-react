import { Card } from "@/components/Card";

function Page() {
  return (
    <div>
      <h1 className="font-bold text-2xl">Hello, World!</h1>
      <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>

      <Card
        phrase="Lorem ipsum dolor sit amet consectetur adipisicing elit."
        // author="Jhon Doe"
      />
    </div>
  );
}

export default Page;
