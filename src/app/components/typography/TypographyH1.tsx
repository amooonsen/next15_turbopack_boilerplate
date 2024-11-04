import {TypographyProps} from "@/lib/types/typeCommon";

export function TypographyH1({children}: TypographyProps) {
  return (
    <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">{children}</h1>
  );
}
