import { TFontSize, TFontSizeMap } from "@/types/types";

type SubTitleProps = {
  text: string;
  fontSize?: keyof TFontSize; 
  color?: string;
  textAlign?: string;
  margin?: string;
};

const SubTitle: React.FC<SubTitleProps> = ({
  text,
  fontSize = "base", 
  color = "rgb(240, 240, 240)",
}) => {
  return (
    <h1
      style={{
        fontFamily: "Inter",
        fontWeight: 500,
        fontSize: TFontSizeMap[fontSize], 
        color: color,
        lineHeight: "1.2",
      }}
    >
      {text}
    </h1>
  );
};

export default SubTitle;
