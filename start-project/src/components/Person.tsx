const getWeekday = (today: Date) => {
  return new Intl.DateTimeFormat("en", { weekday: "long" }).format(today);
};

export const Person = () => {
  const data = {
    name: "Nyan Cat",
    avatar:
      "https://media.discordapp.net/attachments/1184173326537588806/1204427270639452230/Collection11-20.gif?ex=65d4b14e&is=65c23c4e&hm=cd8bb8e65341330c50201d711d38f73ad0a011b1c2a292e5fd7a2fe49dd5a734&=",
    misc: ["@NyanCat", "https://www.nyan.cat"],
  };

  const today: Date = new Date();

  return (
    <>
      <h1>
        {data.name} - {getWeekday(today)}
      </h1>
      <img src={data.avatar} alt={data.name} className="w-60" />
      <ul>
        <li>Twitter: {data.misc[0]}</li>
        <li>Website: {data.misc[1]}</li>
      </ul>
    </>
  );
};
