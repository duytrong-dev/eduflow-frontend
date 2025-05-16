import Link from "next/link";

export default function Logo() {
    return (
        <Link href="/" className="flex items-center justify-center h-16 px-4 border-gray-200 z-50">
            <div className="flex items-center h-16 cursor-pointer primary-color">
                <i className="fas fa-graduation-cap text-4xl mr-2"></i>
                <span className="text-xl font-bold">EduFlow Pro</span>
            </div>
        </Link>
    )
}