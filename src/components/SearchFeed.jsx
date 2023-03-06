import React, { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { useParams } from "react-router-dom";

import { fetchFromApi } from "../utils/FetchFromApi";
import { Videos } from "./";

const SearchFeed = () => {
  const [videos, setVideos] = useState(null);
  const { searchTerm } = useParams();

  console.log(searchTerm);
  useEffect(() => {
    setVideos(null);

    fetchFromApi(`search?part=snippet&q=${searchTerm}`).then((data) => setVideos(data.items));
  }, [searchTerm]);

  return (
    <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
      <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
        Search results for : <span style={{ color: "#FC1503" }}>{searchTerm}</span> Videos
      </Typography>

      <Videos videos={videos} />
    </Box>
  );
};

export default SearchFeed;
