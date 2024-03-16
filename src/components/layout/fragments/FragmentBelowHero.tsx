export default function FragmentBelowHero() {
    return (
        <div
            style={{
                maskImage:
                    "radial-gradient(150% 70% at top, black 30%,transparent 100%)",
            }}
            className='absolute h-[80vh] w-full'>
            <div className='grid-fade-out absolute inset-0' />
        </div>
    );
}
