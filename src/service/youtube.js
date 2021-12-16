class Youtube {
    constructor(key) {
        this.key = key;
        this.getRequestOptions = {
            method: "GET",
            redirect: "follow"
        }
    }

    mostPopular() {
        return fetch(
            `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=26&key=${this.key}`,
            this.getRequestOptions
        )
        .then(response => response.json())
        .then(result => result.items)
        .catch(error => console.log('error', error));
    }

    search(query) {
        return fetch(
            `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=26&q=${query}&type=video&key=${this.key}`,
            this.getRequestOptions
        )
        .then(response => response.json())
        .then(result => 
          result.items.map(item => ({...item, id: item.id.videoId}))
        )
        .then(items => items)
        .catch(error => console.log('error', error));
    }

}

export default Youtube;