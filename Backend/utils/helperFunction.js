function formatData(data) {
    if(data.rss&&data.rss.channel&&data.rss.channel.item){
        const articles = data.rss.channel.item.map(item=>{
            return {
                title: item.title,
                link: item.link,
                details: item.description, // item['content:encoded']
                publishDate: item.pubDate || null,
                media: (item['media:thumbnail'] ? item['media:thumbnail']['@_url'] : null)
                 || (item['media:content'] ? item['media:content']['@_url'] : null)
                 || (item['enclosure'] ? item['enclosure']['@_url'] : null)
                 || (item['image'] ? item['image']['@_url'] : null)
            }
        })

        return articles;
    }
}

module.exports = {
    formatData
}