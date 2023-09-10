import LargeHeading from "@/components/ui/LargeHeading";
import Paragraph from "@/components/ui/Paragraph";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Similarity API | Home",
};

export default function Home() {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-x-hidden">
      <div className="container pt-32 max-w-7xl mx-auto w-full h-full">
        <div className="h-full gap-6 flex flex-col justify-start lg:justify-center items-center lg:items-start">
          <LargeHeading
            size="lg"
            className="three-d text-black dark:text-light-gold"
          >
            Easily determine <br /> text similarity.
          </LargeHeading>

          <Paragraph className="max-w-xl lg:text-left">
            With the text similarity API, you can easily determine the
            similarity between two pieces of text with a free{" "}
            <Link
              href="/login"
              className="underline underline-offset-2 text-black dark:text-light-gold "
            >
              API key
            </Link>
            .
          </Paragraph>

          <div className="relative w-full max-w-lg lg:max-w-xl lg:left-1/2 aspect-square lg:absolute">
            <Image
              priority
              src="/typewriter.png"
              alt="Typewriter"
              className="img-shadow"
              quality={100}
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
