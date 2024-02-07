import { peopleList } from "@/data/peopleList";

function Page() {
  const developer = peopleList.filter(
    (person) => person.profession === "developer"
  );

  return (
    <div>
      <h1 className="font-bold text-2xl">Hello, World!</h1>
      <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>

      {developer.length > 0 && (
        <>
          <h3>DEVELOPER LIST FILTER</h3>
          <ul>
            {developer.map((person) => (
              <li key={person.id}>{person.name}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

export default Page;
