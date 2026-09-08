export default function Loading() {
    return (
        <main className="min-h-screen bg-background text-foreground flex items-center justify-center px-6">
            <div
                className="flex flex-col items-center text-center"
                role="status"
                aria-live="polite"
                aria-label="Loading page"
            >
                <div className="h-10 w-10 animate-spin rounded-full border-2 border-border border-t-accent" />

                <p className="mt-5 text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
                    Heek-E Entertainment
                </p>

                <p className="mt-2 text-sm text-muted-foreground">
                    Loading...
                </p>
            </div>
        </main>
    )
}