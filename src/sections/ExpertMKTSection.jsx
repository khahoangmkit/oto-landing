import Reveal from '../components/Reveal'
import hcpMar from '../assets/hcp-img.png'

export default function ExpertMKTSection() {
  return (
    <section className="section section--soft">
      <div className="container1440">
        <div className="contentCenter" style={{width: '1062px'}}>

          <Reveal delay={100}>
            <img src={hcpMar} alt="Chuyên gia MKT"/>
          </Reveal>
        </div>

      </div>
    </section>
  )
}
