import {useState} from 'react';

export default function TextForm(){
    return (
        <form className="flex flex-col">
            <div className="flex justify-between ">
                <label>Name</label>
                <label>This field is required</label>
            </div>
            <input type="form" className="p-3 my-1 rounded-md border-2" placeholder="Vanessa Mint" required={true}></input>
        </form>
    )
}