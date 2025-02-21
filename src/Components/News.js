import React, { Component } from 'react'
import { NewsItem } from './NewsItem'

export class News extends Component {
    articles = [
    {
      "source": { "id": "bbc-news", "name": "BBC News" },
      "author": "BBC News",
      "title": "Muscular dystrophy: Drug not being made available for children is 'cruel'",
      "description": "Alfie, 12, says access to a new drug could help slow down the progression of his incurable condition.",
      "url": "https://www.bbc.co.uk/news/articles/cj656d3gd48o",
      "urlToImage": "https://ichef.bbci.co.uk/ace/branded_news/1200/cpsprodpb/6780/live/9fdd56d0-ed59-11ef-94e3-d3fba375c992.jpg",
      "publishedAt": "2025-02-18T11:52:21.8501236Z",
      "content": "There are many types of muscular dystrophy. \r\nThey are inherited genetic conditions that gradually cause the muscles to weaken, leading to an increasing level of disability.\r\nDMD is one of the most c… [+720 chars]"
    },
    {
      "source": { "id": "bbc-news", "name": "BBC News" },
      "author": "BBC News",
      "title": "Starmer says US 'backstop' needed for Ukraine peace deal",
      "description": "The PM says \"a US security guarantee is the only way to effectively deter Russia from attacking Ukraine again\".",
      "url": "https://www.bbc.co.uk/news/articles/cn4z4w3v5y8o",
      "urlToImage": "https://ichef.bbci.co.uk/ace/branded_news/1200/cpsprodpb/5ba9/live/74855670-ed65-11ef-bd1b-d536627785f2.jpg",
      "publishedAt": "2025-02-18T11:52:19.3663672Z",
      "content": "Sir Keir has indicated any troop contributions from the UK would be part of a multinational force to police the border between Ukrainian-held and Russian-held territory.\r\nBut experts say to do so eff… [+1362 chars]"
    },
    {
      "source": { "id": "bbc-news", "name": "BBC News" },
      "author": "BBC News",
      "title": "Godstone: Huge sinkhole appears in high street causing closure",
      "description": "Homes have been evacuated after a sinkhole of at least 20m by 6m suddenly appeared in Godstone.",
      "url": "https://www.bbc.co.uk/news/articles/c07k778v3nno",
      "urlToImage": "https://ichef.bbci.co.uk/ace/branded_news/1200/cpsprodpb/a701/live/6036ef30-edd3-11ef-b640-9dfb84a38fe7.jpg",
      "publishedAt": "2025-02-18T10:37:20.6151326Z",
      "content": "\"Please avoid the area and use alternative routes,\" a Surrey Highways spokesperson said.\r\nSES Water said it was aware of a burst water main in Godstone High Street in the early hours of Tuesday morni… [+629 chars]"
    },
    {
      "source": { "id": "bbc-news", "name": "BBC News" },
      "author": "BBC News",
      "title": "Thames Water secures £3bn lifeline after court ruling",
      "description": "The UK's largest water and waste company was set to run out of money by the end of March.",
      "url": "https://www.bbc.co.uk/news/articles/cg7z7ddmd5eo",
      "urlToImage": "https://ichef.bbci.co.uk/ace/branded_news/1200/cpsprodpb/3857/live/11a48c10-edd8-11ef-9cb9-3360cc750412.png",
      "publishedAt": "2025-02-18T10:37:17.8501948Z",
      "content": "The government has been on standby to put Thames Water - which serves about a quarter of the UK's population and employs 8,000 people - into special administration since the dire state of the company… [+1433 chars]"
    },
    {
      "source": { "id": "bbc-news", "name": "BBC News" },
      "author": "BBC News",
      "title": "Teenager arrested after chilli oil attack at Costco in Bristol",
      "description": "A boy is arrested on suspicion of attempting to cause grievous bodily harm and remains in custody.",
      "url": "https://www.bbc.co.uk/news/articles/cd0j0p991mlo",
      "urlToImage": "https://ichef.bbci.co.uk/ace/branded_news/1200/cpsprodpb/0f8c/live/06cbb820-edc1-11ef-9e3c-f3fcfcf0f6f8.jpg",
      "publishedAt": "2025-02-18T10:07:26.9745887Z",
      "content": "A teenage boy has been arrested after members of the public were sprayed with a chilli oil mixture at a Costco.\r\nEmergency services were called to the superstore in Avonmouth, Bristol, shortly after … [+392 chars]"
    },
    {
      "source": { "id": "bbc-news", "name": "BBC News" },
      "author": "BBC News",
      "title": "Caldicot head teacher Alun Ebenezer: 'We must stop mollycoddling kids'",
      "description": "Inside the school where a controversial new head warns against \"hiding behind words like wellbeing\".",
      "url": "https://www.bbc.co.uk/news/articles/c4gxdkq51ywo",
      "urlToImage": "https://ichef.bbci.co.uk/ace/branded_news/1200/cpsprodpb/dfa7/live/6354c5e0-ed63-11ef-a319-fb4e7360c4ec.jpg",
      "publishedAt": "2025-02-18T09:22:21.0378558Z",
      "content": "Parent Katherine, who has two sons at the school, said the change in approach was initially a shock.\r\n\"It was a bit military - some people called it draconian,\" she said.\r\n\"But sometimes you need tha… [+1349 chars]"
    },
    {
      "source": { "id": "bbc-news", "name": "BBC News" },
      "author": "BBC News",
      "title": "UK wages continue to outpace inflation, figures show",
      "description": "Pay outstripped price rises by 3.4% between October and December while the unemployment rate remains unchanged.",
      "url": "https://www.bbc.co.uk/news/articles/c4gwgpjgl5zo",
      "urlToImage": "https://ichef.bbci.co.uk/ace/branded_news/1200/cpsprodpb/9632/live/3142f5e0-ed3b-11ef-aa6d-b97ed0f17260.jpg",
      "publishedAt": "2025-02-18T08:07:15.1635292Z",
      "content": "Employers have raised concerns that paying more in National Insurance, along with minimum wages rising and business rates relief being reduced, could hit pay rises going forward and also affect inves… [+1015 chars]"
    },
    {
      "source": { "id": "bbc-news", "name": "BBC News" },
      "author": "BBC News",
      "title": "Review over school sex survey to be published 'in 30 days'",
      "description": "The survey hit the headlines in 2021 after asking pupils as young as 14 about their sexual experiences.",
      "url": "https://www.bbc.co.uk/news/articles/cd6467p17jjo",
      "urlToImage": "https://ichef.bbci.co.uk/ace/branded_news/1200/cpsprodpb/3336/live/ec7d86b0-ed2f-11ef-a319-fb4e7360c4ec.jpg",
      "publishedAt": "2025-02-18T04:52:20.2873339Z",
      "content": "The Health and Wellbeing census was organised and promoted by the Scottish government but half of Scotland's 32 councils pulled out following concerns about a lack of informed consent and worries ove… [+940 chars]"
    },
    {
      "source": { "id": "bbc-news", "name": "BBC News" },
      "author": "BBC News",
      "title": "Three critically injured after plane flips at Toronto Pearson airport",
      "description": "The flight had eighty people on board - 76 passengers and four crew - Delta Air Lines says.",
      "url": "https://www.bbc.co.uk/news/articles/c20g02djlv7o",
      "urlToImage": "https://ichef.bbci.co.uk/ace/branded_news/1200/cpsprodpb/bfb8/live/a3ec3b70-ed71-11ef-bd1b-d536627785f2.jpg",
      "publishedAt": "2025-02-18T03:22:19.4909226Z",
      "content": "Ontario air ambulance service Ornge said it haddispatched three air ambulance helicopters and two land ambulances to the scene.\r\nThe patients with critical injuries include a child, a man in his 60s … [+3871 chars]"
    },
    {
      "source": { "id": "bbc-news", "name": "BBC News" },
      "author": "BBC News",
      "title": "Chancellor Rachel Reeves' intervention in car loans case rejected",
      "description": "The UK's highest court has rejected the Treasury's attempts to intervene in the landmark case.",
      "url": "https://www.bbc.co.uk/news/articles/c8636e7xq5eo",
      "urlToImage": "https://ichef.bbci.co.uk/ace/branded_news/1200/cpsprodpb/b9ce/live/36d55620-ed67-11ef-88f0-6b4d930aae35.jpg",
      "publishedAt": "2025-02-17T20:07:24.7237181Z",
      "content": "Chancellor Rachel Reeves' attempt to intervene in a landmark court case over controversial car loans has been blocked by the UK's highest court.\r\nThe Supreme Court case set for in April will rule on … [+450 chars]"
    }
  ] 
    constructor(){
        super();
        console.log("Hello I am a constructor from News Component");
        this.state={
            articles: this.articles,
            loading: false,
            page: 1
        }
    }

    async componentDidMount(){  //runs after render
      console.log("component mount")
      let url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=fbf6d99c99904889b79da1ce67fefb14&page=1&pageSize=12";
      let data = await fetch(url);
      let parseData = await data.json();
      console.log(parseData);
      this.setState({articles: parseData.articles, totalResults: parseData.totalResults})
    }
    
    handlePrev = async ()=>{
      console.log("Previous news");
      let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=fbf6d99c99904889b79da1ce67fefb14&page=${this.state.page-1}&pageSize=12`;
      let data = await fetch(url);
      let parseData = await data.json();
      console.log(parseData);
      this.setState({
        page: this.state.page-1,
        articles: parseData.articles
      })
    }
    
    handleNext = async ()=>{
      console.log("Next news");
      if(this.state.page + 1 > Math.ceil(this.state.totalResults/12)){

      }
      else{
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=fbf6d99c99904889b79da1ce67fefb14&page=${this.state.page+1}&pageSize=12`;
        let data = await fetch(url);
        let parseData = await data.json();
        console.log(parseData);
        this.setState({
        page: this.state.page+1,
        articles: parseData.articles
        })
      }
    }

  render() {
    console.log("render")
    return (
        <div className='container my-3 text-center'>
        <h1 className='headline'>DailyDrama - Top Headlines</h1>
        <div className='row my-3'>
            {this.state.articles.map((element)=>{
                return <div className='col-md-4 my-3' key={element.url}>
                    <NewsItem title={element.title?element.title:" "} description={element.description?element.description:" "} ImageUrl={element.urlToImage} newsUrl={element.url}/>
                </div>
            })}
        </div>
        <div className='container d-flex justify-content-between'>
        <button disabled={this.state.page<=1} type="button" className="btn btn-outline-dark" onClick={this.handlePrev} style={{borderWidth:"2px"}}> &larr; Previous</button>
        <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/12)} type="button" className="btn btn-outline-dark" onClick={this.handleNext} style={{borderWidth:"2px"}}>Next &rarr; </button>
        </div>
      </div>
    )
  }
}