import { Card } from "@/components/Card";
import { Person } from "@/components/Person";

function Page() {
  return (
    <div>
      <h1 className="font-bold text-2xl">Hello, World!</h1>
      <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>

      <Card>
        <>
          <h3 className="text-3xl font-bold italic">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h3>
          <p className="text-right text-sm">- JhoN Doe</p>
        </>
      </Card>
    </div>
  );
}

export default Page;
