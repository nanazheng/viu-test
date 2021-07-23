import { history, useSelector } from 'umi';
import { Result, Button } from 'antd';

export default props => {
  const me = useSelector(state => state.user.me);
  if (_.get(me, 'permission.isOpen')) {
    return props.children;
  } else {
    return (
      <Result
        status="403"
        title="403"
        subTitle="抱歉，您无权限访问此页面"
        extra={
          <Button type="primary" onClick={() => history.push('/')}>
            返回首页
          </Button>
        }
      />
    );
  }
};
