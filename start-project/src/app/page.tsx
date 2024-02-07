import { peopleList } from "@/data/peopleList";

function Page() {
  return (
    <div>
      <h1 className="font-bold text-2xl">Hello, World!</h1>
      <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>

      {peopleList.length > 0 && (
        <ul>
          {peopleList.map((person) => (
            <li key={person.id}>
              {person.name} - {person.profession}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Page;
