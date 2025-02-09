import { headerMenu } from "@/constants";
import { ModeToggle } from "../mode-toggle";
import SubTitle from "../ui/subtitle";
import { Button } from "../ui/button";
import { themeHandler } from "@/utils/themeHandler";
import { cn } from "@/lib/utils";

const Navbar = ({ theme }) => {
  const { textColor, bgColor } = themeHandler({ theme });
  return (
    <nav className="max-w-7xl mx-auto h-16 flex items-center gap-10 px-5">
      <img
        className="w-16"
        src="https://s3-alpha-sig.figma.com/img/7b9f/86bd/ed49ac106692c8d48d005987f226611a?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TfMdXZRU4s24QufjNUqVly1nwwmcZY~hDFsYgA8WVcEZ1R-tG84Op9NTI5KjmTKFcosrd-3lH4r07JE5KqhjtxL8QZLtJ0IfjgOjpNa5ggntzgs0-bvbEm3Uhar~ygi7j5cUKnw3H79D7mE61MsZKyTH8CsGDwJOGkoF61zgAe3HYtc04NrOofvSALeQ05t5edG0q5c~htypKet8Ay1DP~jvBIY9FDiY6iWcOyn1z9dFrmAO6XeaILhmHptiwnUFnMF~RmK6YPD4FmdZjo3rW05X2k~JlfWVsJTwZLKGZbqjxHQ87cHcWUMwbwPx2oGaniiM3WMTRgN1pmjvrcLDWg__"
      />
      {headerMenu?.map((menu) => (
        <SubTitle text={menu} fontSize="base" color={textColor} />
      ))}
      <div className="ml-auto flex gap-10">
        <div className="flex gap-5">
          <Button variant={"outline"} className={cn(`text-${textColor}`)}>
            Sign in
          </Button>
          <Button className="text-white">Get Started Free</Button>
        </div>
        <ModeToggle />
      </div>
    </nav>
  );
};

// background: linear-gradient(94.25deg, #5C7FFF 0%, #CB5CFF 100%);

export default Navbar;
