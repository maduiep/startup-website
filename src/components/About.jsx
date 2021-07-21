import React from 'react'

const About = () => {

    const [state] = React.useState({heading: ' Who we are?', text: 
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos voluptate at, cupiditate id ipsa eligendi dolores tenetur, hic repellat velit rem nesciunt assumenda vero dolor officia illum nisi neque similique?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora dolores eaque et consequuntur, nulla ducimus repellat. Debitis, hic impedit? Sint odio harum magnam reprehenderit dicta? Error autem quis quam fugiat?Lorem ipsum dolor sit amet consectetur adipisicing elit.'
    })
    const [section] = React.useState([
                {id: 1, icon: 
                    <svg xmlns="http://www.w3.org/2000/svg" width="2.5em" height="2.5em" fill="currentColor" class="bi bi-handbag" viewBox="0 0 16 16">
                    <path d="M8 1a2 2 0 0 1 2 2v2H6V3a2 2 0 0 1 2-2zm3 4V3a3 3 0 1 0-6 0v2H3.36a1.5 1.5 0 0 0-1.483 1.277L.85 13.13A2.5 2.5 0 0 0 3.322 16h9.355a2.5 2.5 0 0 0 2.473-2.87l-1.028-6.853A1.5 1.5 0 0 0 12.64 5H11zm-1 1v1.5a.5.5 0 0 0 1 0V6h1.639a.5.5 0 0 1 .494.426l1.028 6.851A1.5 1.5 0 0 1 12.678 15H3.322a1.5 1.5 0 0 1-1.483-1.723l1.028-6.851A.5.5 0 0 1 3.36 6H5v1.5a.5.5 0 1 0 1 0V6h4z"/>   
                    </svg>, 
                    heading: 
                    'Digital Marketing', text: 
                    'Tempore corrupti temporibus fuga earum asperiores fugit laudantium'
                },
                {id: 2, icon:
                    <svg xmlns="http://www.w3.org/2000/svg" width="2.5em" height="2.5em" fill="currentColor" class="bi bi-tv" viewBox="0 0 16 16">
                    <path d="M2.5 13.5A.5.5 0 0 1 3 13h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zM13.991 3l.024.001a1.46 1.46 0 0 1 .538.143.757.757 0 0 1 .302.254c.067.1.145.277.145.602v5.991l-.001.024a1.464 1.464 0 0 1-.143.538.758.758 0 0 1-.254.302c-.1.067-.277.145-.602.145H2.009l-.024-.001a1.464 1.464 0 0 1-.538-.143.758.758 0 0 1-.302-.254C1.078 10.502 1 10.325 1 10V4.009l.001-.024a1.46 1.46 0 0 1 .143-.538.758.758 0 0 1 .254-.302C1.498 3.078 1.675 3 2 3h11.991zM14 2H2C0 2 0 4 0 4v6c0 2 2 2 2 2h12c2 0 2-2 2-2V4c0-2-2-2-2-2z"/>
                    </svg>,
                    heading: 
                    'Web & App Development', text: 
                    'Tempore corrupti temporibus fuga earum asperiores fugit laudantium'
                }, 
                {id: 3, icon: 
                    <svg xmlns="http://www.w3.org/2000/svg" width="2.5em" height="2.5em" fill="currentColor" class="bi bi-layers-fill" viewBox="0 0 16 16">
                    <path d="M7.765 1.559a.5.5 0 0 1 .47 0l7.5 4a.5.5 0 0 1 0 .882l-7.5 4a.5.5 0 0 1-.47 0l-7.5-4a.5.5 0 0 1 0-.882l7.5-4z"/>
                    <path d="m2.125 8.567-1.86.992a.5.5 0 0 0 0 .882l7.5 4a.5.5 0 0 0 .47 0l7.5-4a.5.5 0 0 0 0-.882l-1.86-.992-5.17 2.756a1.5 1.5 0 0 1-1.41 0l-5.17-2.756z"/>
                    </svg>,
                    heading: 
                    'Graphic Design', text: 
                    'Tempore corrupti temporibus fuga earum asperiores fugit laudantium'
                }
    ])
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

                {/* Cards */}
                <div className="row mt-60">
                    {section.map(section => (
                        <div className="col-4 pl-15" key={section.id}>
                           <div className="about__section">
                               <div className="about__section-icon">
                                   {section.icon}
                               </div>
                               <div className="about__section-heading">
                                   <h6>{section.heading}</h6>
                               </div>
                               <div className="about__section-text">
                                   <p>{section.text}</p>
                               </div>
                           </div>
                       </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default About
