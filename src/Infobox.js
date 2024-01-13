import React from 'react'
import {Card, CardContent, Typography} from "@mui/material";
import "./infobox.css";

function Infobox({title,cases,total}) {
  return (
    <Card className="infoBox">
        <CardContent>
           {/*Title */}
           <Typography className="infoBox_title" color="textSecondary">{title}</Typography>
           {/*Number of Cases */}
           <h2 className="infoBox_cases">{cases}</h2>
           {/*Total recovered*/}
           <Typography className="infoBox_total"color = "textSecondary">{total} Total</Typography>
        </CardContent>
    </Card>
  )
}

export default Infobox
