
export const dataFetch = (url) => {
    return new Promise((resolve,reject) => {
        fetch(url)
        .then(resp => resp.json())
        .then(
            resp => resolve(resp)
        ).catch(err => {
            console.log("Error", err);
            reject(err);
        });
    });
}