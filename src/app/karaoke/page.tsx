import React, {FC} from "react";
import Link from 'next/link';

import './_karaoke-home.scss';

const Page: FC = async () => {

  return (
      <div className="karaoke-home">
        <h1 className="text-5xl">WAVEFORM KAROAKE!</h1>
        <div>
          <p className="text-3xl">Are you a...</p>
          <Link className="text-4xl" href="/karaoke/honeybadger">Honey Badger?</Link>
          <p className="text-3xl">or a...</p>
          <Link className="text-4xl" href="/karaoke/cyberhornet">Cyber Hornet?</Link>
        </div>
      </div>
  );

}

export default Page;
