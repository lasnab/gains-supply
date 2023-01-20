import Link from 'next/link';

import React from 'react';

const StudioNavbar = (props: any) => {
  return (
    <div>
      <div>
        <Link href="/">Go To Website</Link>
      </div>
      <>{props.renderDefault(props)}</>
    </div>
  );
};

export default StudioNavbar;
