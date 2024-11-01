export default function Step4() {
    return (
        <div className="grid grid-cols-2 p-3 h-screen w-screen">
            <div className="flex flex-col col-start-1 gap-3 p-10 bg-slate-400">
                <div>Step 1</div>
                <div>Step 2</div>
                <div>Step 3</div>
                <div>Step 4</div>
            </div>
            <div className="flex flex-col col-start-2 gap-3 p-10 bg-slate-300">
                <text>Finishing up</text>
                <text>Double-check everything looks OK before confirming.</text>

                <div className="flex flex-col gap-3">
                    <div>Arcade (Yearly)</div>
                    <div>Online service</div>
                    <div>Larger storage</div>
                    <div>Total (per year)</div>
                </div>
                <div className="flex gap-3">
                    <a href="/step3"className="bg-amber-500 self-end p-2">Go back</a>
                    <a href="/end" className="bg-amber-500 self-end p-2">Next step</a>
                </div>
            </div>
        </div>
    )
}   