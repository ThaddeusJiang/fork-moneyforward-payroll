type Props = {
  children: React.ReactNode;
};

const MainContent = ({ children }: Props) => {
  return (
    <main className="ml-[30px] my-5 w-[1000px]  min-h-screen">{children}</main>
  );
};

export default MainContent;
