const SmallLoader = () => {
    return (
        <div className="text-center mb-5 absolute z-[100] left-[calc(50%-32px)]">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-[#2563eb] border-r-transparent align-[-0.125em] text-primary motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
        </div>
    );
}

export default SmallLoader;