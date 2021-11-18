import { Alert, Button, TextField } from '@mui/material';
import React, { useState } from 'react';

const MakeAdmin = () => {
    const [email, setEmail] = useState("");
    const [success,setSuccess] = useState(false);

    const handleOnBlur = (e) => {
        setEmail(e.target.value);
    }

    const handleAdminSubmit = (e) => {
        const user = { email };
        e.preventDefault();
        fetch("https://thawing-lake-33684.herokuapp.com/users/admin", {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if(data.modifiedCount){
                    setEmail("");
                    setSuccess(true);
                }
            })

    }
    return (
        <div>
            <h2 style={{ color: "green" }}>Make An Admin</h2>
            {
                success && <Alert severity="success" style={{ width: "50%", margin: "18px auto" }}>Made Admin successfully !</Alert>
            }
            <form onSubmit={handleAdminSubmit}>
                <TextField style={{ width: '30rem' }} id="standard-basic" label="Email" variant="standard" type="email" onBlur={handleOnBlur} />
                <br />
                <Button style={{ marginTop: "15px" }} variant="outlined" type="submit">Submit</Button>
            </form>
        </div>
    );
};

export default MakeAdmin;