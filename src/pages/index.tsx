import styles from './index.less';
import ClassComponent from './ClassComponent';
import FunctionComponent from './FunctionComponent'

export default function IndexPage() {
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
      <ClassComponent></ClassComponent>
      <FunctionComponent></FunctionComponent>
    </div>
  );
}
