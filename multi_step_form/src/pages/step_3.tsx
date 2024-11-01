export default function Step3() {
    return (
        <div className="grid grid-cols-2 p-3 h-screen w-screen">
            <div className="flex flex-col col-start-1 gap-3 p-10 bg-slate-400">
                <div>Step 1</div>
                <div>Step 2</div>
                <div>Step 3</div>
                <div>Step 4</div>
            </div>
            <div className="flex flex-col col-start-2 gap-3 p-10 bg-slate-300">
                <text>Pick add-ons</text>
                <text>Add-ons help enhance your gaming experience</text>

                <div className="flex flex-col gap-3">
                    <div>Online service</div>
                    <div>Larger storage</div>
                    <div>Customizable profile</div>
                </div>
                <div className="flex gap-3">
                    <a href="/step2"className="bg-amber-500 self-end p-2">Go back</a>
                    <a href="/step4" className="bg-amber-500 self-end p-2">Next step</a>
                </div>
            </div>
        </div>
    )
}   