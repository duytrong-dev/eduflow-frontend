import { 
    Home, 
    LucideIcon, 
    Book, 
    CalendarDays,
    ListChecks,
    LineChart,
    Users
} from "lucide-react"

export type Navigation = {
    title: string,
    url: string,
    icon: LucideIcon
}

export const Navigations: Navigation[] = [
    {
        title: 'Trang chủ',
        url: '/',
        icon: Home
    },
    {
        title: 'Khóa học',
        url: '/courses',
        icon: Book
    },
    {
        title: 'Lịch học',
        url: '/study-schedule',
        icon: CalendarDays
    },
    {
        title: 'Nhiệm vụ',
        url: '/mission',
        icon: ListChecks
    },
    {
        title: 'Phân tích học tập',
        url: '/learning-analytics',
        icon: LineChart
    },
    {
        title: 'Bạn bè',
        url: '/friend',
        icon: Users
    },

]
