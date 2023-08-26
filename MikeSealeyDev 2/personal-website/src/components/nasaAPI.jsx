
const NasaApi = () => {

    return (
        <div className="main-component">
            <h2>Meteorites</h2>
            <p>
                While on the Northcoders bootcamp we were introduced to React, and given a handful of APIs to choose from, and instructed to visualise the data.

                I chose the <a href="https://data.nasa.gov/resource/gh4g-9sfh.json" target="_blank">NASA Meteorite Strikes API</a>, which offers an array of objects that contain, among other things Latitudinal and Longitudinal coordinates which can then be passed to a <a href="https://react-leaflet.js.org/" target="_blank">React Leaflet map</a>.
             </p>
             <iframe width="560" height="315" src="https://www.youtube.com/embed/jfsGEEVROgI?si=MbHsQlTiwP001b6Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
             <p>
                There are some really interesting features available in the Leaflet library. Here I've used the rectangle feature and some sliding inputs to allow the user to highlight an area on the map, and then set the marker to display on the map if they fall within that rectangle by taking the centre-point of the rectangle and the overall dimensions to apply conditional logic to each meteorite object. If the the Lat/Long are within the allowed range, we can display them as markers, and allow the markets to be clicked to bring up a popup.
             </p>
             <p>
                I think in the future it might be nice to add a feature that displays all meteorite strikes globally over time, and allow the user to sweep back and forth through the years, or display all strikes over time, only appearing on the map when that year is reached.
             </p>
        </div>
    )
}

export default NasaApi