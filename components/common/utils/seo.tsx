import { ICommon } from '@/typings/typings';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Fragment } from 'react';

const Seo: React.FC<{ seo: ICommon['seo'] }> = ({ seo }) => {
  const router = useRouter();

  // Get the production url
  const prodUrl = process.env.NEXT_PUBLIC_PROD_URL;

  // Get the meta tags
  const meta = {
    title: seo?.metaTitle,
    site_name: seo?.siteName,
    description: seo?.metaDescription,
    url: prodUrl,
    image: `${process.env.api}${seo?.metaImage?.data?.attributes?.url}`,
    image_alt: seo?.metaImage?.data?.attributes?.alternativeText,
    type: 'website',
    robots: 'follow, index',
    ...seo,
  };

  return (
    <Head>
      {/* Default meta tags */}

      <title>{meta.title}</title>
      <meta name="robots" content={meta.robots} />
      <meta content={meta.description} name="description" />
      <meta property="og:url" content={`${meta.url}${router.asPath}`} />
      <link rel="canonical" href={`${meta.url}${router.asPath}`} />

      {/* Get the social media tags */}

      {seo?.metaSocial?.map((socials) => {
        switch (socials.socialNetwork) {
          case 'Facebook':
            return (
              <Fragment key={socials?.id}>
                <meta property="og:type" content={meta.type} />
                <meta property="og:description" content={socials.description} />
                <meta property="og:title" content={socials.title} />
                <meta property="og:image:type" content={socials.image?.data?.attributes?.mime} />
                <meta property="og:image:width" content={socials.image?.data?.attributes?.width} />
                <meta
                  property="og:image:height"
                  content={socials.image?.data?.attributes?.height}
                />
                <meta
                  name="image"
                  property="og:image"
                  content={`${process.env.api}${socials.image?.data?.attributes?.url}`}
                />
                <meta
                  property="og:image:alt"
                  content={socials.image?.data?.attributes?.alternativeText}
                />
              </Fragment>
            );
          case 'Twitter':
            return (
              <Fragment key={socials?.id}>
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={socials.title} />
                <meta name="twitter:description" content={socials.description} />
                <meta
                  name="twitter:image"
                  content={`${process.env.api}${socials.image?.data?.attributes?.url}`}
                />
              </Fragment>
            );
          default:
            return null;
        }
      })}
    </Head>
  );
};
export default Seo;
