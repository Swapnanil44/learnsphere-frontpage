import { ProjectCard } from "../sub/ProjectCard";

export function Projects(){
    return (
        <div className="flex flex-col items-center justify-center py-20">
            <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
                Trending Courses
            </h1>
                <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
                <ProjectCard
                src="/react copy.png"
                title="React Revolution: Frontend Wizardry Unleashed"
                description= "Embark on a React journey, mastering dynamic web development in this comprehensive course for frontend excellence."
                />
                <ProjectCard
                src="/next.jpg"
                title="Next.js Navigators: Journey into Dynamic Web Development"
                description= "Step into Next.js world, mastering dynamic web development in this course tailored for frontend excellence and innovation."
                />
                <ProjectCard
                src="/tailwind.jpg"
                title="Tailwind Triumph: Streamlined Styling for Web Wizards"
                description= "Dive into Tailwind's simplicity, mastering streamlined styling in this course tailored for web design excellence and efficiency."
                />
                </div>

        </div>
    )
}