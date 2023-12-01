mapboxgl.accessToken = 'pk.eyJ1IjoiZ3VzdGF2by1tb3N0IiwiYSI6ImNsb3FtMml2NzA4dnEya21ramJzZXJqdzIifQ.2_8V3aXD0111aiAZ90OH_g';
const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/dark-v10', // style URL
    center: campground.geometry.coordinates, // starting position [lng, lat]
    zoom: 10, // starting zoom
});

map.addControl(new mapboxgl.NavigationControl());

new mapboxgl.Marker()
.setLngLat(campground.geometry.coordinates)
.setPopup(
    new mapboxgl.Popup({offset: 25})
    .setHTML(
        `<h3>${campground.title}</h3><p>${campground.location}</p>`
    )
)
.addTo(map);
