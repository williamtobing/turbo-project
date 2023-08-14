import React, { useState } from 'react';
import Image from 'next/image';
import Ticker from 'react-ticker';
import PageVisibility from 'react-page-visibility';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { Icon, Logo } from '@/components/atoms';
import { NeuBox } from '@/components/molecules';
import { Footer, Sidebar } from '@/components/organisms';
import { useToggle } from '@/hooks/useToggle';
import { DateFormat, cn } from '@/utils';
import '@splidejs/react-splide/css/core';

const roleData = [
  {
    role: 'Frontend Engineer',
    icon: <Icon.IcoCodeSSlash className="h-5 w-5" variant="line" />,
  },
  {
    role: 'Web Developer',
    icon: <Icon.IcoGlobal className="h-5 w-5" variant="line" />,
  },
  {
    role: 'UI Designer',
    icon: <Icon.IcoLayout5 className="h-5 w-5" variant="line" />,
  },
  {
    role: 'Web Designer',
    icon: <Icon.IcoMacbook className="h-5 w-5" variant="line" />,
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
    textStyle: cn('hover:textWhite hover:bg-javascriptYellow'),
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

export const Home: React.FC = () => {
  const [isSidebarOpen, toggleSidebar] = useToggle();
  const [pageIsVisible, setPageIsVisible] = useState(true);

  const handleVisibilityChange = (isVisible: boolean) =>
    setPageIsVisible(isVisible);

  return (
    <React.Fragment>
      <Sidebar isOpen={isSidebarOpen} toggle={toggleSidebar} />

      <main className="bg-myWhite mx-auto min-h-[100dvh] max-w-lg">
        <div className="space-y-4 py-4">
          <header className="space-y-2 px-4">
            <div className="relative">
              <NeuBox
                variant="sm"
                className="absolute right-0 cursor-pointer p-1"
                role="button"
                aria-label="Main Menu"
                onClick={toggleSidebar}
                onKeyDown={(e) => e.key === 'Enter' && toggleSidebar()}
                tabIndex={0}
              >
                <Icon.IcoMenuUnfold className="h-5 w-5" variant="fill" />
              </NeuBox>

              <h1>
                <span className="text-4xl font-bold">Hi there,</span>
                <br />
                <span className="text-5xl font-extrabold">
                  I am <span className="text-daisyBush">William</span>
                </span>
                <br />
                <span className="text-2xl font-medium italic">
                  a Software Engineer
                </span>
              </h1>
            </div>

            {/* Roles */}
            <div className="grid grid-cols-2 gap-2">
              {roleData.map((item, i) => (
                <NeuBox key={i} variant="sm">
                  <div className="flex">
                    <div className="bg-chalky border-bunker flex items-center justify-center border-r-2 p-1.5">
                      {item.icon}
                    </div>
                    <div className="mx-1.5 flex items-center overflow-hidden">
                      <p className="whitespace-nowrap text-sm font-semibold">
                        {item.role}
                      </p>
                    </div>
                  </div>
                </NeuBox>
              ))}
            </div>
          </header>

          {/* Recent projects */}
          <section className="space-y-2 px-4">
            <h2 className="text-2xl font-bold underline">Recent projects</h2>

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
                              'flex h-[6.25rem] w-[6.25rem] items-center justify-center',
                              item.bgColor
                            )}
                            variant="md"
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
          </section>

          {/* Timeline */}
          <section className="space-y-2 px-4">
            <h2 className="text-2xl font-bold underline">Timeline</h2>

            {timelineData.map((item, i) => (
              <NeuBox
                key={i}
                variant="md"
                className={cn('relative', item.latest ? 'bg-dullLavender' : '')}
              >
                <div className="bg-chalky absolute right-0 mt-0.5 w-[4.75rem] rounded-l-md px-2">
                  <p className="text-right text-xs font-semibold">
                    {DateFormat(item.date).toShortMonth()}
                  </p>
                </div>

                <div className="p-3.5">
                  <p className="text-myWhite font-bold">{item.description}</p>
                </div>
              </NeuBox>
            ))}
          </section>

          {/* Tech Stacks */}
          <section className="space-y-2 px-4">
            <h2 className="text-2xl font-bold underline">Tech Stacks</h2>

            <div className="min-[425px]:hidden">
              <Splide
                tag="div"
                options={{
                  perPage: 3,
                  perMove: 1,
                  arrows: false,
                  gap: '0.25rem',
                }}
              >
                {techStackData.map((item, i) => (
                  <SplideSlide key={i} className="pb-1.5 pr-1.5">
                    <NeuBox
                      variant="md"
                      className="flex h-40 w-full items-center justify-center overflow-hidden rounded-lg bg-white duration-1000 ease-out"
                    >
                      <div className="relative mt-[0.563rem] space-y-2 px-2 duration-1000 ease-out">
                        <Image
                          src={item.source}
                          alt={`${item.text} Logo`}
                          width={100}
                          height={100}
                          className={item.imgStyle}
                          priority
                        />
                        <p className="text-center text-sm font-bold">
                          {item.text}
                        </p>
                      </div>
                    </NeuBox>
                  </SplideSlide>
                ))}
              </Splide>
            </div>

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
                      className="flex h-40 w-full items-center justify-center overflow-hidden rounded-lg bg-white duration-1000 ease-out"
                    >
                      <div className="relative mt-[0.563rem] space-y-2 px-2 duration-1000 ease-out">
                        <Image
                          src={item.source}
                          alt={`${item.text} Logo`}
                          width={100}
                          height={100}
                          className={item.imgStyle}
                          priority
                        />
                        <p className="text-center text-sm font-bold">
                          {item.text}
                        </p>
                      </div>
                    </NeuBox>
                  </SplideSlide>
                ))}
              </Splide>
            </div>
          </section>
        </div>

        <Footer />
      </main>
    </React.Fragment>
  );
};
