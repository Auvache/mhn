const getPost = async (slug) => {
    const dropinblogApi = 'https://api.dropinblog.com/v1/json/post/?b=6d891cc8-40c7-46de-9ae6-52f34642ef55&post=' + slug

    return await fetch(dropinblogApi, {
        method: 'get'
    }).then(res => {
        return res.json()
    }).then(data => {
        return data.data
    }).catch((error) => {
        console.log(error)
    })
}

export default getPost