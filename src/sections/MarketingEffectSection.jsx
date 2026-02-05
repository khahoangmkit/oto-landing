import Reveal from '../components/Reveal'
import bannerHero from '../assets/banner3.png'
import titleImg from '../assets/marketTitle.png'
import icon1 from '../assets/icon1-1.png'
import icon2 from '../assets/icon1-2.png'
import icon3 from '../assets/icon1-3.png'

export default function MarketingEffectSection() {
  return (
    <section className="section" style={{paddingBottom: '0'}}>


      <div className="container1440">
        <Reveal>
          <div className="effectHero">
            <img src={bannerHero} alt="banner"/>
          </div>
        </Reveal>

        <div className="marketingGrid">
          <div className="titleMarket">
            <Reveal delay={100}>
              <img src={titleImg} alt="Hiệu quả từ hành trình An Tâm về MKT"/>
            </Reveal>
          </div>
          <Reveal delay={150}>
            <p className="paragraph">
              Mở ra một hướng MKT rất mới, đi thẳng tới tâm thức của người.
            </p>
            <p className="paragraph paragraph--center">
              Hơn 400 lượt lái thử chỉ trong 2 ngày 27-28/12 tại VMS 2025.
            </p>
            <p className="paragraph paragraph--center">
              Sau Hành trình an tâm các từ khóa liên quan đến Geely lượt tương tác trên các nền tảng có liên quan đều
              tăng vọt.
            </p>
          </Reveal>

          <Reveal delay={200}>
            <div className="caseStudy__head">
              <p className="caseStudy__title">Case study</p>
              <p className="paragraph">Kênh youtube của Mexe</p>
            </div>

            <div className="metricRow">
              <div className="metricRow__icon">
                <img src={icon1} alt=""/>
              </div>
              <div>
                <p className="paragraph metricRow__desc"><strong>Views: </strong> Trung bình liên quan đến các bài đánh giá của Geely tăng từ 20% đến 45k
                  view → Tổng trong năm 2025 là 1,015 triệu lượt xem trên Mexe</p>
              </div>
            </div>

            <div className="metricRow">
              <div className="metricRow__icon">
                <img src={icon2} alt=""/>
              </div>
              <div>
                <p className="paragraph metricRow__desc"><strong>Performance: </strong>Tăng 20% average views/ video trước và sau khi làm các campaign Hành
                  trình An Tâm <br/><br/></p>
              </div>
            </div>

            <div className="metricRow">
              <div className="metricRow__icon">
                <img src={icon3} alt=""/>
              </div>
              <div>
                <p className="paragraph"><strong>Social: </strong>Ngoài ra, các nền tảng khác như FanPage hay website hãng đều đạt tăng
                  trưởng tốt.</p>
              </div>
            </div>
          </Reveal>

        </div>


      </div>
      <div className="authorBlock">
        <Reveal delay={200}>
          <div className="creditBox">
            <p className="paragraph" style={{fontWeight: '400', color: '#000'}}>Phụ trách nội dung: Đoàn Anh Dũng</p>
            <p className="paragraph" style={{fontWeight: '400', color: '#000'}}>Thu thập dữ liệu & phỏng vấn chuyên gia: Mê Xe</p>
            <p className="paragraph" style={{fontWeight: '400', color: '#000'}}>Thiết kế: M.studio</p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
