import Reveal from '../components/Reveal'

export default function ExpertMKTAltSection() {
  return (
    <section className="section">
      <div className="container1440">
        <div className="expertAltGrid">
          <div className="expertAltContent">
            <Reveal>
              <p className="scriptTitle">Chuyên gia MKT</p>
            </Reveal>
            <Reveal delay={100}>
              <div className="expertQuote">
                <p className="paragraph">
                  "Định kiến về hãng Trung Quốc là di sản tâm lý dài hạn, không thể thay đổi trong thời gian ngắn.
                </p>
                <p className="paragraph">
                  Xe là tài sản lớn với người Việt, nên niềm tin vào hậu mãi và cam kết thương hiệu là yếu tố sống còn.
                </p>
                <p className="paragraph">
                  Chiến dịch này cho thấy không chỉ chất lượng xe, mà còn năng lực vận hành và hệ sinh thái của doanh nghiệp."
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={150}>
            <div className="expertCard expertCard--alt">
              <div className="expertPhoto"></div>
              <div className="expertTag expertTag--small">
                <p className="expertName">Trần Việt Anh</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
