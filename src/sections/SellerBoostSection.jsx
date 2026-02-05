import Reveal from '../components/Reveal'
import sellerTitle from '../assets/hanh-trinh-title.png'
import colChart from '../assets/col-chart.png'
import avatar3 from '../assets/avt3.png'

export default function SellerBoostSection() {
  return (
    <section className="section">

      <div className="container1440">
        <div className="sellerIntro">
          <Reveal>
            <img src={sellerTitle} alt="hanh trinh title"/>
          </Reveal>
        </div>

        <div className="sellerGrid">
          <div className="sellerStats">
            <Reveal delay={100}>
              <img src={colChart} alt="col chart"/>
            </Reveal>
          </div>

          <div className="sellerText">
            <Reveal delay={150}>
              <p className="paragraph">
                Ngoài việc minh chứng truyền tải thông điệp tới khách hàng, HTAT còn tiếp thêm lửa cho đội ngũ bán hàng
                khi số lượng khách hàng tăng lên đáng kể. Nhiều câu hỏi được đội ngũ giải đáp liên quan đến vận hành, sử
                dụng xe mà thông thường nếu chỉ được đào tạo tại chỗ TVBH sẽ rất khó tiếp cận.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <p className="paragraph">
                Theo số liệu từ Oto.com.vn, mặc dù hiện tại Geely mới bán 3 sản phẩm tại Việt Nam, trong năm 2025 đã có
                47 tư vấn viên sử dụng dịch vụ của trang web này nhằm quảng bá, giới thiệu, rao bán xe Geely. 524 tin
                rao bán xe Geely cho thấy sự tích cực phủ sóng hình ảnh thương hiệu Geely trên kênh bán hàng trực tuyến.
              </p>
            </Reveal>
          </div>


        </div>
        <div className="sellerTextFullWidth">
          <Reveal delay={250}>
            <p className="paragraph">
              Không những vậy, Hành trình an tâm còn khơi gợi sự tò mò, niềm vui thú của nhiều khách hàng muốn khám phá
              tới những vùng đất mới và tìm hiểu văn hóa, vẻ đẹp của đất nước chúng ta.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <p className="paragraph">
              Hệ sinh thái Tasco Auto cũng đang cho thấy sự hoàn thiện, khi cung cấp ngày càng đa dạng không chỉ liên
              quan tới ô tô mà còn là du lịch hay mua sắm khi tập đoàn sở hữu nhiều khu du lịch và trung tâm thương mại
              lớn.
            </p>
          </Reveal>
        </div>

        <div className="sellerQuote">
          <Reveal delay={350}>
            <div className="quoteBox">
              <p className="paragraph">
                Theo ông <strong>Đoàn Anh Dũng</strong>, Trưởng Ban Nội dung của Oto.com.vn: "Hành Trình An Tâm không
                chỉ giúp người dùng hiểu thêm về chất lượng của xe Geely, mà còn là minh chứng rõ ràng cho sự bền bỉ của
                xe Trung Quốc sau một thời gian sử dụng."
              </p>
            </div>
          </Reveal>

          <Reveal delay={400}>
            <img src={avatar3} alt=""/>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
