import React from 'react';
import '../App.css';
import {connect} from "react-redux";
import {User} from "../components/User";
import {Page} from "../components/Page";
import {AppType} from '../types';
import {setYear} from "../actions/PageActions";

import {TitlebarGridList} from "../components/TitlebarGridList";

function AppContainer(props: AppType) {

    return (
        <div className="App">
            <h3>My Photos</h3>
            <User name={props.user.name}/>
            <Page
                photos={props.page.photos}
                year={props.page.year}
                setYear={props.setYearAction}/>
            <div className="">
                {
                    props.page.photos.map(p => <TitlebarGridList/>)
                }
            </div>
        </div>
    );
}

//connect store to component
const mapStateToProps = (store: any) => {
    console.log(store)
    return {
        user: store.user,
        page: store.page
    }
}

const mapDispatchToProps = (dispatch: any ) => {
    return {
        setYearAction: (year: number) => dispatch(setYear(year))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer)
