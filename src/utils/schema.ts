import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .string()
    .email({ message: "Email không đúng định dạng" })
    .nonempty({ message: "Email không được để trống" }),
  password: z
    .string()
    .nonempty({ message: "Mật khẩu không được để trống" })
    .min(6, { message: "Mật khẩu tối thiểu phải 6 ký tự" }),
});

export const registerSchema = z.object({
  email: z
    .string()
    .email({ message: "Email không đúng định dạng" })
    .nonempty({ message: "Email không được để trống" }),
  password: z
    .string()
    .nonempty({ message: "Mật khẩu không được để trống" })
    .min(6, { message: "Mật khẩu tối thiểu phải 6 ký tự" }),
  phoneNumber: z
    .string()
    .nonempty({ message: "Số điện thoại không được để trống" })
    .min(10)
    .max(10),
  fullName: z
    .string()
    .nonempty({ message: "Họ và tên không được để trống" })
    .min(10, { message: "Họ và tên tối thiểu phải 10 ký tự" }),
  role: z.string().nonempty({ message: "Loại tài khoản không được để trống" }),
});
