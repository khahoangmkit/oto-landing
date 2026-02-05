import Reveal from '../components/Reveal'
import tongket1 from '../assets/tongket-1.png'
import tongket2 from '../assets/tongket-2.png'
import tongket3 from '../assets/tongket-3.png'

export default function SummarySection() {
  return (
    <section className="section section--soft">
      <div className="container1440">
        <div className="summaryImageGrid">
          <Reveal delay={100} className="summaryImageBlock">
            <img className="summaryImage" src={tongket1} alt="Tổng kết 1"/>
          </Reveal>
          <Reveal delay={150} className="summaryImageBlockDouble">
              <img className="summaryImageHalf" src={tongket2} alt="Tổng kết 2"/>
              <img className="summaryImageHalf" src={tongket3} alt="Tổng kết 3"/>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
