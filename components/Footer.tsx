import Link from 'next/link';

function Footer() {
  return (
    <footer className="p-4 bg-primary sm:p-6 text-neutral mt-auto">
      <div className="md:flex md:justify-between ">
        <div className="mb-6 md:mb-0">
          <Link href={'/'} className="flex items-center">
            <span className="self-center text-2xl font-semibold whitespace-nowrap">
              GainsSupply
            </span>
          </Link>
        </div>
        <div>
          <p className="md:ml-6 mb-6 text-sm">
            Gains Supply is a website started by a gymbro, for fellow gymbros.
            After much frustration in trying to find places to buy a protein
            shake seen on tik tok, or learn more about what new trends are
            coming in the gym, Gains Supply was started in an effort to fix some
            of these issues. I appreciate you reading this, and always welcome
            questions, comments, and suggestions. Feel free to write to me using
            any of the social links below.
          </p>
        </div>
      </div>
      <hr className="my-6 sm:mx-auto border-myWhite lg:my-8" />
      <div className="sm:flex sm:items-center sm:justify-between cursor-pointer">
        <span className="text-sm text-neutral sm:text-center">
          © 2023{' '}
          <Link href={'/'} className="hover:underline">
            GainsSupply
          </Link>
          . All Rights Reserved.
        </span>
        <SocialLinks />
      </div>
    </footer>
  );
}

function SocialLinks() {
  return (
    <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
      <Link
        href="mailto:bansalbrah@gmail.com"
        className="text-secondary hover:text-accent"
      >
        <svg
          className="w-7 h-7"
          fill="currentColor"
          aria-hidden="true"
          viewBox="0 0 256 256"
        >
          <defs></defs>
          <g transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)">
            <path
              d="M 80.89 78.772 H 9.11 c -5.023 0 -9.11 -4.087 -9.11 -9.11 V 20.338 c 0 -5.023 4.087 -9.11 9.11 -9.11 h 71.78 c 5.023 0 9.11 4.087 9.11 9.11 v 49.324 C 90 74.686 85.913 78.772 80.89 78.772 z M 9.11 17.228 c -1.715 0 -3.11 1.396 -3.11 3.11 v 49.324 c 0 1.715 1.395 3.11 3.11 3.11 h 71.78 c 1.715 0 3.11 -1.396 3.11 -3.11 V 20.338 c 0 -1.715 -1.396 -3.11 -3.11 -3.11 H 9.11 z"
              transform=" matrix(1 0 0 1 0 0) "
              stroke-linecap="round"
            />
            <path
              d="M 45 55.427 c -5.408 0 -10.599 -2.292 -14.242 -6.288 L 2.493 18.125 l 4.435 -4.042 l 28.265 31.013 c 2.545 2.792 6.028 4.331 9.807 4.331 c 3.779 0 7.262 -1.538 9.808 -4.331 l 28.266 -31.013 l 4.434 4.042 L 59.241 49.138 C 55.599 53.135 50.408 55.427 45 55.427 z"
              transform=" matrix(1 0 0 1 0 0) "
              stroke-linecap="round"
            />
            <rect
              x="-0.96"
              y="57.16"
              rx="0"
              ry="0"
              width="38.98"
              height="6"
              transform=" matrix(0.7053 -0.7089 0.7089 0.7053 -37.1881 30.8639) "
            />
            <rect
              x="68.47"
              y="40.67"
              rx="0"
              ry="0"
              width="6"
              height="38.98"
              transform=" matrix(0.709 -0.7053 0.7053 0.709 -21.628 67.9146) "
            />
          </g>
        </svg>
        <span className="sr-only">Mail</span>
      </Link>
      <Link
        href="instagram.com/itsbanzs"
        className="text-secondary hover:text-accent"
      >
        <svg
          className="w-7 h-7"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            fill-rule="evenodd"
            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
            clip-rule="evenodd"
          />
        </svg>
        <span className="sr-only">Instagram page</span>
      </Link>
    </div>
  );
}

export default Footer;
