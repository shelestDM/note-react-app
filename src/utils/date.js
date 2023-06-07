let date = new Date();
var options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'short',
};
export let noteCreationTime = date.toLocaleTimeString('en-US', { hour12: false }).slice(0, -3);
export let noteCreationDate = date.toLocaleString("en-US", options);


