import React, { useState, useEffect } from "react"

import { FaTimes } from "react-icons/fa"

import TMDBImage from "../TMDBImage"
import MovieListItem from "../MovieListItem"
import { StyledList, StyledModal, StyledSelector, StyledButton } from "./styles"

export default function MoviesList({ movies }) {
	const [selectedMovie, setSelectedMovie] = useState(null)
	const [sortingType, setSortingType] = useState("")
	const [modalShow, setModalShow] = useState(false)
	const [currentMovies, setCurrentMovies] = useState(movies)

	const handleSelectMovie = (movie) => {
		setSelectedMovie(movie)
		setModalShow(true)
	}

	const handleModalClose = () => {
		setModalShow(false)
	}

	const SortingOptions = ({ selectedOption }) => {
		return (
			<StyledSelector>
				<div className="selector__title">
					<p>Sort by:</p>
				</div>
				<div className="selector__options">
					<StyledButton selected={selectedOption == "name_asc"} onClick={() => setSortingType("name_asc")}>A-Z</StyledButton>
					<StyledButton selected={selectedOption == "name_desc"} onClick={() => setSortingType("name_desc")}>Z-A</StyledButton>
					<StyledButton selected={selectedOption == "rating"} onClick={() => setSortingType("rating")}>Rating</StyledButton>
				</div>
			</StyledSelector>
		)
	}

	useEffect(() => {
		setCurrentMovies(movies)
		setSortingType("")
	}, [movies])

	useEffect(() => {
		switch(sortingType) {
			case "name_asc":
				setCurrentMovies([...currentMovies].sort((a, b) => a.title.localeCompare(b.title)))
				break
			case "name_desc":
				setCurrentMovies([...currentMovies].sort((a, b) => b.title.localeCompare(a.title)))
				break
			case "rating":
				setCurrentMovies([...currentMovies].sort((a, b) => {
					if (a.vote_average > b.vote_average) return -1
					if (a.vote_average < b.vote_average) return 1
					if (a.vote_average == b.vote_average) return 0
				}))
				break
		}
	}, [sortingType])

	return (
		<StyledList>
      <SortingOptions
				selectedOption={sortingType}
			/>
      <section className="list__items">
        {currentMovies.map((movie) => (
          <div className="list__item">
            <MovieListItem
              key={movie.id}
              movie={movie}
              isSelected={selectedMovie === movie}
              onSelect={handleSelectMovie}
            />
          </div>
        ))}
      </section>
			{selectedMovie && <ExpandedMovieItem handleModalClose={handleModalClose} open={modalShow} movie={selectedMovie} />}
		</StyledList>
	)
}

const ExpandedMovieItem = ({
	movie: {
		title,
		original_title,
		poster_path,
		overview,
		vote_average,
		vote_count,
	},
	open,
	handleModalClose
}) => {
	const handleModal = (e) => {
		e.stopPropagation()
	}

	return (
		<StyledModal open={open} onClick={handleModalClose}>
			<div className="modal__content" onClick={handleModal}>
				<button className="modal__close" onClick={handleModalClose}><FaTimes/></button>
				<TMDBImage src={poster_path} className="modal__poster" />
				<div className="modal__description">
					<div className="modal__header">
						<h2 className="modal__title">
							{title}
						</h2>
						<h3 className="modal__original-title">({original_title})</h3>
					</div>
					<div className="modal__informations">
						<h4>{vote_average}/10 ({vote_count} votes)</h4>
					</div>
					<p className="modal__overview">{overview}</p>
				</div>
			</div>
		</StyledModal>
	)
}
