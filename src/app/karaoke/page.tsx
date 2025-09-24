import React, {FC} from "react";
import Link from 'next/link';

import './_karaoke-home.scss';

const Page: FC = async () => {

  return (
      <div className="karaoke-home">
        <h1 className="text-5xl leading-tight">
          <div>WAVEFORM KARAOKE</div>
          <div>at</div>
          <div>CAMP NAKMOTO!</div>
        </h1>
        <div>
          <p className="text-3xl">Are you a...</p>
          <Link className="text-4xl" href="/karaoke/honeybadger">Honey Badger?</Link>
          <div className="text-3xl my-2">or a...</div>
          <Link className="text-4xl" href="/karaoke/cyberhornet">Cyber Hornet?</Link>
        </div>
      </div>
  );

}

export default Page;
