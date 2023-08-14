import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Ticker from 'react-ticker';
import PageVisibility from 'react-page-visibility';
import { useRouter } from 'next/navigation';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { Icon, Illustration, Logo } from '@/components/atoms';
import { NeuBox } from '@/components/molecules';
import { palette } from '@/theme.config';
import { DateFormat, cn } from '@/utils';
import '@splidejs/react-splide/css/core';

const roleData = [
  {
    role: 'Frontend Engineer',
    icon: <Icon.IcoCodeSSlash className="h-10 w-10" variant="line" />,
  },
  {
    role: 'Web Developer',
    icon: <Icon.IcoGlobal className="h-10 w-10" variant="line" />,
  },
  {
    role: 'UI Designer',
    icon: <Icon.IcoLayout5 className="h-10 w-10" variant="line" />,
  },
  {
    role: 'Web Designer',
    icon: <Icon.IcoMacbook className="h-10 w-10" variant="line" />,
  },
];

const imgUrl = 'https://res.cloudinary.com/dox0nkwax/image/upload';

export const techStackData = [
  {
    neuStyle: cn('hover:bg-nextBlack'),
    textStyle: cn('hover:text-pureWhite hover:bg-nextBlack'),
    contentBoxStyle: cn('hover:scale-[1.75]'),
    source: `${imgUrl}/v1636001626/logo/stack%20logo/next-js_felzgo.webp`,
    text: 'Next.js',
    link: 'https://nextjs.org/',
  },
  {
    neuStyle: cn('hover:bg-reactBlue'),
    textStyle: cn('hover:text-pureWhite hover:bg-reactBlue'),
    imgStyle: cn('animate-[spin_100s_linear_infinite]'),
    contentBoxStyle: cn('hover:scale-[1.5]'),
    source: `${imgUrl}/v1636000856/logo/stack%20logo/react_ura0hq.webp`,
    text: 'React.js',
    link: 'https://reactjs.org/',
  },
  {
    neuStyle: cn('hover:bg-typescriptBlue'),
    textStyle: cn('hover:text-pureWhite hover:bg-typescriptBlue'),
    contentBoxStyle: cn('hover:scale-[1.2]'),
    source: `${imgUrl}/v1636000856/logo/stack%20logo/typescript_ho8aqd.png`,
    text: 'TypeScript',
    link: 'https://www.typescriptlang.org/',
  },
  {
    neuStyle: cn('hover:bg-tailwindBlue'),
    textStyle: cn('hover:text-pureWhite hover:bg-tailwindBlue'),
    contentBoxStyle: cn('hover:scale-[1.4]'),
    source: `${imgUrl}/v1636000856/logo/stack%20logo/tailwindcss_csi3ob.png`,
    text: 'Tailwind CSS',
    link: 'https://tailwindcss.com/',
  },
  {
    neuStyle: cn('hover:bg-vueGreen'),
    textStyle: cn('hover:text-pureWhite hover:bg-vueGreen'),
    contentBoxStyle: cn('hover:scale-[1.75]'),
    source: `${imgUrl}/v1636027581/logo/stack%20logo/vue_kedlql.webp`,
    text: 'Vue.js',
    link: 'https://vuejs.org/',
  },
  {
    neuStyle: cn('hover:bg-javascriptYellow'),
    textStyle: cn('hover:text-pureWhite hover:bg-javascriptYellow'),
    imgStyle: cn('rounded-lg'),
    contentBoxStyle: cn('hover:scale-[1.25]'),
    source: `${imgUrl}/v1671704699/logo/stack%20logo/javascript_xpeqpo.webp`,
    text: 'JavaScript',
    link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
  {
    neuStyle: cn('hover:bg-laravelOrange'),
    textStyle: cn('hover:text-pureWhite hover:bg-laravelOrange'),
    contentBoxStyle: cn('hover:scale-[1.5]'),
    source: `${imgUrl}/v1636027266/logo/stack%20logo/laravel_lmyz5m.webp`,
    text: 'Laravel',
    link: 'https://laravel.com/',
  },
];

export const projectData = [
  {
    bgColor: cn('bg-pureWhite'),
    logo: <Logo.JuraganMaterial className="h-20 w-20" />,
  },
  {
    bgColor: cn('bg-kuponBlue'),
    logo: (
      <div className="mt-1">
        <Logo.PintapKupon className="h-12 w-12" />
        <p className="text-pureWhite text-center text-xs font-bold">KUPON</p>
      </div>
    ),
  },
  {
    bgColor: cn('bg-retailBlue'),
    logo: <Logo.PintapRetail className="mt-1.5" />,
  },
  {
    bgColor: cn('bg-mitraWhite'),
    logo: <Logo.PintapMitra />,
  },
  {
    bgColor: cn('bg-pureWhite'),
    logo: <Logo.XLAxiata />,
  },
  {
    bgColor: cn('bg-axiataBlue'),
    logo: (
      <div>
        <Logo.XLAxiata reverse />
        <p className="text-pureWhite float-right -mt-0.5 text-[0.45rem]">
          business solution
        </p>
      </div>
    ),
  },
];

const timelineData = [
  {
    company: 'Juragan Material',
    description: 'Frontend Engineer at Juragan Material',
    date: new Date('2023-02'),
    progress: 0.75,
    latest: true,
  },
  {
    company: 'Pintap',
    description: 'Frontend Engineer at Pintap',
    date: new Date('2022-02'),
    progress: 1,
  },
  {
    company: 'XL Axiata',
    description: 'Web Developer at XL Axiata',
    date: new Date('2021-03'),
    progress: 1,
  },
  {
    company: 'Wedocation',
    description: 'Freelance at Wedocation',
    date: new Date('2020-11'),
    progress: 1,
  },
  {
    company: 'Progate',
    description: 'Mentor at Progate',
    date: new Date('2020-09'),
    progress: 1,
  },
  {
    company: 'Super Indo',
    description: 'Intern at Super Indo',
    date: new Date('2019-06'),
    progress: 1,
  },
  {
    company: null,
    description: 'Start College',
    date: new Date('2017-08'),
    progress: 1,
  },
];

const Folder: React.FC<{
  name: string;
  onDoubleClick: () => void;
}> = ({ name, onDoubleClick }) => {
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const [isHighlighted, setIsHighlighted] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      )
        setIsHighlighted(false);
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <button
      ref={buttonRef}
      type="button"
      className="cursor-default"
      onClick={() => setIsHighlighted(true)}
      onDoubleClick={onDoubleClick}
      onKeyDown={(e) => e.key === 'Enter' && onDoubleClick()}
    >
      <div className="flex justify-center">
        <Illustration.Folder
          className="h-24 w-24"
          isHighlighted={isHighlighted}
        />
      </div>
      <span
        className={cn(
          'text-center text-2xl font-bold',
          isHighlighted ? 'text-pureWhite bg-daisyBush/90' : ''
        )}
      >
        {name}
      </span>
    </button>
  );
};

export const Home: React.FC = () => {
  const router = useRouter();
  const [pageIsVisible, setPageIsVisible] = useState(true);

  const handleVisibilityChange = (isVisible: boolean) =>
    setPageIsVisible(isVisible);

  return (
    <React.Fragment>
      <main className="bg-myWhite min-h-[100dvh]">
        <div className="mx-auto max-w-screen-xl space-y-8 pb-12 pt-4">
          <header className="space-y-2 px-4">
            <div className="flex">
              <h1>
                <span className="text-5xl font-bold">Hi there,</span>
                <br />
                <span className="text-8xl font-extrabold">
                  I am <span className="text-daisyBush">William</span>
                </span>
                <br />
                <span className="text-4xl font-medium italic">
                  a Software Engineer
                </span>
              </h1>

              <div className="flex flex-1 items-end justify-center space-x-16">
                <Folder
                  name="About"
                  onDoubleClick={() => router.push('/about')}
                />

                <Folder
                  name="LinkedIn"
                  onDoubleClick={() =>
                    open('https://www.linkedin.com/in/williamtobing', '_blank')
                  }
                />

                <Folder
                  name="GitHub"
                  onDoubleClick={() =>
                    open('https://github.com/williamtobing', '_blank')
                  }
                />
              </div>
            </div>
          </header>

          <section className="px-4">
            <div className="flex space-x-8">
              <div className="relative">
                <div className="absolute flex h-full w-full items-center justify-center">
                  <div className="flex space-x-2">
                    <p className="italic">{`<InProgress />`}</p>
                  </div>
                </div>

                <div className="absolute top-8 flex w-full justify-center">
                  <div className="bg-skyBlue/0 flex h-8 w-[7.5rem] items-center justify-center space-x-1.5 rounded-full">
                    <div className="bg-dullLavender/0 h-6 w-6 rounded-full"></div>
                    <div className="bg-dullLavender/0 h-6 w-6 rounded-full"></div>
                    <div className="bg-dullLavender/0 flex h-6 w-6 items-center justify-center rounded-full">
                      <div className="bg-chalky h-1 w-1 animate-pulse rounded-full"></div>
                    </div>
                    <div className="bg-darkGunmetal flex h-6 w-6 items-center justify-center rounded-full">
                      <div className="bg-brightGray/50 h-4 w-4 rounded-full"></div>
                    </div>
                  </div>
                </div>

                <Illustration.IPhone14Pro />
              </div>

              <div className="space-y-6">
                {/* Roles */}
                <div className="mt-6 grid grid-cols-2 gap-4">
                  {roleData.map((item, i) => (
                    <NeuBox key={i} variant="xl">
                      <div className="flex">
                        <div className="bg-chalky border-bunker flex items-center justify-center border-r-[3.5px] p-1.5">
                          {item.icon}
                        </div>
                        <div className="mx-5 flex items-center overflow-hidden">
                          <p className="whitespace-nowrap text-xl font-semibold">
                            {item.role}
                          </p>
                        </div>
                      </div>
                    </NeuBox>
                  ))}
                </div>

                <div className="flex justify-center">
                  <Illustration.Vector197 className="h-auto w-full" />
                </div>

                {/* Tech Stacks */}
                <div className="space-y-3">
                  <h2 className="text-[1.75rem] font-bold underline">
                    Tech Stacks
                  </h2>

                  <div className="hidden min-[425px]:block">
                    <Splide
                      tag="div"
                      options={{
                        perPage: 1,
                        perMove: 1,
                        arrows: false,
                        autoWidth: true,
                        gap: '0.25rem',
                      }}
                    >
                      {techStackData.map((item, i) => (
                        <SplideSlide key={i} className="pb-1.5 pr-1.5">
                          <NeuBox
                            variant="md"
                            className={cn(
                              'flex h-40 w-full items-center justify-center overflow-hidden rounded-lg bg-white duration-1000 ease-out',
                              item.neuStyle
                            )}
                          >
                            <div
                              className={cn(
                                'relative space-y-2 px-2 duration-1000 ease-out',
                                item.contentBoxStyle
                              )}
                            >
                              <Image
                                src={item.source}
                                alt={`${item.text} Logo`}
                                width={100}
                                height={100}
                                className={item.imgStyle}
                                priority
                              />
                              <p
                                className={cn(
                                  'absolute left-1/2 top-[45%] -translate-x-1/2 -translate-y-1/2 transform p-20 font-bold text-transparent duration-1000 ease-out',
                                  item.textStyle
                                )}
                              >
                                {item.text}
                              </p>
                            </div>
                          </NeuBox>
                        </SplideSlide>
                      ))}
                    </Splide>
                  </div>
                </div>

                {/* Recent projects */}
                <div className="space-y-3">
                  <h2 className="text-[1.75rem] font-bold underline">
                    Recent projects
                  </h2>

                  {/* // TODO: add running content wrapper in molecule */}
                  <PageVisibility onChange={handleVisibilityChange}>
                    {pageIsVisible && (
                      <Ticker mode="chain" speed={5}>
                        {() => (
                          <>
                            <div className="mx-1 mb-1.5 flex space-x-2">
                              {projectData.map((item, i) => (
                                <NeuBox
                                  key={i}
                                  className={cn(
                                    'flex h-[7.5rem] w-[7.5rem] items-center justify-center',
                                    item.bgColor
                                  )}
                                  variant="lg"
                                >
                                  {item.logo}
                                </NeuBox>
                              ))}
                            </div>
                          </>
                        )}
                      </Ticker>
                    )}
                  </PageVisibility>
                </div>

                {/* Tools */}
                <div className="space-y-3">
                  <h2 className="text-[1.75rem] font-bold underline">Tools</h2>

                  <div className="flex space-x-2">
                    <NeuBox className="bg-pureWhite p-2" variant="sm">
                      <Logo.VSCode className="text-vsCodeBlue h-6 w-6" />
                    </NeuBox>

                    <NeuBox className="bg-pureWhite p-2" variant="sm">
                      <Logo.Spotify className="h-6 w-6" />
                    </NeuBox>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Timeline */}
          <section className="space-y-3 px-4">
            <h2 className="text-3xl font-bold underline">Timeline</h2>

            <div className="grid grid-cols-2 gap-6">
              {timelineData
                .slice()
                .reverse()
                .map((item, i) => (
                  <NeuBox
                    key={i}
                    variant="xl"
                    className={cn(
                      'relative',
                      item.latest ? 'bg-dullLavender' : ''
                    )}
                  >
                    <div className="bg-chalky absolute right-0 mt-0.5 w-[4.75rem] rounded-l-md px-2">
                      <p className="text-right text-xs font-semibold">
                        {DateFormat(item.date).toShortMonth()}
                      </p>
                    </div>

                    <div className="p-3.5">
                      <p className="text-myWhite font-bold">
                        {item.description}
                      </p>
                    </div>
                  </NeuBox>
                ))}
            </div>
          </section>
        </div>

        <footer className="bg-darkGunmetal">
          <div className="mx-auto max-w-screen-xl space-y-2 p-4">
            <p className="text-myWhite font-semibold">
              This website is a site that I developed myself for personal
              publication purposes. Thank you for visiting my website. May we
              all be well and always in good health.
            </p>
            <br />
            <div className="flex justify-between">
              <div className="space-y-2">
                <p className="text-myWhite text-sm font-semibold">
                  Best regards,
                </p>
                <p className="text-myWhite text-sm font-semibold">William</p>
              </div>

              <div className="flex items-end space-x-2">
                <a
                  href="https://www.linkedin.com/in/williamtobing"
                  aria-label="Take a look at my LinkedIn account"
                  target="_blank"
                  rel="noreferrer"
                >
                  <NeuBox
                    variant="sm"
                    className="border-portage shadow-neu-chalky-4"
                  >
                    <Icon.IcoLinkedinBox
                      variant="fill"
                      className="h-8 w-8"
                      palette={palette.chalky}
                    />
                  </NeuBox>
                </a>
                <a
                  href="https://github.com/williamtobing"
                  aria-label="Take a look at my GitHub account"
                  target="_blank"
                  rel="noreferrer"
                >
                  <NeuBox
                    variant="sm"
                    className="border-portage shadow-neu-chalky-4"
                  >
                    <Icon.IcoGithub
                      variant="fill"
                      className="h-8 w-8"
                      palette={palette.chalky}
                    />
                  </NeuBox>
                </a>
              </div>
            </div>
          </div>

          <div className="bg-bunker flex items-center justify-center px-4">
            <p className="text-myWhite py-2 text-center text-xs font-semibold italic">
              Built by{' '}
              <span className="text-portage">William Suarez Lumbantobing</span>.
              The source code is available on{' '}
              <a
                href="https://github.com/williamtobing/turbo-project"
                className="text-chalky underline"
                aria-label="Take a look at the code on GitHub"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </p>
          </div>
        </footer>
      </main>
    </React.Fragment>
  );
};
