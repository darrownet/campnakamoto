import React, {FC} from "react";
import Link from 'next/link';

const Page: FC = async () => {

  return (
      <div>
        <h1>KAROAKE!</h1>
        <p>Are you a...</p>
        <Link href="/karaoke/honeybadger">Honey Badger?</Link>
        <p>or a...</p>
        <Link href="/karaoke/cyberhornet">Cyber Hornet?</Link>
      </div>
  );

}

export default Page;
