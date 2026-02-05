import Reveal from '../components/Reveal'
import tyLeChuyenDoi from '../assets/tylechuyendoi.png'
import imgTitle from '../assets/thoithuc-title.png'
import tocDoTitle from '../assets/thanhkhoan-title.png'
import xeGeely from '../assets/car1.png'
import xeOther from '../assets/car2.png'
import calenIcon from '../assets/calen_1.png'


export default function ConsumerDemandSection() {
  return (
    <section className="section section--alt">
      <div className="container1440">
        <div className="demandTop">
          <Reveal>
            <div className="demandIllustration">
              <img src={tyLeChuyenDoi} alt="ty le chuyen doi"/>
            </div>
          </Reveal>

          <div className="demandText">
            <Reveal delay={100}>
              <img src={imgTitle} alt=""/>
            </Reveal>
            <Reveal delay={200}>
              <p className="paragraph">
                Trung bình cứ 100 người tìm kiếm giá xe Geely trên Oto.com.vn, có khoảng 3 khách hàng muốn liên hệ trực
                tiếp đại lý, nhân viên bán hàng để tìm hiểu chi tiết về chính sách giá, khuyến mại và có mong muốn đến
                xem xe trực tiếp
              </p>
            </Reveal>
          </div>
        </div>

        <Reveal delay={250}>
          <div className="liquidityBlock">
            <img src={tocDoTitle} alt=""/>
          </div>
        </Reveal>

        <div className="compareGrid">
          <Reveal delay={300}>
            <div className="compareCol">
              <img src={xeGeely} alt=""/>
              <p className="compareLabel">XE GEELY</p>
              <div className="miniCard">
                <img src={calenIcon} style={{width: '100%'}} alt=""/>
                <div className='displayFlex flexCol cardTitle '>
                  <p className="miniCard__value">16,8</p>
                  <p className="paragraph">Ngày</p>
                </div>
              </div>
            </div>
          </Reveal>

          <div className="compareDivider"></div>

          <Reveal delay={350}>
            <div className="compareCol">
              <img src={xeOther} alt=""/>
              <p className="compareLabel">XE NHẬT, HÀN</p>
              <div className="ph carPh"></div>
              <div className="miniCard">
                <img src={calenIcon} alt=""/>
                <div className='displayFlex flexCol cardTitle'>
                  <p className="miniCard__value">15,7</p>
                  <p className='paragraph'>Ngày</p>
                </div>

              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={400}>
          <p className="smallNote">
            "Hành trình an tâm" đem đến những trải nghiệm thực tế, khách quan từ người dùng, qua đó giúp những người đã,
            đang và sắp có kế hoạch sở hữu xe Geely yên tâm về chất lượng sản phẩm. Minh chứng cho việc tốc độ thanh
            khoản của Geely đã qua sử dụng hiện 16,8 ngày, chỉ lâu hơn 1 ngày so với các đối thủ cùng phân khúc đến từ
            các thương hiệu truyền thống Nhật, Hàn.
          </p>
        </Reveal>

        <div className="depreciationBlock">
          <Reveal delay={450}>
            <h3 className="sectionHeading">MỨC ĐỘ TRƯỢT GIÁ CỦA XE GEELY</h3>
            <p className="subLine">KHÔNG CÓ NHIỀU SỰ KHÁC BIỆT SO VỚI ĐỐI THỦ</p>
          </Reveal>

          <div className="depreciationGrid">
            <Reveal delay={500}>
              <div className="barList">
                <div className="barItem">
                  <span className="barItem__val">13,5%</span>
                  <div className="barItem__bar" style={{width: '100%'}}></div>
                </div>
                <div className="barItem">
                  <span className="barItem__val">11,2%</span>
                  <div className="barItem__bar barItem__bar--mid" style={{width: '83%'}}></div>
                </div>
                <div className="barItem">
                  <span className="barItem__val">12,7%</span>
                  <div className="barItem__bar barItem__bar--low" style={{width: '94%'}}></div>
                </div>
                <p className="barSource">Nguồn: oto.com.vn</p>
              </div>
            </Reveal>

            <div className="depreciationText">
              <Reveal delay={550}>
                <p className="paragraph">
                  Mặc dù mới ra mắt thị trường Việt Nam năm 2025, các mẫu xe của Geely có độ trượt giá tương đối thấp.
                </p>
              </Reveal>
              <Reveal delay={600}>
                <p className="paragraph">
                  Sau khoảng 6 tháng sử dụng, Geely Coolray giảm trung bình 13,5% so với giá xe mới lăn bánh, trong khi
                  đó Hyundai Santa Fe và Ford Everest giảm khoảng 12,7%.
                </p>
              </Reveal>
              <Reveal delay={650}>
                <p className="paragraph">
                  Sự chênh lệch này không đáng kể so với các đối thủ cùng phân khúc. Để có được sự thành công này, cũng
                  có đóng góp không nhỏ tới từ HTAT khi khách hàng đã gạt bỏ được các rào cản về hình về tâm lý khi sử
                  dụng xe TQ.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
