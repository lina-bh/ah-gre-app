import biTwitter from "bootstrap-icons/icons/twitter.svg?raw"

const TwitterIcon = () => {
  return (
    <span
      className="twitter-icon"
      dangerouslySetInnerHTML={{ __html: biTwitter }}
    ></span>
  )
}

export default TwitterIcon
