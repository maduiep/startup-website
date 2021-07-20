import React from 'react'

const About = () => {

    const [state] = React.useState({heading: ' Who we are?', text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos voluptate at, cupiditate id ipsa eligendi dolores tenetur, hic repellat velit rem nesciunt assumenda vero dolor officia illum nisi neque similique?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora dolores eaque et consequuntur, nulla ducimus repellat. Debitis, hic impedit? Sint odio harum magnam reprehenderit dicta? Error autem quis quam fugiat?Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem earum fuga iure est suscipit hic cum quia, ullam dolores officia sit, corporis provident possimus deleniti reiciendis voluptate praesentium ab nulla.'})

    return (
        <div className="about">
            <div className="container">
                <div className="row">
                    <div className="col-3">
                        <h4 className="about__h4">{state.heading}</h4>
                    </div>
                    <div className="col-9">
                        <div className="about__text">
                            <p>{state.text}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
