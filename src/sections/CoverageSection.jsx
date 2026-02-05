import Reveal from '../components/Reveal'

export default function CoverageSection() {
  return (
    <section className="section">
      <div className="container1440">
        <div className="coverageGrid">
          <Reveal>
            <div className="coverageMap ph">
              {/* Placeholder for Vietnam map with dealer locations */}
            </div>
          </Reveal>

          <div className="coverageText">
            <Reveal delay={100}>
              <p className="coverageKicker">Geely</p>
            </Reveal>
            <Reveal delay={150}>
              <h2 className="coverageTitle">QUYẾT TÂM PHỦ KÍN<br />THỊ TRƯỜNG</h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="paragraph">
                Không giống với cách làm truyền thống của nhiều hãng xe - thăm dò, lọc khách hàng mục tiêu, tiến tới mở rộng đại lý - Geely đã làm ngược lại, với tư duy phá bỏ lệ làm chân trong tâm lý của người tiêu dùng Việt. Hãng xe đã thực hiện chính sách mở rộng đại lý, đẩy mạnh sản phẩm trước khi bán xe cho khách hàng.
              </p>
            </Reveal>
            <Reveal delay={250}>
              <p className="paragraph">
                Hành Trình An Tâm chính là chìa khóa cho điều này khi chuyến đi lưu cho người dùng sự an tâm khi nhà phân phối Tasco Auto đã mở tới 52 đại lý chỉ trong chưa đầy một năm. Để dễ so sánh trước đây bản đồ Việt Nam được chia làm 63 tỉnh, thành phố nhưng sau đó nhập còn số này là 34. Nếu so với địa giới hành chính cũ, Tasco Auto đã gần như phủ kín toàn bộ bản đồ Việt Nam là mỗi tỉnh có một đại lý, một điểm bảo hành.
              </p>
            </Reveal>
            <Reveal delay={300}>
              <p className="paragraph">
                Mục tiêu trong quý I/2026, Tasco Auto sẽ nâng số lượng đại lý lên 56 trên toàn quốc.
              </p>
            </Reveal>
            <Reveal delay={350}>
              <p className="paragraph">
                Việc tăng số lượng đại lý, điểm bảo dưỡng giúp cho các tài xế của "Hành trình an tâm" có một trạng thái tốt nhất trong khi lái xe, chỉ cần di chuyển chưa tới 100km là đã có điểm hỗ trợ về kỹ thuật. Ngoài ra, với hệ sinh thái VETC, dù có sự cố tài xế cũng được hỗ trợ tốt nhất.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
