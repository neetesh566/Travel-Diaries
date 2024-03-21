import React, { useState } from "react";
import { Box, Button, FormLabel, TextField, Typography } from "@mui/material";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import { addPost } from "../api-helpers/helpers";
import { useNavigate } from "react-router-dom";

const Add = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    title: "",
    description: "",
    location: "",
    imageUrl: "",
    date: "",
  });
  const handleChange = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onResReceived = (data) => {
    console.log(data);
    navigate("/diaries");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input);
    addPost(input)
      .then(onResReceived)
      .catch((err) => console.log(err));
  };
  return (
    <Box display="flex" flexDirection={"column"} width="100%" height="100%">
      <Box display="flex" margin="auto" padding={2}>
        <Typography
          fontWeight={"bold"}
          variant="h4"
          fontFamily={"dancing script"}
        >
          Add Your Travel Diary
        </Typography>
        <TravelExploreIcon
          sx={{ fontSize: "40px", paddingLeft: 1, color: "lightcoral" }}
        />
      </Box>
      <form onSubmit={handleSubmit}>
        <Box
          padding={3}
          display="flex"
          margin="auto"
          width="80%"
          flexDirection={"column"}
        >
          <FormLabel sx={{ fontFamily: "quicksand" }}>Title</FormLabel>
          <TextField
            onChange={handleChange}
            name="title"
            value={input.title}
            variant="standard"
            margin="normal"
          />
          <FormLabel sx={{ fontFamily: "quicksand" }}>Desciption</FormLabel>
          <TextField
            onChange={handleChange}
            name="description"
            value={input.description}
            variant="standard"
            margin="normal"
          />
          <FormLabel sx={{ fontFamily: "quicksand" }}>Image URL</FormLabel>
          <TextField
            onChange={handleChange}
            name="imageUrl"
            value={input.imageUrl}
            variant="standard"
            margin="normal"
          />

          <FormLabel sx={{ fontFamily: "quicksand" }}>Location</FormLabel>
          <TextField
            onChange={handleChange}
            name="location"
            value={input.location}
            variant="standard"
            margin="normal"
          />
          <FormLabel sx={{ fontFamily: "quicksand" }}>Date</FormLabel>
          <TextField
            type="date"
            onChange={handleChange}
            name="date"
            value={input.date}
            variant="standard"
            margin="normal"
          />
          <Button
            type="submit"
            color="warning"
            sx={{ width: "50%", margin: "auto", mt: 2, borderRadius: 7 }}
            variant="contained"
          >
            Post
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default Add;
