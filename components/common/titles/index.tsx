type TitlesProps = {
  title: string;
};

export const H1 = ({ title }: TitlesProps) => {
  return <h1 className="font-spline-sans text-6xl font-medium text-secondary">{title}</h1>;
};
