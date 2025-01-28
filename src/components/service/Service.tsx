import { toolData } from "@/constants";
import Result1 from "../../assets/result1.png";
import Result2 from "../../assets/result2.png";
import { Button } from "../ui/button";
import Paragraph from "../ui/paragraph";
import Title from "../ui/title";

const Service = () => {
  return (
    <div
      className="flex flex-col items-center justify-center gap-16 mx-auto py-10"
      style={{ width: "1300px" }}
    >
      <div className="flex flex-col md:flex-row mx-auto justify-evenly">
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
      <div className="flex flex-col md:flex-row items-center justify-center mx-auto pl-16">
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
      <div className="flex flex-col items-center justify-center gap-16">
        <div className="flex flex-col items-center justify-center gap-5">
          <Title text="54 exciting writing tools" fontSize="2xl" />
          <Paragraph
            text={
              "AI engines take information from various sources and read them like a human would do."
            }
            width="60%"
            textAlign="center"
          />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {toolData.map((tool) => (
            <div
              key={tool.id}
              className="flex justify-center items-start gap-5"
              style={{
                backgroundColor: "#282A37",
                padding: "16px",
                borderRadius: "10px",
              }}
            >
              <img src={tool.img} alt={tool.title} />
              <div className="flex flex-col gap-2">
                <Title text={tool.title} fontSize="base" />
                <Paragraph text={tool.description} fontSize="xs" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
