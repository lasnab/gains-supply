import React from 'react';
import Image from 'next/image';

const StudioLogo = (props: any) => {
  return (
    <div>
      <Image
        height={50}
        width={50}
        src="https://links.papareact.com/1m8"
        alt="studio-logo"
      />
      <>{props.renderDefault(props)}</>
    </div>
  );
};

export default StudioLogo;
