import "../styles/App.css";

import {useState, useEffect} from "react";

export default function App() {
    let [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        fetch("/api/seat_list", {method: "post"})
        .then(r => r.json())
        .then(r => {
            let keys = Object.keys(r);
            keys.forEach(k => {
                let div = document.createElement("div");
                div.className = "seat";
                let title = document.createElement("div");
                title.innerText = k;
                title.className = "number";
                let author = document.createElement("div");
                author.innerText = r[k].name ? r[k].name : "";
                author.className = "author";
                div.appendChild(title);
                div.appendChild(author);

                document.getElementsByClassName("seats").item(0).appendChild(div);
            });
        });

        fetch("/api/is_login", {
            method: "post"
        }).then(r => r.json())
        .then(r => {
            if (r.is_admin)
                setIsAdmin(true);
        });
    }, []);

    let reset = (e) => {
        fetch("/api/reset", {
            method: "post"
        }).then(r => r.json())
        .then(r => {
            if (r.result)
                window.location.replace("/");
            else {
                alert("잘못된 접근입니다..");
                window.location.replace("/");
            }
        });
    }

    let random = (e) => {
        fetch("/api/random", {
            method: "post"
        }).then(r => r.json())
        .then(r => {
            if (r.result)
                window.location.replace("/");
            else {
                alert("잘못된 접근입니다..");
                window.location.replace("/");
            }
        });
    }

    return (<>
        <div className="wrapper">
            <div className="main">
                <h3> 뽑힌 자리 현황 </h3>
                <div className="seats">
                </div>
                {
                    isAdmin ? (
                        <div className="admin_box">
                            <button id="admin_btn" onClick={reset}> 초기화 </button>
                            <button id="admin_btn" onClick={random}> 랜덤 재배치 </button>
                        </div>
                    ) : ""
                }

            </div>
        </div>
    </>);
}