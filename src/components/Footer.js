import twitterIcon from './../images/twitter-icon.png'
import fbIcon from './../images/facebook-icon.png'
import igIcon from './../images/instagram-icon.png'
import linkedInIcon from './../images/linkedin-icon.png'
import githubIcon from './../images/github-icon.png'

export default function Footer() {
  return (
    <div className="footer">
      <a href="https://twitter.com/cherick04" target="_blank" rel="noreferrer">
        <img src={twitterIcon} alt="Twitter Icon"></img>
      </a>
      <a
        href="https://www.facebook.com/cherick04"
        target="_blank"
        rel="noreferrer"
      >
        <img src={fbIcon} alt="Facebook Icon"></img>
      </a>
      <a
        href="https://www.instagram.com/cherick04"
        target="_blank"
        rel="noreferrer"
      >
        <img src={igIcon} alt="Instagram Icon"></img>
      </a>
      <a
        href="https://www.linkedin.com/in/cherick04/"
        target="_blank"
        rel="noreferrer"
      >
        <img src={linkedInIcon} alt="LinkedIn Icon"></img>
      </a>
      <a
        href="https://www.github.com/cherick04/"
        target="_blank"
        rel="noreferrer"
      >
        <img src={githubIcon} alt="GitHub Icon"></img>
      </a>
    </div>
  )
}
