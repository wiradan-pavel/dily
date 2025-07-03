import Layout from "./Layout";

const PagesLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="ru">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
};

export default PagesLayout;
