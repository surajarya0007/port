import Image from "next/image";
import bg from "../../../../public/background/3.jpg";
import Form from "@/components/contact/Form";

export const metadata = {
  title: "Contact",
};

export default function Contact() {
  return (
    <>
      <Image
        src={bg}
        alt="Next.js Portfolio website's contact page background image"
        priority
        sizes="100vw"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-30"
      />

      <article className="relative w-full flex flex-col items-center justify-center py-8 sm:py-0 space-y-8">
        <div className="flex flex-col items-center justify-center space-y-6 w-full sm:w-3/4">
          <h1 className="text-accent font-semibold text-center text-4xl capitalize">
            summon the dark night
          </h1>
          <p className="text-center font-light text-sm xs:text-base">
          Welcome to the dark underbelly of Gotham, where your words become the signal that pierces through the night. Whether you seek to forge powerful alliances, collaborate on daring missions, or unravel the threads of mystery, your messages are valuable dispatches within this realm. Every connection is a chance to ignite new adventures and bring justice to the city we cherish. Use the form below to send your thoughts into the night, and await the call of the Dark Knight in response.
          </p>
        </div>
        <Form />
      </article>
    </>
  );
}