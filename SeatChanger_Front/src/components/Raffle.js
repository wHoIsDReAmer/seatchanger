import "../styles/Raffle.css";

import { useEffect, useState } from "react";

export default function Raffle() {
    let [seat, setSeat] = useState("");

    useEffect(() => {
        fetch("/api/is_login", {
            method: "post"
        }).then(r => r.json())
        .then(r => {
            if (r.result == false) {
                localStorage.removeItem("my_name");
                localStorage.removeItem("is_login");
                window.location.href = "/login";
            } else {
                fetch("/api/my_seat", {
                    method: "post"
                }).then(r => r.json())
                .then(r => {
                    if (r.result == true)
                       setSeat(r.msg + "번 자리에 배정되었습니다!");
                    else setSeat("아직 배정된 자리가 없습니다.");
                });
            }
        });
    }, []);

    let raffle_click = (e) => {
        fetch("/api/raffle", {
            method: "post"
        }).then(r => r.json())
        .then(r => {
            console.log(r);
            if (r.result == false) {
                if (r.msg.indexOf("이미") != -1) {
                    alert("이미 배정된 자리가 있습니다.");
                    window.location.href = "/";
                    return;
                } else {
                    localStorage.removeItem("my_name");
                    localStorage.removeItem("is_login");
                    window.location.href = "/login";
                }
            } else {
                window.location.href = "/";
            }
        });
    };

    return (<>
        <div className="raffle">
            <h1> 자리 뽑기 </h1>

            <div className="raffle_box">
                <p> {seat} </p>
                <button id="raffle_button" onClick={raffle_click}> 뽑기 </button>
            </div>
        </div>
    </>)
}