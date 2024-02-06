type Props = {
  phrase: string;
  author?: string;
};

export const Card = ({ phrase, author }: Props) => {
  return (
    <div className="border-2 border-green-600 p-3 text-3xl text-center italic">
      <h3 className="text-3xl font-bold italic">"{phrase}"</h3>
      {author && (
        <p className="text-right text-sm italic text-emerald-400">- {author}</p>
      )}
      {!author && (
        <p className="text-right text-sm text-color text-pink-500">- Unknown</p>
      )}
    </div>
  );
};
