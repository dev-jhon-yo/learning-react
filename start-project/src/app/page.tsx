import { Person } from "@/components/Person";

function Page() {
  return (
    <div>
      <h1 className="font-bold text-2xl">Hello, World!</h1>
      <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>

      <Person
        name="Nyan Cat"
        avatar="https://media.discordapp.net/attachments/1184173326537588806/1204427270639452230/Collection11-20.gif?ex=65d4b14e&is=65c23c4e&hm=cd8bb8e65341330c50201d711d38f73ad0a011b1c2a292e5fd7a2fe49dd5a734&="
        misc={["@NyanCat", "https://www.nyan.cat"]}
      />
      <Person name="Pepe the Frog" misc={["@Pepe", "https://www.pepe.com"]} />
      <Person
        name="Doge"
        avatar="https://media.discordapp.net/attachments/1184173326537588806/1204436140522864701/shaking-doge.gif?ex=65d4b991&is=65c24491&hm=d0aa8978f4b987b1f0845b6291332ebb404d248095fb37aa92b5cb7f40949385&="
        misc={["@Doge", "https://www.doge.com"]}
      />
    </div>
  );
}

export default Page;
