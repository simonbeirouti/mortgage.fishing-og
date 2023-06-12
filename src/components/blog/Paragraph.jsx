import clsx from "clsx";

export default function Paragraph({ content, isSpace }) {
  return <p className={clsx({ "mt-6": !!isSpace })}>{content}</p>;
}
