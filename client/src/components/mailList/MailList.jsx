import "./mailList.css";

const MailList = () => {
  return (
    <div className="mail">
      <h1 className="mailTitle">Tiết kiệm thời gian và tiền bạc!</h1>
      <span className="mailDesc">
        Đăng ký và chúng tôi sẽ gửi những ưu đãi tốt nhất cho bạn
      </span>
      <div className="mailInputContainer">
        <input
          className="h-[60px]"
          type="text"
          placeholder="Địa chỉ e-mail của bạn"
        />
        <button className="w-[100px] max-h-[30px]">Đăng kí</button>
      </div>
    </div>
  );
};

export default MailList;
