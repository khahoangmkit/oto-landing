import Reveal from '../components/Reveal';
import eventTitle from '../assets/hoatdong-sukien.png'
import img1 from '../assets/img-1.png'
import img2 from '../assets/img-2.png'
import img3 from '../assets/img-3.png'
import img4 from '../assets/img-4.png'
import img5 from '../assets/img-5.png'
import img6 from '../assets/img-6.png'
import img7 from '../assets/img-7.png'
import img8 from '../assets/img-8.png'



export default function EventSection() {
  return (
    <section className="section">
      <div className="container1440">
        <div className="eventIntro">
          <div className="eventIntro__left" style={{paddingLeft: '212px'}}>
            <Reveal>
              <img src={eventTitle} alt="Hoạt động & Sự kiện"/>
            </Reveal>
          </div>
          <Reveal delay={150}>
            <div className="eventIntro__right">
              <p className="paragraph" style={{marginLeft: '140px', width: '616px'}}>
                Là một chiến dịch truyền thông của Tasco Auto, nhằm chứng minh cho người tiêu dùng về độ bền, ổn định và chất lượng dài hạn của các mẫu xe thuộc tập đoàn Geely mà Tasco Auto đang phân phối
              </p>
            </div>
          </Reveal>
        </div>

        <div className="galleryGrid">
          <Reveal delay={200} className="g1">
            <img src={img1} alt="Hoạt động & Sự kiện"/>
            <img src={img2} alt="Hoạt động & Sự kiện"/>
          </Reveal>
          <Reveal delay={250} className="g2">
            <img src={img3} alt="Hoạt động & Sự kiện"/>
            <img src={img4} alt="Hoạt động & Sự kiện"/>
          </Reveal>
          <Reveal delay={300} className="g3">
            <img src={img5} alt="Hoạt động & Sự kiện"/>
            <img src={img6} alt="Hoạt động & Sự kiện"/>

          </Reveal>
          <Reveal delay={350} className="g4">
            <img src={img7} alt="Hoạt động & Sự kiện"/>
            <img src={img8} alt="Hoạt động & Sự kiện"/>
          </Reveal>
        </div>

        <div className="postContent">
          <Reveal delay={500}>
            <p className="paragraph">
              <strong>Chứng minh độ bền thực tế:</strong> Vận hành xe trên nhiều loại địa hình và điều kiện thời tiết để kiểm chứng chất lượng, sự ổn định về độ tin cậy.
            </p>
          </Reveal>
          <Reveal delay={550}>
            <p className="paragraph">
              <strong>Xây dựng niềm tin khách hàng:</strong> Rút ngắn thời gian xây dựng niềm tin khách hàng bằng cách giải quyết các rào cản định kiến xe Trung Quốc chất lượng kém hay hệ sinh thái không đầy đủ, hay cam kết của nhà phân phối
            </p>
          </Reveal>
          <Reveal delay={600}>
            <p className="paragraph">
              <strong>Hoạt động nổi bật:</strong> Hai mẫu xe Geely (Coolray, Monjaro) liên tục di chuyển, trung bình 600 km/ngày, thực hiện 4 lần xuyên Việt, chứng minh khả năng vận hành bền bỉ. Xe vượt qua nhiều cung đường đèo núi, ven biển, mang đến những trải nghiệm đa dạng.
            </p>
          </Reveal>
        </div>

        <Reveal delay={650}>
          <div className="eventQuote">
            <p className="paragraph-white">
              "Hành trình an tâm" là lời khẳng định chất lượng bằng hành động, cho thấy những chiếc xe Geely được thiết kế và chế tạo để đồng hành cùng người dùng trên mọi nẻo đường Việt Nam.
            </p>
            <p className="paragraph-white">
              Cũng là một lời khẳng định của đơn vị phân phối là Tasco Auto về sự đồng hành về dịch vụ hậu mãi thông qua Tasco Auto, cũng như các dịch vụ hỗ trợ cho khách hàng Việt yên tâm trong việc sử dụng xe đang các dịch vụ như bảo hiểm Tasco Auto [Tasco Insurance], Cứu hộ Tasco (VETC).
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
