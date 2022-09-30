import styles from './index.less';
import ClassComponent from './ClassComponent';
import FunctionComponent from './FunctionComponent'
import DemoHook from './components/3_hooks';

export default function IndexPage() {
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
      {/* <ClassComponent></ClassComponent>
      <FunctionComponent></FunctionComponent> */}
      <DemoHook></DemoHook>
    </div>
  );
}
