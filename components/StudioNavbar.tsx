import Link from 'next/link';

import React from 'react';

const StudioNavbar: React.FC<{ props: any }> = (props) => {
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
