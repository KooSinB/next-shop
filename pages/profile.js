import Image from 'next/image'
import React from "react";
import Layout from "../components/Layout";

export default function profile() {
    return(
        <Layout title="Profile - NextShop">
        <div>
            <Image
            src="/profileimg.jpg"
            alt="Wai-"
            width={300}
            height={300}>
            </Image>
            <br></br>
            <a className="text-lg font-bold">이름 : 지영욱</a>
            <br></br>
            <a className="text-lg font-bold">나이 : 24세</a>
            <br></br>
            <a className="text-lg font-bold">학교 : 중부대학교 고양캠퍼스</a>
            <br></br>
            <a className="text-lg font-bold">전공 : 정보보호학과</a>
            <br></br>
            <a className="text-lg font-bold">학번 : 91813157</a>
        </div>
        </Layout>
    )
}