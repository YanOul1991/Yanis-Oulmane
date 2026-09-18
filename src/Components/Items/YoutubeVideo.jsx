import "./YoutubeVideo.css"

export default function YoutubeVideo({label, iframeElement}) {
  return(
    <div className="ytb_video">
      <div className="ytb_video_label">{label}</div>
      <div className="ytb_video_iframe_wrp">
        {iframeElement}
      </div>
    </div>
  )
}