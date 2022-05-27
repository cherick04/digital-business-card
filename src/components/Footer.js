import twitterIcon from './../images/twitter-icon.png'
import fbIcon from './../images/facebook-icon.png'
import igIcon from './../images/instagram-icon.png'
import linkedInIcon from './../images/linkedin-icon.png'
import githubIcon from './../images/github-icon.png'

export default function Footer() {
  return (
    <div className="footer">
      <img src={twitterIcon} alt="Twitter Icon"></img>
      <img src={fbIcon} alt="Facebook Icon"></img>
      <img src={igIcon} alt="Instagram Icon"></img>
      <img src={linkedInIcon} alt="LinkedIn Icon"></img>
      <img src={githubIcon} alt="GitHub Icon"></img>
    </div>
  )
}
