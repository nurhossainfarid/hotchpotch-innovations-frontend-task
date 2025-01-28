import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import Paragraph from "../ui/paragraph";
import Title from "../ui/title";

const ServiceContent = ({ oLeft, oRight, img, title, subtitle, btnText }) => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className={cn(`w-full order-${oLeft}`)}>
        <img src={img} className="" alt="" />
      </div>
      <div
        className={cn(
          `w-5/6 flex flex-col items-start justify-center gap-10 order-${oRight}`
        )}
      >
        <Title text={title} fontSize="3xl" />
        <Paragraph text={subtitle} />
        <Button className="text-white">{btnText}</Button>
      </div>
    </div>
  );
};

export default ServiceContent;
