import React from 'react'
import './CardTournament.css'

function CardTournament() {
    return (
        <div>
            <a
                className="d-flex flex-row"
                style={{
                    width: '100%',
                    justifyContent: 'center',
                    textDecoration: 'none'

                }}
                href="https://yamisok.com/tournaments/turnament-mobile-legends-bang-bang"
            >
                <div className="d-flex flex-row" style={
                    {
                        width: '100%',
                        justifyContent: 'center'
                    }
                }>
                    <div>
                        <div className="tournament__background" style={{ overflow: 'hidden' }}>
                            <img className="img-turnamen" alt="img-tournament" src="http://res.cloudinary.com/yamisok/image/upload/h_400,f_auto/v1585807938/tournament/lorlbaulgp76h4w7836w.jpg" />
                        </div>
                    </div>
                    <div className="tournament__content nowellips">
                        <div className="d-flex w-100 tournament__content--title">
                            <div className="nowellips">
                                <h3 className="nowellips">Turnament Mobile Legends Bang Bang</h3>
                            </div>
                            <div className="ml-auto for-desktop">
                                {/* <label v-if="turnamentCard.status_desc == '' " className="label--upcoming">Upcoming</label> */}
                                <label className="label--ongoing">Ongoing</label>
                            </div>
                        </div>
                        <div className="d-flex align-items-end height-55 tournament__content--detail">
                            <div className="width-30 text-left nowellips">
                                <div className="margin-bottom-1 text-muted">PRIZE</div>
                                <div className="nowellips small-text">Rp. 0</div>
                            </div>
                            <div className="width-30 text-left hidden-xs for-desktop">
                                <div className="margin-bottom-1 text-muted nowellips">SLOTS</div>
                                <div
                                    className="nowellips small-text"
                                >10/10</div>
                            </div>
                            <div className="width-30 text-left pl-4">
                                <div className="margin-bottom-1 text-muted">DATE</div>
                                <div className="small-text">10 Apr 2020</div>
                            </div>
                            <div className="width-30 text-left hidden-xs for-desktop">
                                <div className="margin-bottom-1 text-muted">TIME</div>
                                <div>13:00 GMT+7</div>
                            </div>
                        </div>
                    </div>
                </div>
            </a>
        </div >
    )
}

export default CardTournament