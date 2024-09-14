<script>
export default {
    data() {
        return {
            gamesAssets: [
                {
                    id: 1,
                    name: "League of Legends",
                    logo: "https://s3-alpha-sig.figma.com/img/8a9a/b436/cfb21689e2dba2768a2644e9e998a40b?Expires=1727049600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IKyJ53PvjIeCWwpE2fd45jhoxFHUXTg39hA9iP3YZHB6qe7lxQmLjKm0fEXjqf6NQbMZzXjPXowqgpPfK6fifwJvHbkVFYqGpTgmFoakepUlq~EQEmQzV~ckuK-64C-2zmFLn0ICRCA4bZzfT1t2R9ClU6hHk4u8bwEooVTEZwfHfSV1wrr6pYdKcfSheFAXMne119svG2XAD6DD~5wnwRD9il0blyqv3v1MHTs99fZQAAG32WylhYbQVaj5wrvITtqD8CG-domUdOsLbkeCLZS5iv2mlZZNkgfSNWs0a3I0Gr~eR7FYKWlXoSHTQnHciwymdMqE1fI81WpfPgB1bQ__",
                    background: "https://s3-alpha-sig.figma.com/img/c30a/f47e/f41ee738ce99e874cde8d2b656d98a43?Expires=1727049600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LsMrBNdOh2XfTb2ungrKVIg~tuRIL3V8JmCwZ5HWToTO6xNupgL8qHvJFxqwK3I-4tWxN-ibwaclytifE2XmnI3cXUGAtvhv2W8c4U1Vpzo-LfviHVM1cv7EMVwREBGnbWToFzbbgVvhWeon6hNP01K8ivnO1524ohuTfvU2JfJEUoeoPI~C-ytIEwBHka8bmeBEQ-tONrFI4GdYW-xXYagVtZpXn60cOr-fTalFQHxgX2W6m4OP3ISnBwWD9N17L5F1muwQEH9m~oC-~MFVXQ9ZPwbmrVDCoAfpiicVnC2PFz3ubcOZTgPTzF8OyVTylsjjBoVPcFiYO~im3bzw3Q__"
                },
                {
                    id: 2,
                    name: "Rainbow Six Siege",
                    logo: "https://s3-alpha-sig.figma.com/img/86c1/98ba/e588a0b75bcbaaa3e197d187fd159912?Expires=1727049600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=D7hNrwkIuyt7t1tKD3zelJXj365CKjWUfgHBkH1bIY6AFzqonRkAyf9rAsSeJJJE9~BR63CpQGnl-Nnvud4FHfYCgqGrZ1b9kqX26-yBB8PGtv1O5fqIqHWZ27h9KvqBisRHCe4NJ6Yy9IVkc6riIHBfBf~0vz3TH70~Hun8Lu3UbyCDXEaMsMJqG8OWDLD-UWhk2SimSV2aNQNALLUt4NI9uKwTaJ8i6Wy~ykBwYgyNEbmqvsc8u~f3lrz1CvjNRJDfn~8g5Qj74PH7O-KBOzrvgRyY0WD~7UkNnriU1UdrcBvZYAAfRwLA0fO7inKVXuwT~I49j0Ebh6hUrshhqQ__",
                    background: "https://s3-alpha-sig.figma.com/img/f2a1/d577/3b362951622c01d909cee8a230dce6e5?Expires=1727049600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=exlQl7fSRI6egBlwSdLnrVCtqBAtJRHUYESUE4LTlmWNuRmqhLGjD~qhGHZzzwR8EBxw-Bs1uQ-59OqsxUO4xYJQ2TLZmvJcy65TZlndVkPr~XJunQisHccNQu2EQtgjcAU6enUEhRF8fMXLoU51bioAWTj8bZphM2Di1sorCoJETXuKkw3sUYQigXKuz8dr0JFl0EoYqhEc3sTM4SyqCaQl8W7IvDy-sLuvjBnyv8VdaOkZLKXDAK8wPm~XDfN4Y817WbExK42QMK8m0QbccFwwT4YfktFbgealP3JhxGiw6msbOnlk~UroGSiY3BcY1RufGVO6QGsp-NImBxNTMA__"
                },
                {
                    id: 3,
                    name: "Overwatch 2",
                    logo: "https://s3-alpha-sig.figma.com/img/6ecc/1d5d/74240ceb07688ef9becef6875f1b4ed3?Expires=1727049600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WllW4zKwyFZbWAtf6iqFY6YB7Be15Loftun4ztUC61bzZNmvOHyw-qjQ4O5egmXOVj33-XCb9EjPn-a3w9oOOZNd2yT4Gtc04Nr5VD-MjWEdJ-RBpdJdNLxaWBXzkJ4LdsNz7jov5mzzw~YPARfOp4aaDcFerRtHIWNee7b5XlMNw0Nq-4CK0ZWOZzcDeaMiSRHTv~PE~n6FwOKdDAa2mPmuDull~p74fdkvb~ohsiO5DTcTnsaBiF0Y8qORNXVpEeBQV-JHNpRQ14DBA8kkQ6nG~UnopXIlDudAFaQzSAE0AhyK1yAzBQqe-Pptd06Mq2HW0OTWvf1aYRNzEvLXdw__",
                    background: "https://s3-alpha-sig.figma.com/img/d258/ad95/ffb609ecd311943a741f1cbb3953bfb9?Expires=1727049600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JUSutUzRx6xXfjVQPw~86JpiUjSr9WBRfztTFp-VPPtdUpAYdQLtxUinSyUzrxalpJDRFemdPnpVi0VSJUPvjNe5P~sM1LNn0BB4pMSesFVc5wZc3W~yB4A9CneHZVnxnGnjH1WfrIQWtxa92xjBqigLq-eQYqYJxlcc9iX~g3N5If8eHSgr1kvW7HkPvflG~vAOCN~bDMkfUBZgNkmc0yov-BXuZ-SZICLxYpCqC8fvJ6Wbn~LFHNMX5u5YQEKaoTEDkrBv7OTUFyEsBawxxQTVKn67Sbo4Lekz4lemGELPRA14onQMGMiCXEVvM1iTWB5524ouLBgnFk-PQLjS7w__"
                },
                {
                    id: 4,
                    name: "Rocket League",
                    logo: "https://s3-alpha-sig.figma.com/img/7cb7/7783/4f8fcfbbd7b7168aea9d8e93dbdc2788?Expires=1727049600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ph8JAxi4cc7pE-WiNja5TSdEFLs8UK6qkCgS9kLqWvgimm5IMiKDyjVkeVHD2JKxa9rz8bzgZoLSzVUP0G3RYyVh47nsHZ0CPcC0PRVRmryq4p95T8yPPbT3EAPePZmQCm2fuN2WFmeuuuiErfnLozDMeoDMiWbFTxFVIOM35pqaGB6fN6X6n33IZ4pMHJhmA6tk6mfwrb36C2GwtDx85p0Gyxg1icehUvg~WMFXcNCRxcaW7N1jo7P8ByX36cBYfnVJA6Y9cG4CWwNooBwOR6sAe2OXKpXbNbQ8naROEOWuNM47hnPulrubCnpniWVwBp~zVhRHIhMkM3nd2x0lew__",
                    background: "https://s3-alpha-sig.figma.com/img/1d20/94e2/e8713d52fdaa48a36530b684282bb50d?Expires=1727049600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iLXfEgMX2C5GxSOcoKtqPVnvgyD2~-fem3~hlhBBboZcHQ6GqjRBGUV2ZmV7jfM1s3JM4G5ClplWi8qeyvQ8VuYzEjmwU42bw4B0AsMMntXD7A3w3ajDKxKuROtaMUyqO5RitRh3hBspDqQ-evrNWMKfR8dHxQ-JkFGFCGhr3d0b8E7mFMt6HdYk43V~WRcW~6N8S1qQBrCKaDRDXYc4YTodHrLhJYVCuWWuUYK1zKdQZzXhbHrxgqoxF9yk1Z5SQ6BV~NdrZLnLrY5cAzvkqw9~s5vGGKe2PC5yo0vbyNjTxnQNQGXN6YDY0ImqK-8vIRKpBQyuhDHi~Uw5UAyhmg__"
                },
                {
                    id: 5,
                    name: "FC 25",
                    logo: "https://s3-alpha-sig.figma.com/img/a751/3cfa/9c68bb3547fe84c442fbe86d703f5f9a?Expires=1727049600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Rt9wI5rwhlP14wDjMmfa0JbeFhI6NzORgcoqY3Pf7OynWA7ZelIsi40KJyfNo4wkSo01ckW20UhdeuNTo~P23HF9mJDKpjIxtPCCQbyAuN6LKit14ngqWyKkbN1482LGmMwwJD6rG79FgrQYEfGslPenIpr587~U2CmXyytrZW66GBMIgeR7FGfgkJMYmQipmerFOEF2mg6rTev2nMDuvRPhYuPPF~cuj27LB6qb0mQlAE0zrFBXyNnejo9j-Zt2gA4u6uscKmwgoN0TyrcC6Ufl2kSUWOaeSlwSW~YsZcooufsOMapaVce4DSgMcfKMYf3dtAimM0e-zboD3klv~A__",
                    background: "https://s3-alpha-sig.figma.com/img/c829/9992/c1719f81e55f4c75b6d6a8bbb483d07e?Expires=1727049600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KXCODJu0M3GdvgPzgMI4taSU25Gji-n0J1qGKw5jjL-1pKwWTSHurAfFsyH8AYbQHaKLLg1g7lCzwhJYpfYcvGado6eixs7k6AwCaZX9ADNDBmrmHYVWTR8jtS5QRJ597zbz0-PwQCJwIadul9WRxl6~55rPBCgJ0wTAevsmF9K0ebuRjM0Vlb99ydChCG-xAOQnmqVpEin0FNRLU48EmoXaXnC80NivnjtL5sVEVHJBQWD2gMgJclRaL9-nVnJ0QmX1j7DSz93yzpt9TzrL4-ATiTANVkIu-S06aMFxWL~~GAk031Xv5ehM0GSAmtFvWLuHy10nZr1h81weVoKlNQ__"
                }
            ]
        }
    }
}
</script>

<template>
    <section class="wrapper my-5">
        <div v-for="item in gamesAssets" :key="item.id">
            <div class="bg" :style="{ background: 'url(' + item.background + ')' }">
                <figure>
                    <img :src="item.logo" :alt="item.name">
                </figure>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.wrapper {
    display: flex;
    justify-content: space-evenly;
}

div:last-child {
    div.bg {
        figure {
            margin-top: 2rem;
            height: 70px;

            img {
                height: 100%;
            }
        }
    }
}

.bg {
    height: 30vh;
    width: 30vh;
    border-radius: 15px;
    background-size: 220% !important;
    background-position: center !important;
    display: flex;
    justify-content: center;
    align-items: center;
    outline: 0px solid #000000;
    transition: all 0.3s ease 0s;

    &:hover {
        cursor: pointer;
        outline: 3px solid #FF204E;
        background-size: 180% !important;
        
    }

    &:hover figure {
        transition: all .3s ease 0s;
        transform: scale(1.2);
    }

    figure {
        width: 110px;
        height: 110px;
        flex-shrink: 0;
        border: 0px solid #000;
        object-fit: contain;
        display: flex;
        justify-content: center;
        align-items: center;


        img {
            height: 100%;
        }
    }

}
</style>