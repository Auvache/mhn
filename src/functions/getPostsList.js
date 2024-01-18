const getPostsList = async () => {
    const dropinblogApi = 'https://api.dropinblog.com/v1/json/?b=6d891cc8-40c7-46de-9ae6-52f34642ef55&limit=all&content=0'

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

export default getPostsList