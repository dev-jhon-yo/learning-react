type Props = {
  name: string;
  avatar: string;
  misc: string[];
};

export const Person = ({ name, avatar, misc }: Props) => {
  return (
    <div className="p-3">
      <h1>{name}</h1>
      <img src={avatar} alt={name} className="w-60" />
      <ul>
        <li>Twitter: {misc[0]}</li>
        <li>Website: {misc[1]}</li>
      </ul>
    </div>
  );
};
