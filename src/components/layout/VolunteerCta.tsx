import { NewsletterForm } from "./NewsletterForm";

/** "Want to Attend or Volunteer at an Event?" band + newsletter form shown above the footer on every page. */
export function VolunteerCta() {
  return (
    <section aria-labelledby="volunteer-cta-heading">
      <div className="bg-blue-ink px-4 py-14 text-center text-white sm:py-16">
        <h2
          id="volunteer-cta-heading"
          className="mx-auto max-w-2xl text-3xl font-bold leading-tight sm:text-[42px]"
        >
          Want to Attend or Volunteer at an Event?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-[15px] font-bold leading-snug sm:text-lg">
          We regularly organize medical camps, food drives, educational sessions, and research panels.
          Stay informed and get involved.
        </p>
      </div>
      <div className="bg-white px-4 pt-8">
        <NewsletterForm />
      </div>
    </section>
  );
}
