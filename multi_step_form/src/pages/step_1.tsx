export default function Step1() {
    return (
        <div className="grid grid-cols-2 p-3 h-screen w-screen">
            <div className="flex flex-col col-start-1 gap-3 p-10 bg-slate-400">
                <div>Step 1</div>
                <div>Step 2</div>
                <div>Step 3</div>
                <div>Step 4</div>
            </div>
            <div className="flex flex-col col-start-2 gap-3 p-10 bg-slate-300">
                <text>Personal Info</text>
                <text>Please provide your name, email address and phone number</text>

                <form className="flex flex-col">
                    <label>Name</label>
                    <input type="form" className="p-1 m-1"></input>
                </form>
                
                <form className="flex flex-col">
                    <label>Email Address:</label>
                    <input type="form" className="p-1 m-1"></input>
                </form>

                <form className="flex flex-col">
                    <label>Phone Number:</label>
                    <input type="form" className="p-1 m-1"></input>
                </form>

                <a href="/step2" className="bg-amber-500 self-end p-2">Next step</a>
            </div>
        </div>
    )
}   