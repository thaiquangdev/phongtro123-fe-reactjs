import React, { useState } from "react";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";

export default function VerifyOtp() {
  const [isResending, setIsResending] = useState(false);
  const [resendCount, setResendCount] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30); // Thời gian đếm ngược 30 giây

  const handleResendOtp = () => {
    if (isResending) return;

    setIsResending(true);
    setResendCount((prev) => prev + 1);

    // Giả lập gọi API gửi lại OTP
    setTimeout(() => {
      setIsResending(false);
      setTimeLeft(30); // Reset thời gian đếm ngược
    }, 1000); // Giả lập thời gian chờ API
  };

  // Countdown timer logic
  React.useEffect(() => {
    let timer: NodeJS.Timeout;
    if (timeLeft > 0 && resendCount > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [timeLeft, resendCount]);

  return (
    <main className="">
      <div className="xl:max-w-[1020px] lg:max-w-[980px] md:max-w-[720px] sm:max-w-[540px] w-full mx-auto px-[10px] lg:my-[3rem]">
        <div className="flex justify-center">
          <div className="lg:w-7/12 w-full max-w-full px-[10px]">
            <div className="lg:p-[3rem] rounded-[1rem] p-[42px] bg-white shadow-md">
              <div className="flex items-center justify-center mb-5">
                <span className="xl:text-[1.75rem] flex items-center justify-center font-light pb-4 w-full border-b-2 border-redColor">
                  Xác minh tài khoản
                </span>
              </div>
              <div className="flex items-center justify-center mb-4">
                <h3>Nhập mã OTP:</h3>
                <InputOTP maxLength={4}>
                  <InputOTPGroup>
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                    <InputOTPSlot index={3} />
                  </InputOTPGroup>
                </InputOTP>
              </div>

              <div className="flex justify-center mt-4">
                <button
                  onClick={handleResendOtp}
                  disabled={isResending || timeLeft > 0}
                  className={`px-4 py-2 rounded-md text-white font-medium ${
                    isResending || timeLeft > 0
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-red-500 hover:bg-red-600"
                  }`}
                >
                  {isResending
                    ? "Đang gửi lại..."
                    : timeLeft > 0
                    ? `Gửi lại sau ${timeLeft}s`
                    : "Gửi lại mã OTP"}
                </button>
              </div>
              <div className="text-center mt-3 text-sm text-gray-500">
                Nếu bạn không nhận được mã OTP, vui lòng thử gửi lại.
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
