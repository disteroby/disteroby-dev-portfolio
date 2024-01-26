export default function UnderHero() {
    return (
        <div className='absolute w-full h-[50vh] '>
            <div className='absolute inset-0 bg-gradient-to-b from-black/80 to-dark-gray overflow-hidden' />
            <div className='absolute inset-0 grid-fade-out' />
            <div className='absolute inset-0 bg-gradient-to-b from-transparent to-dark-gray' />
        </div>
    );
}
