import React from "react";
import "./style.css";
import MediaQuery from 'react-responsive';
import { FlexRow, FlexCol } from "../../components/FlexWrap/index";
import AddSection from "../../components/AddSection/index";
import Nav from "../../components/NavBar/index";
//import ExpenseList from "../../components/AddSection/addToList"
import RunList from "../../components/AddSection/renderList";

function Expenses(props) {
    return (
        <MediaQuery minDeviceWidth={700}>
            {(matches) => {
                if (matches) {
                    return  <div>
                    <Nav />
                    <FlexRow>
                        <article className="flex-child title-area">
                            expenses title{/* {props.pagename} */}
                        </article>
                        <div className="flex-child left-child-p">
                            <article className="calendar-area-mini custom-underline">
                                area for calendar
                                
                        </article>
                        
                        <AddSection/>  {/*-->below comment is the same in the class AddSection render */}
                        
                            {/* <article className="add-box">
                                ADD BOX
                                {/* // add item area */}

                                {/* click to expand the flex container 

                            </article> */}

                        </div>
                        <article className="flex-child right-child-p custom-underline">
                            Expenses List (quick view / expand view / update & delete)
                            <RunList/>
                    </article>
                    </FlexRow>
                    </div>
                } else {
                    return <div>
                    <Nav />
                    <FlexCol>
                        <article className="title-areaM">
                            expenses title{/* {props.pagename} */}
                        </article>
                        <article className="calendarM custom-underline">
                            area for calendar / click to add
                    </article>
                        <article className="note-listM custom-underline">
                            Expenses List
                    </article>
                    </FlexCol>
                    </div>
                }
            }}
        </MediaQuery>
    );
}

export default Expenses;