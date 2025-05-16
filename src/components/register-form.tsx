import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"

export function RegisterForm({className,...props}: React.ComponentProps<"form">) {
    return (
        <form className={cn("flex flex-col gap-6", className)} {...props}>
            <div className="flex flex-col items-center gap-2 text-center ">
                <h1 className="text-2xl font-bold text-gray-600">Đăng ký mới</h1>
                <p className="text-muted-foreground text-sm text-balance">
                    Vui lòng nhập email và mật khẩu của bạn.
                </p>
            </div>
            <div className="grid gap-6 text-gray-600">
                <div className="grid gap-3">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="m@example.com" required />
                </div>
                <div className="grid gap-3">
                    <Label htmlFor="password">Mật khẩu</Label>
                    <Input id="password" type="password" required />
                </div>
                <div className="grid gap-3">
                    <Label htmlFor="confirm-password">Xác nhận mật khẩu</Label>
                    <Input id="confirm-password" type="password" required />
                </div>
                <Button type="submit" className="w-full hover:cursor-pointer bg-[var(--primary-blue)] shadow-lg shadow-blue-200 transition-all duration-300 hover:translate-y-1 hover:shadow-none hover:bg-blue-300">
                    Đăng ký
                </Button>
                <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
                    <span className="bg-background text-muted-foreground relative z-10 px-2">
                        Hoặc tiếp tục với
                    </span>
                </div>
                <div className="grid gap-3">
                    <Button variant="outline" className="w-full hover:cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path
                                d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
                                fill="currentColor"
                            />
                        </svg>
                      Đăng nhập bằng GitHub
                    </Button>
                    <Button variant="outline" className="w-full hover:cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 533.5 544.3" width="24" height="24">
                            <path fill="#4285F4" d="M533.5 278.4c0-17.4-1.6-34.1-4.6-50.4H272v95.3h147.5c-6.4 34-25.4 62.7-54.3 81.9v67.8h87.7c51.3-47.2 80.6-116.7 80.6-194.6z"/>
                            <path fill="#34A853" d="M272 544.3c73.7 0 135.5-24.5 180.6-66.5l-87.7-67.8c-24.3 16.2-55.4 25.7-92.9 25.7-71.4 0-132-48.1-153.7-112.9H29.6v70.7C73.8 482.6 166.4 544.3 272 544.3z"/>
                            <path fill="#FBBC05" d="M118.3 322.8c-10.1-30-10.1-62.3 0-92.3V159.8H29.6c-36.2 72.5-36.2 157.4 0 229.9l88.7-66.9z"/>
                            <path fill="#EA4335" d="M272 107.1c39.9 0 75.8 13.8 104.2 40.8l78.1-78.1C407.5 24.5 345.7 0 272 0 166.4 0 73.8 61.7 29.6 159.8l88.7 70.7C140 155.2 200.6 107.1 272 107.1z"/>
                        </svg>
                      Đăng nhập bằng Google
                    </Button>
                    <Button variant="outline" className="w-full hover:cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                            <path fill="#1877F2" d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073c0 6.016 4.388 10.995 10.125 11.854v-8.385H7.078v-3.47h3.047V9.413c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953h-1.513c-1.49 0-1.953.925-1.953 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.068 24 18.089 24 12.073z"/>
                        </svg>
                      Đăng nhập bằng Facebook
                    </Button>
                </div>
            </div>
            <div className="text-center text-sm text-gray-600">
                Đã có tài khoản?{" "}
                <Link href="/login" className="underline underline-offset-2">
                    Đăng nhập
                </Link>
            </div>
        </form>
    )
}
