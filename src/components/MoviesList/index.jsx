import React, { useState, useEffect } from "react"

import { FaTimes } from "react-icons/fa"

import TMDBImage from "../TMDBImage"
import MovieListItem from "../MovieListItem"
import { StyledList, StyledModal } from "./styles"

export default function MoviesList({ movies }) {
	const [selectedMovie, setSelectedMovie] = useState(null)
	const [sortingType, setSortingType] = useState("")
	const [modalShow, setModalShow] = useState(false)

	const handleSelectMovie = (movie) => {
		setSelectedMovie(movie)
		setModalShow(true)
	}

	const handleSortingChange = (event) => {
		setSortingType(event.target.value)

		switch(event.target.value) {
			case "name_asc":
				movies.sort((a, b) => a.title.localeCompare(b.title))
				break
			case "name_desc":
				movies.sort((a, b) => b.title.localeCompare(a.title))
				break
			case "rating":
				movies.sort((a, b) => {
					if (a.vote_average > b.vote_average) return -1
					if (a.vote_average < b.vote_average) return 1
					if (a.vote_average == b.vote_average) return 0
				})
				break
		}
	}

	const handleModalClose = () => {
		setModalShow(false)
	}

	return (
		<StyledList>
      <section className="list__filters">
        <span>Sort by:</span>
        <SortingOptions
          selectedOption={sortingType}
          onChange={handleSortingChange}
        />
      </section>
      <section className="list__items">
        {movies.map((movie) => (
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

function SortingOptions({ selectedOption, onChange }) {
	return (
		<select value={selectedOption} onChange={onChange}>
			<option value=""></option>
			<option value="name_asc">A to Z</option>
			<option value="name_desc">Z to A</option>
			<option value="rating">Rating</option>
		</select>
	)
}
