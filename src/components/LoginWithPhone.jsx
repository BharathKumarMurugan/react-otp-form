import { useState } from "react";
import OtpForm from "./OtpForm";

function LoginWithPhone() {
    const [phoneNumber, setPhoneNumber] = useState("");
    const [enableOtp, setEnableOtp] = useState(false);
    const handlePhoneNumber = (e) => {
        setPhoneNumber(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const phoneRegex = /[^0-9]/g;
        // retrun, if the phone number length is less than 10 or contains text input
        if (phoneNumber.length < 10 || phoneRegex.test(phoneNumber)) {
            alert("invalid phone number");
            return;
        }
        //enable otp field
        setEnableOtp(true);
    };
    const handleOtpSubmit = (e) => {
        alert("login successfull");
    };
    return (
        <div>
            {!enableOtp ? <form onSubmit={handleSubmit}>
                <input
                type="text"
                value={phoneNumber}
                onChange={handlePhoneNumber}
                placeholder="Enter Phone Number"
                maxLength={10}
                className="phone-field"
                />
                <button type="submit" className="phone-submit">Submit</button>
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