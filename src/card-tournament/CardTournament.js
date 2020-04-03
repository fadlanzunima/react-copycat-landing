import React from 'react'
import './CardTournament.css'

function CardTournament() {
    return (
        <div>
            <a
                class="d-flex flex-row"
                style={{
                    width: '100%',
                    justifyContent: 'center',
                    textDecoration: 'none'

                }}
                href="https://yamisok.com/tournaments/turnament-mobile-legends-bang-bang"
            >
                <div class="d-flex flex-row" style={
                    {
                        width: '100%',
                        justifyContent: 'center'
                    }
                }>
                    <div>
                        <div class="tournament__background" style={{ overflow: 'hidden' }}>
                            <img class="img-turnamen" alt="img-tournament" src="http://res.cloudinary.com/yamisok/image/upload/h_400,f_auto/v1585807938/tournament/lorlbaulgp76h4w7836w.jpg" />
                        </div>
                    </div>
                    <div class="tournament__content nowellips">
                        <div class="d-flex w-100 tournament__content--title">
                            <div class="nowellips">
                                <h3 class="nowellips">Turnament Mobile Legends Bang Bang</h3>
                            </div>
                            <div class="ml-auto for-desktop">
                                {/* <label v-if="turnamentCard.status_desc == '' " class="label--upcoming">Upcoming</label> */}
                                <label class="label--ongoing">Ongoing</label>
                            </div>
                        </div>
                        <div class="d-flex align-items-end height-55 tournament__content--detail">
                            <div class="width-30 text-left nowellips">
                                <div class="margin-bottom-1 text-muted">PRIZE</div>
                                <div class="nowellips small-text">Rp. 0</div>
                            </div>
                            <div class="width-30 text-left hidden-xs for-desktop">
                                <div class="margin-bottom-1 text-muted nowellips">SLOTS</div>
                                <div
                                    class="nowellips small-text"
                                >10/10</div>
                            </div>
                            <div class="width-30 text-left pl-4">
                                <div class="margin-bottom-1 text-muted">DATE</div>
                                <div class="small-text">10 Apr 2020</div>
                            </div>
                            <div class="width-30 text-left hidden-xs for-desktop">
                                <div class="margin-bottom-1 text-muted">TIME</div>
                                <div>13:00 GMT+7</div>
                            </div>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    )
}

export default CardTournament