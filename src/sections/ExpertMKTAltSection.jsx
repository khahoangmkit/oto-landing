import Reveal from '../components/Reveal'
import avt2 from '../assets/avt2.png'
import titleMKT from '../assets/title-MKT.png'
import bgTop from '../assets/Vectortop.png'



export default function ExpertMKTAltSection() {
  return (
    <section className="section" style={{position: 'relative', paddingTop: '108px'}}>
      <div className="backgroundAbsolute">
        <img src={bgTop} style={{height: '636px'}} className='wFull' alt=""/>
      </div>
      <div className="container1440">
        <div className="expertAltGrid">
          <div className="expertAltContent">
            <div className="contentCenter">
              <Reveal>
                <img src={titleMKT} alt="Chuyên gia MKT"/>
              </Reveal>
            </div>
            <Reveal delay={100}>
              <div className="expertQuote">
                <p className="paragraph">
                  “Định kiến về hàng Trung Quốc là di sản tâm lý dài hạn, không thể thay đổi trong thời gian ngắn.
                </p>
                <p className="paragraph">
                  Xe là tài sản lớn với người Việt, nên niềm tin vào hậu mãi và cam kết thương hiệu là yếu tố sống còn.
                </p>
                <p className="paragraph">
                  Chiến dịch này cho thấy không chỉ chất lượng xe, mà còn năng lực vận hành và hệ sinh thái của doanh
                  nghiệp.”
                </p>
              </div>
            </Reveal>
          </div>
          <Reveal delay={150}>
            <img src={avt2} alt="Avatar Chuyên gia MKT"/>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
