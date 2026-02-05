import Reveal from '../components/Reveal'

export default function MarketContextSection() {
  return (
    <section className="section section--alt">
      <div className="container1440">
        <div className="marketContext">
          <div className="marketContext__text">
            <Reveal>
              <p className="marketKicker">Bối cảnh xe Trung Quốc</p>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="marketTitle">TẠI THỊ TRƯỜNG VIỆT NAM</h2>
            </Reveal>
            <Reveal delay={150}>
              <p className="paragraph">
                Trong năm 2024, thị trường xe Việt chứng kiến sự đổ bộ không ngừng của nhiều hãng xe Trung Quốc như Dongfeng, Geely, BYD...với khoảng 20 mẫu xe mới ra mắt. Tuy nhiên, trong năm 2025 thị trường ô tô Việt đón nhận một thương hiệu mới đến từ một trong những tập đoàn top đầu tại Trung Quốc là Geely với 3 sản phẩm Geely Coolray, Geely EX5 và Geely Monjaro.
              </p>
            </Reveal>
          </div>

          <Reveal delay={200}>
            <div className="vennBox ph">
              {/* Placeholder for Venn diagram showing Chinese car brands in Vietnam 2025 */}
            </div>
            <p className="vennCaption">Các mẫu xe Trung Quốc ra mắt thị trường Việt Nam năm 2025</p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
