"use client"
import { AppSidebar } from "@/components/app-sidebar"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import Image from "next/image"

export default function MainLayout( {children} : Readonly<{ children: React.ReactNode }> ) {
    return (
        <SidebarProvider>
            <AppSidebar />
            <SidebarInset className="bg-sidebar">
                <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12 bg-white">
                    <div className="flex items-center gap-2 px-4 w-full justify-between">
                        <SidebarTrigger className="-ml-1 hover:cursor-pointer" />
                        <Separator orientation="vertical" className="mr-2 h-4" />
                        <div className="flex items-center justify-between w-full">
                            <div className="max-w-md md:w-md">
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none cursor-pointer z-50">
                                        <i className="fas fa-search text-gray-500"></i>
                                    </div>
                                    <Input className="block w-full py-2 pl-10 pr-12 text-sm bg-gray-100 border border-transparent rounded-md focus:bg-white focus-visible:border-blue-300 focus-visible:ring-blue-200 focus:outline-none" placeholder="Tìm kiếm khóa học, tài liệu..."/>
                                </div>
                            </div>
                            <div className="flex items-center space-x-4">
                                <button className="p-1 text-gray-400 rounded-full hover:text-gray-500 dark:hover:text-gray-300 focus:outline-none relative">
                                    <i className="fas fa-bell"></i>
                                    <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500"></span>
                                </button>
                                <button className="p-1 text-gray-400 rounded-full hover:text-gray-500 dark:hover:text-gray-300 focus:outline-none relative">
                                    <i className="fas fa-trophy"></i>
                                    <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-yellow-500"></span>
                                </button>
                                <div className="relative ml-3">
                                    <div className="flex items-center space-x-2 cursor-pointer" id="user-menu-button">
                                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Xin chào, Trọng</span>
                                        <Image className="w-8 h-8 rounded-full" width={32} height={32} src="/avatar.jpg" alt="User profile"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                <main className="flex flex-1 p-4 items-center justify-center">
                    {children}
                </main>
            </SidebarInset>
        </SidebarProvider>
    )
}
