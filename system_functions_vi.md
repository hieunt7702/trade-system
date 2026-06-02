# Danh sách Chức năng và Yêu cầu Quản lý Database Hệ thống

Dựa trên cấu trúc cơ sở dữ liệu hiện tại (`schema.prisma`) và các file giao diện đang được xây dựng (như phần Admin, UI Sàn giao dịch, ShareButtons...), dưới đây là chi tiết toàn bộ các chức năng và những dữ liệu cần quản lý tương ứng cho hệ thống.

---

## 1. Module Quản lý Người dùng và Phân quyền (User Management)
**Chức năng trên hệ thống:**
- Đăng ký, đăng nhập và quản lý tài khoản thành viên.
- Hệ thống phân quyền rõ ràng: Người dùng thường (`USER`) và Quản trị viên (`ADMIN`).
- Khu vực cá nhân hóa: Quản lý đánh giá cá nhân, yêu cầu làm IB, quản lý bài viết riêng và tài khoản Passview cá nhân.

**Database cần quản lý (Bảng `User`, `Role`):**
- Thông tin định danh: ID, Email, Mật khẩu (đã mã hóa), Tên hiển thị.
- Phân quyền người dùng theo Enum Role (`USER`, `ADMIN`).
- Các liên kết khoá ngoại tới các dữ liệu mà người dùng tạo (Reviews, IBRequests, Posts, Passviews).
- Lịch sử thời gian tạo và cập nhật tài khoản.

---

## 2. Module Sàn Giao Dịch (Brokers)
**Chức năng trên hệ thống:**
- Hiển thị danh sách tổng hợp các sàn giao dịch ngoại hối (Forex Brokers).
- Trang chi tiết của từng sàn: xem thông tin pháp lý, điều kiện giao dịch và nền tảng.
- Chức năng đánh giá (Review) và chấm điểm xếp hạng (Rating) sàn từ cộng đồng người dùng.
- Khu vực Admin (`/admin/brokers`): Quản trị viên thêm/sửa/xóa thông tin sàn và duyệt các đánh giá.

**Database cần quản lý (Bảng `Broker`, `Review`):**
- **Định danh & Thông tin cơ bản:** Tên sàn, Đường dẫn tĩnh (slug - dùng cho SEO), Logo, Mô tả chi tiết, Năm thành lập, Trụ sở chính.
- **Tính pháp lý:** Mảng các chứng chỉ/giấy phép (FCA, CySEC...).
- **Điều kiện giao dịch:** Số tiền nạp tối thiểu (Min Deposit), Đòn bẩy tối đa (Max Leverage), Loại Spread (Cố định/Biến đổi), Các nền tảng hỗ trợ (MT4, MT5, cTrader...).
- **Đánh giá & Xếp hạng:** Điểm đánh giá trung bình tổng thể, các bài review chi tiết (Nội dung, điểm số, ID người đánh giá, ID sàn).

---

## 3. Module Ưu đãi và Tiền thưởng (Offers & Bonus)
**Chức năng trên hệ thống:**
- Cập nhật và hiển thị các chương trình khuyến mãi từ các sàn giao dịch.
- Phân loại khuyến mãi (Welcome Bonus, Deposit Bonus, No Deposit Bonus...).
- Làm nổi bật các chương trình Hot.

**Database cần quản lý (Bảng `Offer`):**
- Chi tiết ưu đãi: Tiêu đề, Mô tả, Loại khuyến mãi, Giá trị phần thưởng ($).
- Trạng thái nổi bật: Cờ `isHot`.
- Thời gian hiệu lực: Ngày hết hạn của chương trình.
- Mối liên kết: Ưu đãi này thuộc về sàn giao dịch nào (`brokerId`).

---

## 4. Module Đối tác Sàn (IB Commission & Requests)
**Chức năng trên hệ thống:**
- Trang tổng quan hiển thị chính sách hoa hồng cho IB (Introducing Broker) của từng sàn.
- Biểu mẫu cho phép người dùng gửi yêu cầu trở thành đối tác IB hoặc nhận mức hoàn phí (Lot Rebate).
- Bảng điều khiển quản lý yêu cầu (dành cho Admin): Phê duyệt hoặc Từ chối yêu cầu từ người dùng.

**Database cần quản lý (Bảng `IBCommission`, `IBRequest`, `RequestStatus`):**
- **Chính sách hoa hồng:** Cấp độ đại lý (Tier Name), Số tiền hoàn trên mỗi Lot giao dịch (Lot Rebate), Điều kiện áp dụng. Liên kết trực tiếp với Sàn.
- **Yêu cầu đối tác (IB Request):** Tin nhắn đi kèm yêu cầu, Trạng thái của yêu cầu (`PENDING`, `APPROVED`, `REJECTED`), Liên kết tới người yêu cầu (`userId`) và Sàn muốn làm đối tác (`brokerId`).

---

## 5. Module Chỉ báo Giao dịch (Indicators)
**Chức năng trên hệ thống:**
- Thư viện/Cửa hàng cung cấp các công cụ, chỉ báo (Indicators) hỗ trợ phân tích kỹ thuật.
- Người dùng có thể tìm kiếm, xem mô tả và tải về các chỉ báo (tùy thuộc vào nền tảng TradingView, MT4, MT5).
- Trang quản trị (`/admin/indicators`): Admin thêm mới chỉ báo, upload file/link tải và cập nhật giá bán.

**Database cần quản lý (Bảng `Indicator`):**
- Thông tin hiển thị: Tên chỉ báo, Slug, Mô tả chi tiết, Hình ảnh thumbnail.
- Nền tảng: Hệ thống được xây dựng cho nền tảng nào (MT4, MT5, TradingView...).
- Phân phối: Giá bán (bằng 0 nghĩa là miễn phí), Đường dẫn tải xuống (`downloadUrl`).

---

## 6. Module Khóa học Kiến thức (Courses)
**Chức năng trên hệ thống:**
- Hiển thị danh sách các khóa học trực tuyến về Trading.
- Cấu trúc bài giảng rõ ràng, người dùng có thể xem video hoặc đọc nội dung các bài học theo lộ trình.

**Database cần quản lý (Bảng `Course`, `Lesson`):**
- **Thông tin khóa học:** Tên khóa, Slug, Mô tả, Hình thu nhỏ, Tên giảng viên/Tác giả.
- **Nội dung bài học:** Tiêu đề từng bài, Link video (nếu có), Nội dung văn bản, Số thứ tự bài giảng (Order Index để sắp xếp lộ trình). Mối quan hệ ràng buộc (Cascade) để xóa khóa học sẽ xóa tất cả bài giảng.

---

## 7. Module Tin tức và CMS (Blog)
**Chức năng trên hệ thống:**
- Quản lý danh mục bản tin (Ví dụ: Tin thị trường, Phân tích kỹ thuật...).
- Xuất bản các bài viết, tin tức. 
- Cho phép người dùng chia sẻ bài viết qua mạng xã hội (ShareButtons component).

**Database cần quản lý (Bảng `Category`, `Post`):**
- **Danh mục:** Tên danh mục và Slug.
- **Bài viết:** Tiêu đề, Slug, Nội dung chi tiết định dạng Rich Text (`content`), Ảnh bìa thumbnail, Trạng thái bài (`published` - Nháp hay Đã đăng).
- **Tác giả:** Liên kết tới User viết bài và Danh mục chứa bài viết.

---

## 8. Module Theo dõi Tài khoản (Passview)
**Chức năng trên hệ thống:**
- Tính năng chia sẻ tài khoản giao dịch minh bạch: Người dùng đăng tải thông tin tài khoản đọc (Investor) để cộng đồng theo dõi kết quả giao dịch thực tế.

**Database cần quản lý (Bảng `Passview`):**
- Cấu hình truy cập: Tên sàn (Broker Name), Tên máy chủ (Server Name), ID tài khoản MT4/MT5, Mật khẩu theo dõi (Investor Password).
- Thông tin bổ sung: Tiêu đề bài chia sẻ, Trạng thái (Ví dụ: ACTIVE, INACTIVE), Người tạo (`authorId`).

---

*Ghi chú: Toàn bộ các module đều được lưu trữ dữ liệu thời gian tạo (`createdAt`) và thời gian cập nhật gần nhất (`updatedAt`) để hệ thống dễ dàng quản lý vòng đời của dữ liệu.*
