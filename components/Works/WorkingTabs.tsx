import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Website from '@/components/Works/Website'
import { featuredWorksDetail } from '@/constants'

const WorkingTabs = () => {
    return (
        <Tabs defaultValue="all" className="flex-col flex items-center gap-10 md:gap-4">
            <TabsList className='bg-transparent w-full flex items-center md:gap-10'>
                <TabsTrigger value="all" className='md:text-[20px]'>All</TabsTrigger>
                <TabsTrigger value="website" className='md:text-[20px]'>Website</TabsTrigger>
                <TabsTrigger value="uiux" className='md:text-[20px]'>UI/UX</TabsTrigger>
            </TabsList>
            <TabsContent value="all" className='grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-2 lg:gap-4 place-items-center'>
                {featuredWorksDetail.map((works) => (
                    <Website key={works.name} works={works} />
                ))}
            </TabsContent>
            <TabsContent value="website" className='grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-2 lg:gap-4 place-items-center'>
                {featuredWorksDetail.map((works) => (
                    <Website key={works.name} works={works} />
                ))}
            </TabsContent>
            <TabsContent value="uiux" className=''>
            </TabsContent>
        </Tabs>
    )
}

export default WorkingTabs