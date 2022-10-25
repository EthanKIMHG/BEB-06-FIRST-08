import { BsTwitter, BsDiscord, BsInstagram, BsReddit, BsYoutube, BsEnvelope } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";


const marketPlace = ['All NFTs', 'Solana NFTs', 'Art', 'Collectibles', 'Domain Names', 'Music', 'Photography', 'Sports', 'Trading Cards', 'Utility', 'Virtual Worlds'];
const myAccount = ['Prifile', 'Favorites', 'Watchlist', 'My Collections', 'Settings'];
const stats = ['Rankings', 'Activity'];
const resources = ['Learn', 'Help Center', 'Platform Status', 'Partners', 'Taxes', 'Blog', 'Docs', 'Newsletter'];
const company = ['About', 'Careers', 'Ventures', 'Grants'];

const FooterList = ({list}) => {
  return (
    <li className="Footer--link-wrapper">
      <a className="Footer--link" >{list}</a>
    </li>
  )
}

export const TwitterIcon = () => {
  return (
    <a className="" href="https://twitter.com/opensea" rel="nofollow noopener" >
      <div>
        <button className="Footer--social-button" type="button">
          <div className="communuity-icons">
            <BsTwitter className="" fill="#FFFFFF" style={{height: "20px", width:"30px"}}/>
          </div>
        </button>
      </div>
    </a>)}

export const DiscordIcon = () => {
  return (
    <a className="" href="https://discord.gg/opensea" >
      <div>
        <button className="Footer--social-button" type="button">
          <div className="communuity-icons">
            <BsDiscord className="" fill="#FFFFFF" style={{height: "20px", width:"30px"}}/>
          </div>
        </button>
      </div>
    </a>)
}
export const InstagraIcon = () => {
  return (
    <a className="" href="https://www.instagram.com/opensea/">
      <div>
        <button className="Footer--social-button" type="button">
          <div className="communuity-icons">
            <BsInstagram className="" fill="#FFFFFF" style={{height: "20px", width:"30px"}}/>
          </div>
        </button>
      </div>
    </a>)
}
export const RedditIcon = () => {
  return (
    <a className="" href="https://reddit.com/r/opensea">
      <div>
        <button className="Footer--social-button" type="button">
          <div className="communuity-icons">
            <BsReddit className="" fill="#FFFFFF" style={{height: "20px", width:"30px"}}/>
          </div>
        </button>
      </div>
    </a>)
}
export const YoutubeIcon = () => {
  return (
    <a className="sc-1f719d57-0 fKAlPV" href="https://www.youtube.com/c/OpenSeaTV" >
      <div>
        <button className="Footer--social-button" type="button">
          <div className="communuity-icons">
            <BsYoutube className="" fill="#FFFFFF" style={{height: "20px", width:"30px"}}/>
          </div>
        </button>
      </div>
    </a>)
}
export const EnvelopeIcon = () => {
  return (
    <a className="" href="https://opensea.io/blog/newsletter/">
      <div>
        <button className="Footer--social-button" type="button">
          <div className="communuity-icons">
            <BsEnvelope className="" fill="#FFFFFF" style={{height: "20px", width:"30px"}}/>
          </div>
        </button>
      </div>
    </a>)
}

export const TiktokIcon = () => {
  return (
    <a className="" href="https://www.tiktok.com/@opensea?lang=en">
      <div>
        <button className="Footer--social-button" type="button">
          <div className="communuity-icons">
            <FaTiktok className="" fill="#FFFFFF" style={{height: "20px", width:"30px"}}/>
          </div>
        </button>
      </div>
    </a>)
}

export const MarketPlaceList = () => {
  return (
    <div className="Footer--link-column">
      <h3 className="Footer--link-header">Marketplace</h3>
      <ul className="Footer--link-list">
        {marketPlace.map((item, idx) => {
        return (<FooterList list={item} key={idx}/>)
        })}
      </ul>
  </div>
  )
}

export const MyAccountList = () => {
  return (
    <div className="Footer--link-column">
      <h3 className="Footer--link-header">My Account</h3>
      <ul className="Footer--link-list">
        {myAccount.map((item, idx) => {
          return (<FooterList list={item} key={idx}/>)
        })}
      </ul>
      <h3 className="Footer--link-header">Stats</h3>
      <ul className="Footer--link-list">
        {stats.map((item, idx) => {
          return (<FooterList list={item} key={idx}/>)
        })}
      </ul>
  </div>
  )
}

export const ResourcesList = () => {
  return (
    <div className="Footer--link-column">
      <h3 className="Footer--link-header">Resources</h3>
      <ul className="Footer--link-list">
        {resources.map((item, idx) => {
          return (<FooterList list={item} key={idx}/>)
        })}
      </ul>
  </div>
  )
}

export const CompanyList = () => {
  return (
    <div className="Footer--link-column">
      <h3 className="Footer--link-header">Company</h3>
      <ul className="Footer--link-list">
        {company.map((item, idx) => {
          return (<FooterList list={item} key={idx}/>)
        })}
      </ul>
  </div>
  )
}