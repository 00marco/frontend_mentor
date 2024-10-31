import CustomButton from "./button";
import RadioButtonOptions from "./form_radio_button";
import FormTextLeft from "./form_text_left";
import FormTextRight from "./form_text_right";

export default function MainPage(){
    return (
        <div className="grid grid-cols-2 padding-3">
            <div className="margin-3 grid h-full gap-3">
                <text >Mortgage Calculator</text>
                <FormTextLeft info_text="Mortgage amount" left_text="$"/>
                <div className="flex gap-3">
                    <FormTextRight right_text="years" info_text="Mortgage Term"/>
                    <FormTextRight right_text="%" info_text="Interest Rate"/>
                </div>
                <div>
                    <RadioButtonOptions info_text="Mortgage Type">
                        <text>Repayment</text>
                        <text>Interest Only</text>
                    </RadioButtonOptions>
                </div>
                <CustomButton text="Calculate Repayments"/>
                
            </div>
            <img src="https://picsum.photos/id/237/200/300" alt="random image" className="col-start-2 object-cover h-full w-full" />
        </div>
    )
}