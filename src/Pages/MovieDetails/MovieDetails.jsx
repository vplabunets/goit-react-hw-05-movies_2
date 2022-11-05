import React, { useState, useEffect } from 'react';
import { Outlet, useParams, useLocation } from 'react-router-dom';
import { getMovieDetails } from 'api/apithemoviedb';
import { BiArrowBack } from 'react-icons/bi';
import {
  MovDetails,
  MovInfo,
  GoBackBtn,
  GoBackBtnText,
  MovImg,
  MovText,
  NavItem,
  AddInfoBox,
  AddInfoTitle,
} from './MovieDetails.styled';
import LayoutBox from 'components/Layout/Layout.styled';
const img =
  'https://catalog.osaarchivum.org/assets/thumbnail_placeholder_movie-480596e192e7043677f77cf78b13bdd1.jpg';
const MovieDetails = () => {
  const location = useLocation();
  const [movieDetails, setMovieDetails] = useState(null);
  const params = useParams();

  useEffect(() => {
    getMovieDetails(params.movieId).then(({ data }) => setMovieDetails(data));
  }, [params.movieId]);

  console.log('location', location);
  console.log('location.state', location.state);
  console.log('location.state?.from', location.state?.from ?? '/');

  return (
    <>
      <GoBackBtn to={location.state?.from ?? '/'}>
        <BiArrowBack />
        <GoBackBtnText>Go Back</GoBackBtnText>
      </GoBackBtn>
      {movieDetails && (
        <MovDetails>
          <MovImg
            src={
              movieDetails.poster_path
                ? `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`
                : img
            }
            alt={movieDetails.original_title}
            width="215"
            height="320"
          ></MovImg>
          <MovInfo>
            <h2>{movieDetails.original_title}</h2>
            <MovText>User Score: {movieDetails.vote_average * 10} %</MovText>
            <h3>Overview</h3>
            <MovText>{movieDetails.overview}</MovText>
            <h4>Genres</h4>
            <MovText>
              {movieDetails.genres.map(genre => genre.name).join(' ')}
            </MovText>
          </MovInfo>
        </MovDetails>
      )}
      <LayoutBox>
        <AddInfoBox>
          <AddInfoTitle>Additional Information</AddInfoTitle>
          <NavItem id={params.movieId} to={`cast`}>
            Cast
          </NavItem>

          <NavItem id={params.movieId} to={`reviews`}>
            Review
          </NavItem>
        </AddInfoBox>
        <Outlet />
      </LayoutBox>
    </>
  );
};

export default MovieDetails;
