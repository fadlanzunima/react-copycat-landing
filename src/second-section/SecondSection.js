import React from 'react'
import './SecondSection.css'
import CardTournament from '../card-tournament/CardTournament'

const SecondSection = () => {
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
                                    Buat Profile Kamu
                                </p>
                            </div>
                            <div className="m-3">
                                <img
                                    src="https://yamisok.com/assets/images/landing-v2/section2/icon/icon-turnament.svg"
                                    alt="icon-turnament"
                                />
                                <p className="text-desc">Ikuti turnamennya</p>
                            </div>
                        </div>
                        <div className="d-flex padding-mobile w-93">
                            <div className="m-3">
                                <img
                                    src="https://yamisok.com/assets/images/landing-v2/section2/icon/icon-discover.svg"
                                    alt="icon-discover"
                                />
                                <p className="text-desc">Discover</p>
                            </div>
                            <div className="m-3">
                                <img
                                    className="icon-menu"
                                    src="https://yamisok.com/assets/images/landing-v2/section2/icon/icon-cookie.png"
                                    alt="icon-cookie"
                                />
                                <p className="text-desc">
                                    Raih hadiah cookies
                  </p>
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
                            <CardTournament />
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