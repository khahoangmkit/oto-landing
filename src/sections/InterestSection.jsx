import Reveal from '../components/Reveal'

export default function InterestSection() {
  return (
    <section className="section section--soft">
      <div className="container1440">
        <div className="interestHeader">
          <Reveal>
            <p className="interestKicker">Mức độ quan tâm</p>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="bigTitle">CỦA NGƯỜI DÙNG VỚI GEELY</h2>
          </Reveal>
        </div>

        <div className="interestGrid">
          <Reveal delay={150}>
            <div className="interestChart ph">
              {/* Placeholder for search trend chart */}
              <p className="chartLabel">Lượt tìm kiếm 2025</p>
            </div>
            <p className="chartSource">Nguồn: Ads.google.com</p>
          </Reveal>

          <div className="interestText">
            <Reveal delay={200}>
              <p className="paragraph">
                <strong>Lượt tìm kiếm các từ khóa về "geely" trên Oto.com.vn</strong>
              </p>
            </Reveal>
            <Reveal delay={250}>
              <p className="paragraph">
                Theo oto.com.vn điều này được minh chứng thông qua các con số có liên quan. Từ tháng 6-12/2025 lượng người liên hệ và tìm kiếm liên quan đến từ khóa Geely tăng <strong>3,2</strong> lần so với 6 tháng đầu năm.
              </p>
            </Reveal>
            <Reveal delay={300}>
              <p className="paragraph">
                Điều quan trọng khác, theo website này lượng người nay phân bổ điều khắp Bắc - Trung - Nam đặc biệt tại 25 tỉnh thành mà HTAT đi qua, cho thấy mức độ quan tâm và tin tưởng của người dùng thông qua hành trình gia tăng đáng kể
              </p>
            </Reveal>
          </div>
        </div>
      </div>

      <div className="interestPhotos">
        <Reveal delay={350}>
          <div className="ph interestPhotos__item"></div>
        </Reveal>
        <Reveal delay={400}>
          <div className="ph interestPhotos__item"></div>
        </Reveal>
      </div>
    </section>
  )
}
