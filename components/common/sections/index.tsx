type MaxWidthProps = {
  children: React.ReactNode;
};

export const MaxWidth = ({ children }: MaxWidthProps) => {
  return <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">{children}</div>;
};
