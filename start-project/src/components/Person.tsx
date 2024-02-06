type Props = {
  name: string;
  avatar?: string;
  misc: string[];
};

export const Person = ({
  name,
  avatar = "https://media.discordapp.net/attachments/1184173326537588806/1204440561767940177/No_Image_345x2x.png?ex=65d4bdaf&is=65c248af&hm=ccd213b7cd8cbc9d85eab89cfaf691ce0b09e6190747f3feabb31fa5db1d89cf&=&format=webp&quality=lossless",
  misc,
}: Props) => {
  return (
    <div className="p-3">
      <h1>{name}</h1>
      <img src={avatar} alt={name} className="w-40" />
      <ul>
        <li>Twitter: {misc[0]}</li>
        <li>Website: {misc[1]}</li>
      </ul>
    </div>
  );
};
