export default function Step2() {
    return (
        <div className="grid grid-cols-2 p-3 h-screen w-screen">
            <div className="flex flex-col col-start-1 gap-3 p-10 bg-slate-400">
                <div>Step 1</div>
                <div>Step 2</div>
                <div>Step 3</div>
                <div>Step 4</div>
            </div>
            <div className="flex flex-col col-start-2 gap-3 p-10 bg-slate-300">
                <text>Select your plan</text>
                <text>You have the option of monthly or yearly billing</text>

                <div className="flex gap-3">
                    <div>Arcade</div>
                    <div>Advanced</div>
                    <div>Pro</div>
                </div>
                <div>Monthly/Yearly</div>
                <div className="flex gap-3">
                    <a href="/step1"className="bg-amber-500 self-end p-2">Go back</a>
                    <a href="/step3" className="bg-amber-500 self-end p-2">Next step</a>
                </div>
            </div>
        </div>
    )
}   