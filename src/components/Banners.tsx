import Image from "next/image";
import Link from "next/link";
import Stack from '@mui/material/Stack';



enum BannerType {
    Main,
}



const MainBanner = () => {
    // image 배열 불러와야 함
    return (
        <div>
            <Image
                src={""}
                width={100}
                height={100}
                alt=""
            ></Image>
        </div>
    )
}



export default function Banners({ bannerType }: { bannerType: BannerType }) {
    return (
        <div>
            {
                (() => {
                    switch (bannerType) {
                        // case BannerType.Main:
                        //     return <MainBanner />

                        default:
                            return <MainBanner />
                    }
                })()
            }
        </div>
    )
}