import ProjectModelContainer from "../DeviceWithSkills/ProjectModelContainer.tsx";

export default function SectionProjects() {
    return (
        <div className='flex min-h-screen flex-col items-center p-4'>
            <span className='section-title'>MY PROJECTS</span>
            <ProjectModelContainer />
        </div>
    );
}
