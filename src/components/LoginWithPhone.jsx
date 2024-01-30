import { useState } from "react";
import OtpForm from "./OtpForm";

function LoginWithPhone() {
    const [phoneNumber, setPhoneNumber] = useState("");
    const [enableOtp, setEnableOtp] = useState(false);
    const handlePhoneNumber = (e) => {
        setPhoneNumber(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const phoneRegex = /[^0-9]/g;
        if (phoneNumber.length<=10 || phoneRegex.test(phoneNumber)) {
            alert("invalid phone number");
            return;
        }
        setEnableOtp(true);
    }
    const handleOtpSubmit = (e) => {
        console.log("login successfull");
    }
    return (
        <div>
            {!enableOtp ? <form onSubmit={handleSubmit}>
                <input
                type="text"
                value={phoneNumber}
                onChange={handlePhoneNumber}
                placeholder="Enter Phone Number"
                />
                <button type="submit">Submit</button>
            </form>:
            <div>
                <p>Enter OTP sent to {phoneNumber}</p>
                <OtpForm
                otpLen={4}
                onOtpSubmit={handleOtpSubmit}
                />
            </div>
            }
        </div>
    )
}

export default LoginWithPhone;