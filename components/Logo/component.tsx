import { FC, HTMLAttributes } from "react";

type Props = HTMLAttributes<HTMLAnchorElement>;

export const Logo: FC<Props> = ({ className }: Props) => {
  return (
    <h1 className={className} style={{ fontSize: "33px" }}>
      HS
    </h1>
  );
};
