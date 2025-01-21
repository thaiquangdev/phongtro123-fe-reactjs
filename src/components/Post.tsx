import { Link } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";
import { Button } from "./ui/button";
import { IoMdHeartEmpty } from "react-icons/io";

export default function Post() {
  return (
    <div className="bg-white shadow-sm rounded p-3 mt-3">
      <figure className="w-full h-[260px] rounded-[0.4rem] bg-[#f1f1f1] relative">
        <Link to="/" title="Nhà trọ giờ giấc tự do, không chung chủ">
          <img
            src="https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2021/06/20/img-20210620-125508_1624169523.jpg"
            alt=""
            className="w-[60%] h-[260px] rounded-tl-[0.4rem] rounded-bl-[0.4rem] border-r-[3px] border-white object-cover float-left"
          />
          <img
            src="https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2020/05/10/img-20200508-151907_1589090895.jpg"
            alt=""
            className="w-[40%] h-[50%] rounded-tr-[0.4rem] border-b-[3px] border-white object-cover float-start"
          />
          <img
            src="https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2021/06/20/img-20210620-125458_1624169542.jpg"
            alt=""
            className="w-[20%] h-[50%] border-r-[3px] border-white object-cover float-left"
          />
          <img
            src="https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2021/06/20/img-20210620-125506_1624169540.jpg"
            alt=""
            className="w-[20%] h-[50%] rounded-br-[0.4rem] object-cover float-left"
          />
        </Link>
        <div className="absolute bottom-[5px] lef-[5px] flex items-center py-[0.2rem] px-[0.3rem] rounded-[0.3rem] text-white text-[0.8rem] leading-1">
          18
        </div>
      </figure>
      <div className="pt-3">
        <h3 className="uppercase font-medium text-[14px] mb-2">
          <Link
            to="/"
            className="text-redColor"
            title="Nhà trọ giờ giấc tự do không chung chủ"
          >
            Nhà trọ giờ giấc tự do không chung chủ
          </Link>
        </h3>
        <div className="mb-2">
          <span className="text-greenColor font-semibold text-[14px]">
            2 triệu/tháng
          </span>
          <span className="w-[3px] h-[3px] inline-block rounded-full bg-[#aaa] mb-[3px] mr-[4px] ml-[5px]"></span>
          <span className="text-[14px]">
            20m<sup>2</sup>
          </span>
          <span className="w-[3px] h-[3px] inline-block rounded-full bg-[#aaa] mb-[3px] mr-[4px] ml-[5px]"></span>
          <span className="text-[14px]">Tân Bình, Hồ Chí Minh</span>
          <p className="text-[13px] mb-3 font-light text-[#787c82]">
            Phòng trọ chính chủ. Giá phòng mùa covi từ 2.200.000đ/tháng
            -2.500.000đ/tháng còn 2 phòng cuối tháng - 1 phòng mặt tiền trệt
            2500 - Tên phòng trọ: Phòng…
          </p>
          <div className="flex justify-between">
            <div className="flex items-center w-[50%]">
              <img
                src="https://phongtro123.com/images/default-user.svg"
                alt=""
                className="w-[40px] h-[40px] border border-[#ddd] p-[0.2rem] mr-[0.7rem] rounded-full"
              />
              <div className="leading-[1.25]">
                <span className="text-[14px] block">Anh Toàn</span>
                <time className="text-[0.85rem] text-[#787c82]">Hôm nay</time>
              </div>
            </div>
            <div className="w-auto flex items-center">
              <Link
                to="/"
                className="bg-greenBg text-white flex items-center mr-2 py-[4px] px-[7px] rounded-md text-[13px] gap-1"
              >
                <FaPhoneAlt />
                0973050592
              </Link>
              <Button className="bg-transparent w-10 h-10 text-black">
                <IoMdHeartEmpty className="text-[20px]" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
