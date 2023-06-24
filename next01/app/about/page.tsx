import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Page",
    description: "Welcome to about page"
}
const About = () => {
    // throw new Error("not today")
  return (
    <>
      <h1>About</h1>
      <Link href={"/"}> Back to Home</Link>
    </>
  );
};

export default About;
 