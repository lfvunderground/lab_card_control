/* eslint-disable no-unused-vars */
import P from "prop-types";
import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  postFooter: {
    position: "absolute",
    bottom: "10px",
    right: "10px",
    fontSize: "0.7rem",
  },
}));

export default function PostCard({ id, title, cover, body }) {
  const classes = useStyles();
  return (
    <>
      <Card
        sx={{
          maxWidth: 345,
          position: "relative",
          display: {
            sm: {
              backgroundColor: "green",
            },
          },
        }}
      >
        <CardMedia component="img" height="194" image={cover} alt={title} />
        <CardContent>
          <Typography variant="h4" color="text.primary">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {body}
          </Typography>
          <div className={classes.postFooter} variant="body2" color="text.secondary">
            Card: {id}
          </div>
        </CardContent>
        <Button color="secondary" variant="contained">
          TESTE
        </Button>
      </Card>
    </>
  );
}

PostCard.propTypes = {
  title: P.string.isRequired,
  cover: P.string.isRequired,
  body: P.string.isRequired,
  id: P.number.isRequired,
};
