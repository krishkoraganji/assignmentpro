import './slide.css'

const Slide=(props)=> {
    const {details,slideNumber}=props
    const {thumbnailUrl,title,url}=details
    return (
      <div className="slide">
        <h2 className='head'>{title}</h2>
        <img  src={thumbnailUrl} alt='Thumnail'/><br></br>
        <a href={url} target="__target">Click Here</a>
        <p>Slide Number:{slideNumber}</p>
      </div>
    );
  }


export default Slide;
