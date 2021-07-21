import styles from '../../styles/inoks.module.css';
import Link from 'next/link';
export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();
  return {
    props: {
      users: data,
    },
  };
};

const Inoks = ({ users }) => {
  return (
    <div>
      <h1>All Inoks</h1>
      {users.map((user) => (
        <Link href={'/inoks/' + user.id} key={user.id}>
          <a className={styles.single}>
            <h3>{user.name}</h3>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default Inoks;
