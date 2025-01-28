import ServiceContent from "./ServiceContent";
import Result1 from "../../assets/result1.png";
import Result2 from "../../assets/result2.png";

const Service = () => {
  return (
    <div
      className="flex flex-col items-center justify-center mx-auto py-10"
      style={{ width: "1200px" }}
    >
      <ServiceContent
        oLeft={"1"}
        oRight={"2"}
        img={Result1}
        title={
          "Create content efficiently and quickly with great AI writing tools"
        }
        subtitle={
          "150k+ users. No Credit Card Required. Pro designs and writing at no cost. Start for free. Ai Writer Tool | Generate text for ecom, social media, website, sales, blogs etc."
        }
        btnText={"Start 14 Days Free Trial"}
      />
      <ServiceContent
        oLeft={"2"}
        oRight={"1"}
        img={Result2}
        title={
          "Write what you want to convey through clear, & authentic writing"
        }
        subtitle={
          "AI-Writer is the most accurate content generation platform and writing tool that helps you transform your text into a completely personalized."
        }
        btnText={"Start 14 Days Free Trial"}
      />
    </div>
  );
};

export default Service;
