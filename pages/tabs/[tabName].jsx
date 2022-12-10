import { useRouter } from 'next/router';
import { PageLayoutFullWidth } from '../../components/Layout';

export default function Tab() {
  const { query } = useRouter();
  return (
    <PageLayoutFullWidth>
      <main>
        <h1>{query.tabName}</h1>

        <p>
          Get started by editing <code>pages/tabs/[tabName].jsx</code>
        </p>
      </main>
    </PageLayoutFullWidth>
  );
}
