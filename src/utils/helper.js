export function getParamsByName(name) {
    const search = window.location.search;
    const params = new URLSearchParams(search);
    return params.get(name);
}