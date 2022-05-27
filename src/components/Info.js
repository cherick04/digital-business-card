import ecPic from './../images/EC-pic.jpg'

export default function Info() {
  return (
    <div className="info">
      <img src={ecPic} alt="Erick"></img>
      <h3 className="info-name">Erick Chacon</h3>
      <h4 className="info-title">Blockchain Frontend Developer</h4>
      <h5 className="info-website">erick-chacon.info</h5>
      <button className="info-button">
        <i class="fa-solid fa-envelope"></i>
        E-mail
      </button>
    </div>
  )
}
