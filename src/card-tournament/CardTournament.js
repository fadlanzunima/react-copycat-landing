import React from 'react'
import './CardTournament.css'

function CardTournament(properties) {
    console.log(properties)
    return (
        <div className="mt-4">
            <a
                className="d-flex flex-row"
                style={{
                    width: '100%',
                    justifyContent: 'center',
                    textDecoration: 'none'

                }}
                href={properties.url}
            >
                <div className="d-flex flex-row" style={
                    {
                        width: '100%',
                        justifyContent: 'center'
                    }
                }>
                    <div>
                        <div className="tournament__background" style={{ overflow: 'hidden' }}>
                            <img className="img-turnamen" alt="img-tournament" src={properties.resize_poster} />
                        </div>
                    </div>
                    <div className="tournament__content nowellips">
                        <div className="d-flex w-100 tournament__content--title">
                            <div className="nowellips">
                                <h3 className="nowellips">{properties.name}</h3>
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