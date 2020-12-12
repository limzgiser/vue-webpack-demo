import cityfun from 'cityfun-gl';

function createMap(options) {
    cityfun.accessToken = 'pk.eyJ1IjoibGltemdpc2VyIiwiYSI6ImNqZXFvemJlcjB1bWYyd2x0eGxjeGdvcXIifQ.gSsj63R-2VZV7L7mpSw0Uw';
    return new cityfun.Map(options);
}
export {
    createMap
}