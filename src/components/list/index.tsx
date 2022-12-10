import { PhosphorLogo } from "phosphor-react";
import { ReactNode } from "react";
import { Main } from "./styles";

interface ListProps {
  title?: string;
  content?: string;
  icon?: ReactNode;
  spanColor: string;
  iconColor: string;
};

export default function List({ title, content, icon, spanColor, iconColor }: ListProps) {
  return (
    <Main spanColor={spanColor} iconColor={iconColor}>
      <span>
        {icon}
      </span>
      <div>
        <h2>{title}</h2>
        <p>{content}</p>
      </div>
    </Main>
  )
}