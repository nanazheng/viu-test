import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'umi';
import { Modal } from 'antd'
import Loading from 'components/Loading'
import Empty from 'components/Empty'
import Swiper from './components/swiper'
import ReactPlayer from 'react-player'
import _ from 'lodash'
import styles from './index.less';

export default props => {
  const dispatch = useDispatch();

  const [visible, setVisible] = useState(false)
  const [attachment, setAttachment] = useState('')

  const attachments = useSelector(state => state.test.items)
  const title = useSelector(state => state.test.title)
  const loading = useSelector(state => state.loading.effects['test/getData'])

  useEffect(() => {
    dispatch({
      type: 'test/getData',
      query: {}
    })
  }, [])

  if (loading) {
    return <Loading />
  }
  const openModal = (attachment) => {
    setVisible(true)
    setAttachment(attachment)
  }
  const handleModal = () => {
    setVisible(!visible)
  }
  console.log('attachment', attachment)
  return (
    <>
      <h1 className={styles.title}>{title}</h1>
      <Swiper attachment={attachments} openModal={openModal} />

      <Modal
        visible={visible}
        onOk={handleModal}
        onCancel={handleModal}
        width={640}
      >
        <div>
          <ReactPlayer style={{ maxWidth: '100%' }} url="https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8" />
        </div>
      </Modal>
    </>
  )
}