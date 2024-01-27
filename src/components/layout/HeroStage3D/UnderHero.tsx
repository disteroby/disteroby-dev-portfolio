export default function UnderHero() {
    return (
        <div className='absolute w-full h-[80vh] '>
            <div className='absolute inset-0 bg-gradient-to-b from-black/80 to-dark-gray overflow-hidden' />
            <div className='absolute inset-0 grid-fade-out' />
            <div className='absolute inset-0 bg-gradient-to-b from-transparent to-dark-gray' />
            <div className='absolute inset-0 bg-[radial-gradient(100%_70%_at_top,transparent_50%,#0C0C0F_100%)]' />
        </div>
    );
}
