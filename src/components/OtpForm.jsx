import { useState } from "react";

function OtpForm({otpLen = 4, onOtpSubmit = () => {}}) {
    const handleChange = (e) => {}
    const handleClick = (e) => {}
    const handleKeyDown = (e) => {}
    const [otp, setOtp] = useState(new Array(otpLen).fill(""));
    return (
        <div>
            {otp.map((val, index) => {
            return (
            <input
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