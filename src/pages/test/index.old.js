import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'umi';
import { Carousel } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import Loading from 'components/Loading'
import Empty from 'components/Empty'
import _ from 'lodash'
import styles from './index.less';

const ArrowComponent = ({ type, className, onClick, style }) => {
  return (
    <>
      {(type === 'prev' && (
        <LeftOutlined className={className} style={style} onClick={onClick} />
      )) || <RightOutlined className={className} style={style} onClick={onClick} />}
    </>
  );
};

export default props => {
  const dispatch = useDispatch();
  const [value, setValue] = useState(0);

  const attachments = useSelector(state => state.test.items)
  const title = useSelector(state => state.test.title)
  const loading = useSelector(state => state.loading.effects['test/getData'])

  useEffect(() => {
    dispatch({
      type: 'test/getData',
      query: {}
    })
  }, [])

  const onChange = (value) => {
    setValue(value);
  };
  if (loading) {
    return <Loading />
  }
  return (
    <>
      <h1 className={styles.title}>{title}</h1>
      <Carousel
        afterChange={onChange}
        className={styles['override-ant-carousel']}
        arrows
        prevArrow={<ArrowComponent type="prev" />}
        nextArrow={<ArrowComponent type="next" />}
        touchable={true}
      >
        {_.map(attachments, (attachment, i) => {
          return (
            <div key={i} style={styles.carousel_pic}>
              <img src={attachment.imageURL} />
            </div>
          );
        })}
      </Carousel>
    </>
  )
}