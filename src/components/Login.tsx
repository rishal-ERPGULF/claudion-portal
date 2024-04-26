import React, { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import toast from 'react-hot-toast';
import { tokenGenerated, userToken } from "@/Api Handle/Apis";

interface Props {
    setVerified: React.Dispatch<boolean>;
}

const Login: React.FC<Props> = ({ setVerified }) => {
    const [password, setPassword] = useState<string>("");
    const [email, setEmail] = useState<string>("");

    const handleSubmit = async () => {
        console.log("Email:", email); 
        console.log("Password:", password); 

        await tokenGenerated();
        try {
            const login = await userToken(email, password);
            if (login) {
                console.log("Logged in");
                toast("Logged in successfully");
                setVerified(true);
            }
        } catch (error) {
            console.error('Error Login:', error);
            toast("Error in login");
        }
    };

    return (
        <div className="ml-2">
            <div className=" mb-2 flex gap-2">
                <Input
                    className="w-80"
                    type="email"
                    placeholder="Email address"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                    className="w-80"
                    type="password"
                    placeholder="Password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <Button className="text-lg w-60" onClick={handleSubmit}>
                Login
            </Button>
        </div>
    );
};

export default Login;
