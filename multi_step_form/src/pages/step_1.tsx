export default function Step1() {
    return (
        <div className="grid grid-cols-2 p-3 h-screen w-screen">
            <div className="flex flex-col col-start-1 gap-3 p-10 bg-slate-400">
                <div>Step 1</div>
                <div>Step 2</div>
                <div>Step 3</div>
                <div>Step 4</div>
            </div>
            <div className="flex flex-col col-start-2 gap-3 p-10">
                <div className="flex flex-col mb-5">
                    <text className="text-3xl mb-2">Personal Info</text>
                    <text className="text-slate-400">Please provide your name, email address and phone number</text>
                </div>

                <form className="flex flex-col">
                    <div className="flex justify-between ">
                        <label>Name</label>
                        <label>This field is required</label>
                    </div>
                    <input type="form" className="p-3 my-1 rounded-md border-2" placeholder="Vanessa Mint"></input>
                </form>
                
                <form className="flex flex-col">
                    <div className="flex justify-between ">
                        <label>Email Address</label>
                        <label>This field is required</label>
                    </div>
                    <input type="form" className="p-3 my-1 rounded-md border-2" placeholder="vanessamint@gmail.com"></input>
                </form>

                <form className="flex flex-col">
                    <div className="flex justify-between ">
                        <label>Phone Number</label>
                        <label>This field is required</label>
                    </div>
                    <input type="form" className="p-3 my-1 rounded-md border-2" placeholder="e.g. + 1 234 567 890"></input>
                </form>
                <div className="flex self-end grow">
                    <a href="/step2" className="bg-amber-500 self-end p-3 rounded-md">Next step</a>
                </div>
            </div>
        </div>
    )
}   