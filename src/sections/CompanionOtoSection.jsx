import Reveal from '../components/Reveal'
import NumberTell from '../assets/conso.png'
import chartNumber from '../assets/chart-conso.png'
import img1 from '../assets/img-2-1.png'
import img2 from '../assets/img-2-2.png'
import img3 from '../assets/img-2-3.png'
import img4 from '../assets/img-2-4.png'

export default function CompanionOtoSection() {
  return (
    <section className="section">
      <div className="container1440">
        <div className="companionHeader">

          <Reveal delay={100}>
            <img src={NumberTell} alt="Những con số biết nói"/>
            <p className="paragraph">Website về mua-bán, tổng hợp dữ liệu hàng đầu Việt Nam</p>
          </Reveal>

        </div>

        <div className="companionGrid">
          <div className="companionText">
            <Reveal delay={200}>
              <p className="paragraph">
                Theo khảo sát từ oto.com.vn, trung bình một người sử dụng xe ô tô tại Việt Nam sẽ đổi xe sau 4-7 năm,
                mỗi năm di chuyển khoảng 20.000 km,
                và Hành Trình An Tâm đã rút ngắn thời gian kiểm chứng cho độ bền của xe Trung Quốc
                xuống chỉ còn vài tháng thay vì phải chờ đợi ý kiến đánh giá của người sử dụng sau 6-8 năm.
                Thông qua các chuyến lái thử khắc nghiệt trên khắp Việt Nam, các mẫu xe đến từ Trung Quốc đã minh chứng
                được hiệu quả về độ bền,
                độ tin cậy cũng như sự ổn định trong vận hành thông qua các mẫu xe đến từ tập đoàn Geely như Coolray,
                Monjaro hay Lynk & Co 06.
              </p>
            </Reveal>

          </div>

          <div className="companionStats">
            <Reveal delay={300} className="imageChart">
              <img src={chartNumber} alt="bieu do con so"/>
            </Reveal>
          </div>
        </div>
        <div className="textContentNum">
          <Reveal delay={250}>
            <p className="paragraph">
              Đầu tiên, về vận hành các mẫu xe như Coolray bình quân di chuyển khoảng 80.0000 km trong khoảng 150 ngày
              tức mỗi ngày di chuyển gần 600 km. Điều đặc biệt, với cường độ sử dụng cao, đi qua nhiều kiểu địa hình,
              thời tiết xe không gặp bất kỳ vấn đề nào liên quan đến vận hành. <br/>
              <br/>
              Sau hành trình, các mẫu xe được các chuyên gia, kỹ thuật về ô tô kiểm tra và mổ xẻ rất kỹ nhưng các xe đều
              trong trạng thái ổn định. Các chi tiết về cơ khí, hệ thống treo, hay hệ thống lái đều trong trạng thái
              hoạt động tốt.
            </p>
          </Reveal>
        </div>

        <div className="listImageBlock">
          <img src={img1} alt="image 2 "/>
          <img src={img2} alt="image 3 "/>
          <img src={img3} alt="image 4 "/>
          <img src={img4} alt="image 5 "/>
        </div>


        <div className="textContentNum">
          <Reveal delay={250}>
            <p className="paragraph">
              Cũng cần phải nói thêm, để hoàn thành hành trình với 600km di chuyển mỗi ngày không chỉ là thử thách với
              những chiếc xe thuần cơ khí, còn là sự nỗ lực của ê-kip và nhóm tài xế. Với một tài xế chạy đường dài
              chuyên nghiệp để hoàn thành mỗi ngày 600 với điều kiện tốt nhất về cung đường người chạy cần từ 6-8 tiếng
              để hoàn thành chặng đường này.
              <br/>
              <br/>

              Đây cũng là thông điệp nhóm sản xuất Hành Trình An Tâm muốn truyền tải tới người dùng, khách hàng có thể
              hoàn toàn yên tâm khi có những chiếc xe Geely làm bạn đồng hành. Về phía Tasco Auto, nhà phân phối cũng
              đang từng ngày để minh chứng hóa điều đó bằng hệ thống đại lý rộng khắp.
              <br/>
              <br/>

              Bên cạnh đó, việc trước đây đã có nhiều thương hiệu xe Trung Quốc vào Việt Nam nhưng đều bỏ dở, để lại nỗi
              đau cho những người từng được coi là tiên phong sử dụng xe Trung Quốc. Lần này, về phía Tasco Auto, nhà
              phân phối đang từng ngày minh chứng sự cam kết dài hạn với thị trường Việt Nam bằng hệ thống đại lý rộng
              khắp cả nước.

            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
