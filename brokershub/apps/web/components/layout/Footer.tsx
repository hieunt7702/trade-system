export function Footer() {
  return (
    <footer className="bg-surface-deep border-t border-outline-variant w-full py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter px-margin-desktop max-w-container-max mx-auto">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt="HieuNTHUB Logo"
              className="h-8 w-8 rounded-DEFAULT"
              src="https://lh3.googleusercontent.com/aida/ADBb0ujcO1JMFDVophzkcTGcglayhs0KeDHQ1aYUa-aMbnz1l0JVShBgLokVZEGOP-J6M_waxuloaq_3Mz0uQ0YX1X81LfZnZpszFyg58ybGwkYmSqsPXmPIE88I9v82zATqpWbaGaxqqVJ32UVx2ttVUY7EcUH7BiaeDXjMucZ6q7M7pMl6QrFGPDDFIrZatwkfHu_ILIVVctpgVCsj7FKEjAbdZAMruEYDR2wFDD5lPjPJFZfrrMbnjzXC0II"
            />
            <span className="font-display-lg text-title-md font-bold text-text-primary">HieuNTHUB</span>
          </div>
          <p className="text-text-muted text-sm mt-2">Tổng hợp hồ sơ broker có chọn lọc, tín hiệu uy tín, nền tảng và mô hình hoa hồng giúp bạn quyết định nhanh hơn.</p>
          <div className="flex flex-wrap gap-2 mt-2">
            <span className="bg-surface-variant/40 border border-outline-variant px-2 py-1 rounded text-[10px] text-text-muted flex items-center gap-1">29 Broker niêm yết</span>
            <span className="bg-surface-variant/40 border border-outline-variant px-2 py-1 rounded text-[10px] text-success-green flex items-center gap-1">84 Giấy phép theo dõi</span>
            <span className="bg-surface-variant/40 border border-outline-variant px-2 py-1 rounded text-[10px] text-secondary flex items-center gap-1"><span className="material-symbols-outlined text-[12px]">star</span> Đánh giá xác thực</span>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <h4 className="text-text-primary font-bold text-sm mb-2 uppercase tracking-wider">Liên hệ</h4>
          <a className="text-text-muted hover:text-primary transition-all text-sm flex items-center gap-2" href="#">
            <span className="material-symbols-outlined text-[16px]">mail</span> admin@hieunthub.co
          </a>
          <a className="text-text-muted hover:text-primary transition-all text-sm flex items-center gap-2" href="#">
            <span className="material-symbols-outlined text-[16px]">send</span> @hieunthubco
          </a>
        </div>
        <div className="flex flex-col gap-3">
          <h4 className="text-text-primary font-bold text-sm mb-2 uppercase tracking-wider">Sản phẩm</h4>
          <a className="text-text-muted hover:text-primary underline transition-all text-sm" href="#">BHUBAssistant EA</a>
          <a className="text-text-muted hover:text-primary underline transition-all text-sm" href="#">Tải EA miễn phí</a>
          <a className="text-text-muted hover:text-primary underline transition-all text-sm" href="#">Hướng dẫn cài</a>
        </div>
        <div className="flex flex-col gap-3">
          <h4 className="text-text-primary font-bold text-sm mb-2 uppercase tracking-wider">Pháp lý</h4>
          <p className="text-text-muted text-xs leading-relaxed">HieuNTHUB chỉ cung cấp thông tin tham khảo, không phải tư vấn đầu tư. Vui lòng tự nghiên cứu trước khi quyết định.</p>
          <div className="mt-4 flex flex-col gap-2">
            <a className="text-text-muted hover:text-primary underline transition-all text-sm" href="#">Về chúng tôi</a>
            <a className="text-text-muted hover:text-primary underline transition-all text-sm" href="#">Điều khoản</a>
            <a className="text-text-muted hover:text-primary underline transition-all text-sm" href="#">Chính sách bảo mật</a>
          </div>
        </div>
      </div>
      <div className="mt-12 px-margin-desktop max-w-container-max mx-auto text-text-muted text-xs text-center border-t border-surface-variant pt-6">
        © 2024 HieuNTHUB. Bảo lưu mọi quyền.
      </div>
    </footer>
  );
}
