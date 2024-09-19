interface Props {
  title: string;
}

export const Glitch = ({ title }: Props) => {
  return (
    <div className="glitch" title={title}>
      <p>{title}</p>
    </div>
  );
};
