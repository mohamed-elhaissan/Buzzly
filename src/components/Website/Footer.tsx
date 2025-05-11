import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <section className=" h-[40vh]   codeText font-bold w-full ] shadow-sm flex items-end justify-center">
      <h2 className="mb-4 text-white">
        by{" "}
        <Link
          to={"https://linktr.ee/mohamed_elhaissan"}
          target={"_blank"}
          className="text-blue-500 hover:underline"
        >
          Mohamed Elhaissan
        </Link>
      </h2>
    </section>
  );
}
