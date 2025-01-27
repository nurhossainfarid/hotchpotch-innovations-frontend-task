import { TFontSize, TFontSizeMap } from "@/types/types";

type ParagraphProps = {
  text: string;
  fontSize?: keyof TFontSize;
  width?: string;
  color?: string;
  textAlign?: string | undefined;
  margin?: string;
};

const Paragraph = ({
  text,
  fontSize = "base",
  width,
  textAlign,
}: ParagraphProps) => {
  return (
    <p
      style={{
        fontFamily: "Inter",
        fontSize: TFontSizeMap[fontSize],
        fontWeight: 400,
        width: width,
        textAlign: textAlign,
        color: "#FAFAFA",
        opacity: 0.8,
        margin: "10px"
      }}
    >
      {text}
    </p>
  );
};

export default Paragraph;
