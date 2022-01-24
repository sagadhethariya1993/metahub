
import { ItemMeta } from '../../../UserMeta/ItemMeta'

import {Heart,Clock,Facebook,Twitter,Instagram} from 'react-bootstrap-icons'


import './ProductCard.css'
import { Timer } from '../../../../UI/Timer/Timer';

export const ProductCard=()=>{


    return(
        <div className="featured-item">
            <div className="featured-item-wrapper">
                <div className="featured-item-content">
                    <div className="fav-counter">
                        <Heart/>
                        <span className="count">60</span>
                    </div>
                    <div className="featured-item-image">
                      <a >
                        <picture>
                        <source type="image/avif" srcset={require("../../../../../assets/avif/content/items/featured-item-1.avif")}/>
                          <img src={require('../../../../../assets/Images/content/items/featured-item-1.png')} width="304" height="340" loading="lazy" alt="Featured"/>
                        </picture>
                      </a>
                    </div>
                    <div className="featured-item-info">
                      <Timer/>
                      <div className="title"><a >Flow of Planets</a></div>
                     <ItemMeta title='beardedwndr'/>
                    </div>
                </div>

                <div className="featured-item-post-content">
                    <div className="featured-item-pricebox">
                      <div className="price-caption">Current BID</div>
                      <div className="price">4.07 ETH</div>
                    </div>
                    <div className="social-share-box">
                      <div className="social-caption">Share</div>
                      <div className="share-icons">
                        <Facebook/>
                        <Twitter/>
                        <Instagram/>
                      </div>
                    </div>
                  </div>

            </div>
        </div>
    );
}