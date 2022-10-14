import Image from 'next/image'
import React from "react";
import Layout from "../components/Layout";

export default function profile() {
    return(
        <Layout title="Profile - NextShop">
        <div>
            <Image
            src="/profileimg.jpg"
            alt="WOW"
            width={300}
            height={300}></Image>
            <br></br>
            <a className="text-lg font-bold">이름 : 지영욱</a>
            <br></br>
            <a className="text-lg font-bold">나이 : 24세</a>
            <br></br>
            <a className="text-lg font-bold">학번 : 91813157</a>
            <br></br>
            <a className="text-lg font-bold">전공 : 정보보호학과</a>
            <br></br>
            <a className="text-lg font-bold">나라의 부름에 강제로 끌려가 18개월동안 보급계원의 본분을 다한 자랑스러운 A급 노예</a>
        </div>
        </Layout>
    )
}