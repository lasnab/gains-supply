import React from 'react';
import Image from 'next/image';
import logo from '../public/logo.png';

const StudioLogo = (props: any) => {
  return (
    <div>
      <Image height={50} width={50} src={logo} alt="studio-logo" />
      {/* <>{props.renderDefault(props)}</> */}
    </div>
  );
};

export default StudioLogo;
