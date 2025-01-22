const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '',
		'x-rapidapi-host': ''
	}
};

const btn=document.querySelector(".btn")
const summary=document.querySelector(".summary")

btn.addEventListener("click",(e)=>{
    e.preventDefault()
    const input = document.querySelector("#url").value
    const url = 'https://article-extractor-and-summarizer.p.rapidapi.com/summarize?url=${input}&lang=en&engine=2';
    

    summary.innerText="please wait article is summarizing !!!"
    fetch(url,input)
    .then(data=>data.json())
    .then(data=>{
        // console.log(data?.summary)
        summary.innerText=data?.summary
    })
    .catch(error=>{
        console.log(error)
    })
})

fetch(url,options)
.then((data)=>{
    return data.json()
})
.then((data)=>{
    console.log(data)
})
.catch((error)=>{
    console.log(error)
})
