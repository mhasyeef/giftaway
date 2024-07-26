import { Button } from "@/components/ui/button";

export function ButtonDemo() {
  return <Button>Button</Button>;
}

const Hero = () => {
  return (
    <section className="bg-teal-500 py-20 ">
      <div className="flex flex-col items-center ">
        <div className="lg:px-80 text-center">
          <h1 className="text-4xl font-extrabold text-orange-100">
            Create and share your wishlists to simplify gift-giving!
          </h1>
          <h1 className="font-bold text-orange-100 mt-5">
            Whether it's for a special occasion or just because, make sure you
            and your loved ones never miss out on the perfect gift.
          </h1>
          <Button className="text-orange-100 bg-teal-700 mt-5">Try now!</Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
