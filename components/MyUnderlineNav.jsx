import { useMemo } from 'react';
import { RocketIcon } from '@primer/octicons-react';
import { UnderlineNav } from '@primer/react/drafts';
import { useRouter } from 'next/router';

export function MyUnderlineNav() {
  const router = useRouter();

  // pathname example) "/tabs/[tabName]"
  const tabName = useMemo(
    () => router.pathname.split(/[/?]/)[2],
    [router.pathname]
  );

  const items = [
    { name: '/', Icon: RocketIcon },
    { name: 'config', Icon: RocketIcon },
    { name: 'settings', Icon: RocketIcon },
    { name: 'aaaaaaaaaaa', Icon: RocketIcon },
    { name: 'bbbbbbbb', Icon: RocketIcon },
    { name: 'ccccccccc', Icon: RocketIcon },
    { name: 'ddddddd', Icon: RocketIcon },
    { name: 'eeeeee', Icon: RocketIcon },
  ];

  return (
    <UnderlineNav aria-label="MyUnderlineNav">
      {items.map((item) => (
        <UnderlineNav.Item
          key={item.name}
          icon={item.Icon}
          aria-current={
            item.name.toLowerCase() === tabName ? 'page' : undefined
          }
          onSelect={(e) => {
            router.push(item.name === '/' ? '/' : `/tabs/${item.name}`);
            e.preventDefault();
          }}
        >
          {item.name}
        </UnderlineNav.Item>
      ))}
    </UnderlineNav>
  );
}
