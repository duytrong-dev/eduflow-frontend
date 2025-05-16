import Logo from "@/components/custom/logo"
import { RegisterForm } from "@/components/register-form"
import Image from "next/image"

export default function RegisterPage() {
    return (
        <div className="container grid min-h-svh lg:grid-cols-2 relative">
            <div className="flex justify-center mt-6 md:top-6 md:absolute md:left-0">
                <Logo />
            </div>
            <div className="hidden relative w-full h-full lg:block">
                <div className="w-full h-full flex justify-center items-center">
                    <div className="flex flex-col w-[80%] transform translate-y-[-20%] gap-16">
                        <div className="flex flex-col gap-6 font-bold">
                            <h1 className="text-5xl primary-color">Chào mừng đến</h1>
                            <h3 className="text-3xl text-gray-600">Hệ thống của chúng tôi</h3>
                        </div>
                        <p className="text-gray-600">Nền tảng hỗ trợ học tập thông minh,<br/> hiện đại và cá nhân hóa.</p>
                    </div>
                </div>
                <Image src="/login.png" alt="login" width={270} height={420} className="absolute bottom-0 right-0"/>
            </div>
            <div className="flex flex-col gap-4 p-6 md:p-10">
                <div className="flex flex-1 items-center justify-center">
                    <div className="w-full max-w-xs">
                        <RegisterForm />
                    </div>
                </div>
            </div>
        </div>
    )
}
