import { Empty } from 'antd'

export default ({ height }) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: height || '100vh',
      }}
    >
      <Empty />
    </div>
  )
}