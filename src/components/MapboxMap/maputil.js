import * as mapboxgl from 'mapbox-gl';



function createMap(options) {
    mapboxgl.accessToken = 'pk.eyJ1IjoibGltemdpc2VyIiwiYSI6ImNqZXFvemJlcjB1bWYyd2x0eGxjeGdvcXIifQ.gSsj63R-2VZV7L7mpSw0Uw';
    return new mapboxgl.Map(options);
}
export {
    createMap
}