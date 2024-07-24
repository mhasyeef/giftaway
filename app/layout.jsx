import "@/assets/styles/globals.css";

export const metadata = {
  title: "Giftaway",
  description: "Start gifting",
  keywords: "gifts, wishlist, present, gift ideas",
};

const MainLayout = ({ children }) => {
  return (
    <html>
      <body>
        <div>{children}</div>
      </body>
    </html>
  );
};

export default MainLayout;
