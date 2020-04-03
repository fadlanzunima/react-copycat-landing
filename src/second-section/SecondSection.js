import React from 'react'
import './SecondSection.css'
import CardTournament from '../card-tournament/CardTournament'

const SecondSection = () => {
    const arrayMotto = [
        {
            id: 1,
            name: 'Buat Profile Kamu'
        },
        {
            id: 2,
            name: 'Ikuti turnamennya'
        },
        {
            id: 3,
            name: 'Discover'
        },
        {
            id: 4,
            name: 'Raih hadiah cookies'
        }

    ]

    const arrGet = [
        {
            "url": "turnament-mobile-legends-bang-bang",
            "resize_poster": "http://res.cloudinary.com/yamisok/image/upload/h_400,f_auto/v1585807938/tournament/lorlbaulgp76h4w7836w.jpg",
            "name": "Turnament Mobile Legends Bang Bang",
            "status_desc": "Upcoming", "prize": "Rp 5.000.000",
            "team_slot": 128,
            "count_participant": 12,
            "date": "10 Apr 2020",
            "time": "13:00",
            "type": "tournament"
        },
        {
            "url": "mlbb-ligagame-online-community-cup-1",
            "resize_poster": "http://res.cloudinary.com/yamisok/image/upload/h_400,f_auto/v1585462157/tournament/sbwmzhlhqz0dwqg00ru4.jpg",
            "name": "MLBB Ligagame Online Community Cup",
            "status_desc": "Upcoming",
            "prize": null,
            "team_slot": 32,
            "count_participant": 0,
            "date": "31 Mar 2020",
            "time": "14:00", "type": "series"
        },
        {
            "url": "yamisok-chess-rush-online-tournament-2",
            "resize_poster": "http://res.cloudinary.com/yamisok/image/upload/h_400,f_auto/v1585305956/tournament/lgghdlwussr2dty5asok.png",
            "name": "Yamisok Chess Rush Online Tournament",
            "status_desc": "Upcoming",
            "prize": null,
            "team_slot": 32,
            "count_participant": 0,
            "date": "30 Mar 2020",
            "time": "15:00",
            "type": "series"
        }
    ]

    const getTur = arrGet.map((item, index) => {
        return (
            <CardTournament key={index} url={item.url} resize_poster={item.resize_poster} name={item.name} />
        )
    })

    return (
        <div className="bg-section2">
            <div className="wrapper-content">
                <div className="txt-wrapper px-2">
                    <h1>Buktikan kalau kamu bukan gamers biasa !</h1>
                    <h4>
                        Stt.. disini banyak yang bisa scouting kamu untuk bisa jadi pemain
                        profesional loh…
            </h4>
                    <span className="line-yellow"></span>

                    <div className="icon-wrapper px-2">
                        <div className="d-flex w-93">
                            <div className="m-3">
                                <img
                                    src="https://yamisok.com/assets/images/landing-v2/section2/icon/icon-profile.svg"
                                    alt="icon-profile"
                                />
                                <p className="text-desc">
                                    {arrayMotto[0].name}
                                </p>
                            </div>
                            <div className="m-3">
                                <img
                                    src="https://yamisok.com/assets/images/landing-v2/section2/icon/icon-turnament.svg"
                                    alt="icon-turnament"
                                />
                                <p className="text-desc">{arrayMotto[1].name}</p>
                            </div>
                        </div>
                        <div className="d-flex padding-mobile w-93">
                            <div className="m-3">
                                <img
                                    src="https://yamisok.com/assets/images/landing-v2/section2/icon/icon-discover.svg"
                                    alt="icon-discover"
                                />
                                <p className="text-desc">{arrayMotto[2].name}</p>
                            </div>
                            <div className="m-3">
                                <img
                                    className="icon-menu"
                                    src="https://yamisok.com/assets/images/landing-v2/section2/icon/icon-cookie.png"
                                    alt="icon-cookie"
                                />
                                <p className="text-desc">
                                    {arrayMotto[3].name}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="section-profile">
                    <div className="width-left">
                        <img
                            className="ico-numb"
                            src="https://yamisok.com/assets/images/landing-v2/section2/image-1.png"
                            alt="number-1"
                        />
                        <div className="mt-3">
                            <h1>BUAT PROFILE ESPORTS</h1>
                            <h4>Simpan perjalanan, karir dan prestasi gaming kamu untuk dapat ditunjukan ke semua orang. Kesempatan jadi player pro sudah di depan mata</h4>
                            <span className="line-yellow"></span>
                        </div>
                    </div>
                    <div className="img-content">
                        <img src="https://yamisok.com/assets/images/landing-v2/section2/img-profile.png" alt="profile-ss" />
                    </div>
                </div>

                <div className="section-turnamen pb-5">
                    <div className="w-100">
                        <img
                            className="ico-numb"
                            src="https://yamisok.com/assets/images/landing-v2/section2/image-2.png"
                            alt="number-2"
                        />
                        <div className="mt-3">
                            <h1>IKUTI TURNAMEN HARIAN</h1>
                            <h4
                                className="responsive-text"
                            >Daftarkan team kamu atau buat tournament untuk komunitas kamu sendiri. Semakin sering kamu mengikuti turnamen, semakin baik profil kamu.</h4>
                            <span className="line-yellow"></span>
                        </div>
                        <div className="wrapper-icon">
                            <div className="d-flex">
                                <div className="icon-for-turnament-section">
                                    <img
                                        className="w-100"
                                        src="https://yamisok.com/assets/images/landing-v2/section2/icon/turnament.svg"
                                        alt="icon"
                                    />
                                    <div>
                                        <p className="text-desc">
                                            150+ Turnamen
                                            setiap bulan
                      </p>
                                    </div>
                                </div>
                                <div className="icon-for-turnament-section">
                                    <img className="w-100" src="https://yamisok.com/assets/images/landing-v2/section2/icon/hadiah.svg" alt="icon" />
                                    <div>
                                        <p className="text-desc">
                                            Berhadiah Uang
                                            dan lainnya
                      </p>
                                    </div>
                                </div>
                                <div className="icon-for-turnament-section">
                                    <img className="w-100" src="https://yamisok.com/assets/images/landing-v2/section2/icon/free.png" alt="icon" />
                                    <div>
                                        <p className="text-desc">
                                            Ikuti turnamen
                                            GRATIS
                      </p>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex justify-content-around">
                                <div className="icon-for-turnament-section">
                                    <img className="w-100" src="https://yamisok.com/assets/images/landing-v2/section2/icon/waktu.svg" alt="icon" />
                                    <div>
                                        <p className="text-desc">Tepat Waktu</p>
                                    </div>
                                </div>
                                <div className="icon-for-turnament-section">
                                    <img
                                        className="w-100"
                                        src="https://yamisok.com/assets/images/landing-v2/section2/icon/register.svg"
                                        alt="icon"
                                    />
                                    <div>
                                        <p className="text-desc">Register Mudah</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="banner-turnament mt-2 mb-2">
                            <img
                                className="w-100 h-100"
                                style={
                                    {
                                        borderRadius: '10px'
                                    }
                                }
                                src="https://res.cloudinary.com/yamisok/image/upload/v1585472882/banner/deeegq7sfknt8akk3nrr.png"
                                alt="banner"
                            />
                        </div>

                        <div className="mt-2 mb-4 fit-mobile" style={
                            {
                                justifyContent: 'center',
                                display: 'grid'
                            }
                        }>
                            <h1 className="title">Turnamen saat ini</h1>
                            {getTur}
                        </div>

                        <div className="section-list-game">
                            <p className="text-list-game">Ikuti turnamen game favorit kamu disini.</p>
                            <div className="image-list-game">
                                <img
                                    className="w-100 mb-5 for-desktop"
                                    src="https://yamisok.com/assets/images/landing-v2/section2/list-game-desktop.png"
                                    alt="list-game"
                                />
                                <img
                                    className="w-100 mb-5 for-mobile"
                                    src="https://yamisok.com/assets/images/landing-v2/section2/list-game-mobile.png"
                                    alt="list-game"
                                />
                            </div>
                            <div style={
                                {
                                    paddingTop: '5rem'
                                }
                            }>
                                <button
                                    href="./tournaments"
                                    target="_blank"
                                    className="btn--seemore mb-4"
                                >Lihat turnamen lainnya</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SecondSection