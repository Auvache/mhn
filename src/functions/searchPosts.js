const searchPosts = async (searchTerm) => {
    const dropinblogApi = 'https://api.dropinblog.com/v1/json/search/?b=6d891cc8-40c7-46de-9ae6-52f34642ef55&limit=10&q=' + searchTerm

    return await fetch(dropinblogApi, {
        method: 'get'
    }).then(res => {
        return res.json()
    }).then(data => {
        return data.data.posts
    }).catch((error) => {
        console.log(error)
    })
}

export default searchPosts