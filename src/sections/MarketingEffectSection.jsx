import Reveal from '../components/Reveal'

export default function MarketingEffectSection() {
  return (
    <section className="section">
      <Reveal>
        <div className="effectHero ph">
          {/* Placeholder for large hero image */}
        </div>
      </Reveal>

      <div className="container1440">
        <Reveal delay={100}>
          <h2 className="sectionHeading">HIỆU QUẢ TỪ HÀNH TRÌNH AN TÂM VỀ MKT</h2>
        </Reveal>

        <div className="effectText">
          <Reveal delay={150}>
            <p className="paragraph">
              Mở ra một hướng MKT rất mới, đi thẳng tới tâm thức của người.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <p className="paragraph">
              Hơn 400 lượt lái thử chỉ trong 2 ngày 27-28/12 tại VMS 2025.
            </p>
          </Reveal>
          <Reveal delay={250}>
            <p className="paragraph">
              Sau Hành trình an tâm các từ khóa liên quan đến Geely lượt tương tác trên các nền tảng có liên quan đều tăng vọt.
            </p>
          </Reveal>
        </div>

        <Reveal delay={300}>
          <div className="caseStudy">
            <div className="caseStudy__head">
              <p className="caseStudy__title">Case study</p>
              <p className="caseStudy__sub">Kênh youtube của Mexe</p>
            </div>

            <div className="metricRow">
              <div className="metricRow__icon"></div>
              <div>
                <p className="metricRow__title">Views</p>
                <p className="metricRow__desc">Trung bình liên quan đến các bài đánh giá của Geely tăng từ 20% đến 45k view → Tổng trong năm 2025 là 1,015 triệu lượt xem trên Mexe</p>
              </div>
            </div>

            <div className="metricRow">
              <div className="metricRow__icon"></div>
              <div>
                <p className="metricRow__title">Performance</p>
                <p className="metricRow__desc">Tăng 20% average views/ video trước và sau khi làm các campaign Hành trình An Tâm</p>
              </div>
            </div>

            <div className="metricRow">
              <div className="metricRow__icon"></div>
              <div>
                <p className="metricRow__title">Social</p>
                <p className="metricRow__desc">Ngoài ra, các nền tảng khác như FanPage hay website hãng đều đạt tăng trưởng tốt.</p>
              </div>
            </div>

            <div className="creditBox">
              <p>Phụ trách nội dung: Đoàn Anh Dũng</p>
              <p>Thu thập dữ liệu & phỏng vấn chuyên gia: Mê Xe</p>
              <p>Thiết kế: M.studio</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
