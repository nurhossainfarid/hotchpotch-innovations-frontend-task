import Result1 from "../../assets/result1.png";
import Result2 from "../../assets/result2.png";
import { Button } from "../ui/button";
import Paragraph from "../ui/paragraph";
import Title from "../ui/title";

const Service = () => {
  return (
    <div
      className="flex flex-col items-center justify-center mx-auto py-10"
      style={{ width: "1200px" }}
    >
      <div className="flex flex-col md:flex-row items-center justify-center mx-auto">
        <div className="w-full">
          <img src={Result1} className="" alt="" />
        </div>
        <div className="w-5/6 flex flex-col items-start justify-center gap-10">
          <Title
            text={
              "Create content efficiently and quickly with great AI writing tools"
            }
            fontSize="3xl"
          />
          <Paragraph
            text={
              "150k+ users. No Credit Card Required. Pro designs and writing at no cost. Start for free. Ai Writer Tool | Generate text for ecom, social media, website, sales, blogs etc."
            }
          />
          <Button className="text-white">Start 14 Days Free Trial</Button>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center mx-auto">
        <div className="w-full order-2">
          <img src={Result2} className="" alt="" />
        </div>
        <div className="w-5/6 flex flex-col items-start justify-center gap-10 order-1">
          <Title
            text={
              "Write what you want to convey through clear, & authentic writing"
            }
            fontSize="3xl"
          />
          <Paragraph
            text={
              "AI-Writer is the most accurate content generation platform and writing tool that helps you transform your text into a completely personalized."
            }
          />
          <Button className="text-white">Start 14 Days Free Trial</Button>
        </div>
      </div>
    </div>
  );
};

export default Service;
