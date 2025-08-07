import Header from "@/components/Header";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <div>{children}</div>
    </>
  );
};

export default layout;
