import React from "react";
import "./style.css";
import MediaQuery from 'react-responsive';
import { FlexRow, FlexCol } from "../../components/FlexWrap/index";
import AddSection from "../../components/AddSection/index";
import Nav from "../../components/NavBar/index";
import Calendar from "../../components/Calendar/index";
import ListView from "../../components/ListView2/index";

function Expenses(props) {
    return (
        <MediaQuery minDeviceWidth={700}>
            {(matches) => {
                if (matches) {
                    return  <div>
                    <Nav />
                    <FlexRow>
                        <article className="flex-child title-area">
                            expenses{/* {props.pagename} */}
                        </article>
                        <div className="flex-child left-child-p">
                            <article className="calendar-area-mini">
                            <Calendar ></Calendar>
                                
                        </article>
                        
                        <AddSection/>  {/*-->below comment is the same in the class AddSection render */}
                        
                            {/* <article className="add-box">
                                ADD BOX
                                {/* // add item area */}

                                {/* click to expand the flex container 

                            </article> */}

                        </div>
                        <article className="flex-child right-child-p">
                        <ListView></ListView>
                    </article>
                    </FlexRow>
                    </div>
                } else {
                    return <div>
                    <Nav />
                    <FlexCol>
                        <article className="title-areaM">
                            expenses{/* {props.pagename} */}
                        </article>
                        <article className="calendarM">
                        <Calendar ></Calendar>
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

export default Expenses;