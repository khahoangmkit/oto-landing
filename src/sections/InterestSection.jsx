import Reveal from '../components/Reveal'
import interestTitle from '../assets/quyet-tam-title.png'
import lineChart from '../assets/line-chart.png'
import img1 from '../assets/img-3-1.png'
import img2 from '../assets/img-3-2.png'
import img3 from '../assets/img-3-3.png'
import img4 from '../assets/img-3-4.png'

export default function InterestSection() {
  return (
    <section className="section section--soft">
      <div className="container1440">
        <div className="interestHeader">
          <Reveal>
            <img src={interestTitle} alt="interest title"/>
          </Reveal>
        </div>

        <div className="interestGrid">
          <Reveal delay={150}>
            <p className="chartTitle">
              <strong>Lượt tìm kiếm các từ khóa về "geely" trên Oto.com.vn</strong>
            </p>

            <div className="interestChart">
              <img src={lineChart} alt="luot tim kiem chart"/>
            </div>
            <p className="chartSource">Nguồn: Ads.google.com</p>
          </Reveal>

          <div className="interestText">
            <Reveal delay={200}>
              <p className="paragraph">
                Theo oto.com.vn điều này được minh chứng thông qua các con số có liên quan. Từ tháng 6-12/2025 lượng
                người liên hệ và tìm kiếm liên quan đến từ khóa Geely tăng <strong>3,2</strong> lần so với 6 tháng đầu
                năm. <br/><br/>
              </p>
            </Reveal>
            <Reveal delay={250}>
              <p className="paragraph">
                Điều quan trọng khác, theo website này lượng người nay phân bổ điều khắp Bắc - Trung - Nam đặc biệt tại
                25 tỉnh thành mà HTAT đi qua, cho thấy mức độ quan tâm và tin tưởng của người dùng thông qua hành trình
                gia tăng đáng kể
              </p>
            </Reveal>
          </div>
        </div>
        <div className="listImageBlock">
          <img src={img1} alt="image 2 "/>
          <img src={img2} alt="image 3 "/>
        </div>

        <div className="listImageBlock">
          <img src={img3} alt="image 2 "/>
          <img src={img4} alt="image 3 "/>
        </div>
      </div>

    </section>
  )
}
