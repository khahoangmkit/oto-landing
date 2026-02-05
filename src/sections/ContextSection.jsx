import Reveal from '../components/Reveal'

export default function ContextSection() {
  return (
    <section className="section section--alt">
      <div className="container1440">
        <Reveal>
          <h2 className="sectionHeading">Bối cảnh xe Trung Quốc tại thị trường Việt Nam</h2>
        </Reveal>

        <div className="contextContent">
          <Reveal delay={100}>
            <p className="paragraph">
              Giai đoạn từ 2000 tới 2005 đã có nhiều thương hiệu xe Trung Quốc tràn vào thị trường Việt Nam với tốc độ nhanh và ồ ạt.
            </p>
          </Reveal>
          <Reveal delay={150}>
            <p className="paragraph">
              Tuy nhiên, giai đoạn này các sản phẩm thường có chất lượng chưa tốt, các nhà phân phối cũng thiếu sự kiên nhẫn rồi bỏ thị trường sớm.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <p className="paragraph">
              Chính điều đó đã làm nhiều năm sau này người cũng thiếu thiện cảm với xe Trung Quốc và mất dần niềm tin vào các thương hiệu đến từ đất nước tỷ dân.
            </p>
          </Reveal>
          <Reveal delay={250}>
            <p className="paragraph">
              Mặt khác, trong suốt nhiều năm các mẫu xe Trung Quốc về Việt Nam chủ yếu cưỡi hình thức nhập khẩu tư nhân chưa có chuỗi phân phối cũng như thiếu dịch vụ chuyên nghiệp trong cách làm. Điều này khiến người dùng càng thêm lo lắng.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <p className="paragraph">
              Trong bối cảnh đó, dự án marketing mang tính đột phá của Tasco Auto như ngọn được châm lên sự hy vọng cho người dùng.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
