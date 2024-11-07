import {useState} from 'react';
import {useNavigate} from 'react-router-dom';

export default function Step1() {
    const navigate = useNavigate()

    const [firstPageNameField, setFirstPageNameField] = useState("");
    const [firstPageNameError, setFirstPageNameError] = useState(false);
    const [firstPageEmailField, setFirstPageEmailField] = useState("");
    const [firstPageEmailError, setFirstPageEmailError] = useState(false);
    const [firstPagePhoneField, setFirstPagePhoneField] = useState("");
    const [firstPagePhoneError, setFirstPagePhoneError] = useState(false);

    function onChangeFirstPageNameField(e){
        setFirstPageNameField(e.target.value);
        setFirstPageNameError(false);
    }

    function onChangeFirstPageEmailField(e){
        setFirstPageEmailField(e.target.value);
        setFirstPageEmailError(false);
    }
    function onChangeFirstPagePhoneField(e){
        setFirstPagePhoneField(e.target.value);
        setFirstPagePhoneError(false);
    }
    function submitForm(e){
        if ((firstPageNameField.length === 0 || firstPageEmailField.length === 0 || firstPagePhoneField.length === 0)) {
            setFirstPageNameError(firstPageNameField.length === 0);
            setFirstPageEmailError(firstPageEmailField.length === 0);
            setFirstPagePhoneError(firstPagePhoneField.length === 0);
        }else{
            navigate("/step2")
        }
    }
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
                        <label className="text-red-500 font-bold">{firstPageNameError ? "This field is required" : ""}</label>
                    </div>
                    <input type="form" className={"p-3 my-1 rounded-md border-2 " + (firstPageNameError ? "border-red-500" : "")} placeholder="Vanessa Mint" id="firstPageNameField" value={firstPageNameField} onChange={onChangeFirstPageNameField}></input>
                </form>
                
                <form className="flex flex-col">
                    <div className="flex justify-between ">
                        <label>Email Address</label>
                        <label className="text-red-500 font-bold">{firstPageEmailError ? "This field is required" : ""}</label>
                    </div>
                    <input type="form" className={"p-3 my-1 rounded-md border-2 " + (firstPageEmailError ? "border-red-500" : "")} placeholder="vanessamint@gmail.com" value={firstPageEmailField} onChange={onChangeFirstPageEmailField}></input>
                </form>

                <form className="flex flex-col">
                    <div className="flex justify-between ">
                        <label>Phone Number</label>
                        <label className="text-red-500 font-bold">{firstPagePhoneError ? "This field is required" : ""}</label>
                    </div>
                    <input type="form" className={"p-3 my-1 rounded-md border-2 " + (firstPagePhoneError ? "border-red-500" : "")} placeholder="e.g. + 1 234 567 890" value={firstPagePhoneField} onChange={onChangeFirstPagePhoneField}></input>
                </form>
                <div className="flex self-end grow">
                    <button className="self-end bg-amber-500 p-3 rounded-md" onClick={submitForm}>
                        Next step
                    </button>
                </div>
            </div>
        </div>
    )
}   