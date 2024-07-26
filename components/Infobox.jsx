const infoCards = [
  {
    id: 1,
    cardTitle: "Simplified Gift-Giving and Receiving",
    cardContent:
      "Easily create and share wishlists for any occasion, ensuring friends and family pick the perfect gift every time.",
  },
  {
    id: 2,
    cardTitle: "Enhanced Organization and Planning",
    cardContent:
      "Keep track of all your desired items in one place, categorized and prioritized for easy planning and monitoring.",
  },
  {
    id: 3,
    cardTitle: "Social and Collaborative",
    cardContent:
      "Engage with friends and family through shared wishlists, comments, and social media integration for a fun, interactive experience.",
  },
];

const Infobox = () => {
  return (
    <section className="p-10 ">
      <h1 className="flex justify-center text-2xl font-bold mb-5 ">
        Why giftaway?
      </h1>
      <div className="flex justify-center items-center container-xl lg:container m-auto gap-3 ">
        {infoCards.map((info) => {
          return (
            <>
              <div
                key={info.id}
                className="flex flex-col justify-center items-center bg-orange-50 rounded-xl p-10"
              >
                <h1 className="font-bold">{info.cardTitle}</h1>
                <p>{info.cardContent}</p>
              </div>
            </>
          );
        })}
      </div>
    </section>
  );
};

export default Infobox;
