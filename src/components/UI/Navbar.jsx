export default function Nav({ links }) {
  return (
      <nav class="font-sans flex flex-col text-center content-center sm:flex-row sm:text-left sm:justify-between py-2 px-6 bg-white shadow sm:items-baseline w-full">
        <div class="mb-2 sm:mb-0 inner">
          <a
            href="/home"
            class="text-2xl no-underline text-grey-darkest hover:text-blue-dark font-sans font-bold"
          >
            My Portfolio
          </a>
          <br />
          <span class="text-xs text-grey-dark">Shelly A</span>
        </div>

        <div class="sm:mb-0 self-center">
        {links.map((link) => link)}
        </div>
      </nav>
  );
}
