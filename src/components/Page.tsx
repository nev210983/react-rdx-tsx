import React from "react";
import {PageType} from "../types";
import "../App.css"

import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import {makeStyles, createStyles, Theme} from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'start',
            '& > *': {
                margin: theme.spacing(1),
            },
        },
    }),
);

export function Page(props: PageType) {
    const classes = useStyles();

    // universal handler
    let onClickBtn = (e: any) => {
        const year = +e.currentTarget.innerText
        props.setYear(year)
    }
    return <div className="buttonsBlock">
        <div className={classes.root}>
            <ButtonGroup
                variant="contained"
                color="primary"
                aria-label="contained primary button group"
            >
                <Button onClick={onClickBtn}>2020</Button>
                <Button onClick={onClickBtn}>2019</Button>
                <Button onClick={onClickBtn}>2018</Button>
                <Button onClick={onClickBtn}>2017</Button>
                <Button onClick={onClickBtn}>2016</Button>
                <Button onClick={onClickBtn}>2015</Button>
            </ButtonGroup>
        </div>
        <p className="countFotoYear">
            You have <b>{props.photos.length}</b> photos at the <b>{props.year}</b> year
        </p>
    </div>
}