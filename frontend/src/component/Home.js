import {useEffect, useState} from "react";
import {demo} from "../link/demo";

const Home = () => {
    const [demoStr, setDemoStr] = useState("default");

    useEffect(() => {
        let id_token = sessionStorage.getItem('id_token');
        const headers = new Headers();
        headers.set('Content-type', 'plain/text');
        headers.set('Authorization', `Bearer ${id_token}`);
        const url = demo();
        fetch(url, {
            method: 'GET',
            mode: "cors",
            headers
        }).then(async (demoData) => {
            const demo = await demoData.text();
            console.log('demo ===', demo);
            setDemoStr(demo);
        }).catch((error) => {});
    }, []);

    useEffect(() => {
        let id_token = sessionStorage.getItem('id_token');
        const headers = new Headers();
        headers.set('Content-type', 'plain/text');
        headers.set('Authorization', `Bearer ${id_token}`);
        const newUrl = 'http://127.0.0.1:8080/';
        console.log(newUrl)
        fetch(newUrl, {
            method: 'GET',
            mode: "cors",
            headers
        }).then(async (response) => {
            const data = await response.text();
            console.log('responseData ===', data);
        }).catch((error) => {});
    }, []);

    return <>
        <div className="header">
            <h1>Home</h1>
        </div>
        <div>
            <p>{demoStr}</p>
        </div>
    </>;
}

export default Home;
