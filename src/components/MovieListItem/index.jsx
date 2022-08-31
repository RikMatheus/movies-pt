import React, { useEffect } from "react"
import TMDBImage from "../TMDBImage"

import { FaStar } from "react-icons/fa"

import { StyledItem, StyledAverage } from "./styles"

const Average = ({avg}) => {
	return (
		<StyledAverage avg={100 - avg * 10}>
			<div className="avg__calc">
				<div className="avg__total">
					{
						[1, 2, 3, 4, 5].map(item => {return (<FaStar />)})
					}
				</div>
				<div className="avg__current" />
			</div>
			{avg}
		</StyledAverage>
	)
}

export default function MovieListItem({ movie, isSelected, onSelect }) {
	const handleClick = () => onSelect(movie)
	const { title, vote_average, poster_path, release_date } = movie
	const className = `movie-list-item ${isSelected ? "selected" : ""}`

	return (
		<StyledItem onClick={handleClick}>
			<div className="item__poster">
				<TMDBImage src={poster_path} />
			</div>
			<div className="item__informations">
				{/* <StyledAverage avg={vote_average}>{vote_average}</StyledAverage> */}
				<Average avg={vote_average} />
				<div className="item__details">
					<h3 className="item__title">{title}</h3>
					<p className="item__release">{release_date}</p>
				</div>
			</div>
		</StyledItem>
	)
}