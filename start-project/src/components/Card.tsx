import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const Card = ({ children }: Props) => {
  return (
    <div className="border-2 border-green-600 p-3 text-3xl text-center italic">
      {children}
    </div>
  );
};
