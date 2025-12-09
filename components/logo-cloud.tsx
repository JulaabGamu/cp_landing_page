import { InfiniteSlider } from '@/components/ui/infinite-slider'
import { ProgressiveBlur } from '@/components/ui/progressive-blur'

export default function LogoCloud() {
    return (
        <section className="bg-white overflow-hidden py-16">
            <div className="group relative m-auto max-w-7xl px-6">
                <div className="flex flex-col items-center md:flex-row">
                    <div className="md:max-w-44 md:border-r md:pr-6">
                        <p className="text-end text-sm">Trusted by students at</p>
                    </div>
                    <div className="relative py-6 md:w-[calc(100%-11rem)]">
                        <InfiniteSlider
                            speedOnHover={20}
                            speed={40}
                            gap={150}>
                            <div className="flex">
                                <img
                                    className="mx-auto h-16 w-fit dark:invert"
                                    src="/nus.png"
                                    alt="NUS Logo"
                                    height="64"
                                    width="auto"
                                />
                            </div>

                            <div className="flex">
                                <img
                                    className="mx-auto h-12 w-fit dark:invert"
                                    src="/ntu.png"
                                    alt="NTU Logo"
                                    height="32"
                                    width="auto"
                                />
                            </div>

                            <div className="flex">
                                <img
                                    className="mx-auto h-12 w-fit dark:invert"
                                    src="/smu.png"
                                    alt="SMU Logo"
                                    height="48"
                                    width="auto"
                                />
                            </div>
                        </InfiniteSlider>

                        <div className="bg-gradient-to-r from-white absolute inset-y-0 left-0 w-20"></div>
                        <div className="bg-gradient-to-l from-white absolute inset-y-0 right-0 w-20"></div>
                        <ProgressiveBlur
                            className="pointer-events-none absolute left-0 top-0 h-full w-20"
                            direction="left"
                            blurIntensity={1}
                        />
                        <ProgressiveBlur
                            className="pointer-events-none absolute right-0 top-0 h-full w-20"
                            direction="right"
                            blurIntensity={1}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
