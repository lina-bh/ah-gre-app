import TwitterIcon from "./TwitterIcon"

export default function Footer() {
  return (
    <>
      <p>
        Check{" "}
        <a
          href="https://twitter.com/UOGBuses"
          className="text-blue-600 dark:text-blue-400"
        >
          <TwitterIcon /> <span className="underline">@UOGBuses</span>
        </a>{" "}
        and{" "}
        <a
          href="https://bustracker.gre.ac.uk"
          className="text-blue-600 underline dark:text-blue-400"
        >
          official website
        </a>
      </p>
    </>
  )
}
