import React from 'react';
import './FirstSection.css';
import SecondSection from '../second-section/SecondSection';

function FirstSection() {
    return (
        <div className="content overflow-x-hidden">
            <img style={{ cursor: 'pointer' }}
                className="section-1 for-desktop"
                src="https://res.cloudinary.com/yamisok/image/upload/v1583203655/landing/section1/section1-dektop.png"
                alt="section-1"
            />
            <img
                className="section-1 for-mobile"
                src="https://res.cloudinary.com/yamisok/image/upload/v1583203646/landing/section1/section1-mobile.png"
                alt="section-1"
            />
            <SecondSection />

            <div class="teman-baru">
                <div class="width-left">
                    <img class="ico-numb" src="https://yamisok.com/assets/images/landing-v2/section3/image-3.png" alt="number-3" />
                    <div class="mt-3">
                        <h1>JELAJAHI TEMAN BARU</h1>
                        <h4>
                            Share profile keren kamu di Yamisok agar
                            terlihat di Discover dan dicari oleh team yang
                            ingin mengajakmu bergabung.
            </h4>
                        <span class="line-yellow"></span>
                    </div>
                </div>
                <div class="img-content teman-baru-img">
                    <img src="https://yamisok.com/assets/images/landing-v2/section3/teman-baru.png" alt="teman-baru" />
                </div>
            </div>

            <div class="cookies">
                <div class="width-left for-mobile">
                    <img class="ico-numb" src="https://yamisok.com/assets/images/landing-v2/section4/image-4.png" alt="number-3" />
                    <div class="mt-3">
                        <h1>DAN RAIH COOKIESNYA</h1>
                        <h4>
                            Kumpulkan Cookies dengan mengikuti misi
                            dan turnamen harian. Tukarkan dengan berbagai hadiah menarik yang ada di Yamisok Market dan Lucky Draw.
            </h4>
                        <span class="line-yellow"></span>
                    </div>
                </div>
                <div class="img-content hadiah-img">
                    <img src="https://yamisok.com/assets/images/landing-v2/section4/hadiah.png" alt="hadiah" />
                </div>
                <div class="width-left for-desktop">
                    <img class="ico-numb" src="https://yamisok.com/assets/images/landing-v2/section4/image-4.png" alt="number-3" />
                    <div class="mt-3">
                        <h1>DAN RAIH COOKIESNYA</h1>
                        <h4>
                            Kumpulkan Cookies dengan mengikuti misi
                            dan turnamen harian. Tukarkan dengan berbagai hadiah menarik yang ada di Yamisok Market dan Lucky Draw.
            </h4>
                        <span class="line-yellow"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FirstSection