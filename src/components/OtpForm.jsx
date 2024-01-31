import { useEffect, useRef, useState } from "react";

function OtpForm({otpLen = 4, onOtpSubmit = () => {}}) {
    const handleChange = (index, e) => {
        const value = e.target.value;
        // return if not a number
        if (isNaN(value)) return;
        const newOtp = [...otp];
        // take only one input from the field
        newOtp[index] = value.substring(value.length - 1);

        // jump to next field if the current field is not empty & stop after last field
        if (value && index < otpLen - 1 && otpRef.current[index + 1]) {
            otpRef.current[index + 1].focus();
        }
        setOtp(newOtp);
        // submit otp
        const finalOtp = newOtp.join("");
        if (finalOtp.length === otpLen) {
            onOtpSubmit(finalOtp);
        }
    };
    const handleClick = (index) => {
        // move insertion point to the right most to enter a new value
        otpRef.current[index].setSelectionRange(1, 1);
    };
    const handleKeyDown = (index, e) => {
        // remove previous field element on pressing backspace
        if (
            e.key === "Backspace" &&
            !otp[index] &&
            index > 0 &&
            otpRef.current[index - 1]
        ) {
            otpRef.current[index - 1].focus();
        }
    };
    const [otp, setOtp] = useState(new Array(otpLen).fill(""));
    const otpRef = useRef([]);

    useEffect(() => {
        if (otpRef.current[0]) {
            otpRef.current[0].focus()
        }
    },[])

    return (
        <div>
            {otp.map((val, index) => {
            return (
            <input
                ref={(input) => (otpRef.current[index] = input)}
                key={index}
                type="text"
                value={val}
                onChange={(e) => handleChange(index, e)}
                onClick={() => handleClick(index)}
                onKeyDown={(e)=>handleKeyDown(index, e)}
                className="otp-form"
            />
            )})}
        </div>
    )
}

export default OtpForm;