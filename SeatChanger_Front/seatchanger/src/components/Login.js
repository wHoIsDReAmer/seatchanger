import "../styles/Login.css";

import { useState } from "react";
import axios from "axios";
import qs from "qs";

export default function Login() {
    let [number, setNumber] = useState("");
    let [error, setError] = useState("");

    let login_process = (e) => {
        axios.post("/api/login_proc", {
            id: number
        }).then(res => {
            console.log(res.data);
            if (res.data.result == true) {
                localStorage.setItem("is_login", true);
                localStorage.setItem("my_name", res.data.msg);
                window.location.replace("/");
            } else {
                setError("로그인 정보가 일치하지 않습니다.");
            }
        });
    };

    return (<>
    <div className="wrapper_login">
        <div className="login_box">
            <h1> 로그인 </h1>

            <input type="text" placeholder="자신의 학번 ex) 14" onChange={(e) => setNumber(e.target.value)}/>
            <button id="login_btn" onClick={login_process}>로그인</button>
            <h4 id="login_err" style={{color: "red"}}>{error}</h4>
            </div>
        </div>
    </>)
}