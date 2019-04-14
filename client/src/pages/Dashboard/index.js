import React from "react";
import "./style.css";
import MediaQuery from 'react-responsive';
import Calendar from "../../components/Calendar/index";
import ListView from "../../components/ListView/index";
import { FlexRow, FlexCol } from "../../components/FlexWrap/index";
import { calendarList } from "../../components/List/index"
import Nav from "../../components/NavBar/index";

<<<<<<< HEAD
function Dashboard(props) {
=======

function Dashboard(props){
>>>>>>> b49ce2f483e5388621523e748b9a36ba34b55645
    return (
        <MediaQuery minDeviceWidth={700}>
            {(matches) => {
                if (matches) {
<<<<<<< HEAD
                    // return <FlexRow>
                        {/* <article className="flex-child title-area custom-underline"> */}
                            return  ( 
                                <div>
                                <Nav />
                                <FlexRow>
                                    <article className="flex-child title-area">
                                        Dashboard
                                    </article>
                                    <article className="flex-child left-child">
                                        <Calendar ></Calendar>
                                    </article>
                                    <article className="flex-child right-child">
                                        <span className="custom-underline"> Notification List</span>
                         
                                        {/* <ListPlugin /> */}
=======
                    return  <div>
                    <Nav />
                    <FlexRow>
                    <article className="flex-child title-area">
                        Dashboard{/* {props.pagename} */}
                    </article>
                    <article className="flex-child left-child">
                        <Calendar ></Calendar>
                    </article>
                    <article className="flex-child right-child">
                        <ListView></ListView>
                    </article>
                    </FlexRow>
                    </div>
                } else {
                    return  <div>
                    <Nav />
                    <FlexCol>
                    <article className="title-areaM">
                        Dashboard{/* {props.pagename} */}
                    </article>
                    <article className="calendarM">
                        <Calendar></Calendar>
                    </article>
                    <article className="note-listM">
                    <ListView></ListView>
                    </article>
                    </FlexCol>
                    </div>
                }
            }}
        </MediaQuery>
    );
}
>>>>>>> b49ce2f483e5388621523e748b9a36ba34b55645

                                    </article>
                                </FlexRow>
                            </div>
                            )
                            } else {
                    // return  <FlexCol>
                    // </FlexCol><article className="title-areaM custom-underline">
                        return (
                            <div>
                                <Nav />
                                <FlexCol>
                                    <article className="title-areaM">
                                        Dashboard
                                    </article>

                                    <article className="calendarM">
                                        <Calendar></Calendar>
                                    </article>

                                    <article className="note-listM">
                                        <span className="custom-underline"> Notification List</span>
                                        <calendarList />
                                    </article>
                                </FlexCol>
                            </div>
                            )
                        }
                } 
            }  
                    </MediaQuery>
                );   
}   
                     
                
                
                    
                    
export default Dashboard;