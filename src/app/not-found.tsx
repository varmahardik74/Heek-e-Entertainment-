import Link from "next/link"

export default function NotFound() {
    return (
        <main className="min-h-screen bg-background text-foreground flex items-center justify-center px-6">
            <div className="w-full max-w-3xl text-center">
                <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-accent">
                    Heek-E Entertainment
                </p>

                <h1 className="text-[clamp(6rem,18vw,12rem)] font-black leading-none tracking-[-0.08em]">
                    404
                </h1>

                <h2 className="mt-4 text-2xl font-semibold sm:text-3xl">
                    This page doesn&apos;t exist.
                </h2>

                <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg">
                    The page you&apos;re looking for may have been moved, removed, or never
                    existed.
                </p>

                <Link
                    href="/"
                    className="mt-8 inline-flex cursor-pointer items-center gap-3 rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground transition-all duration-200 hover:-translate-y-0.5 hover:opacity-90 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                    Back to site
                    <span aria-hidden="true">→</span>
                </Link>
            </div>
        </main>
    )
}