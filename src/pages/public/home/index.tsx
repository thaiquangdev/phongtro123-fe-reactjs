import Post from "@/components/Post";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main>
      <div className="xl:max-w-[1020px] lg:max-w-[980px] lg:block mx-auto">
        <div className="flex flex-wrap mt-4">
          <div className="lg:w-8/12 md:w-9/12 px-[10px]">
            <header className="mt-2 mb-3">
              <h1 className="lg:text-[1.5rem] leading-[1.5rem] font-medium mb-2">
                Kênh thông tin cho thuê phòng trọ số 1 Việt Nam
              </h1>
              <p className="text-[0.95rem]">Có 69.297 tin đăng cho thuê</p>
            </header>
            <div>
              <div className="flex items-center">
                <div className="flex items-center">
                  <Link
                    to="/"
                    className="text-redColor text-[14px] rounded-[0.375rem] bg-white font-medium shadow-md px-3 py-2"
                  >
                    Toàn quốc
                  </Link>
                  <Link to="/" className=" ml-6 text-[14px]">
                    Hồ Chí Minh
                  </Link>
                  <Link to="/" className=" ml-6 text-[14px]">
                    Hà Nội
                  </Link>
                  <Link to="/" className=" ml-6 text-[14px]">
                    Đà Nẵng
                  </Link>
                </div>
                <Button className="p-0 h-0 ml-6 text-black text-[14px] underline">
                  Khác
                </Button>
              </div>
            </div>
            <div className="mt-4 pt-2">
              <Link to="/" className="mr-4 text-[15px]">
                Đề xuất
              </Link>
              <Link to="/" className="mr-4 text-[15px]">
                Mới đăng
              </Link>
            </div>
            <div>
              <Post />
            </div>
          </div>
          <div className="lg:w-4/12 md:w-9/12 px-[10px]">b</div>
        </div>
      </div>
    </main>
  );
}
