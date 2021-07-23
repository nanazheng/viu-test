import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css"
import SwiperCore, { Navigation } from 'swiper/core';
import viuPic from 'assets/viu.jpg';

const items = [
  {
    category: "韓劇",
    episode: 1,
    imageURL: viuPic,
    rank: "No.1",
    streamingURL: "https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8",
    title: "Andrex皇冠呈獻 :《某一天滅亡來到我家門前》",
    trend: "─",
  },
  {
    category: "韓劇",
    episode: 1,
    imageURL: viuPic,
    rank: "No.1",
    streamingURL: "https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8",
    title: "Andrex皇冠呈獻 :《某一天滅亡來到我家門前》",
    trend: "─",
  },
  {
    category: "韓劇",
    episode: 1,
    imageURL: viuPic,
    rank: "No.1",
    streamingURL: "https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8",
    title: "Andrex皇冠呈獻 :《某一天滅亡來到我家門前》",
    trend: "─",
  },
  {
    category: "韓劇",
    episode: 1,
    imageURL: viuPic,
    rank: "No.1",
    streamingURL: "https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8",
    title: "Andrex皇冠呈獻 :《某一天滅亡來到我家門前》",
    trend: "─",
  },
  {
    category: "韓劇",
    episode: 1,
    imageURL: viuPic,
    rank: "No.1",
    streamingURL: "https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8",
    title: "Andrex皇冠呈獻 :《某一天滅亡來到我家門前》",
    trend: "─",
  },
  {
    category: "韓劇",
    episode: 1,
    imageURL: viuPic,
    rank: "No.1",
    streamingURL: "https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8",
    title: "Andrex皇冠呈獻 :《某一天滅亡來到我家門前》",
    trend: "─",
  },
]
const Episode = (value) => {
  switch (value) {
    case 1:
      return "第一集"
      break;
  }
}
export default ({ attachments, openModal }) => {
  return (
    <Swiper
      navigation={true}
      slidesPerView={3}
      spaceBetween={30}
      pagination={{
        "clickable": true
      }}
      className="mySwiper"
    >
      {/* attachments是从接口拿回来的数据，但是图片链接不对，所以改用了静态图 */}
      {/* {_.map(items, (attachment, i) => {
        return (
          <SwiperSlide key={i} onClick={() => openModal(attachment)}>
            <img src={attachment} style={{ width: '100%' }} />
          </SwiperSlide>
        );
      })} */}
      {_.map(items, (attachment, i) => {
        return (
          <SwiperSlide key={i} onClick={() => openModal(attachment.streamingURL)}>
            <div style={{ position: 'relative' }}>
              <img src={attachment.imageURL} style={{ width: '100%' }} />
              <div style={{ top: '0', position: 'absolute', background: '#ffbf00', padding: '3px 5px', }}>{attachment.rank}</div>
              <div style={{ position: 'absolute', bottom: '0', background: 'rgba(0,0,0,0.5)', color: '#fff', padding: '3px 8px', fontSize: '12px' }}>{Episode(attachment.episode)}</div>
            </div>
            <div style={{ marginTop: '10px' }}>
              <h3>{attachment.title}</h3>
              <p>{attachment.category}</p>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  )
}