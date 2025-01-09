import { Link } from "react-router-dom";
import RegisterForm from "./components/RegisterForm";

export default function Register() {
  return (
    <main className="">
      <div className=" xl:max-w-[1020px] lg:max-w-[980px] md:max-w-[720px] sm:max-w-[540px] w-full mx-auto px-[10px] lg:my-[3rem]">
        <div className="flex justify-center">
          <div className="lg:w-7/12 w-full max-w-full px-[10px]">
            <div className="lg:p-[3rem] rounded-[1rem] p-[42px] bg-white shadow-md">
              <div className="flex items-center justify-center mb-5">
                <Link
                  to="/dang-nhap"
                  className="xl:text-[1.75rem] flex items-center justify-center font-light text-[#7a8188] pb-4 w-full border-b-2 border-borderColor"
                >
                  Đăng nhập
                </Link>
                <Link
                  to="/tao-tai-khoan-moi"
                  className="xl:text-[1.75rem] flex items-center justify-center font-semibold pb-4 w-full border-b-2 border-redColor"
                >
                  Tạo tài khoản mới
                </Link>
              </div>
              <RegisterForm />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
