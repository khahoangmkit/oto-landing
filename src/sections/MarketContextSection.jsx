import Reveal from '../components/Reveal'
import boiCanhTitle from '../assets/boi-canh-title.png'
import chartCircle from '../assets/circle-chart.png'
import bgDown from "../assets/Vectordown.png";

export default function MarketContextSection() {
  return (
    <section className="section" style={{position: 'relative'}}>
      <div className="backgroundAbsolute">
        <img src={bgDown} style={{height: '636px'}} className='wFull' alt=""/>
      </div>
      <div className="container1440">
        <div className="marketContext">
          <div className="marketContext__text">
            <div style={{paddingLeft: "112px"}}>
              <Reveal>
                <img src={boiCanhTitle} alt="boi canh title"/>
              </Reveal>
              <Reveal delay={150}>
                <p className="paragraph contentBoiCanh">
                  Trong năm 2024, thị trường xe Việt chứng kiến sự đổ bộ không ngừng của nhiều hãng xe Trung Quốc như
                  Dongfeng, Geely, BYD...với khoảng 20 mẫu xe mới ra mắt. Tuy nhiên, trong năm 2025 thị trường ô tô Việt
                  đón nhận một thương hiệu mới đến từ một trong những tập đoàn top đầu tại Trung Quốc là Geely với 3 sản
                  phẩm Geely Coolray, Geely EX5 và Geely Monjaro.
                </p>
              </Reveal>
            </div>

            <Reveal delay={200}>
              <div className="ph">
                <img src={chartCircle} alt=""/>
              </div>
              <p className="vennCaption">Các mẫu xe Trung Quốc ra mắt thị trường Việt Nam năm 2025</p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
