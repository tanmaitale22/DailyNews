import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let {title, description, ImageUrl, newsUrl} = this.props;
        return (
          <div>
            <div className="card" style={{width: "25rem"}}>
                <img src={!ImageUrl?"https://image.cnbcfm.com/api/v1/image/107198857-16771638812023-02-23t142204z_654493182_rc21hz92tkr5_rtrmadp_0_nikola-results.jpeg?v=1737669640&w=1920&h=1080":ImageUrl} 
                className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <a href={newsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline-primary">Read More</a>
                </div>
            </div>
          </div>
        )
      }
}